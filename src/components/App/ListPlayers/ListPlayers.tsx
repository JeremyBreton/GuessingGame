import './ListPlayers.scss';

type ListPlayersProps = {
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

function ListPlayers({ players }: ListPlayersProps) {
  return (
    <div className="listPlayers-container">
      {players.map((player) => (
        <article key={player.playerId} className="listPlayers-container__card">
          <h2>{player.player}</h2>
          <p>{player.team}</p>
        </article>
      ))}
    </div>
  );
}

export default ListPlayers;
