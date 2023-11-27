import { createReducer, createAction } from '@reduxjs/toolkit';
import players from '../../data/players';
import { PlayerType } from '../../@types';

type FormState = {
  players: PlayerType[];
  currentMessage: string;
  filteredPlayers: PlayerType[];
  selectedPlayers: PlayerType[];
  playertoWin: string;
};

const initialState: FormState = {
  players: [
    {
      player: 'Aaron Gordon',
      playerId: 203932,
      team: 'DEN',
      teamId: 1610612743,
      conference: 'west',
      division: 'northwest',
      age: 26,
      position: 'F',
      jersey: 50,
      height: 80,
      teams: 'DEN.ORL',
    },
  ],
  currentMessage: '',
  filteredPlayers: [],
  selectedPlayers: [],
  playertoWin: {
    player: 'Stephen Curry',
    playerId: 201939,
    team: 'GSW',
    teamId: 1610612744,
    conference: 'west',
    division: 'pacific',
    age: 33,
    position: 'G',
    jersey: 30,
    height: 74,
    teams: 'GSW',
    isWinning: false,
    isGood: false,
    isNear: false,
  },
};

// Actions
export const changeCurrentMessage = createAction<string>(
  'form/change-current-message'
);
export const selectPlayer = createAction<PlayerType>('form/select-player');

const FormReducer = createReducer(initialState, (builder) => {
  const playertoWin = {
    player: 'Stephen Curry',
    playerId: 201939,
    team: 'GSW',
    teamId: 1610612744,
    conference: 'West',
    division: 'Pacific',
    age: 33,
    position: 'G',
    jersey: 30,
    height: 74,
    teams: 'GSW',
    isWinning: false,
    isGood: false,
    isNear: false,
  };

  // const playertoWin = getRandomPlayer(players);

  builder
    .addCase(changeCurrentMessage, (state, action) => {
      state.currentMessage = action.payload;
      state.filteredPlayers = players.filter((player) =>
        player.player.toLowerCase().includes(action.payload.toLowerCase())
      );
    })

    .addCase(selectPlayer, (state, action) => {
      state.selectedPlayers.push({
        ...action.payload,
        // WIN
        isWinning: action.payload.player === playertoWin.player,
        // ! CONFERENCE = NE FONCTIONNE PAS
        isGoodConference: action.payload.conference === playertoWin.conference,
        // ! DIVISION = NE FONCTIONNE PAS
        isGoodDivision: action.payload.division === playertoWin.division,
        // POSITION
        isGoodPosition: action.payload.position === playertoWin.position,
        isNearPosition: action.payload.position.includes(playertoWin.position),
        // TEAM
        isGoodTeam: action.payload.team.includes(playertoWin.team),
        isNearTeam: action.payload.teams.includes(playertoWin.teams),
        // HEIGHT
        isGoodHeight: action.payload.height === playertoWin.height,
        isNearHeight: Math.abs(action.payload.height - playertoWin.height) <= 1,
        // JERSEY
        isGoodJersey: action.payload.jersey === playertoWin.jersey,
        isNearJersey: Math.abs(action.payload.jersey - playertoWin.jersey) <= 1,
        // AGE
        isGoodAge: action.payload.age === playertoWin.age,
        isNearAge: Math.abs(action.payload.age - playertoWin.age) <= 1,
      });
      state.currentMessage = '';

      console.log('LOG DE action.payload', action.payload);
      console.log('LOG DE playertoWin', playertoWin);

      if (action.payload.player === playertoWin.player) {
        playertoWin.isWinning = true; // Marquez le joueur gagnant
        alert(`YOU WIN, THE RIGHT ANSWER IS ${playertoWin.player}`);
      }
    });
});

export default FormReducer;
