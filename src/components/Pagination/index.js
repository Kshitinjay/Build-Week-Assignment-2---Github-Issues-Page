import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
      const value = props.showPerPage * counter;
    props.handlePage(value-props.showPerPage,value);
  }, [counter]);
  const handleInc = () => {
    console.log("Increased");
    setCounter(counter + 1);
  };

  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Decreased");
    }
  };

  return (
    <div className="d-flex justify-content-between mt-5 mb-5">
      <button className="btn btn-primary" onClick={handleDec}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={handleInc}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
