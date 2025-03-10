import { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNumber = () => {
    if (!isNaN(inputValue) && inputValue.trim() !== "") {
      setNumbers((prevNumbers) => [...prevNumbers, parseInt(inputValue)]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      <h1 >
        Sum Calculator
      </h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        data-cy="number-input"
      />
      <button
        onClick={addNumber}
        data-cy="add-button"
      >
        Add Number
      </button>
      <p data-cy="total-sum" >
        Total Sum: {sum}
      </p>
    </div>
  );
};

export default SumCalculator;
