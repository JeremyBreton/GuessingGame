import { createReducer, createAction } from '@reduxjs/toolkit';
import players from '../../data/players';

type FormState = {
  messages: typeof players;
  currentMessage: string;
  filteredPlayers: [];
  selectedPlayers: {};
};

const initialState: FormState = {
  messages: [
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
    {
      player: 'Aaron Holiday',
      playerId: 1628988,
      team: 'PHX',
      teamId: 1610612756,
      conference: 'west',
      division: 'pacific',
      age: 25,
      position: 'G',
      jersey: 4,
      height: 72,
      teams: 'PHX.WAS.IND',
    },
  ],
  currentMessage: '',
  filteredPlayers: [],
  selectedPlayers: {},
};

// Actions
export const changeCurrentMessage = createAction<string>(
  'form/change-current-message'
);
export const selectPlayer = createAction('form/select-player');

const FormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentMessage, (state, action) => {
      state.currentMessage = action.payload;
      state.filteredPlayers = players.filter((player) =>
        player.player.toLowerCase().includes(action.payload.toLowerCase())
      );
    })

    .addCase(selectPlayer, (state, action) => {
      state.selectedPlayers = action.payload;
    });
  // .addCase(addMessage, (state) => {
  //   // je veux ajouter un message à mon tableau de messages
  //   const newMessage: Message = {
  //     id: 4,
  //     author: 'Super Chat',
  //     content: state.currentMessage,
  //   };
  //   // avec ImmerJS, je peux utiliser des fonctions _mutator_
  //   state.messages.push(newMessage);
  //   state.currentMessage = '';
  //   // sans ImmerJS c'est commme en dessous :
  //   // return {
  //   //   ...state,
  //   // //   messages: [...state.messages, newMessage],
  //   // };
  // })
});

export default FormReducer;
