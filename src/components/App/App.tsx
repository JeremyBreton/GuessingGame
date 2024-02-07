import playersData from '../../data/players';

import OnePlayer from './OnePlayer/OnePlayer';
import ListPlayers from './ListPlayers/ListPlayers';
import './App.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import PlayerToFind from './PlayerToFind/PlayerToFind';
import Restart from './Restart/Restart';
import ModalWin from './ModalWin/ModalWin';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import ModalHowToPlay from './ModalHowToPlay/ModalHowToPlay';
import NewGame from './NewGame/NewGame';
import ModalLoose from './ModalLoose/ModalLoose';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
        <Header />
      </header>
      <main>
        <NewGame />
        <ModalWin />
        <ModalLoose />
        <ModalHowToPlay />
        {/* <ListPlayers players={playersData} /> */}
        {/* <OnePlayer players={playersData} /> */}
        <Form />
        <PlayerToFind players={playersData} />
        <Restart />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
