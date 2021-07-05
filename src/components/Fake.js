import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Fake extends Component {
  render() {
    return (
      <div>
        <section class="px-2 pt-32 bg-white md:px-0">
          <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 class="text-4xl font-black tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center font-headings">
              <span class="block">
                You caught up with us faster{" "}
                <span class="block mt-1 text-green-500 lg:inline lg:mt-0">
                  than we expected!
                </span>
              </span>
            </h1>
            <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center font-body3">
              Profilr is currently perfecting its services so when its out, you
              get the best out of it.
            </p>
            <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
              <Link
                to="/"
                class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-500 rounded-md md:mb-0 hover:bg-green-700 md:w-auto font-headings"
              >
                Go back to home page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a
                href="#_"
                class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 font-headings"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" />
          </div>
        </section>
      </div>
    );
  }
}
