import './OnePlayer.scss';

type OnePlayerProps = {
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

function OnePlayer({ players }: OnePlayerProps) {
  const PlayerToFind = players.find(
    (player) => (player.player = 'Aaron Gordon')
  );
  console.log(PlayerToFind);

  return (
    <div className="OnePlayer-container">
      <article className="OnePlayer-container__card">
        <div className="OnePlayer-container__card-span">
          NOM : {PlayerToFind?.player}
        </div>
        <div className="OnePlayer-container__card-span">
          TEAM : {PlayerToFind?.team}
        </div>
        <div className="OnePlayer-container__card-span">
          CONF : {PlayerToFind?.conference}
        </div>
        <div className="OnePlayer-container__card-span">
          DIV : {PlayerToFind?.division}
        </div>
        <div className="OnePlayer-container__card-span">
          POS : {PlayerToFind?.position}
        </div>
        <div className="OnePlayer-container__card-span">
          TAILLE : {PlayerToFind?.height * 2.54}
        </div>
        <div className="OnePlayer-container__card-span">
          AGE : {PlayerToFind?.age}
        </div>
        <div className="OnePlayer-container__card-span">
          # : {PlayerToFind?.jersey}
        </div>
        <div className="OnePlayer-container__card-span">
          TEAMS : {PlayerToFind?.teams}
        </div>
      </article>
    </div>
  );
}

export default OnePlayer;
