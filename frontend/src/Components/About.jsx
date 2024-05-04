import React from 'react';
import Layout from './layout/layout';
import AboutImage from './about.jpeg'; // Import the image for the About section
import user from './user.jpeg';

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
            <h2 className="text-xl font-semibold mb-4">About This Project</h2>
            <p className="mb-4 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lorem nec velit sagittis ultricies ac in libero.
              Duis posuere, risus non fermentum sollicitudin, nisl est sollicitudin lacus, ut sodales sapien orci vel eros.
            </p>
            <p className="text-gray-800">
              Aliquam consequat felis ac lectus hendrerit, vitae tristique arcu eleifend. Integer euismod, felis nec vehicula 
              condimentum, justo tortor consequat justo, sed viverra mi purus ut odio. Sed auctor eros nec magna feugiat, in 
              mattis libero pretium.
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
                <img src={user} alt="Contributor 1" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 1</p>
            </div>
            {/* Contributor 2 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 2" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 2</p>
            </div>
            {/* Contributor 3 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 3" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 3</p>
            </div>
            {/* Contributor 4 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 4" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 4</p>
            </div>
            {/* Contributor 5 */}
            <div className="text-center">
              <a href="https://www.linkedin.com/in/shivamkasaudhan/" target="_blank" rel="noopener noreferrer">
                <img src={user} alt="Contributor 5" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 5</p>
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
                <img src={user} alt="Contributor 8" className="w-20 h-20 mx-auto mb-2 rounded-lg hover:scale-105 transition-transform duration-300" />
              </a>
              <p>Contributor 8</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsPage;
