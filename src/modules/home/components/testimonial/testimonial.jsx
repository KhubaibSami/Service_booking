import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at hendrerit ligula. Integer at est id mauris interdum cursus. Ut nec lectus vel erat mollis condimentum. Nunc posuere velit eget orci accumsan, ut commodo nisl feugiat.",
    author: "Micheal Gough",
    position: "CEO at Google",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at hendrerit ligula. Integer at est id mauris interdum cursus. Ut nec lectus vel erat mollis condimentum. Nunc posuere velit eget orci accumsan, ut commodo nisl feugiat.",
    author: "Micheal Gough",
    position: "CEO at Google",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at hendrerit ligula. Integer at est id mauris interdum cursus. Ut nec lectus vel erat mollis condimentum. Nunc posuere velit eget orci accumsan, ut commodo nisl feugiat.",
    author: "Micheal Gough",
    position: "CEO at Google",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-screen-xl px-4 py-10 mx-auto text-center lg:py-24 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <FaQuoteLeft size="2em" className="mx-auto text-blue-900" />
                <blockquote>
                  <p className="text-2xl font-medium py-16 text-blue-900">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <FaUser className="w-6 h-6 text-blue-500" />
                  <div className="flex items-center divide-x-2 divide-blue-500 dark:divide-blue-700">
                    <div className="pr-3 font-medium text-blue-900 ">{testimonial.author}</div>
                    <div className="pl-3 text-sm font-light text-blue-500 dark:text-blue-400">{testimonial.position}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Testimonial;
