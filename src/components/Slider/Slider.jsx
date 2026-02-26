import data from "../../locales/data.json";
import { useState } from "react";
import "./Slider.css";
import Features from "../Features/Features";
function Slider() {
  const [activeDetailId, setActiveDetailId] = useState(null);
  return (
    <div className="services-container">
      <h1 className="slider-text sirivennela-regular">Hizmetlerimiz</h1>

      <div className="carousel w-full slider">
        {data.services.map((service, index) => {
          const total = data.services.length;

          const prev = index === 0 ? total : index;
          const next = index === total - 1 ? 1 : index + 2;

          return (
            <div
              key={service.id}
              id={`slide${service.id}`}
              className="carousel-item relative w-full h-[500px]"
            >
              <img
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover blur-sm slider-img"
              />

              <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
              <div className="serviceContent relative z-10 flex flex-col items-center h-full text-white text-center px-40 pt-24">
                <div className="service">
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="mt-4 max-w-xl">{service.description}</p>
                </div>

                {activeDetailId !== service.id && (
                  <button
                    className="detail-btn"
                    onClick={() => {
                      setActiveDetailId(service.id);
                    }}
                  >
                
                    Detay
                  </button>
                )}

                {activeDetailId === service.id && (
                  <>
                  <div className="serviceDetails">
                    <button
                      onClick={() => setActiveDetailId(null)}
                      className="back-btn"
                    >
                      Geri Dön
                    </button>

                    <div className="details">
                      <Features service={service} />
                    </div>
                    </div>
                  </>
                )}
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
                <a href={`#slide${prev}`} className="slider-button">
                  ❮
                </a>
                <a href={`#slide${next}`} className="slider-button">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Slider;
