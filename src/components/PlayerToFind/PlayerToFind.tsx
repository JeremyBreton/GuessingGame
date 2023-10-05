import { useAppSelector } from '../../../src/hooks/redux';
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
};

function PlayerToFind({ players }: PlayerToFindProps) {
  const selectedPlayer = useAppSelector((state) => state.form.selectedPlayers);
  // console.log(PlayerToFind);

  return (
    <div className="PlayerToFind-container">
      <article className="PlayerToFind-container__card">
        <div className="PlayerToFind-container__card-span">
          NOM : {selectedPlayer.player}
        </div>
        <div className="PlayerToFind-container__card-span">
          TEAM : {selectedPlayer.team}
        </div>
        <div className="PlayerToFind-container__card-span">
          CONF : {selectedPlayer.conference}
        </div>
        <div className="PlayerToFind-container__card-span">
          DIV : {selectedPlayer.division}
        </div>
        <div className="PlayerToFind-container__card-span">
          POS : {selectedPlayer.position}
        </div>
        <div className="PlayerToFind-container__card-span">
          TAILLE : {selectedPlayer.height * 2.54}
        </div>
        <div className="PlayerToFind-container__card-span">
          AGE : {selectedPlayer.age}
        </div>
        <div className="PlayerToFind-container__card-span">
          # : {selectedPlayer.jersey}
        </div>
        <div className="PlayerToFind-container__card-span">
          TEAMS : {selectedPlayer.teams}
        </div>
      </article>
    </div>
  );
}

export default PlayerToFind;
