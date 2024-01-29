import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import './Restart.scss';
import players from '../../../data/players';
import { updatePlayerToWin } from '../../../store/reducers/formReducer';
import { useEffect } from 'react';

function Restart() {
  const dispatch = useDispatch();
  const playertoWin = useAppSelector((state) => state.form.playertoWin);
  // console.log('Coucou', playertoWin);

  useEffect(() => {
    dispatch(updatePlayerToWin(players));
  }, []);

  const handleClick = () => {
    // console.log('handleclick');
    dispatch(updatePlayerToWin(players));
  };

  return (
    <div>
      <button id="buttonRestart" onClick={handleClick}>
        Jouer !
      </button>
      {/* <p>Le joueur à trouver est : {playertoWin.player}</p> */}
      {console.log('Le joueur à trouver est :', playertoWin.player)}
    </div>
  );
}

export default Restart;
