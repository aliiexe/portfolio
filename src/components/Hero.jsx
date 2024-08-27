import { useEffect, useState } from 'react';
import AliBourak from '../assets/images/alibourak.png';
import Confetti from 'react-confetti';
import { useTheme } from './ThemeContext.jsx';
import { FollowerPointerCard } from './FollowerPointerCard.jsx';
import CV from '../assets/pdf/Ali-Bourak-CV-Eng.pdf';
import { motion } from 'framer-motion';

import './styles.css'
import ae from '../assets/images/ae.png';
import ai from '../assets/images/ai.png';
import css from '../assets/images/css.png';
import figma from '../assets/images/figma.png';
import html from '../assets/images/html.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import laravel from '../assets/images/laravel.png';
import php from '../assets/images/php.png';
import ps from '../assets/images/ps.png';
import Mysql from '../assets/images/Mysql.png';
import SpringBoot from '../assets/images/springboot.png';
import angular from '../assets/images/angular.png';
import bitbucket from '../assets/images/bitbucket.png';
import nodejs from '../assets/images/nodejs.png';
import mongodb from '../assets/images/mongodb.png';
import python from '../assets/images/python.png';
import tailwind from '../assets/images/tailwind.png';
import git from '../assets/images/git.png';
import bootstrap from '../assets/images/bootstrap.png';

export default function Hero() {
    const { isDarkMode } = useTheme();
    const [showConfetti, setShowConfetti] = useState(false);

    const images = [
      ae,
      ai,
      css,
      figma,
      html,
      js,
      react,
      laravel,
      php,
      ps,
      Mysql,
      SpringBoot,
      angular,
      bitbucket,
      nodejs,
      mongodb,
      python,
      tailwind,
      git,
      bootstrap,
    ]
  
    useEffect(() => {
      const container = document.querySelector('.container');
      const clone =  container.innerHTML;
      container.innerHTML += clone;
    }, []);

    const handleDownload = () => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    };
  return (
    <div className="flex flex-col items-center mt-12">
      {showConfetti && (
        <Confetti
          gravity={0.2} 
          numberOfPieces={200}
          recycle={false}
        />
      )}
      <FollowerPointerCard title="Ali Bourak">
        <img src={AliBourak} alt="Profile Picture" className="mb-4 w-44 rounded-full shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-700" />
      </FollowerPointerCard>
      <div>
        <h1 className={`${isDarkMode? 'text-portfolio-200':'text-portfolio-900'} text-center text-m mb-2`}>
          Hey, I&apos;m Ali Bourak 👋
        </h1>
        <div className="relative h-11 overflow-hidden">
          <div className="absolute inset-0 animate-slide">
            <h1 className={`text-4xl font-bold text-center mb-2 ${isDarkMode? 'text-portfolio-200':'text-portfolio-900'}`}>Full-stack developer.</h1>
            <h1 className={`text-4xl font-bold text-center mt-4 ${isDarkMode? 'text-portfolio-200':'text-portfolio-900'}`}>Web designer.</h1>
          </div>
        </div>
        <p className='text-portfolio-300 text-center text-lg w-100 mt-4'>
          I&apos;m Ali Bourak, a full stack developer and web designer based in Morocco, Casablanca. I&apos;m passionate about crafting digital experiences that seamlessly blend functionality with aesthetics.
        </p>
      </div>
      <div className="flex gap-6 mt-5">
        <a href="https://x.com/a78bk6" target='_blank' className='w-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={`${isDarkMode?'#fff':'#000'}`} d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/ali-bourak" target='_blank' className='w-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={`${isDarkMode?'#fff':'#000'}`} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
        </a>
        <a href="https://github.com/aliiexe" target='_blank' className='w-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill={`${isDarkMode?'#fff':'#000'}`} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        </a>
        <a href="https://instagram.com/bourakalii" target='_blank' className='w-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={`${isDarkMode?'#fff':'#000'}`} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </div>
      <a href={CV} download="CV Ali Bourak.pdf" onClick={handleDownload}>
        <button className={`w-40 rounded-full h-10 border-portfolio-100 mt-5 ${isDarkMode ? 'bg-portfolio-300 text-portfolio-200 border-solid border-2 border-portfolio-700' : 'bg-portfolio-200 border-solid border-2 border-portfolio-100'}`}>Download CV</button>
      </a>
      <div className={`container-wrapper ${isDarkMode ? '' : ''}`}>
        <motion.div
          className="container"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}