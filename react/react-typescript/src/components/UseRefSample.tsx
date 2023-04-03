import React, { useRef, useState } from "react";

const UseRefSample = () => {
  const [testInput, setTestInput] = useState("");
  const testInputRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(testInput);

    setTestInput("");

    testInputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="test"
          ref={testInputRef}
          onChange={(e) => setTestInput(e.target.value)}
          value={testInput}
        />
        <button type="submit">Text</button>
      </form>
    </div>
  );
};

export default UseRefSample;
