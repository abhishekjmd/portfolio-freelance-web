
import Footer from "./components/footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#1e2336]">
      <Header />
      <div className="flex-grow">
        <Dashboard />
      </div>
      <Footer />
    </div>

  )
}

export default App
