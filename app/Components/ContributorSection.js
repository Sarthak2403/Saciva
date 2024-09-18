import React from "react";
import "./ContributorSection.css";

export default function ContributorSection() {
  return (
    <section className="contributor-section">
      <div className="content-container">
        <p className="top-text">
          We are You. We are international students. Visit our blog to know
          more about how our journey with Saciva started. At Saciva, we believe
          in the power of community, we appreciate your Feedback and Suggestions
        </p>

        <a href="#" className="story-link">
          {"< Our Story >"}
        </a>

        <div className="contributor-message">
          <h2>Become a part of the Saciva contributor community</h2>
          <p>
            by extending your support in making this platform more robust and
            featuresome!
          </p>

          <a href="#" className="contributor-button">
            Become a Contributor
          </a>
        </div>

        <p className="bottom-text">
          Help us grow by spreading the word about Saciva! Share this with your
          friends, colleagues, classmates, and roommates—especially those who
          are international students.
        </p>

        <a href="#" className="share-link">
          {"^ Share With Friends ^"}
        </a>

        <footer className="footer">
          <p>
            Made with love, <span className="footer-brand">Saciva</span>
            <span className="footer-heart">❤️</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
