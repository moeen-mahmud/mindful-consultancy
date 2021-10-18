import React from "react";
import "./SelfTest.css";

const SelfTest = () => {
  return (
    <div className="self-test">
      <h1>Online Psychology Test</h1>
      <p>
        Taking a critical look at your own mental state in situations in which
        you don’t feel too comfortable can be a first step towards feeling
        better. These online psychological tests help you with that. All our
        self-tests are anonymous, free and can be carried out without
        registering.
      </p>
      <div className="test-selection">
        <select name="tests">
          <option value="anger">
            Psychology self test for anger management
          </option>
          <option value="anxiety">Psychology self test for anxiety</option>
          <option value="depression">
            Psychology self test for depression
          </option>
          <option value="pressure">
            Psychology self test for managing pressure
          </option>
          <option value="relationship">
            Psychology self test for quality couple's relationship
          </option>
        </select>
        <button className="btn btn-header">Start Testing</button>
      </div>
    </div>
  );
};

export default SelfTest;
