import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-brandWhite flex justify-center items-center">
      <div className="max-w-3xl w-full mx-4 bg-brandWhite rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">About AgriConnect</h1>
        <h2 className="text-2xl font-bold mb-6 text-center">Cultivating a Future of Empowering Farmers and Sustainable Agriculture</h2>
        <p className="text-lg text-gray-800 mb-8">Welcome to AgriConnect, your gateway to a thriving agricultural ecosystem! We're a passionate community dedicated to empowering farmers, fostering knowledge exchange, and harnessing the power of AI to revolutionize the agricultural landscape. Together, let's cultivate a future where farmers flourish, consumers access fresh, local produce, and sustainable practices become the norm.</p>
        <h3 className="text-lg font-bold mb-4">Our Mission</h3>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
          <li><strong>Empowering Farmers:</strong> At AgriConnect, we believe farmers are the heroes who nourish our communities. Our platform provides them with a reliable marketplace to sell their produce directly, eliminating middlemen and ensuring fair returns.</li>
          <li><strong>Knowledge Hub:</strong> Our informative blog section is a treasure trove of practical knowledge, covering everything from traditional farming techniques to cutting-edge advancements in agriculture.</li>
          <li><strong>AI-powered Farm Assistant:</strong> Our groundbreaking AI assistant is your personalized farm advisor, offering data-driven recommendations, real-time insights, and tailored solutions to optimize your operations.</li>
        </ul>
        <h3 className="text-lg font-bold mb-4">Our Features</h3>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
          <li><strong>Direct Marketplace:</strong> Sell your products directly to consumers and businesses, maximizing your profits and building stronger connections with those who enjoy your harvest.</li>
          <li><strong>Community Connection:</strong> Network with fellow farmers, learn from their experiences, and share your knowledge to create a supportive and collaborative environment.</li>
          <li><strong>Knowledge Library:</strong> Access a wealth of informative blogs, curated by experts, to stay informed on best practices, emerging technologies, and industry trends.</li>
          <li><strong>AI-powered Farm Assistant:</strong> Unleash the power of AI to optimize your farm management. Gain personalized insights, manage resources efficiently, and make informed decisions to boost yields and profitability.</li>
        </ul>
        <h3 className="text-lg font-bold mb-4">Our Goals</h3>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
          <li><strong>Empowering Farmers:</strong> We envision a future where farmers are well-equipped and empowered to succeed. Our platform provides them with the tools, resources, and fair market access they deserve.</li>
          <li><strong>Knowledge for All:</strong> We believe in fostering a culture of knowledge sharing and collaboration within the farming community. Our comprehensive library and forum empower farmers to learn from each other and stay ahead of the curve.</li>
          <li><strong>Sustainable Future:</strong> We advocate for sustainable farming practices that nurture the environment for generations to come. Our AI assistant and educational resources help farmers optimize resource use and minimize their ecological footprint.</li>
        </ul>
        <p className="text-lg text-gray-800">Become part of a movement that's transforming agriculture. Whether you're a farmer, a consumer who values fresh, local produce, or an advocate for a sustainable future, AgriConnect has a place for you. Let's cultivate a more prosperous and sustainable future for agriculture, together.</p>
      </div>
    </div>
  );
}

export default AboutPage;
