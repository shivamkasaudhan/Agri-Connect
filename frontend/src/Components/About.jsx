import React from 'react';

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-brandWhite flex justify-center items-center">
      <div className="max-w-3xl w-full mx-4 bg-brandWhite rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h1>

        {/* Brand Story */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Brand Story</h2>
          <p className="text-lg text-gray-800 mb-4">
            At FreshHarvest, our story began with a passion for sustainable farming and a desire to bring fresh, organic produce directly from the farm to your table. What started as a small family farm has now grown into a thriving community of farmers and consumers who share our vision for a healthier, more sustainable future.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We believe in the power of locally grown food to nourish our bodies and our communities. That's why we're committed to supporting local farmers and promoting environmentally friendly farming practices. Join us in our mission to make fresh, organic produce accessible to everyone.
          </p>
        </section>

        {/* Who We Serve */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
          <p className="text-lg text-gray-800 mb-4">
            Our products are for anyone who values the quality and taste of fresh, organic produce. Whether you're a health-conscious individual, a busy parent looking to feed your family nutritious meals, or a chef searching for the finest ingredients, FreshHarvest is here for you.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We cater to individuals and businesses alike, offering a wide range of seasonal fruits, vegetables, herbs, and more. With our convenient online platform, you can easily browse our selection, place your order, and have farm-fresh goodness delivered straight to your doorstep.
          </p>
        </section>

        {/* How We Operate */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Operate</h2>
          <p className="text-lg text-gray-800 mb-4">
            At FreshHarvest, transparency and sustainability are at the core of everything we do. We work directly with local farmers who share our commitment to organic farming practices and ethical production methods. By cutting out the middlemen, we ensure fair prices for both our farmers and our customers.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Our online platform connects you with a diverse network of farmers, allowing you to support small-scale agriculture while enjoying the freshest produce available. We prioritize freshness and quality, carefully selecting each item to ensure it meets our rigorous standards.
          </p>
        </section>

        {/* The Face of Our Business */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">The Face of Our Business</h2>
          <p className="text-lg text-gray-800 mb-4">
            Meet the team behind FreshHarvest – a group of passionate individuals dedicated to bringing you the best in organic produce. Our founders, Sarah and David, started this journey with a shared love for farming and a commitment to sustainability. Today, they lead a team of farmers, food enthusiasts, and customer service experts who are here to serve you.
          </p>
          {/* Include images of founders or team members here */}
        </section>

        {/* Persuasive Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Persuasive Content</h2>
          <p className="text-lg text-gray-800 mb-4">
            Ready to experience the difference with FreshHarvest? Explore our wide selection of farm-fresh produce, browse our recipe ideas for inspiration, and join our community of food lovers who are passionate about supporting local agriculture. Together, we can create a healthier, more sustainable future for all.
          </p>
        </section>

        {/* Call to Action */}
        <section>
          {/* Add your call to action here, such as buttons, links, etc. */}
          <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600">Shop Now</button>
        </section>
      </div>
    </div>
  );
}

export default AboutUsPage;
