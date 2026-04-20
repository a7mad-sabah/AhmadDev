import profile from "../assets/profile.png";
import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            It's me {configData.name}
          </h1>
          <p className="text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
            {configData.aboutDesc}
          </p>
          <img
            className="border rounded-md p-3 grayscale shadow-md"
            src="src/assets/profile.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="px-7 py-12">
          <h1 className="text-3xl font-semibold text-center mb-10">Skills</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* React */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="w-10 h-10"
                />
                <p className="font-medium">React</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>

            {/* Tailwind */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  className="w-10 h-10"
                />{" "}
                <p className="font-medium">Tailwind</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* PHP */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  className="w-10 h-10"
                />
                <p className="font-medium">PHP</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>

            {/* MySQL */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="w-10 h-10"
                />
                <p className="font-medium">MySQL</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>

            {/* Figma */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  className="w-10 h-10"
                />
                <p className="font-medium">Figma</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
            {/* GitHub */}
            <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex flex-col items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="w-10 h-10"
                />
                <p className="font-medium">GitHub</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visual appealing design
        </p>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
            <a href={configData.hireMeLink}>
              <button
                type="button"
                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                Hire Me
              </button>
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}
