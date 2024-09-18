"use client";
import React, { useState, useEffect } from "react";
import "./Roadmap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleCheckBig } from 'lucide-react';
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

export default function Roadmap() {
    return (
      <div className={`${urbanist.className} roadmap-section`}>
        <h1 className="roadmap-title">Product Roadmap</h1>
        <div className="roadmap-text">
        <h2>On your phone right now:</h2>
          <ul>
            <li>
              <CircleCheckBig color="green" />
              Secure, Private and a Verified student only network beyond your
              university and City
            </li>
            <li>
            <CircleCheckBig color="green" /> Intuitive Dashboard
          </li>
          <li>
            <CircleCheckBig color="green" /> Find roommates with matching preferences
          </li>
          <li>
            <CircleCheckBig color="green" /> Post vacancy (sublease) in your house
          </li>
          <li>
            <CircleCheckBig color="green" /> Find subleases posted by others, that suit your preferences
          </li>
          <li>
            <CircleCheckBig color="green" /> Student tailored features on the map to show subleases posted by students
          </li>
          <li>
            <CircleCheckBig color="green" /> Marketplace to buy and sell your stuff
          </li>
          <li>
            <CircleCheckBig color="green" /> Secure in-app 1:1 chat. Goodbye WhatsApp groups and creepy DMs.
          </li>
          <li>
            <CircleCheckBig color="green" /> Mobile App with Offline experience
          </li>
          </ul>
          <h2>Coming soon:</h2>
        <ul>
          <li>
            1. AI assistant to answer your questions
          </li>
          <li>
            2. Post events you are organizing
          </li>
          <li>
            3. Find projects and teammates to collaborate with
          </li>
          <li>
            4. In-app group chat between roommates
          </li>
          <li>
            5. Carpooling with calendar interface
          </li>
        </ul>

        <h2>Code still Cooking:</h2>
        <ul>
          <li>
            1. Some piping hot features, like a slow-cooked stew, that are worth the wait.
          </li>
        </ul>
        </div>
      </div>
    );
}


