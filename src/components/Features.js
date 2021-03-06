import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <div>
        <section class="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
          <div class="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24">
            <div class="relative pb-10">
              <h5 class="w-full mx-0 mt-0 mb-4 font-sans font-bold text-center text-green-400 border-0 border-gray-200 font-headings">
                Features
              </h5>
              <h2 class="w-full m-0 font-sans text-4xl font-black leading-loose tracking-tight text-center text-gray-900 border-0 border-gray-200 sm:text-5xl font-headings">
                What difference does{" "}
                <span className="text-green-500">Profilr</span> make?
              </h2>
              <p class="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base font-body3 tracking-normal ">
                Profilr’s goal is to make your life easier by automatically or
                semi-automatically handling the tedious parts of freelancing and
                freeing up your time for the important things that can really
                move your career forward.
              </p>
            </div>

            <div class="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
              <div class="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path>
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Projects
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      Manage projects, tag what's done, customize urgency etc.
                      Managing your workload has never been so easy.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5"></path>
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Tasks
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      Only do what's important today - input your tasks and get
                      it done accordingly.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <path d="M9 4.55a8 8 0 016 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"></path>
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Notifications
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      Make your clients feel like they're always at the top of
                      your priorities by non-intrusive notifications. Receive
                      updates and changes regularly.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <path d="M3 12h3M12 3v3M7.8 7.8L5.6 5.6M16.2 7.8l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9"></path>
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Personal Portfolio
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      The best portfolio is the one that's very catchy yet so
                      simple. Profilr gives you just that.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M22.001 13c0-5.522-4.475-10.001-10.002-10.001-5.523 0-10.001 4.479-10.001 10.001 0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10zm-10.002 8c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8zm-1.279-6.817l-2.325-2.183-1.395 1.435 3.746 3.565 6.559-6.592-1.422-1.408-5.163 5.183zm-9.918-5.468c-.535-.824-.802-1.772-.802-2.718 0-2.757 2.233-4.995 4.991-4.995.948 0 1.896.268 2.721.803-3.172 1.217-5.692 3.739-6.91 6.91zm18.201-7.715c-.947 0-1.895.268-2.719.803 3.17 1.218 5.694 3.739 6.914 6.909.534-.823.801-1.77.801-2.717 0-2.761-2.236-4.995-4.996-4.995z" />
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Time Tracking
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      Never lose touch of time - schedule projects, manage your
                      hours and see the amount of time you put off on every
                      project.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-span-3 font-sans text-gray-700 border-0 bg-gray-50 rounded-3xl">
                <div class="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                  <div class="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <rect x="3" y="4" width="18" height="8" rx="3"></rect>
                      <rect x="3" y="12" width="18" height="8" rx="3"></rect>
                      <path d="M7 8v.01M7 16v.01"></path>
                    </svg>
                  </div>
                  <div class="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                    <h6 class="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid font-body3">
                      Reliable
                    </h6>
                    <p class="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4 font-body3">
                      We pride ourselves in our up-time metrics. We focus a lot
                      of our energy on being reliable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute top-0 left-0 -ml-56 opacity-25 w-96 h-96">
            <svg
              class="text-green-400 opacity-50 fill-current w-88 h-88"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z"
                transform="translate(100 100)"
              ></path>
            </svg>
          </div>

          <div class="absolute top-0 right-0 -mb-56 opacity-25 w-96 h-96 -mr-72">
            <svg
              class="w-full h-full text-green-400 opacity-50 fill-current"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z"
                transform="translate(100 100)"
              ></path>
            </svg>
          </div>
        </section>
      </div>
    );
  }
}
