import RootLayout from '../layout';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Texts from '../Components/Texts';
import Roadmap from '../Components/Roadmap';
import ContributorSection from '../Components/ContributorSection';
import Carousel from '../Components/Carousel';

export default function LandingPage() {
  return (
    <RootLayout>
      <Navbar />
        <Hero />
        <hr  style={{ border: 'none', borderTop: '2px solid #9146ff', width: '80%', margin: '20px auto' }}/>
        <Carousel />
        <Texts />
        <hr  style={{ border: 'none', borderTop: '2px solid #9146ff', width: '80%', margin: '20px auto' }}/>
        <Roadmap />
        <ContributorSection />
    </RootLayout>
  );
}
