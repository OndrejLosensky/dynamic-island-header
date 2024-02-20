import Data from "./components/data/Data"
import DynamicIsland from "./components/dynamic_island/DynamicIsland"
import ScrollProgress from "./components/scroll_progress/ScrollProgress"
import Footer from "./components/footer/Footer"
import logo from "./assets/dynamic_icon.png"
import Title from "./layouts/Title"
import SectionTitleHeading from "./layouts/SectionTitle"

function App() {

  const goToGithub = () => {
    window.open('https://github.com/OndrejLosensky/dynamic-island-header', '_blank');
  }


  return (
    <section className="bg-customBg">
      <ScrollProgress/>
      <div className="pt-4 sticky top-0 z-10 ">
        <DynamicIsland/>
      </div>

      <div className="w-full flex flex-row items-start justify-center text-center pt-48 pb-24 space-x-12">
        <div className="flex flex-col items-start text-left">
          <SectionTitleHeading title="Homepage"/>
          <Title heading="Welcome"/>
          <p className="mt-6">This app was made with React.js and TailwindCSS. <br /> You can implement this to your website just by <br /> importing the component from source code</p>
          <button className="mt-6 px-4 py-2 bg-blue-500 rounded-lg text-xl text-customWhite hover:-translate-y-1 hover:bg-blue-700 duration-300 ">Source code</button>
        </div>
        <img src={logo} alt="Icon" className="pb-12 h-[300px] w-[420px]" />
      </div>


      <div className="flex flex-col justify-center text-customBlack items-center h-auto pt-16 pb-16">
        <div className="grid grid-cols-1 gap-8">
          <Data />
          <Data />
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor1" style={{ scrollMarginTop: '90px' }}> Section 1</h2>
          <Data />
          <Data />
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor2" style={{ scrollMarginTop: '90px' }}> Section 2</h2>
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor3" style={{ scrollMarginTop: '90px' }}> Section 3</h2>
          <Data />
          <Data />
          <Data />
          <Data />
        </div>
      </div>

      <Footer/>
    </section>
  )
}

export default App
