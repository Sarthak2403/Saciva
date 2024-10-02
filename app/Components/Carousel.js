"use client";
import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';
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
  {
    title: "No More Spam",
    description1: "Don't lose your precious time in spam-filled social media groups.",
    description2: "Forget infinite scrolling in muted group chats with irrelevant texts.",
    imgSrc: "https://s3-alpha-sig.figma.com/img/cd02/0042/f2a8f484e9a2a57ba44fe24e1dad6d9f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gk7GEZA6n9m3V1-FWHFVV4t5Cv7VxtFS3YPkhigTPEiPGpvvcyBMNCmUYPfZC7AIqbfXIISRIh3UR6jFCJ3XKOKZrVTGsuyqxFEcZHguuKYmVSotvyNmafFfG5atolZducGTUD1Cuq2XD9jjxCegn6D2RinLTwl0s6h6LO6GuzjmjJNXyawlJNMsi9bYeFNDNgj5TTguLr4iOwSTCinWeqCilFjCCDgWwrzOUti1DKjOwWWoUJtsoOZQ6AcXU9GTZedFf4or8dPxSyY3W8IQnJePRFDCtLUU8vGUvJ1mADHWftmunn0hbZJrwkD8-ERiQ06wrpbVm100l82fRKPm4Q__",
  },
  {
    title: "Another Card",
    description1: "Text related to another feature of the product.",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wl8AyRPIV0b4dCeg-697zH8iV7p67aoHqvaPQ25pnc9qB8CDPYjujPyPBn1koNPeT1twxi7DJVLcyrrjAop3LxHZDbjxhz7KD47ub-QvODe2ekDGp8mUXntBCVgY6H2snWS2cQvExZJAqc02bWlDc9gKPQS7SnjqEmf7ZblAQrjE-USbxrCj9CmKBlzuLP0N~zvJJThUWErwJkbOQ6bb-FCu~huJgPA1KqB8d3rqUdVjs8~~So4STBtTc5IczbuD1C-QaCPfITwv-QJXSuT7y4VbjrsDBNVv8sqDstqlG2EkxPvP9xlW0bPLdP2KzG~t7wM6LkUJaTSPggMCDyp~fA__",
  },
  {
    title: "Another Card",
    description1: "Text related to another feature of the product.",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wl8AyRPIV0b4dCeg-697zH8iV7p67aoHqvaPQ25pnc9qB8CDPYjujPyPBn1koNPeT1twxi7DJVLcyrrjAop3LxHZDbjxhz7KD47ub-QvODe2ekDGp8mUXntBCVgY6H2snWS2cQvExZJAqc02bWlDc9gKPQS7SnjqEmf7ZblAQrjE-USbxrCj9CmKBlzuLP0N~zvJJThUWErwJkbOQ6bb-FCu~huJgPA1KqB8d3rqUdVjs8~~So4STBtTc5IczbuD1C-QaCPfITwv-QJXSuT7y4VbjrsDBNVv8sqDstqlG2EkxPvP9xlW0bPLdP2KzG~t7wM6LkUJaTSPggMCDyp~fA__",
  },
  {
    title: "Another Card",
    description1: "Text related to another feature of the product.",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wl8AyRPIV0b4dCeg-697zH8iV7p67aoHqvaPQ25pnc9qB8CDPYjujPyPBn1koNPeT1twxi7DJVLcyrrjAop3LxHZDbjxhz7KD47ub-QvODe2ekDGp8mUXntBCVgY6H2snWS2cQvExZJAqc02bWlDc9gKPQS7SnjqEmf7ZblAQrjE-USbxrCj9CmKBlzuLP0N~zvJJThUWErwJkbOQ6bb-FCu~huJgPA1KqB8d3rqUdVjs8~~So4STBtTc5IczbuD1C-QaCPfITwv-QJXSuT7y4VbjrsDBNVv8sqDstqlG2EkxPvP9xlW0bPLdP2KzG~t7wM6LkUJaTSPggMCDyp~fA__",
  },
  {
    title: "Another Card",
    description1: "Text related to another feature of the product.",
    description2: "",
    imgSrc: "https://s3-alpha-sig.figma.com/img/432c/2891/4da943f66bd613509b44465ccea003b0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wl8AyRPIV0b4dCeg-697zH8iV7p67aoHqvaPQ25pnc9qB8CDPYjujPyPBn1koNPeT1twxi7DJVLcyrrjAop3LxHZDbjxhz7KD47ub-QvODe2ekDGp8mUXntBCVgY6H2snWS2cQvExZJAqc02bWlDc9gKPQS7SnjqEmf7ZblAQrjE-USbxrCj9CmKBlzuLP0N~zvJJThUWErwJkbOQ6bb-FCu~huJgPA1KqB8d3rqUdVjs8~~So4STBtTc5IczbuD1C-QaCPfITwv-QJXSuT7y4VbjrsDBNVv8sqDstqlG2EkxPvP9xlW0bPLdP2KzG~t7wM6LkUJaTSPggMCDyp~fA__",
  },
];

const Carousel = () => {
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
    <div className="main-div">
      <h1 className={`${urbanist.className} Carousel-title`}>
        Forget the frustrating social media groups, join Saciva
      </h1>

      <div className="Carousel" ref={carouselRef} {...swipeHandlers}>
        {cardData.map((card, index) => (
          <div className="Carousel-card" key={index}>
            <img src={card.imgSrc} alt={card.title} className="Carousel-icon" />
            <h2 className={`${urbanist.className} Carousel-card-title`}>{card.title}</h2>
            <p className={`${lato.className}`}>{card.description1}</p>
            {card.description2 && <p className={`${lato.className}`}>{card.description2}</p>}
          </div>
        ))}
      </div>

      <div className="Carousel-joinText">
        <a className={`${lato.className}`} href="#" onClick={handleJoinButton}>Join the Network for free &gt;</a>
        <p className={`${lato.className}`}>*free for a limited time, don't miss your 100% early bird discount</p>
      </div>
    </div>
  );
};

export default Carousel;
