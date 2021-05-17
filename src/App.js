import ReturnToTop from './components/independent/ReturnToTop/ReturnToTop';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import './scss/global.scss';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ReturnToTop />
    </div>
  );
}

export default App;
