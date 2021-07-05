import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <section class="w-full py-20 bg-white">
          <div class="max-w-3xl px-10 mx-auto">
            <h2 class="mb-1 text-xl text-3xl font-bold text-center font-headings">
              Pre-order a{" "}
              <span className="text-green-500">profilr dashboard</span> today!
            </h2>
            <p class="mb-10 text-center text-gray-500 font-body2">
              Get your own dashboard and efficiently manage your projects when
              we launch Profilr.
            </p>
            <div class="relative flex flex-col overflow-hidden bg-gray-900 rounded-xl">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-green-400"></div>
              <div class="flex flex-col items-center p-10 md:flex-row">
                <div class="w-full text-white md:w-2/3">
                  <div class="flex items-center">
                    <p class="flex items-start text-lg font-bold leading-none text-transparent text-7xl bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                      <span class="mt-2 text-4xl">$</span>9
                    </p>
                    <div class="flex flex-col ml-3">
                      <p class="text-base font-medium leading-tight text-gray-200 font-headings">
                        each month
                      </p>
                      <p class="flex-shrink-0 text-xs text-gray-400 font-headings">
                        Cancel Anytime. No commitments.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-center w-full mt-8 md:w-1/3 md:justify-end md:mt-0">
                  <Link
                    to="/preorder"
                    class="w-full px-10 py-5 text-xl font-semibold text-center text-white rounded-lg bg-gradient-to-br from-green-400 to-white-500 md:w-auto font-headings"
                  >
                    Pre-order now
                  </Link>
                </div>
              </div>
              <div class="px-10 py-8 bg-gray-900 border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900">
                <h3 class="text-xl font-medium leading-tight text-gray-200 font-body3">
                  Simple, early-bird price. Everything you need plus the
                  updates.
                </h3>
                <p class="my-1 text-gray-400 font-body2">
                  Gain access to all our premium shows and episodes with a
                  premium membership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
