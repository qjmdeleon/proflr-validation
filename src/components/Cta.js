import React, { Component } from "react";

export default class Cta extends Component {
  render() {
    return (
      <div>
        <section className="relative block py-20 overflow-hidden leading-6 text-left bg-white bg-gray-900">
          <div className="w-full max-w-5xl px-8 mx-auto leading-6 text-left xl:px-12">
            <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
              <div className="box-border text-sm font-semibold text-green-500 text-4xl tracking-tight font-headings">
                Show clients your work today.
              </div>
              <p className="box-border mx-0 mt-6 mb-0 text-sm font-light leading-normal text-gray-300 sm:text-lg font-body3">
                Profilr helps freelancers find more clients and deliver high
                quality work: This offers a way for freelancers to attract
                potential clients, streamline the process of finding the right
                clients, manage their bookings, and control payments.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
