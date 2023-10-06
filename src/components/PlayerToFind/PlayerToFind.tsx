import { useAppSelector } from '../../../src/hooks/redux';
import { PlayerType } from '../../@types';
import './PlayerToFind.scss';

type PlayerToFindProps = {
  players: {
    player: string;
    playerId: number;
    team: string;
    teamId: number;
    conference: string;
    division: string;
    age: number;
    position: string;
    jersey: number;
    height: number;
    teams: string;
  };
  selectedPlayers: PlayerType[];
};

function PlayerToFind({ players, selectedPlayers }: PlayerToFindProps) {
  const selectedPlayer = useAppSelector((state) => state.form.selectedPlayers);
  // console.log(PlayerToFind);
  // console.log('LOG DE selectedPlayers', selectedPlayers); // undefined
  console.log('LOG DE selectedPlayer', selectedPlayer);

  return (
    <div className="PlayerToFind-container">
      {selectedPlayer.map((item) => (
        <article key={item.playerId} className="PlayerToFind-container__card">
          <div className="PlayerToFind-container__card-span">
            NOM : {item.player}
          </div>
          <div className="PlayerToFind-container__card-span">
            TEAM : {item.team} // OLD : {item.teams}
          </div>
          <div className="PlayerToFind-container__card-span">
            CONF : {item.conference}
          </div>
          <div className="PlayerToFind-container__card-span">
            DIV : {item.division}
          </div>
          <div className="PlayerToFind-container__card-span">
            POS : {item.position}
          </div>
          <div className="PlayerToFind-container__card-span">
            TAILLE : {item.height * 2.54}cm
          </div>
          <div className="PlayerToFind-container__card-span">
            AGE : {item.age}
          </div>
          <div className="PlayerToFind-container__card-span">
            # : {item.jersey}
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlayerToFind;
