import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import './Restart.scss';
import players from '../../../data/players';
import { updatePlayerToWin } from '../../../store/reducers/formReducer';

function Restart() {
  const dispatch = useDispatch();
  const playertoWin = useAppSelector((state) => state.form.playertoWin);
  console.log('Coucou', playertoWin);

  const handleClick = () => {
    console.log('handleclick');
    dispatch(updatePlayerToWin(players));
    alert('Restart');
  };

  return (
    <div id="restart">
      <h2>Restart.tsx</h2>
      <button onClick={handleClick}>Restart</button>
      <p>Le joueur à trouver est : {playertoWin.player}</p>
      <p>Westbrook à le même AGE</p>
      <p>Seth Curry fait la même TAILLE et le même numéro</p>
    </div>
  );
}

export default Restart;
