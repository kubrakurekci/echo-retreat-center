import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.module.css"

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    let cw = (c.width = window.innerWidth);
    let ch = (c.height = window.innerHeight);
    let radius = Math.max(cw, ch);

    const particles = Array(99);

    for (let i = 0; i < particles.length; i++) {
      particles[i] = {
        x: 0,
        y: 0,
        scale: 0,
        rotate: 0,
        img: new Image()
      };
      particles[i].img.src =
        "/assets/leaf" + (1 + (i % 9)) + ".png";
    }

    function draw() {
      particles.sort((a, b) => a.scale - b.scale);
      ctx.clearRect(0, 0, cw, ch);

      particles.forEach((p) => {
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(p.rotate);
        ctx.drawImage(
          p.img,
          p.x,
          p.y,
          p.img.width * p.scale,
          p.img.height * p.scale
        );
        ctx.resetTransform();
      });
    }

    const tl = gsap.timeline({ onUpdate: draw })
      .fromTo(
        particles,
        {
          x: (i) => {
            const angle =
              (i / particles.length) * Math.PI * 2 - Math.PI / 2;
            return Math.cos(angle * 10) * radius;
          },
          y: (i) => {
            const angle =
              (i / particles.length) * Math.PI * 2 - Math.PI / 2;
            return Math.sin(angle * 10) * radius;
          },
          scale: 1.1,
          rotate: 0
        },
        {
          duration: 5,
          ease: "sine",
          x: 0,
          y: 0,
          scale: 0,
          rotate: -3,
          stagger: { each: -0.05, repeat: -1 }
        },
        0
      )
      .seek(99);

    const handleResize = () => {
      cw = c.width = window.innerWidth;
      ch = c.height = window.innerHeight;
      radius = Math.max(cw, ch);
      tl.invalidate();
    };

    const handlePointer = () => {
      gsap.to(tl, {
        timeScale: tl.isActive() ? 0 : 1
      });
    };

    window.addEventListener("resize", handleResize);
    c.addEventListener("pointerup", handlePointer);

    return () => {
      window.removeEventListener("resize", handleResize);
      c.removeEventListener("pointerup", handlePointer);
      tl.kill();
    };
  }, []);

  return (
  <main style={{ position: "relative" }}>
   <canvas
  ref={canvasRef}
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 1
  }}
/>
     <div className="bottom-fade"></div>
  </main>
);
}

export default Hero;
