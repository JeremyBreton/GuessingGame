import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import players from '../../../data/players';
import { updatePlayerToWin } from '../../../store/reducers/formReducer';
import { useEffect, useState } from 'react';

function NewGame() {
  const dispatch = useDispatch();
  const playertoWin = useAppSelector((state) => state.form.playertoWin);
  const buttonRestartDisplay = useAppSelector(
    (state) => state.form.buttonRestartDisplay
  );

  useEffect(() => {
    dispatch(updatePlayerToWin(players));
  }, []);

  return <>{console.log('Le joueur à trouver est :', playertoWin.player)}</>;
}

export default NewGame;
