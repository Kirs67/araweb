import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col h-dvh">

      <header className="flex flex-col bg-arared text-arawhite py-5">
      
          <div className="flex flex-row items-center realtive">
            
            <img alt="ARA" src="/logo_small.png" className="rounded-full size-16 absolute left-3"/>
            
            <p className="mx-auto text-xl font-bold">
              Aalto Russian-speaking Association
            </p>
          
          </div>
          
          <nav className="mt-4 flex justify-center gap-6 text-sm font-medium pt-3">
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
            <a href="#events" className="hover:text-gray-200">
              Events
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>
      
      </header>

      <main id="content" className="flex-grow">
        <h1>Aalto Russian-speaking Association</h1>
      </main>

      <footer className="flex flex-col bg-arared text-arawhite text-sm text-center py-3">
        <a href="mailto:ara.hallitus@gmail.com">ara.hallitus@gmail.com</a>

        <p>
          © {new Date().getFullYear()} Aalto Russian-speaking Association ry.
        </p>
      </footer>

    </div>
  );
}