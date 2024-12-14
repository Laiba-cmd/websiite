"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // Add subscription logic
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Funiro.</h3>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-[#B88E2F]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              {['Payment Options', 'Returns', 'Privacy Policies'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-[#B88E2F]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-[#B88E2F] flex-grow"
                required
              />
              <button 
                type="submit" 
                className="ml-2 text-[#B88E2F] hover:text-opacity-80"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <p>© 2023 furino. All rights reserved</p>
        </div>
      </div>

      <div className="bg-[#F9F1E7] py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-center">
          {[
            { 
              icon: "/Group.png", 
              title: "High Quality", 
              description: "crafted from top materials" 
            },
            { 
              icon: "/warr.png", 
              title: "Warranty Protection", 
              description: "Over 2 years" 
            },
            { 
              icon: "/vector.png", 
              title: "Free Shipping", 
              description: "Order over 150 $" 
            },
            { 
              icon: "/customer.png", 
              title: "24 / 7 Support", 
              description: "Dedicated support" 
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
              <Image 
                src={item.icon} 
                width={40} 
                height={40} 
                alt={item.title} 
              />
              <h4 className="font-bold mt-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}