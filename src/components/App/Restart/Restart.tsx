import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import './Restart.scss';
import players from '../../../data/players';
import { updatePlayerToWin } from '../../../store/reducers/formReducer';
import { useEffect, useState } from 'react';

function Restart() {
  const dispatch = useDispatch();
  const playertoWin = useAppSelector((state) => state.form.playertoWin);
  const buttonRestartDisplay = useAppSelector(
    (state) => state.form.buttonRestartDisplay
  );

  const handleClick = () => {
    dispatch(updatePlayerToWin(players));
  };

  return (
    <>
      {buttonRestartDisplay && (
        <div>
          <button id="buttonRestart" onClick={handleClick}>
            REJOUER
          </button>
          {/* <p>Le joueur à trouver est : {playertoWin.player}</p> */}
        </div>
      )}
    </>
  );
}

export default Restart;
