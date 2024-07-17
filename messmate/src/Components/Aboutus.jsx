import React from "react";

function Aboutus() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-32 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
        </div>
        <div className="flex flex-wrap mx-6">
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium  text-lg text-gray-900">
                  Vedant joshi
                </h2>
                <h3 className="text-gray-500 mb-3">Full-Stack Developer</h3>
                <p className="mb-4">
                DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="data:image/jpeg;base64,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"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg  text-gray-900">
                  Rahul Chabdal
                </h2>
                <h3 className="text-gray-500 mb-3">Data Analyst</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/204x204"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Karan Thayat
                </h2>
                <h3 className="text-gray-500 mb-3">Data Analyst </h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="data:image/jpeg;base64,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"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Himanshu Sonkar
                </h2>
                <h3 className="text-gray-500 mb-3"> UI Designer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
