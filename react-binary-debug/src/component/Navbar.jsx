// components/Navbar.jsx;
const Navbar = () => {
  return (
    <nav className="text-white py-4 bg-gray-700 bg-opacity-20 backdrop-blur-xl">
      <ul className="flex justify-center space-x-16">
        <li>
          <a href="#home" className="hover:text-clifford">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-clifford">
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="hover:text-clifford">
            Our Work
          </a>
        </li>
        <li>
          <a href="#why-us" className="hover:text-clifford">
            Why Us?
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-clifford">
            Contact
          </a>
        </li>
        <li>
          <a href="#blogs" className="hover:text-clifford">
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
