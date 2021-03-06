import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Courses from "./components/pages/Courses";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <>
            <Router>
                <NavigationBar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/courses' exact element={<Courses/>}/>
                    <Route path='/products' exact element={<Products/>}/>
                    <Route path='/sign-up' exact element={<SignUp/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
