import "./globals.css";
import "./Components/Hero"
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
// import Carousel from "./Components/Carousel"
import Texts from "./Components/Texts";
import Roadmap from "./Components/Roadmap";
import ContributorSection from "./Components/ContributorSection";
import Page from "./page.js";

export const metadata = {
  title: "Saciva",
  description: "Saciva helps individuals coming to US for first time find all the essentials at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* <Carousel /> */}
        {/* <Page /> */}
        {children}
        {/* <Navbar />
        <Hero />
        <hr  style={{ border: 'none', borderTop: '2px solid #9146ff', width: '80%', margin: '20px auto' }}/>
        <Texts />
        <hr  style={{ border: 'none', borderTop: '2px solid #9146ff', width: '80%', margin: '20px auto' }}/>
        <Roadmap />
        <ContributorSection /> */}
      </body>
    </html>
  );
}
