import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
      <p className="bg-yellow-400 italic text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
        molestias quod quis expedita, eligendi dolorum deserunt ea corrupti,
        blanditiis minus ducimus cupiditate eveniet autem! Nam nihil qui
        necessitatibus voluptatum suscipit.
      </p>
      <Footer />
    </>
  );
}

export default App;
