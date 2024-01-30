import { createReducer, createAction } from '@reduxjs/toolkit';
import players from '../../data/players';
import { PlayerType } from '../../@types';

type FormState = {
  players: PlayerType[];
  currentMessage: string;
  filteredPlayers: PlayerType[];
  selectedPlayers: PlayerType[];
  playertoWin: PlayerType;
  modalOpen: boolean;
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
  playertoWin: [],
  // playertoWin: {
  //   player: 'Stephen Curry',
  //   playerId: 201939,
  //   team: 'GSW',
  //   teamId: 1610612744,
  //   conference: 'west',
  //   division: 'pacific',
  //   age: 33,
  //   position: 'G',
  //   jersey: 30,
  //   height: 74,
  //   teams: 'GSW',
  //   isWinning: false,
  //   isGood: false,
  //   isNear: false,
  // },
  modalOpen: false,
};

// !
const getRandomPlayer = (players: PlayerType[]): PlayerType => {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
};
// !

// Actions
export const changeCurrentMessage = createAction<string>(
  'form/change-current-message'
);
export const selectPlayer = createAction<PlayerType>('form/select-player');
// !
export const updatePlayerToWin = createAction('form/update-player-to-win');
export const openWinModal = createAction('form/open-win-modal');
// !

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
      const isPlayerAlreadySelected = state.selectedPlayers.some(
        (selectedPlayer) => selectedPlayer.player === action.payload.player
      );
      if (!isPlayerAlreadySelected && state.selectedPlayers.length < 8) {
        state.selectedPlayers.push({
          ...action.payload,
          // WIN
          isWinning: action.payload.player === state.playertoWin.player,
          // CONFERENCE
          isGoodConference:
            action.payload.conference === state.playertoWin.conference,
          // DIVISION
          isGoodDivision:
            action.payload.division === state.playertoWin.division,
          // POSITION
          isGoodPosition:
            action.payload.position === state.playertoWin.position,
          isNearPosition: action.payload.position.includes(
            state.playertoWin.position
          ),
          // TEAM
          isGoodTeam: action.payload.team.includes(state.playertoWin.team),
          isNearTeam: action.payload.teams.includes(state.playertoWin.teams),
          // HEIGHT
          isGoodHeight: action.payload.height === state.playertoWin.height,
          isNearHeight:
            Math.abs(action.payload.height - state.playertoWin.height) <= 1,
          // JERSEY
          isGoodJersey: action.payload.jersey === state.playertoWin.jersey,
          isNearJersey:
            Math.abs(action.payload.jersey - state.playertoWin.jersey) <= 1,
          // AGE
          isGoodAge: action.payload.age === state.playertoWin.age,
          isNearAge: Math.abs(action.payload.age - state.playertoWin.age) <= 1,
        });
        state.currentMessage = '';

        // console.log('LOG DE action.payload', action.payload);
        // console.log('LOG DE playertoWin', playertoWin);

        if (state.selectedPlayers.length === 8) {
          alert(`8/8 guess, perdu le joueur était ${state.playertoWin.player}`);
        }

        if (action.payload.player === state.playertoWin.player) {
          playertoWin.isWinning = true; // Marquez le joueur gagnant
          state.modalOpen = true;
          // alert(`YOU WIN, THE RIGHT ANSWER IS ${state.playertoWin.player}`);
        }
      } else if (isPlayerAlreadySelected) {
      }
    })
    // !
    .addCase(updatePlayerToWin, (state) => {
      state.playertoWin = getRandomPlayer(players);
      state.selectedPlayers = [];
    })
    .addCase(openWinModal, (state) => {
      // state.modalOpen = true;
      state.modalOpen = !state.modalOpen;
    });
  // !
});

export default FormReducer;
