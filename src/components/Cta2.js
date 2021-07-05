import React, { Component } from "react";

export default class Cta2 extends Component {
  render() {
    return (
      <div id="subscribe">
        <form
          action="https://gmail.us6.list-manage.com/subscribe/post?u=d1601b5a3306db9211f31aee1&amp;id=d50fd23d1e"
          className="py-20 bg-white"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div className="max-w-5xl px-10 mx-auto xl:px-5">
            <div className="flex flex-col justify-center space-y-8">
              <p className="w-full -mb-3 font-medium text-left text-green-400 uppercase md:text-center rounded-xl font-body3">
                REQUEST FOR EARLY ACCESS
              </p>
              <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl md:text-center font-headings">
                Notify me when it's ready.
              </h2>
              <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-2xl md:text-center font-body3 pb-5">
                We are working on making the best freelancing experience, be the
                first ones to try it when it's out!
              </p>

              <div className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                <input
                  type="text"
                  className="flex-1 w-full px-5 py-5 text-2xl border border-gray-300 focus:ring-4 focus:border-green-700 focus:ring-green-400 focus:ring-opacity-50 focus:outline-none rounded-xl font-body2"
                  placeholder="Your Name"
                />
                <input
                  className="flex-1 w-full px-5 py-5 text-2xl border border-gray-300 focus:ring-4 focus:border-green-700 focus:ring-green-400 focus:ring-opacity-50 focus:outline-none rounded-xl font-body2"
                  placeholder="Email Address"
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                />
                <button
                  href="#_"
                  className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none rounded-xl font-body2"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                >
                  Sign Me Up
                </button>
              </div>
              <p className="text-gray-400 pb-5 font-body2">
                By signing up you agree to our &nbsp;
                <a href="#_" className="text-green-400 underline font-body2">
                  terms of service
                </a>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
//
