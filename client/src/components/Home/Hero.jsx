import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    {
      name: "Microsoft",
      svg: (
        <svg viewBox="0 0 23 23" className="h-6 w-auto" fill="currentColor">
          <path fill="#f25022" d="M0 0h11v11H0z" />
          <path fill="#00a4ef" d="M12 0h11v11H12z" />
          <path fill="#7fba00" d="M0 12h11v11H0z" />
          <path fill="#ffb900" d="M12 12h11v11H12z" />
        </svg>
      ),
    },
    {
      name: "Google",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
    },
    {
      name: "Zomato",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="currentColor">
          <circle cx="12" cy="12" r="11" fill="#E23744" />
          <path
            fill="#FFFFFF"
            d="M9 6h1v12H9V6zm5 0h1v12h-1V6z"
          />
          <path
            fill="#FFFFFF"
            d="M7 9h10v1.5H7V9zm0 4.5h10v1.5H7v-1.5z"
          />
        </svg>
      ),
    },
    {
      name: "Meta",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="currentColor">
          <path
            fill="#0081FB"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      ),
    },
    {
      name: "Apple",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto" fill="currentColor">
          <path
            fill="#000000"
            d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <Link to="/">
            <img src={logo} alt="logo-image" className="h-11 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#features" className="hover:text-green-600 transition">
              Features
            </a>

            <a href="#cta" className="hover:text-green-600 transition">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
              hidden={user}
            >
              Get started
            </Link>
            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
              hidden={user}
            >
              Login
            </Link>
            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-green-500 ring ring-green-700 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#testimonials" className="text-white">
            Testimonials
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

          {/* Headline + CTA */}
          <div className="flex flex-col mt-10 items-center justify-center">
            <h1 className="items-center justify-center text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
              Land your dream job with{" "}
              <span className=" bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">
                AI-Powered{" "}
              </span>
              resume.
            </h1>
          </div>

          <p className="max-w-md text-center text-base my-7">
            Create, edit and download professional resume with AI-Powered
            assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link
              to="/app"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video size-5"
                aria-hidden="true"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              <span>Try demo</span>
            </button>
          </div>

          <p className="py-6 text-slate-600 mt-14">
            Trusted by leading brands, including
          </p>

          <div
            className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4 items-center"
            id="logo-container"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                title={logo.name}
              >
                <div className="flex-shrink-0">{logo.svg}</div>
                <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
