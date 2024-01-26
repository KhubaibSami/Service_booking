import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const Card = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const cards = [
    {
      id: "card1",
      title: "Order 1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?",
    },
    {
      id: "card2",
      title: "Order 2",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?",
    },
    {
      id: "card3",
      title: "Order 3",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?",
    },
  ];

  return (
    <>
      <div id="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card" id={card.id}>
            <div className="overlay">
              <a href="#">
                <FaArrowRight />
              </a>
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
