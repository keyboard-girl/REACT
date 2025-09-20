// components/GallerySlider.jsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';

const GallerySlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="gallery-slider">
      {/* Slider principal */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
        className="main-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image.src} 
              alt={image.alt || `Imagen ${index + 1}`}
              className="slider-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniaturas */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Miniatura ${index + 1}`}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;