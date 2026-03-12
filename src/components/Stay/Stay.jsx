import { useState } from "react";
import data from "../../locales/data.json";
import "./Stay.css";
import RoomCard from "./RoomCard/RoomCard";

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
    <div className="">
      <h1 className="stayTitle">Konaklama Seçeneklerimiz</h1>
    <div className="stayWrapper poiret-one-regular">
      {data.rooms.map((room) => (
        <div key={room.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={room.img} alt={room.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title poiret-one-regular"><i>{room.title}</i></h2>
            <p>{room.description}</p>

            {activeDetailIds.includes(room.id) && (
              <div className="stay-item-wrapper">
                <RoomCard roomType={room.detailKey} stayDetails={data.stayDetails} />
              </div>
            )}

            <div className="card-actions justify-end mt-auto">
              <button className="stayDetailButton" onClick={() => toggleDetail(room.id)}>
                {activeDetailIds.includes(room.id) ? "Geri Dön" : "Detay"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Stay;