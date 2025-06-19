
import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Slider from './components/Slider.js'
import data from "./Data/data.json"
import Offers from "./components/offers.jsx"
import Heading from "./components/Heading.js"
import StarProduct from "./components/Starproduct.jsx"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.jsx"
import HotAccessories from './components/HotAccessories.jsx';


function App() {
 
  return (
    <Router>
      <Prenavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

      <Routes>
       <Route exact path="/music">
       <Route element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
       </Route>
      </Routes>
      
      
      
    </Router>
  );

}

export default App;
