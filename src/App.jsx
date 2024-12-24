
import Footer from "./components/footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1e2336] overflow-hidden">
      <Header />
      {/* /* <div className="flex-1 flex-grow"> */}
        <Dashboard />
      {/* </div> */}
      
      <Footer /> 
    </div>
  )
}

export default App
