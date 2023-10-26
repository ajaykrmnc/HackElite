import React, { useState } from 'react';

function FormComponent() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <h3>Measurement Avatar Configuration</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Input 1:</label>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <label>Input 2:</label>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div>
        <label>Input 3:</label>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
      </div>
      <div>
        <label>Input 4:</label>
        <input
          type="text"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default FormComponent;
