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
    isWinning: boolean;
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
          <div
            className={`PlayerToFind-container__card-span player ${
              item.isWinning ? 'win' : ''
            }`}
          >
            NOM : {item.player}
          </div>
          <div
            className={`PlayerToFind-container__card-span team ${
              item.isWinning ? 'win' : ''
            }`}
          >
            TEAM : {item.team} // OLD : {item.teams}
          </div>
          <div
            className={`PlayerToFind-container__card-span conf ${
              item.isWinning ? 'win' : ''
            }`}
          >
            CONF : {item.conference}
          </div>
          <div
            className={`PlayerToFind-container__card-span division ${
              item.isWinning ? 'win' : ''
            }`}
          >
            DIV : {item.division}
          </div>
          <div
            className={`PlayerToFind-container__card-span position ${
              item.isWinning ? 'win' : ''
            }`}
          >
            POS : {item.position}
          </div>
          <div
            className={`PlayerToFind-container__card-span height ${
              item.isWinning ? 'win' : ''
            }`}
          >
            TAILLE : {item.height * 2.54}
          </div>
          <div
            className={`PlayerToFind-container__card-span age ${
              item.isWinning ? 'win' : ''
            }`}
          >
            AGE : {item.age}
          </div>
          <div
            className={`PlayerToFind-container__card-span jersey ${
              item.isWinning ? 'win' : ''
            }`}
          >
            # : {item.jersey}
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlayerToFind;
