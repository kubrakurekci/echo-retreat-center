import "./RoomCard.css";
function RoomCard({ roomType, stayDetails }) {
  const room = stayDetails[roomType]

  if (!room) return null

  return (
    <div className="card card-sm bg-base-200 max-w-60 shadow">
      <figure className="gallery hover-gallery">
        {room.images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </figure>

      <div className="card-body price">
        <span>{room.price}</span>
      </div>
    </div>
  )
}
export default RoomCard;