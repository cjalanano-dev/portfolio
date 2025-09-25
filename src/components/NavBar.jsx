 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-white shadow flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <h1 className="text-xl font-bold">Carlos James <span className="text-blue-500">Alanano</span></h1>
      </Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;