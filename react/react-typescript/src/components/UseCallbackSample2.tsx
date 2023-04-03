import { useCallback, useState } from "react";


console.log('-------- UseCallBackSample2 - MeasureExample --------');

function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {

    console.log(node)

    console.log(node.getBoundingClientRect())

    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}

export default MeasureExample;