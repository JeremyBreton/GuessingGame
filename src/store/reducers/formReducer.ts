import { createReducer, createAction } from '@reduxjs/toolkit';
import players from '../../data/players';
import { PlayerType } from '../../@types';

type FormState = {
  players: PlayerType[];
  currentMessage: string;
  filteredPlayers: PlayerType[];
  selectedPlayers: PlayerType[];
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
};

// Actions
export const changeCurrentMessage = createAction<string>(
  'form/change-current-message'
);
export const selectPlayer = createAction<PlayerType>('form/select-player');

const FormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentMessage, (state, action) => {
      state.currentMessage = action.payload;
      state.filteredPlayers = players.filter((player) =>
        player.player.toLowerCase().includes(action.payload.toLowerCase())
      );
    })

    .addCase(selectPlayer, (state, action) => {
      // state.selectedPlayers = [action.payload];
      state.selectedPlayers.push(action.payload);
    });
});

export default FormReducer;
