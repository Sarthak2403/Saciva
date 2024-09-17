"use client";
import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const count = 545550; 
    setUserCount(count);
  }, []);

  const numberArray = userCount.toString().split("");

  return (
    <div>
    <div className="flex flex-col items-center text-center space-y-6 py-20">
      <h1 className="text-6xl font-bold">SACIVA</h1>
      <section>
        <div className="hero">
          <p className="hero-title">Don't Miss Out on the Fun!</p>
          <div className="hero-numbers">
            {numberArray.map((num, index) => (
              <span key={index} className="hero-number">
                {num}
              </span>
            ))}
          </div>
          <div>
          <p className="hero-text">Users already signed up!</p>
          </div>
        </div>
      </section>
      <button className="join-button">Join the Network for Free</button>
    </div>
    </div>
  );
}

