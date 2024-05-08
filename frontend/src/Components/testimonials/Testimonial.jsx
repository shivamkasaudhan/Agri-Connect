import React from 'react';
import rani from './rani.png';
import asha from './asha.png'
import dharm from './dharm.png'

const Testimonial = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Dhatri",
      position: "Jammu & Kashmir (Kashmiri apple farmer)",
      review: "Agriconnect's AI guide and natural farming blogs helped me improve my Kashmiri apple yield and adopt more sustainable practices. Selling apples online through Agriconnect opened up wider markets and better prices.",
      imageUrl: asha // Directly use the imported image
    },
    {
      id: 2,
      name: "Apurva",
      position: "Karnataka (Vegetable farmer)",
      review: "Agriconnect's AI farm guide and natural farming blogs are my go-to resources for vegetable farming. Selling produce online through Agriconnect opened up new markets.",
      imageUrl: rani // Directly use the imported image
    },
    {
      id: 3,
      name: "Puneet",
      position: "Punjab (Dairy farmer)",
      review: " Agriconnect's AI farm guide helps me track cow health and milk production. Natural farming blogs provide tips for raising healthy cows and producing high-quality milk. Selling milk directly online through Agriconnect ensures fair prices.",
      imageUrl: dharm // Directly use the imported image
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-opacity-10 bg-green-100 backdrop-filter backdrop-blur-lg bg-clip-padding border border-green-200 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={testimonial.imageUrl} alt={testimonial.name} />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
