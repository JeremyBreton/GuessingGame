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
          <div className="PlayerToFind-container__card-span player">
            NOM : {item.player}
          </div>
          <div className="PlayerToFind-container__card-span team">
            TEAM : {item.team} // OLD : {item.teams}
          </div>
          <div className="PlayerToFind-container__card-span conf">
            CONF : {item.conference}
          </div>
          <div className="PlayerToFind-container__card-span division">
            DIV : {item.division}
          </div>
          <div className="PlayerToFind-container__card-span position">
            POS : {item.position}
          </div>
          <div className="PlayerToFind-container__card-span height">
            TAILLE : {item.height * 2.54}
          </div>
          <div className="PlayerToFind-container__card-span age">
            AGE : {item.age}
          </div>
          <div className="PlayerToFind-container__card-span jersey">
            # : {item.jersey}
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlayerToFind;
