import Data from "./components/data/Data"
import DynamicIsland from "./components/dynamic_island/DynamicIsland"
import ScrollProgress from "./components/scroll_progress/ScrollProgress"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <section className="bg-blue-100">
      <ScrollProgress/>
      <div className="pt-4 sticky top-0 z-10 ">
        <DynamicIsland/>
      </div>

      <div className="flex flex-col justify-center items-center h-auto pt-16 pb-16">
        <h1 className="text-5xl font-bold py-6">Welcome </h1>
        <div className="grid grid-cols-1 gap-8">
          <Data />
          <Data />
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor1" style={{ scrollMarginTop: '90px' }}> Anchor link 1</h2>
          <Data />
          <Data />
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor2" style={{ scrollMarginTop: '90px' }}> Anchor link 2</h2>
          <Data />
          <Data />
          <h2 className="text-3xl text-center" id="anchor3" style={{ scrollMarginTop: '90px' }}> Anchor link 3</h2>
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
