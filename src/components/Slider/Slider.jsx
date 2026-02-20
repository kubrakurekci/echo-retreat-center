import data from "../../locales/data.json";
import "./Slider.css"
function Slider() {
  return (
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
            <img src={service.img} className="absolute inset-0 w-full h-full object-cover blur-sm slider-img" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-40">
              <h3 className="text-3xl font-bold ">{service.title}</h3>
              <p className="mt-4 max-w-xl">{service.description}</p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
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
  );
}
export default Slider;
