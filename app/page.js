"use client";
import { useRouter } from "next/navigation";
import Countdown from "./Components/Countdown";
import "./page.css";
import Link from "next/link";
import { Urbanist, Lato } from '@next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-urbanist'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

export default function Home() {
  // const router = useRouter();
  // const handleRedirect = () => {
  //   router.push("/dashboard");
  // };

  return (
    <div className="main_div">
      <div className="main_div-hero">
        <h1 className={`${lato.className} prior_main-title`}>We are launching soon</h1>
        <Countdown />
        <p className = {`${lato.className} subtitle`}>
          We can't wait for you to join us on this platform
        </p>
      </div>
      <div className="supportBox">
        <p className={`${lato.className} supportBox-para`}>
          While we are offering the platform for free for now, it costs us
          money, time, and effort to keep this running. We highly appreciate
          your generous support to make this platform more robust and
          featuresome!
        </p>
        <Link href="/landing">
          <button className="shareButton">Share with Friends</button>
        </Link>
      </div>
    </div>
  );
}
