import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: `Our diverse menu features a wide array of mouthwatering options to satisfy every craving. 
      From hearty burgers to fresh salads, flavorful pasta dishes to indulgent desserts, 
       ensuring a delightful dining experience with every bite.`,
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: `Whether you're a frequent diner or ordering for a special occasion, we cater to 
      your needs. With our flexible ordering system, you have the freedom to choose how often 
      you'd like to enjoy our scrumptious meals.`,
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: `At Fast Delivery Restaurant, we understand the value of your time and the importance 
      of enjoying delicious meals without delay. That's why we offer lightning-fast delivery services 
      straight to your doorstep.`,
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        A restaurant operates by providing food and beverage services to customers in exchange for payment.
         It involves various tasks such as menu planning, sourcing ingredients, cooking, serving, and 
         managing the establishment.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
