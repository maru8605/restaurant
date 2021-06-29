import './App.css';
import ImgBanner2 from './img/banner2.jpg'
import Header from './component/Header';
import Footer from './component/Footer';
import Place from './component/Place';
import Banner from './component/Banner';
import Menu from './component/Menu';
function App() {
  return (
    <div className="App">
     <Header/>
     <Place/>
     <Menu/>
     <Banner src={ImgBanner2}/>
     <Footer /> 
    </div>
  );
}

export default App;
