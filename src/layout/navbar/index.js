import React,{useState} from 'react'
import Logo from '../../assests/logo.png';

const NavBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-10 bg-white shadow-md'>
    <div className="mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-1 flex justify-end">
      <nav className="container mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            <img src={Logo} alt="logo" className='w-20'/>
          </a>
          <div className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-primaryColor font-semibold hover:text-secondaryColor">Home</a>
            <a href="/about" className="text-primaryColor font-semibold hover:text-secondaryColor">About Us</a>
            <a href="/project" className="text-primaryColor font-semibold hover:text-secondaryColor">Projects</a>
            <a href="/team" className="text-primaryColor font-semibold hover:text-secondaryColor">Our Team</a>
            <a href="/contact" className="text-primaryColor font-semibold hover:text-secondaryColor">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none" onClick={toggleMobileMenu}>
              {/* Add a hamburger menu icon here */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden mt-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-4">
          <a href="/" className="text-primaryColor font-semibold hover:text-secondaryColor">Home</a>
            <a href="/about" className="text-primaryColor font-semibold hover:text-secondaryColor">About Us</a>
            <a href="/project" className="text-primaryColor font-semibold hover:text-secondaryColor">Projects</a>
            <a href="/team" className="text-primaryColor font-semibold hover:text-secondaryColor">Our Team</a>
            <a href="/contact" className="text-primaryColor font-semibold hover:text-secondaryColor">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default NavBar