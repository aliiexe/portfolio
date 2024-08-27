import { useTheme } from './ThemeContext.jsx';
import DarkLogo from "../assets/images/logo dark.png";
import LightLogo from "../assets/images/logo light.png";

export default function Navabar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex flex-row justify-evenly items-center mt-10">
        <img src={isDarkMode ? LightLogo : DarkLogo} alt="aliiexe logo" className={`${isDarkMode ? 'h-3/6' : 'h10'}`} />
        <div className="z-10 backdrop-blur-md flex justify-center items-center p-7 bg-transparent rounded-full h-14 border-solid border-2 border-portfolio-100/20 dark:text-white">
          <ul className={`flex gap-12 justify-center ${isDarkMode ? 'text-portfolio-200' : 'text-black'}`}>
            <li><a href="/">About</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <button onClick={toggleTheme} className="bg-white/20 p-4 rounded-full border-solid border-2 border-portfolio-100/20 w-15">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}