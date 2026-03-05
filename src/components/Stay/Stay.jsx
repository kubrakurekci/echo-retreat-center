import StayItem from "./StayItem/StayItem";
import { useState } from "react";
import data from "../../locales/data.json";
import "./Stay.css";

function Stay() {
  const [activeDetailIds, setActiveDetailIds] = useState([]);

  const toggleDetail = (roomId) => {
    setActiveDetailIds(prev =>
      prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  return (
    <div className="stayWrapper">
      {data.rooms.map((room) => (
        <div key={room.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={room.img} alt={room.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{room.title}</h2>
            <p>{room.description}</p>

            {activeDetailIds.includes(room.id) && (
              <div className="stay-item-wrapper">
                <StayItem />
              </div>
            )}

            <div className="card-actions justify-end mt-auto">
              <button onClick={() => toggleDetail(room.id)}>
                {activeDetailIds.includes(room.id) ? "Geri Dön" : "Detay"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stay;