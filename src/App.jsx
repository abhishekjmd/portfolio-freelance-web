
import Footer from "./components/footer";
import Header from "./components/Header";
import { GlobalProvider } from "./context/ContextProvider";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col w-full h-screen bg-[#1e2336] overflow-hidden">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App
