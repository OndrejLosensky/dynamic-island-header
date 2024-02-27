import Data from "./components/data/Data"
import DynamicIsland from "./components/dynamic_island/DynamicIsland"
import ScrollProgress from "./components/scroll_progress/ScrollProgress"
import Footer from "./components/footer/Footer"
import logo from "./assets/dynamic_icon.png"
import Title from "./layouts/Title"
import SectionTitleHeading from "./layouts/SectionTitle"
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import scrolldown_light from "./assets/scroll_down_white.png"
import scrolldown_dark from "./assets/scroll_down_black.png"
import light from "./assets/light.png"
import dark from "./assets/dark.png"
import source_code from "./assets/src_code.png"
import Auth from "./auth/Auth"
//import screenshot_light from "./assets/screenshot1.png"
//import screenshot_dark from "./assets/screenshot2.png"


function App() {
  useEffect(() => {
    AOS.init({duration: "1200" });
  },[])

  const goToGithub = () => {
    window.open('https://github.com/OndrejLosensky/dynamic-island-header', '_blank');
  }

  const scrollToAnchor = () => {
    const element = document.getElementById('banner');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) 
            {
                setIsVisible(false);
            } else 
            {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isLight, setIsLight] = useState(true);

    const toggleTheme = () => {
      setIsLight(prevIsLight => !prevIsLight);
      const root = document.documentElement;
      root.classList.toggle('dark');
    };

    useEffect(() => {
      const handleKeyDown = (event) => {
        // combination of CTRL + CMD + T keys!!
        if (event.ctrlKey && event.metaKey && event.key === 't') {
          toggleTheme();
        } else if (event.ctrlKey && event.key === 'b') {
          console
          toggleTheme();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []); // Empty dependency array ensures the effect runs only once
    
  return (
    <section className="main-component">
      <ScrollProgress/>
      <div className="pt-4 sticky top-0 z-10 ">
        <DynamicIsland/>
      </div>

      <div className="w-full flex flex-row items-start justify-center text-center pt-48 pb-24 space-x-12">
        <div data-aos="fade-right" className="flex flex-col items-start text-left">
          <SectionTitleHeading title="Homepage"/>
          <Title heading="Dynamic Island Header"/>
          <p className="mt-6 homepage-paragraph">
            This app was made with React.js and TailwindCSS. <br /> 
            You can implement this to your website just by <br />
            importing the component from source code <br />
            <div className="pt-6 text-sm opacity-70">
              <span className="key bg-slate-400 py-1 px-2 rounded-md text-customWhite mr-1">CTRL</span>  +   
              <span className="key bg-slate-400 py-1 px-2 rounded-md text-customWhite ml-2 mr-1">CMD</span> + 
              <span className="key bg-slate-400 py-1 px-2 rounded-md text-customWhite ml-2">T</span> – toggle dark mode (for MacOS)
            </div>
            <div className="pt-6 text-sm opacity-70">
              <span className="key bg-slate-400 py-1 px-2 rounded-md text-customWhite mr-1">CTRL</span>  +   
              <span className="key bg-slate-400 py-1 px-2 rounded-md text-customWhite ml-2">B</span> – toggle dark mode (for Windows)
            </div>
          </p>
          <div className="flex flex-row">
            <button onClick={goToGithub} className="mt-4 px-4 py-2 bg-blue-500 flex flex-row rounded-lg text-md text-customWhite hover:-translate-y-1 hover:bg-blue-700 duration-300 ">
              <img src={source_code} alt="Icon" className="w-6 h-6 mr-2" />
              View source code
            </button>
            <button onClick={toggleTheme} className="toggle-btn px-4 py-2 mt-4 flex flex-row border-2 border-blue-500 rounded-lg ml-2 hover:-translate-y-1 duration-300">
              <img src={isLight ? light : dark} alt="Icon" className="w-6 h-6 mr-2" />
              <span className={isLight ? 'light-mode-text' : 'dark-mode-text'}>
                {isLight ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
              </span>
            </button>
          </div>
        </div>
        <img data-aos="fade-left" src={logo} alt="Icon" className="pb-12 h-[350px] w-[480px]" />
      </div>

      <div className="flex justify-center items-center h-16 pt-16">
        {isVisible && (
            <img src={isLight ? scrolldown_dark : scrolldown_light} alt="Icon" onClick={scrollToAnchor} className="w-[48px] h-[48px] cursor-pointer hover:-translate-y-1 duration-300" />
        )}
      </div>
          
      <div data-aos="fade-left" id="banner" className="pb-20 pt-32">
            <div className="div-bugs-section w-[100%] h-[250px] bg-slate-500"> 
                <h3 className="text-bugs-section text-center pt-12">annoying bugs</h3>
                <h1 className="heading-bugs-section text-center text-customWhite font-semibold text-4xl pt-0"> Common bugs</h1>
                <p className="paragraph-bugs-section text-center text-gray-400 font-thin text-xl pt-4">
                  <li> Login not working </li>
                  <li>Mobile / smaller devices view isnt done yet</li>
                  <li> Header displaying all elemenets when hovering away from browser  </li>
                </p>
                {/*<img src={isLight ? screenshot_light : screenshot_dark} className="mx-auto w-[600px] pt-8 rounded-2xl shadow-2xl" alt="Description" />*/}
            </div>
      </div>

      <div className="login-section pt-8 h-[400px] rounded-lg shadow-lg mx-auto flex flex-row">
        <div className="bg-slate-600 w-1/2">
          <h1> image</h1>
        </div>
        <div className="bg-slate-300 w-1/2">
          <Auth/>
        </div>
      </div>

      <div className="flex flex-col justify-center text-customBlack items-center h-auto pt-16 pb-16">
        <div id="data-anchor" className="grid grid-cols-1 gap-8">
          <div id="anchor1">
            <div data-aos="fade-left">
              <SectionTitleHeading title="Section 1"/>
              <h2 className="anchor-heading text-4xl text-left font-bold text-customBlack uppercase mb-4"> Anchor point</h2>
            </div>
            <Data />
            <Data />
            <Data />
            <Data />
            <Data />
            <Data />
          </div>
          
          <div id="anchor2">
            <div data-aos="fade-left">
              <SectionTitleHeading title="Section 2"/>
              <h2 className="anchor-heading uppercase mb-4 text-4xl text-left font-bold text-customBlack"> Anchor point</h2>
            </div>
            <Data />
            <Data />
            <Data />
            <Data />
          </div>

          <div id="anchor3">
            <div data-aos="fade-left">
              <SectionTitleHeading title="Section 3"/>
              <h2 className="anchor-heading uppercase mb-4 text-4xl text-left font-bold text-customBlack"> Anchor point</h2>
            </div>
            <Data />
            <Data />
            <Data />
            <Data />           
          </div>
        </div>
      </div>
  

      <div id="footer"> 
        <Footer/>
      </div>
    </section>
  )
}

export default App
