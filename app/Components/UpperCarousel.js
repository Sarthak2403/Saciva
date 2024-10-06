"use client";
import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './UpperCarousel.css';
import { Urbanist, Lato } from '@next/font/google';

// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

const cardData = [
//   {
//     title: "No More Spam",
//     description1: "Don't lose your precious time in spam-filled social media groups.",
//     description2: "Forget infinite scrolling in muted group chats with irrelevant texts.",
//     imgSrc: "https://s3-alpha-sig.figma.com/img/cd02/0042/f2a8f484e9a2a57ba44fe24e1dad6d9f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gk7GEZA6n9m3V1-FWHFVV4t5Cv7VxtFS3YPkhigTPEiPGpvvcyBMNCmUYPfZC7AIqbfXIISRIh3UR6jFCJ3XKOKZrVTGsuyqxFEcZHguuKYmVSotvyNmafFfG5atolZducGTUD1Cuq2XD9jjxCegn6D2RinLTwl0s6h6LO6GuzjmjJNXyawlJNMsi9bYeFNDNgj5TTguLr4iOwSTCinWeqCilFjCCDgWwrzOUti1DKjOwWWoUJtsoOZQ6AcXU9GTZedFf4or8dPxSyY3W8IQnJePRFDCtLUU8vGUvJ1mADHWftmunn0hbZJrwkD8-ERiQ06wrpbVm100l82fRKPm4Q__",
//   },
  {
    title: "Network",
    description1: "A Global Network of Students Only.",
    description2: "",
    // imgSrc: "/images/6ccb2190b581149a881f14aaac46ad-unscreen.gif",
    imgSrc: "https://s3-alpha-sig.figma.com/img/8e21/492b/6ccb2190b581149a881f14aaac46adc8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CxIHymEif1ENZAfylNHV5cURNsoEFy85Ww3UXZzG23VeU-eTlzyXZ52L5edyaJloMf6LH7ZSOfhWKOUBYH2ITFTqRiZUJkeLKXH51bxRmRwQJyfF0iFRXNIjUvWz8IS7lclG1kk0L7AsuHRJPsA24J0d5adnLI1oLj5XwI4CSI57fOa60C6QSSp-GUkStGbzJSyK~hMahFp8yGbVXgyljrmh5vHXBY~gD-WhZj3IMH4iBP8m9Jdi2ybcwWpF28tgNN2QXMF~8Rq57zA5vNx-baH9HgBSt817Ev3pGieWajvkuhV50nD9Z~cdcHgC~tB-3XO5lcuyOP4XWuiMyLzZdQ__",
    
  },
  {
    title: "Safety",
    description1: "Encr$#@%d Security&Privacy",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/af3a/920b/78015185d33134e625313908e60283b8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GbOQEgadXMphVcsdSY3-ahFNLyBSqZCa4gP6aNg41wByICDfJ21VHBO7reZ-ZMmQwcs~eiHBPndkR1fJn3EuLTBnsCzvcpMWRkceKrunddsr-PK~~Zvmi5EXeq~ZSubtiMhB9SYo-nEd0J1pVuU8wAgrit5hH8p8TrYj4kDT2LQAKxLkn-DwXcYS3yPpjAhe0fR~QWbvxck3AalU2~7GpjYXlWV9he4yO-PT67aEmrQ8hhoV64mxnFGH-jUvwvlqrKeEyXZrBmB6dNehp47MRXmk8Nz74p1QGhP5AyYSZJNzpRwLl8qwNXWphy2ZF4wG82Nf7qZT4qHwltO3HmPhKw__",
  },
  {
    title: "Convenience",
    description1: "Multi-purpose & Automated processes.",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/320b/7287/d6a0c0fc623a490704ef4e40ee3802a9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SP277Xc~fqgOnrvToTVg-IU~dFjsexz5LyUwfVGNqn83BPs0XuA~6EoGk6jms0CIFRcZfAz6oX83jjGC58MyBNgU~qNd5IQjT0Ehp5Ydw1nyX9oMY~gmlQrh-XRiY-7I-mKI3zZjaQm5E0cRgihvLprd-GLisblOr3sxDFhhaK~AN~RAStdPKsL6gaAqs09PuA5c5eSH6R3V9DT5E7a9RFCwkVxhLeYTHKPf98HaMKjfM2XCZXJD4px6fA9rivXk8XM1lNac5IlK4SJIG3g1caFkLoN4O5~sJ6tdc79CQq7onc-xpB2Kg1dHxav4Wk7CEPzBnq58LCVpZ760I~AGdw__",
  },
//   {
//     title: "Another Card",
//     description1: "Text related to another feature of the product.",
//     description2: "",
//     imgSrc: "https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wl8AyRPIV0b4dCeg-697zH8iV7p67aoHqvaPQ25pnc9qB8CDPYjujPyPBn1koNPeT1twxi7DJVLcyrrjAop3LxHZDbjxhz7KD47ub-QvODe2ekDGp8mUXntBCVgY6H2snWS2cQvExZJAqc02bWlDc9gKPQS7SnjqEmf7ZblAQrjE-USbxrCj9CmKBlzuLP0N~zvJJThUWErwJkbOQ6bb-FCu~huJgPA1KqB8d3rqUdVjs8~~So4STBtTc5IczbuD1C-QaCPfITwv-QJXSuT7y4VbjrsDBNVv8sqDstqlG2EkxPvP9xlW0bPLdP2KzG~t7wM6LkUJaTSPggMCDyp~fA__",
//   },
];

const UpperCarousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSwipeLeft = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleJoinButton = () =>{
    alert("Join button was pressed");
  }

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="UpperCarousel-main-div">
      <h1 className={`${urbanist.className} UpperCarousel-title`}>
        The Only <span>&lt;Package&gt;</span> you ever need till you graduate
        and beyond!
      </h1>

      <p className={`${urbanist.className} main-div-p`}>
        One platform to find roommates, housing, network and more as an
        International Student in USA
      </p>

      <div className="UpperCarousel" ref={carouselRef} {...swipeHandlers}>
        {cardData.map((card, index) => (
          <div className="UpperCarousel-card" key={index}>
            <img
              src={card.imgSrc}
              alt={card.title}
              className="UpperCarousel-icon"
            />
            <h2 className={`${urbanist.className} UpperCarousel-card-title`}>
              {card.title}
            </h2>
            <p className={`${lato.className}`}>{card.description1}</p>
            {card.description2 && (
              <p className={`${lato.className}`}>{card.description2}</p>
            )}
          </div>
        ))}
      </div>

      <div className="UpperCarousel-joinText">
      <p className={`${lato.className}`}>
        We are You. As international students, we know the exact challenges you
        face and we are building a personalized one stop solution. Saciva has
        everything you need to succeed. Join us today and start your journey to
        success!
      </p>
        <a className={`${lato.className}`} href="#" onClick={handleJoinButton}>
          Join the Network for free &gt;
        </a>
        <p className={`${lato.className}`}>
          *free for a limited time, don't miss your 100% early bird discount
        </p>
      </div>

    </div>
  );
};

export default UpperCarousel;
