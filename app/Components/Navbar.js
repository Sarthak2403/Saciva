"use client";
import "./Navbar.css"
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">SACIVA</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Our Story</a>
          <button className="login-button">Log In</button>
        </div>
      </nav>
    );
  }
  