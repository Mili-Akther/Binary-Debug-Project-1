
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Top Section */}
      <div className="container mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          {/* Logo Section */}
          <div>
            <img
              src="Assets/logo.svg"
              alt="Binary Debug Logo"
              className="h-14"
            />
          </div>

          {/* Social Media Text and Links */}
          <div className="text-center lg:text-right mt-6 lg:mt-0">
            <div className="flex gap-4 justify-center lg:justify-end ">
              <p className="text-white pt-4 font-light">
                Follow Us On Social Media
              </p>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-white hover:text-white transition w-12 h-12 rounded-full border border-gray-700 bg-zinc-900 bg-gradient-to-t from-black to-zinc-700 flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-white hover:text-white transition w-12 h-12 rounded-full border border-gray-700 bg-zinc-900 bg-gradient-to-t from-black to-zinc-700 flex items-center justify-center"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="text-white hover:text-white transition w-12 h-12 rounded-full border border-gray-700 bg-zinc-900 bg-gradient-to-t from-black to-zinc-700 flex items-center justify-center"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Home</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Benefits
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Our <br /> Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Graphics Design
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  ABC Tech <br /> Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  GreenEarth <br /> Eco Store
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  HealthTech <br /> Innovations
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  GlobalTech <br /> Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  TechGuru Inc.
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Team
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Achievements
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Awards
                </a>
              </li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-4">Careers</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Job Openings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Benefits & Perks
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Employee Referral
                </a>
              </li>
            </ul>
          </div>
          {/* Column 6 */}
          <div>
            <h4 className="font-semibold mb-4">Blogs</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t m-56 mb-0 divide-y-4 border-gray-800 mt-8 pt-6">
        <div className="container mx-auto px-8 lg:px-20 flex flex-col lg:flex-row justify-between items-center text-gray-400">
          <p className=" text-xl text-gray-500 ">
            &copy;2023 Digitax. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 lg:mt-0 text-xl text-gray-500">
            <a href="#" className="hover:text-white ">
              Version 1.0
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
