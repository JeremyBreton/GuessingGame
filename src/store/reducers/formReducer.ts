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
    conference: 'west',
    division: 'pacific',
    age: 33,
    position: 'G',
    jersey: 30,
    height: 74,
    teams: 'GSW',
  };

  builder
    .addCase(changeCurrentMessage, (state, action) => {
      state.currentMessage = action.payload;
      state.filteredPlayers = players.filter((player) =>
        player.player.toLowerCase().includes(action.payload.toLowerCase())
      );
    })

    .addCase(selectPlayer, (state, action) => {
      state.selectedPlayers.push(action.payload);

      console.log('LOG DE action.payload', action.payload);
      console.log('LOG DE playertoWin', playertoWin);

      if (action.payload.player === playertoWin.player) {
        alert(`YOU WIN, THE PLAYER IS ${playertoWin.player}`);
      }
    });
});

export default FormReducer;
