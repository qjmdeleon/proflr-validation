import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section class="py-10 bg-gray-50">
          <div class="px-10 mx-auto max-w-7xl">
            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
              <a href="#_" class="flex items-center text-lg font-bold">
                <svg
                  width="36"
                  height="41"
                  viewBox="0 0 36 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.641 33.429L11.563 27.351C7.26395 23.0519 0 26.0909 0 32.169V40.1H35.2821V15.788L17.641 33.429Z"
                    fill="black"
                  />
                  <path
                    d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z"
                    fill="black"
                  />
                </svg>

                <span class="ml-1">profilr.io </span>
              </a>
            </div>
            <div class="flex flex-col justify-between mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row">
              <ul class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm font-bold">
                <li>
                  {" "}
                  <a
                    href="#_"
                    class="px-2 text-gray-500 hover:text-gray-600 font-headings"
                  >
                    Contact
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#_"
                    class="px-2 text-gray-500 hover:text-gray-600 font-headings"
                  >
                    About US
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#_"
                    class="px-2 text-gray-500 hover:text-gray-600 font-headings"
                  >
                    FAQ's
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#_"
                    class="px-2 text-gray-500 hover:text-gray-600 font-headings"
                  >
                    Terms
                  </a>
                </li>
              </ul>
              <p class="mt-3 text-xs leading-tight text-gray-500 sm:mt-0 font-headings">
                {" "}
                © Copyright 2021
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
