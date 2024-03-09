import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">Testimonios de Clientes</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."</p>
          <p className="testimonial-author">- Cliente 1</p>
        </div>
        <div className="testimonial-card">
          <p>"Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."</p>
          <p className="testimonial-author">- Cliente 2</p>
        </div>
        <div className="testimonial-card">
          <p>"Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."</p>
          <p className="testimonial-author">- Cliente 3</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
