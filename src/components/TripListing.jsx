import React, { useEffect, useState } from "react";
import yacht from "../assests/yacht.png";
import "./TripListing.css";
import { getTrips } from "../utils/api";
import { formatDate } from "../utils/helpers";

const TripListing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTrips();
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h4>Trip Listings</h4>
      <div className="grid">
        {data &&
          data.map((trip) => (
            <React.Fragment key={trip.id}>
              <div className="trip_id">
                <h2>{trip.tripId}</h2>
                <div className="image">
                  <img src={yacht} alt="yacht" />
                </div>
              </div>
              <div className="trip_type">
                <p>{trip.boatType}</p>
                <div className="trip_time">
                  <p>{formatDate(trip.scheduledDate).day}</p>
                  <p>{formatDate(trip.scheduledDate).time}</p>
                </div>
              </div>
              <div className="trip_price">
                <p>
                  {trip.currency}
                  {Number(trip.price).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <button className="btn2">Book Ride</button>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default TripListing;
