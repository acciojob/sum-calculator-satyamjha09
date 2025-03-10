import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime"; // Importing regenerator-runtime to fix async issues

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setSum(numbers.reduce((acc, num) => acc + num, 0));
  }, [numbers]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num)) {
      setNumbers((prevNumbers) => [...prevNumbers, num]);
      setInputValue("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Sum Calculator</h1> 
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>Sum: {sum}</p> 
    </div>
  );
  
};

export default SumCalculator;
