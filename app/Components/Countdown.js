import React, { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';
import './Countdown.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date("December 1, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = differenceInSeconds(new Date(countdownDate), new Date());
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown" style={{ fontFamily: 'Arial, sans-serif' }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <span key={unit} className="time">
          {value.toString().padStart(2, '0')}<span> {unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
        </span>
      ))}
    </div>
  );
}