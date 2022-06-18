import { MdArrowBackIosNew } from "react-icons/md";
import FilterPort from "./FilterPort";
import TripListing from "./TripListing";
import TripPort from "./TripPort";
import "./Trip.css";

const Trip = () => {
  return (
    <div className="trips">
      <div className="filter-trip">
        <div className="arrow">
          <MdArrowBackIosNew />
        </div>
        <FilterPort />
      </div>
      <div className="details">
        <TripPort />
        <TripListing />
      </div>
    </div>
  );
};

export default Trip;
