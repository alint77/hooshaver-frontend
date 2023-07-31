import "./globals.css";

// https://www.svgrepo.com/collection/wolf-kit-solid-glyph-icons/

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#0D1116] flex-col items-center text-white ">
      <div className=" w-full h-16 bg-[#24292f] flex flex-row justify-around">
        <div className=" text-center w-fit h-full  flex flex-col justify-center font-bold text-2xl  ">
          Hooshaver
        </div>
      </div>

      <div className="  w-full h-fit flex flex-col justify-center gap-6 py-16">
        <div className="  text-center p-4 font-bold text-3xl">
          Hooshaver, AI Consulting Services
        </div>
        <div className="  text-center p-4">
          At Hooshaver, we help businesses and organizations leverage artificial
          intelligence to solve complex problems and drive growth.
        </div>
        <>
          <a
            href="mailto:amin1999nami.hi.an@gmail.com"
            className="mx-auto text-center p-4 bg-[#131D2F] hover:bg-[#1f6feb] text-white rounded-xl border-white w-fit h-fit font-bold"
          >
            CONTACT US
          </a>
        </>
      </div>

      <div className=" w-full h-fit flex-col justify-evenly pb-8 bg-black">
        <div className=" font-bold text-3xl text-center m-auto p-8">
          Our Services
        </div>

        <div className=" w-full h-fit flex flex-row flex-wrap justify-evenly gap-6 px-6">
          <div className="flex flex-col p-6 bg-slate-900 rounded-xl shadow-sm justify-around w-96">
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z"
                    fill="lightblue"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center font-bold text-xl">
              AI Strategy Development
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              {`We'll work with you to develop a comprehensive AI strategy that
              meets your business goals and objectives.`}
            </div>
          </div>
          <div className="flex flex-col p-6 bg-slate-900 rounded-xl shadow-sm justify-around w-96">
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM18.787 9.57537C19.1767 9.18401 19.1753 8.55084 18.784 8.16116L18.0753 7.45558C17.684 7.0659 17.0508 7.06726 16.6611 7.45863L10.8895 13.2551L7.56845 9.98027C7.1752 9.59249 6.54205 9.59692 6.15427 9.99018L5.45213 10.7022C5.06436 11.0955 5.06879 11.7286 5.46204 12.1164L10.2003 16.7888C10.5922 17.1752 11.2228 17.1723 11.6111 16.7823L18.787 9.57537Z"
                    fill="lightblue"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center font-bold text-xl">
              AI Implementation
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              {`Our team will help you implement AI solutions that integrate
              seamlessly with your existing systems.`}
            </div>
          </div>
          <div className="flex flex-col p-6 bg-slate-900 rounded-xl shadow-sm justify-around w-96">
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM17.5 13.5C18.0523 13.5 18.5 13.0523 18.5 12.5V11.5C18.5 10.9477 18.0523 10.5 17.5 10.5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H11.5C10.9477 3.5 10.5 3.94772 10.5 4.5V12.5C10.5 13.0523 10.9477 13.5 11.5 13.5H17.5Z"
                    fill="lightblue"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center font-bold text-xl">
              AI Performance Optimization
            </div>
            <div className="w-fit h-fit mx-auto mb-6 text-center">
              {`We'll help you optimize your AI systems to improve performance and
              achieve better results.`}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">© 2023 Hooshaver. All rights reserved.</div>
    </main>
  );
}
