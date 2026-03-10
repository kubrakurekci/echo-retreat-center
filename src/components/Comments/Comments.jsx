import customerdata from "../../locales/data.json";
import "./Comments.css";
function Comments() {
  return (
    <div>
      <div className="customer-section">
        {customerdata.customerComments.map((customer, index) => {
          const isVideo = customer.avatar.endsWith(".mp4");

          return (
            <div key={index} className="card card-side bg-base-100 shadow-sm">
              <figure>
                {isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-32 h-32 object-cover"
                  >
                    <source src={customer.avatar} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-32 h-32 object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{customer.name}</h2>
                <p>{customer.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Comments;
