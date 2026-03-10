import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const splitRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(splitRef.current, { opacity: 1 });

      const splitInstance = SplitText.create(splitRef.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          gsap.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: self.elements[0],
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          });
        },
      });

      return () => splitInstance.revert();
    });
  }, []);

  return (
    <div className="about-wrapper">
      <div className="spacer"></div>
      <div className="about-container">
        <h1 className="split red-hat-display about" ref={splitRef}>
         Echo Retreat Center'a Hoş Geldiniz
        </h1>
        <p>Echo Retreat Center, doğanın kucağında huzur ve yenilenme arayanlara özel bir sığınak sunar. Misafirlerimize, günlük hayatın karmaşasından uzaklaşarak, kendilerini yeniden keşfetmeleri için ilham verici bir ortam sağlıyoruz. Doğal güzelliklerimiz, sürdürülebilir uygulamalarımız ve samimi atmosferimizle, her ziyaretçimizin unutulmaz bir deneyim yaşamasını hedefliyoruz.</p>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default About;