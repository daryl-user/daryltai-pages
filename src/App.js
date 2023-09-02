import './App.css';
import {useState} from "react";
import NavBar from './NavBar';
import About from "./pages/about";
import Works from "./pages/works";
import Progress from "./pages/in_progress";

function App() {

  const [page, setPage] = useState("about");

  function getPage() {
    switch(page) {
      case "about":
        return (<About setPage={setPage}></About>);
      
      case "works":
        return (<Progress/>)

      case "services":
        return (<Progress/>)

      case "blog":
        return (<Progress/>)

      case "contact":
        return (<Progress/>)
    }

    
  }
    
  return (
    <div className="App">
      <NavBar currentPage={page} setPage={setPage}/>
      {getPage()}
    </div>
  );
}

export default App;
