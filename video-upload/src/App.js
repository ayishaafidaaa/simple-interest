
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './pages/Landingpage';

function App() {
  return (

    <>

    <Header/>
    <div className="Container m-5">
      <Landingpage/>
      </div>
      <Footer/>

    </>
  );
}

export default App;
