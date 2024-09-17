"use client";
import React, { useState } from "react";
import "./Texts.css";

export default function Texts() {
  const [isAppListVisible, setAppListVisible] = useState(false);
  const [isStepTwoDescriptionVisible, setStepTwoDescriptionVisible] = useState(false);
  const [isStepThreeDescriptionVisible, setStepThreeDescriptionVisible] = useState(false);
  const [isStepFourDescriptionVisible, setStepFourDescriptionVisible] = useState(false);
  const [isStepFiveDescriptionVisible, setStepFiveoDescriptionVisible] = useState(false);

  const handleAppListToggle = () => setAppListVisible(!isAppListVisible);
  const handleStepTwoDescriptionToggle = () => setStepTwoDescriptionVisible(!isStepTwoDescriptionVisible);
  const handleStepThreeDescriptionToggle = () => setStepThreeDescriptionVisible(!isStepThreeDescriptionVisible);
  const handleStepFourDescriptionToggle = () => setStepFourDescriptionVisible(!isStepFourDescriptionVisible);
  const handleStepFiveDescriptionToggle = () => setStepFiveoDescriptionVisible(!isStepFiveDescriptionVisible);

  function handleButton(){
    alert("The button was pressed!");
  }
  
  return (
    <div className="text-section">
      <h1 className="main-title">Designed to make you productive</h1>

      <p className="subtitle">
        We've done the hard work for you so that you can focus on the most
        important things you crossed the oceans for,
        <br /> "Academics and Career"
      </p>

      <p className="note">
        5 steps to attain peace of mind as an international student.
      </p>

      <div className="step">
        <h2 className="step-title">Step 1:</h2>
        <p className="step-description">
          Join the network and add Saciva to your mobile homepage, to replace
          more than 5 types of apps during your abroad journey.
        </p>

        <div className="collapsible">
          <button className="toggle-button" onClick={handleAppListToggle}>
            <span
              className={`arrow ${isAppListVisible ? "down" : "up"}`}
            ></span>
          </button>
          {!isAppListVisible && (
            <ol className="app-list">
              <li>
                <del>Roommate finding Apps</del> (Saciva does that!)
              </li>
              <li>
                <del>Sublease finding apps</del> (Saciva does that!)
              </li>
              <li>
                <del>Marketplace apps</del> (Saciva does that!)
              </li>
              <li>
                <del>Private messaging Apps</del> (Saciva does that!)
              </li>
              <li>
                <del>Social media groups</del> (for getting information from
                peers)
              </li>
              <p>
                (you guessed it right! Saciva does that too and more, with
                coming updates!)
              </p>
            </ol>
          )}
        </div>
      </div>

      <div className="step">
        <h2 className="step-title">Step 2:</h2>
        <p className="step-description">
          Avoid wasting as much as 3 months of your precious time in finding a
          place to stay during your graduate degree or more for undergraduate
          degree.
        </p>

        <div className="collapsible">
          <button
            className="toggle-button"
            onClick={handleStepTwoDescriptionToggle}
          >
            <span
              className={`arrow ${isStepTwoDescriptionVisible ? "down" : "up"}`}
            ></span>
          </button>
          {!isStepTwoDescriptionVisible && (
            <p className="step-two-description">
              *Our survey of hundreds of international students in the USA shows
              that it took 19 days to find a house on average and the students
              stayed in a house for only 6.8 months on average. Wasting about 34
              days a year, making it about 3 months of anxiety-inducing house
              hunting for a student in a two year graduate degree with one year
              OPT.
            </p>
          )}
        </div>
      </div>

      <div className="step">
        <h2 className="step-title">Step 3:</h2>
        <p className="step-description">
          Avoid paying 100’s of dollars in temporary accommodation by not
          finding a long term place to stay before landing in the USA
        </p>

        <div className="collapsible">
          <button
            className="toggle-button"
            onClick={handleStepThreeDescriptionToggle}
          >
            <span
              className={`arrow ${isStepThreeDescriptionVisible ? "down" : "up"}`}
            ></span>
          </button>
          {!isStepThreeDescriptionVisible && (
            <p className="step-two-description">
              *Our survey of hundreds of international students in the USA shows
              that only about 12% of the total survey takers found housing
              before landing and the rest have had to find housing after
              arriving in the USA.
            </p>
          )}
        </div>
      </div>

      <div className="step">
        <h2 className="step-title">Step 4:</h2>
        <p className="step-description">
          Avoid the mental stress of having to deal with roommates with clashing
          preferences, moving out of the house in the middle of your busy
          semester and finding a replacement for you.
        </p>

        <div className="collapsible">
          <button
            className="toggle-button"
            onClick={handleStepFourDescriptionToggle}
          >
            <span
              className={`arrow ${isStepFourDescriptionVisible ? "down" : "up"}`}
            ></span>
          </button>
          {!isStepFourDescriptionVisible && (
            <p className="step-two-description">
              *Our survey of hundreds of international students in the USA shows
              that About 64% of them felt finding roommates difficult as a
              majority of the students wanted to share their room exclusively
              with those who shared similar preferences such as food, country,
              smoking, drinking and more.
            </p>
          )}
        </div>
      </div>

      <div className="step">
        <h2 className="step-title">Step 5:</h2>
        <p className="step-description">
          Avoid paying hundreds of dollars in temporary accommodation by not
          finding a long term place to stay before landing in the USA.
        </p>

        <div className="collapsible">
          <button
            className="toggle-button"
            onClick={handleStepFiveDescriptionToggle}
          >
            <span
              className={`arrow ${isStepFiveDescriptionVisible ? "down" : "up"}`}
            ></span>
          </button>
          {!isStepFiveDescriptionVisible && (
            <p className="step-two-description">
              *Our survey of hundreds of international students in the USA shows
              that 88% of the total survey takers have not found housing before
              arriving in the USA.
            </p>
          )}
        </div>
      </div>

      <div> 
        {/* <p className="subtitle-two">Join the network to avoid loosing hundreds of dollars $$$ and months of precious time.</p>
        <span className="subtitle-two-span">Make your choice, make a statement, 
        Join Saciva.</span> */}
        <h1 className="subtitle-two">Join the network to avoid <span>losing</span> hundreds of dollars $$$ and months of precious time.</h1>
        <h2  className="subtitle-two-span">Make your choice, make a statement, Join Saciva.</h2>
      </div>

      <div className="flex flex-col items-center text-center space-y-6 py-10">
      <button className="join-button-two" onClick={handleButton}>Join the Network for Free</button>
      <p className="">*Free for a limited time, don't miss your 100% early bird discount</p>
      </div>
    </div>
  );
}
