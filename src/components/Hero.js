import React, { Component } from "react";
import mimi from "../images/mimi.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Hero extends Component {
  render() {
    return (
      <section className="relative flex flex-col-reverse w-full px-6 py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-900">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-gray-900 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H80L50 120H0L50 0Z"></path>
          </svg>
          <LazyLoadImage
            effect="blur"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={mimi}
            alt="woman using laptop"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="flex inline-block text-sm font-semibold tracking-wider text-green-200 uppercase rounded-full mb-7"></p>
            <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none font-headings">
              Freelancing
              <br className="hidden md:block" />
              <span className="xl:hidden lg:hidden md:hidden sm:hidden xs:block">
                &nbsp;
              </span>
              <span className="inline-block text-green-500">made easy.</span>
            </h1>
            <p className="mb-5 text-base text-gray-400 sm:pr-13 md:text-lg font-body3 leading-7">
              Your work, projects, and earnings are all over the place. Profilr
              makes it easy for you to view or manage important details in one
              single channel --{" "}
              <span className="underline text-green-500 cursor-pointer">
                your dashboard.
              </span>
            </p>
            <div className="flex flex-col items-center pt-2 sm:flex-row sm:pt-4"></div>
          </div>
        </div>
      </section>
    );
  }
}
