
import { GlobalProvider } from "./context/ContextProvider";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col w-full h-screen bg-[#1e2336] overflow-hidden">
        <Dashboard />
      </div>
    </GlobalProvider>
  )
}

export default App
