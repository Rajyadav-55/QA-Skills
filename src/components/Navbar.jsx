import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          QA Skills
        </Link>
        
        <div className="flex items-center space-x-6">
          {/* <Link 
            to="/learning" 
            className={`hidden md:block ${location.pathname === '/learning' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Learning
          </Link>
          
          <Link 
            to="/dashboard" 
            className={`hidden md:block ${location.pathname === '/dashboard' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Dashboard
          </Link> */}
          
          <Link 
            to="/login" 
            className={`${location.pathname === '/login' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-1`}
          >
            Login
          </Link>
          
          <Link 
            to="/signup" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;