import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Update sum asynchronously whenever numbers array changes
  useEffect(() => {
    const calculateSum =  () => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  // Handle input change and update numbers array in real-time
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.trim() === "" || isNaN(value)) {
      return null // Reset numbers if input is cleared
    } else {
      setNumbers([...numbers, parseInt(value)]); // Add to numbers list
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;