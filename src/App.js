import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Pages/Main";
import {useState} from "react";
function App() {
    const [links] = useState([
        {component: "Main", path: "/"},
        ])

    return (
        <BrowserRouter className="App">
            <Header />
            <main>
                <Routes>
                    {links.map((el, index) => (
                        <Route key={index} path={el.path} element={<Main />} />
                    ))}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
