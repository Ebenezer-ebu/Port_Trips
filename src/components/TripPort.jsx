import {
  MdDirectionsBoatFilled,
  MdOutlineCircle,
  MdCompareArrows,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
import "./TripPort.css"

const TripPort = () => {
  return (
    <div className="trip-container">
      <div className="trip-port">
        <div className="trail">
          <div className="online">
            <div>
              <MdOutlineCircle className="icon" />
            </div>
            <div>
              <MdDirectionsBoatFilled className="icon" />
            </div>
            <div>
              <MdOutlineCircle className="icon" />
            </div>
          </div>
        </div>
        <div className="places">
          <div>
            <h3>V/ISL</h3>
            <p>port</p>
          </div>
          <div>
            <h3>EKO ATL</h3>
            <p className="port">port</p>
          </div>
        </div>
      </div>
      <div className="direct">
        <div className="directions">
          <div className="top-card">
            <MdCompareArrows className="icon icon-card" />
            <span>Sat, 12 Mar</span>
          </div>
          <div className="top-card">
            <MdOutlineAirlineSeatReclineNormal className="icon icon-card" />
            <span>4 passengers</span>
          </div>
        </div>
        <div className="btn">
          <button>Change</button>
        </div>
      </div>
    </div>
  );
};

export default TripPort;
