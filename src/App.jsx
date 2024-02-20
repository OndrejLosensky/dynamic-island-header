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
import scrolldown from "./assets/scrolldown.png"
function App() {
  useEffect(() => {
    AOS.init({duration: "1000" });
  },[])

  const goToGithub = () => {
    window.open('https://github.com/OndrejLosensky/dynamic-island-header', '_blank');
  }

  const scrollToAnchor = () => {
    const element = document.getElementById('anchor1');
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

  return (
    <section className="bg-customBg">
      <ScrollProgress/>
      <div className="pt-4 sticky top-0 z-10 ">
        <DynamicIsland/>
      </div>

      <div className="w-full flex flex-row items-start justify-center text-center pt-48 pb-24 space-x-12">
        <div data-aos="fade-right" className="flex flex-col items-start text-left">
          <SectionTitleHeading title="Homepage"/>
          <Title heading="Dynamic Island Header"/>
          <p className="mt-6">This app was made with React.js and TailwindCSS. <br /> You can implement this to your website just by <br /> importing the component from source code</p>
          <button onClick={goToGithub} className="mt-4 px-4 py-2 bg-blue-500 rounded-lg text-md text-customWhite hover:-translate-y-1 hover:bg-blue-700 duration-300 ">View source code</button>
        </div>
        <img data-aos="fade-left" src={logo} alt="Icon" className="pb-12 h-[300px] w-[420px]" />
      </div>

      <div className="flex justify-center items-center h-16 pt-16">
        {isVisible && (
            <img src={scrolldown} alt="Icon" onClick={scrollToAnchor} className="w-[48px] h-[48px] cursor-pointer" />
        )}
      </div>


      <div className="flex flex-col justify-center text-customBlack items-center h-auto pt-16 pb-16">
        <div className="grid grid-cols-1 gap-8">
          <Data />
          <Data />
          <div>
            <SectionTitleHeading title="Section 1"/>
            <h2 className="text-4xl text-left font-bold text-customBlack" id="anchor1" style={{ scrollMarginTop: '120px' }}> Anchor point</h2>
          </div>
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <div>
            <SectionTitleHeading title="Section 2"/>
            <h2 className="text-4xl text-left font-bold text-customBlack" id="anchor2" style={{ scrollMarginTop: '120px' }}> Anchor point</h2>
          </div>
          <Data />
          <Data />
          <Data />
          <Data />
          <div>
            <SectionTitleHeading title="Section 3"/>
            <h2 className="text-4xl text-left font-bold text-customBlack" id="anchor3" style={{ scrollMarginTop: '120px' }}> Anchor point</h2>
          </div>
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
      </div>

      <div id="footer"> 
        <Footer/>
      </div>
    </section>
  )
}

export default App
