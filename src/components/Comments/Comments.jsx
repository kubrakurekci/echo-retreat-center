import customerdata from "../../locales/data.json";
import "./Comments.css";
function Comments() {
  return (
    <div>
      <h1 className="customerTitle">Bizi Müşterilerimizden Dinleyin</h1>
      <div className="customerSection">
        {customerdata.customerComments.map((customer, index) => {
          const isVideo = customer.avatar.endsWith(".mp4");

          return (
            <div
              key={index}
              className="customerCard card-side bg-base-100 shadow-sm"
            >
              <figure>
                {isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="customerImage object-cover"
                  >
                    <source src={customer.avatar} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="customerImage object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{customer.name}</h2>
                <p>
                  <i>{customer.comment}</i>
                </p>
                <div className="rating flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`mask mask-star ${
                        star <= customer.rate ? "active" : ""
                      }`}
                      aria-label={`${star} star`}
                      data-rate={star}
                      aria-current={star <= customer.rate ? "true" : "false"}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Comments;
