import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollleft -= 300;
    } else {
      current.scrollleft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_containers" ref={scrollRef}>
          {galleryImages.map((images, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_images-${index + 1}`}
            >
              <img src={images} alt="gallery" />
              <BsInstagram className="gallery__images-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            classNme="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            classNme="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
