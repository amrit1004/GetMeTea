// pages/about.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <div className="px-4">
      <Head>
        <title>About Us - Get Me a Tea</title>
        <meta name="description" content="Learn more about Get Me a Tea, the platform that allows developers and users to receive donations from their fans." />
      </Head>
      
      <main className="flex flex-col items-center justify-center min-h-screen py-16 ">
        <h1 className="mb-4 text-5xl font-bold text-center text-teal-600">About Get Me a Tea</h1>
        
        <p className="max-w-2xl mb-6 text-xl text-center text-gray-700">
          Get Me a Tea is a platform dedicated to helping developers and content creators receive support and donations from their fans. Our mission is to provide a simple and effective way for creators to get the recognition and financial support they deserve.
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/misson.jpeg" // Replace with your image path
            alt="Our Mission"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <section className="max-w-2xl my-8 text-center">
          <h2 className="mb-2 text-3xl font-semibold text-teal-500">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Get Me a Tea, we believe that every creator deserves to be rewarded for their hard work and creativity. Our platform enables fans to show their appreciation by making small donations, which can add up to significant support for developers and users alike.
          </p>
        </section>

        <div className="flex justify-center mb-8">
          <Image
            src="/how-it-works.jpeg" // Replace with your image path
            alt="How It Works"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <section className="max-w-2xl my-8 text-center">
          <h2 className="mb-2 text-3xl font-semibold text-teal-500">How It Works</h2>
          <p className="text-lg text-gray-700">
            Getting started with Get Me a Tea is easy. Simply sign up, create a profile, and share your unique link with your fans. They can then make donations directly through our platform, allowing you to focus on what you do best: creating amazing content.
          </p>
        </section>

        <div className="flex justify-center mb-8">
          <Image
            src="/community.jpeg" // Replace with your image path
            alt="Join Our Community"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <section className="max-w-2xl my-8 text-center">
          <h2 className="mb-2 text-3xl font-semibold text-teal-500">Join Our Community</h2>
          <p className="text-lg text-gray-700">
            Join thousands of creators who are already benefiting from the support of their fans. Whether you are a developer, artist, musician, or any other type of creator, Get Me a Tea is here to help you succeed.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;


export const metadata ={
    title: "About - Get Me a Tea",
 }