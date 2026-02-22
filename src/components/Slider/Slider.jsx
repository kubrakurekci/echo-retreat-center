import data from "../../locales/data.json";
import { useState } from "react";
import "./Slider.css";
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
              {activeDetailId === service.id ? (
                <div className="relative z-10 flex flex-col items-center h-full pt-24 text-white text-center px-40">
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="mt-4 max-w-xl">{service.description}</p>
                  <button
                    onClick={() => setActiveDetailId(null)}
                    className="z-50 bg-red-500 p-2"
                  >
                    Geri Dön
                  </button>
                  <div
                    className={`fade ${activeDetailId === service.id ? "show" : ""}`}
                  >
                    <h4 className="text-2xl font-bold mt-6">Detaylar</h4>
                    <p className="mt-2 max-w-xl">Mülkemmeliz</p>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-40">
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="mt-4 max-w-xl">{service.description}</p>
                  <button onClick={() => setActiveDetailId(service.id)}>
                    Detay
                  </button>
                </div>
              )}

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
