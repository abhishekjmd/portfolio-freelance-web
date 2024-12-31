
import Footer from "./components/footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#1e2336] overflow-hidden">
      <Header />
        <Dashboard />
      <Footer />
    </div>
  )
}

export default App
