import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { SlideContainer } from './Projects.styled';
import Barber_img from 'images/projects/barber_project.webp';
import Animal_welfare_img from 'images/projects/animal_welfare_project.webp';
import Filmoteka_img from 'images/projects/filmoteka_project.webp';
import Ice_cream_img from 'images/projects/ice_cream_project.webp';
import Anastasia_img from 'images/projects/anastasya-studio.webp';
import Salamandra_img from 'images/projects/salamandra.webp';

export const Project = () => {

  const hendleClickProject = e => {
    e.preventDefault();
    switch (e.target.alt) {
      case 'barbershop project':
        window
          .open('https://barbershop-kyiv.vercel.app/', '_blank')
          .focus();
        break;
      case 'animal welfare project':
        window
          .open(
            'https://studentvlad5.github.io/animal-welfare-network/',
            '_blank'
          )
          .focus();
        break;
      case 'ice cream project':
        window
          .open('https://studentvlad5.github.io/project_ice-cream/', '_blank')
          .focus();
        break;
      case 'filmoteka project':
        window
          .open(
            'https://filmoteka-home.netlify.app/',
            '_blank'
          )
          .focus();
        break;
      case 'Anastasia project':
        window
          .open(
            'https://web-studio-yvh6.onrender.com/',
            '_blank'
          )
          .focus();
        break;
      case 'salamandra project':
        window
          .open(
            'https://salamandra-cafe.vercel.app/',
            '_blank'
          )
          .focus();
        break;
      default:
        break;
    }
  };

  return (
    <SlideContainer>
    <Swiper
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    mousewheel={true}
    keyboard={true}
    loop={true}
    loopPreventsSliding={true}
    loopedSlides={1}
  >
    <SwiperSlide>
      <img className="projectPics" src={Barber_img} alt="barbershop project" onClick={hendleClickProject}/>
    </SwiperSlide>
    <SwiperSlide>
      <img className="projectPics" src={Animal_welfare_img} alt="animal welfare project" onClick={hendleClickProject}/>
    </SwiperSlide>
    <SwiperSlide>
      <img className="projectPics" src={Filmoteka_img} alt="filmoteka project" onClick={hendleClickProject}/>
    </SwiperSlide>
    <SwiperSlide>
      <img className="projectPics" src={Ice_cream_img} alt="ice cream project" onClick={hendleClickProject}/>
    </SwiperSlide>
    <SwiperSlide>
      <img className="projectPics" src={Anastasia_img} alt="Anastasia project" onClick={hendleClickProject}/>
    </SwiperSlide>
    <SwiperSlide>
      <img className="projectPics" src={Salamandra_img} alt="salamandra project" onClick={hendleClickProject}/>
    </SwiperSlide>
    </Swiper>
    </SlideContainer>
  );
};
