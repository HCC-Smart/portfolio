import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
                <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h2>E-commerce project</h2>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h2>E-commerce project</h2>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h2>E-commerce project</h2>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                  <i className="fa fa-quote-left" />

                      It was nice hiring this guy for my e-commerce project.He
                      <i className="fa fa-quote-right" />

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h1>E-commerce project</h1>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <h2>E-commerce project</h2>
                  
                  </div>
                  <div className="client-info">
                  <p>
                      It was nice hiring this guy for my e-commerce project.He
                      
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
