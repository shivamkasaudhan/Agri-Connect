import React from 'react';
import Layout from '../layout/layout';
import AboutImage from './about.jpg'; // Import the image for the About section
import user from './user.jpeg';
import shivam from './shivam.jpg'
import Prince from './Prince.jpg'
import Jai from './Jai.jpg'
import Rohan from './Rohan.jpg'
import Dhruv from './Dhruv.jpg'



function AboutUsPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8 bg-gradient-to-b from-transparent to-green-100 rounded-lg overflow-hidden">
        {/* About Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-brandBlue">About Us</h1>
        </div>

        {/* About Content */}
        <div className="flex items-center">
          {/* About Image */}
          <div className="w-1/2 h-1/2">
            <img
              src={AboutImage}
              alt="About"
              className="w-full rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </div>

          {/* About Text */}
          <div className="w-1/2 pl-8">
            <h2 className="text-xl font-semibold mb-4">Unleash the Potential of Your Farm with AgriConnect</h2>
            <p className="mb-4 text-gray-800">
            AgriConnect is a pioneering AI-driven platform designed to empower farmers and revolutionize the agricultural landscape. Our comprehensive three-tiered solution suite equips you with the tools and knowledge to achieve sustainable growth and success.
            </p>
            <p className=" mb-4 text-gray-800">
            <span className='font-bold'>Streamline Farm-to-Consumer Sales:</span> Eliminate intermediaries and connect directly with potential customers through our user-friendly platform.  Reach new markets, secure better returns, and gain greater control over your produce.
            </p>
            <p className="mb-4 text-gray-800">
            <span className='font-bold'>AI-Powered Farm Guidance:</span> Leverage our AI farm guide, your personalized agronomist assistant.  Gain data-driven crop recommendations tailored to your specific needs and growing conditions. Ask questions and receive clear, actionable guidance in your local language using our voice-enabled AI for maximum convenience.
            </p>
            <p className="mb-4 text-gray-800">
            <span className='font-bold'>Cultivate Knowledge with Our Agricultural Blog:</span> Stay informed and inspired with our informative blog.  Gain valuable insights from expert advice on adopting sustainable natural farming practices. Discover the latest industry trends and success stories from fellow farmers within the AgriConnect community.
            </p>
          </div>
        </div>

        {/* Contribution Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Contributors</h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Contributor 1 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={shivam} alt="Shivam Kasaudhan" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Shivam Kasaudhan</p>
            </div>
            {/* Contributor 2 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/princejaiswalvitb/" target="_blank" rel="noopener noreferrer">
                <img src={Prince} alt="Prince Jaiswal" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Prince Jaiswal</p>
            </div>
            {/* Contributor 3 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={Jai} alt="Contributor 3" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Jai Singh Bisht</p>
            </div>
            {/* Contributor 4 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={Rohan} alt="Contributor 4" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Rohan Kushwaha</p>
            </div>
            {/* Contributor 5 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 5" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Siddhart Shivhare</p>
            </div>
            {/* Contributor 6 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 6" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 6</p>
            </div>
            {/* Contributor 7 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 7" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 7</p>
            </div>
            {/* Contributor 8 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={Dhruv} alt="Contributor 8" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Dhruv Shah</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsPage;
