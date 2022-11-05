import React from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ab esse quas similique
            debitis ad, blanditiis iste error consequatur iure vel dicta ipsa quo reiciendis porro,
            a perferendis? Repellendus voluptate est accusamus quaerat quam, voluptatibus iste
            delectus consequuntur quidem iusto officiis animi vero quia distinctio, odio voluptatum.
            In, dolore perspiciatis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar2} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ab esse quas similique
            debitis ad, blanditiis iste error consequatur iure vel dicta ipsa quo reiciendis porro,
            a perferendis? Repellendus voluptate est accusamus quaerat quam, voluptatibus iste
            delectus consequuntur quidem iusto officiis animi vero quia distinctio, odio voluptatum.
            In, dolore perspiciatis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar3} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ab esse quas similique
            debitis ad, blanditiis iste error consequatur iure vel dicta ipsa quo reiciendis porro,
            a perferendis? Repellendus voluptate est accusamus quaerat quam, voluptatibus iste
            delectus consequuntur quidem iusto officiis animi vero quia distinctio, odio voluptatum.
            In, dolore perspiciatis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar4} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ab esse quas similique
            debitis ad, blanditiis iste error consequatur iure vel dicta ipsa quo reiciendis porro,
            a perferendis? Repellendus voluptate est accusamus quaerat quam, voluptatibus iste
            delectus consequuntur quidem iusto officiis animi vero quia distinctio, odio voluptatum.
            In, dolore perspiciatis.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
