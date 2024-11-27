import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <h1 className="text-3xl font-bold underline bg-red-500">
            Hello world!
          </h1>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
