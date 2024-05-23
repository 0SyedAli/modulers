import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import { Col, Image, Rate, Row } from "antd";
import { useKeenSlider } from "keen-slider/react";
import { companyName } from "../../utils/constant";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = true;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  let [testimonials, setTestimonials] = useState([
    {
      title: "Kevin Hatt",
      locations: "USA",
      description: `Team of ${companyName} delivered an outstanding work in the super short delay we had set. They are serious, super effective and really kind. You can trust them all the way.`,
      img: "/Assets/kevin.jpeg",
    },
    {
      title: "Majdolin",
      locations: "ISRAEL",
      description: `"They are professionals and  experienced. They helped me to solve a problem that I have stuck with for two weeks,they also helped solve other related problems."`,
      img: "/Assets/majdoline.jpeg",
    },
    {
      title: "Ryan kumar",
      locations: "USA",
      description: `"${companyName} are hard working, dedicated part of the ${companyName} team. He's talented within the front end domain and would recommend to others""`,
      img: "/Assets/ryan.jpeg",
    },
    {
      title: "Bernard",
      locations: "USA",
      description: `"${companyName} developers did a great job with understanding my needs. Their skills in PWA development are superb. They did the requested updates in timely manner and gave me advice for future updates on my PWA. Will definitely use their services again."`,
      img: "/Assets/bernard.jpeg",
    },
    {
      title: "Anthony",
      locations: "Australia",
      description: `"${companyName} team is an expert with MERN stacks. They work efficiently and finds issues that may arise before they happen and corrects them accordingly. It was a pleasure to work with them."`,
      img: "/Assets/anthony.jpeg",
    },
    {
      title: "Jayanth",
      locations: "USA",
      description: `"${companyName}! Did everything we asked for and more. Didn't require a lot of instruction, was able to understand our requirements and did a great job. Really happy with the work so far. Will definitely rehire."`,
      img: "/Assets/jayanth.jpeg",
    },
    {
      title: "Rotem Dofni",
      locations: "ISRAEL",
      description: `"${companyName} did a great job working on our reporting module.
      He was very responsive, cooperative, and finished tasks on time and professionally."`,
      img: "/Assets/rotem.jpeg",
    },
    {
      title: "Don Bandy",
      locations: "USA",
      description: `"I developed a great friendship with ${companyName} on this project and I enjoyed working with them. They were always willing to jump in and help at any time. Really awesome team. Thank you for everything you’ve done guys."`,
      img: "/Assets/don.jpeg",
    },
  ]);

  return (
    <div
      className={`${styles.testimonials_container} testimonials_container`}
      id="testimonals"
    >
      <h1>Our Reviews</h1>
      <div className={styles.testimonials}>
        <Row gutter={[5]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div ref={sliderRef} className="keen-slider">
              {testimonials?.map((item, i) => (
                <div
                  className={`${styles.testimonials_content_container} keen-slider__slide`}
                  key={i}
                >
                  <div className={styles.testi_img_container}>
                    <Image
                      preview={false}
                      src={item?.img}
                      alt="logo"
                      width={130}
                      height={130}
                      objectFit="contain"
                    />
                  </div>
                  <div>
                    <h3>{item?.title}</h3>
                    <h4>{item?.locations}</h4>
                    <p>{item?.description}</p>
                    <Rate
                      style={{ fontSize: "30px" }}
                      defaultValue={5}
                      disabled
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* {loaded && instanceRef.current && (
            <div className={`${styles.dots_container} dots`}>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx , i) => {
                return (
                  <div  key={i}  className={`${styles.dots}`}>
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    ></button>
                  </div>
                );
              })}
            </div>
          )} */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
