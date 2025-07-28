import { BrowserRouter, Route, Routes } from "react-router-dom"
import FullStack from "./ProjectCard2/FullStack"
import WebDesigns from "./ProjectCard2/WebDesigns"
import WebThree from "./ProjectCard2/WebThree"
import ComponentDesigns from "./ProjectCard2/ComponentDesigns"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<FullStack />} />
            <Route path="/designs" element={<WebDesigns />} />
            <Route path="/web3" element={<WebThree />} />
            <Route path="/components" element={<ComponentDesigns />} />
        </Routes>
    )
}

export default RoutesComponent