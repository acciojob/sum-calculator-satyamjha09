import React, { useEffect, useState } from 'react'

const SumCalculator = () => {

  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addNumber = () => {
    if(!NaN(inputValue) && inputValue.trim() !== "") {
      setNumbers((prevNumbers) => [...prevNumbers, parseInt(inputValue)]);
      setInputValue("");
    }
  }

  useEffect(() => {
    const calculateSum = () => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };

    const timer = setTimeout(calculateSum, 300); // Debounce effect

    return () => clearTimeout(timer);
  }, [numbers]);


  return (
    <div>
      <h2> Sum Calculator </h2>
      <input type="number" value={inputValue} placeholder="Enter a number" onChange={handleInputChange} />
      <button onClick={addNumber}>Add Number</button>
      <div>Total Sum: {sum}</div>
    </div>
  )
}

export default SumCalculator