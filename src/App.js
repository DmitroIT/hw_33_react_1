import "./App.css";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Sidebar, Clear } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navigation />
        </header>

        <main className="main">
          <Sidebar />
          <Clear />
          <MainContent />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
