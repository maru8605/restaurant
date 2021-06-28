import './App.css';
import ImgBanner from './img/banner2.jpg'
import Header from './component/Header';
import Footer from './component/Footer';
import Place from './component/Place';
import Banner from './component/Banner';
function App() {
  return (
    <div className="App">
     <Header/>
     <Place/>
     <Banner src={ImgBanner}/>
     <Footer /> 
    </div>
  );
}

export default App;
