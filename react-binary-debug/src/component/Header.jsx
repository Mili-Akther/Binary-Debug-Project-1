// components/Header.jsx
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/*  Left Section: Logo */}
        <img src={logo} alt="" />

        {/* Message Icon and Text */}
        <div className="items-center hidden lg:flex space-x-10">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-message text-2xl"></i>
            <div>
              <h5 className="font-bold">Online 24/7</h5>
              <p className="text-xs">Binarydebug722@gmail.com</p>
            </div>
          </div>

          {/* Location Icon and Text */}
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <div>
              <h5 className="font-bold">Agrabad, Chottogram</h5>
              <p className="text-xs">Chittagong</p>
            </div>
          </div>

          {/* Phone Icon and Text */}
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-phone-flip text-2xl"></i>
            <div className="font-semibold">+880 1782310773</div>
          </div>
        </div>

        {/* Social media links */}
        <div className="space-x-4">
          <a href="#" className="text-white text-3xl">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white text-3xl">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="text-white text-4xl">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="text-white text-4xl">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
