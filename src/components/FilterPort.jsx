import { useState } from "react";
import "./FilterPort.css";

const FilterPort = () => {
  const [active, setActive] = useState("1");
  return (
    <div className="filter-container">
      <div className="filter">
        <h5>Filter</h5>
      </div>
      <div className="price">
        <h5>PRICE</h5>
        <div className="range">
          <input type="range" />
          <div className="prices-range">
            <p>₦ 20,000</p>
            <p>₦ 200,000</p>
          </div>
          <div className="button-group">
            <div className="btn1">
              <button>Cheapest First</button>
            </div>
            <div className="btn1">
              <button>Fastest First</button>
            </div>
          </div>
        </div>
      </div>
      <div className="stops">
        <div>
          <h5>STOPS</h5>
        </div>
        <div>
          {["1", "2", "3", "4"].map((but) => (
            <button
              key={but}
              onClick={() => setActive(but)}
              id={active === but ? "active" : ""}
            >
              {but}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPort;
