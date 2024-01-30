import playersData from '../../data/players';

import OnePlayer from './OnePlayer/OnePlayer';
import ListPlayers from './ListPlayers/ListPlayers';
import './App.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import PlayerToFind from './PlayerToFind/PlayerToFind';
import Restart from './Restart/Restart';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <main>
        <Modal />
        <Restart />
        {/* <ListPlayers players={playersData} /> */}
        {/* <OnePlayer players={playersData} /> */}
        <Form />
        <PlayerToFind players={playersData} />
      </main>
    </div>
  );
}

export default App;
