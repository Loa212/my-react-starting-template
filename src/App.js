import './theme/material-icons.css';
import hero from './assets/comingSoonHero.svg'; // Tell webpack this JS file uses this image


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from './components/Header';
import BackTopBtn from './components/BackTopBtn';
import Footer from './components/Footer';

function App() {
  document.title = 'Comandee'
  return (
    <Router>
      <div>
          
          <div>
              <Switch>

              <Route path='/'>
                <Header/>
                <>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
             <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={hero}></img>
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    LorisDev</h1>
                <p className="mb-8 leading-relaxed">
                    Coming soon
                </p>
                
            </div>
        </div>
    </section>

                </>
              </Route>

            </Switch>
          </div>


      <BackTopBtn/>

      <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
