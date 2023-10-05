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
  }[];
};

function PlayerToFind({ players }: PlayerToFindProps) {
  const PlayerToFind = players.find(
    (player) => (player.player = 'Aaron Gordon')
  );
  // console.log(PlayerToFind);

  return (
    <div className="PlayerToFind-container">
      <article className="PlayerToFind-container__card">
        <div className="PlayerToFind-container__card-span">
          NOM : {PlayerToFind?.player}
        </div>
        <div className="PlayerToFind-container__card-span">
          TEAM : {PlayerToFind?.team}
        </div>
        <div className="PlayerToFind-container__card-span">
          CONF : {PlayerToFind?.conference}
        </div>
        <div className="PlayerToFind-container__card-span">
          DIV : {PlayerToFind?.division}
        </div>
        <div className="PlayerToFind-container__card-span">
          POS : {PlayerToFind?.position}
        </div>
        <div className="PlayerToFind-container__card-span">
          TAILLE : {PlayerToFind?.height * 2.54}
        </div>
        <div className="PlayerToFind-container__card-span">
          AGE : {PlayerToFind?.age}
        </div>
        <div className="PlayerToFind-container__card-span">
          # : {PlayerToFind?.jersey}
        </div>
        <div className="PlayerToFind-container__card-span">
          TEAMS : {PlayerToFind?.teams}
        </div>
      </article>
    </div>
  );
}

export default PlayerToFind;
