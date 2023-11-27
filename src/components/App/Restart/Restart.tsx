import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import './Restart.scss';
import players from '../../../data/players';

function Restart() {
  const dispatch = useDispatch;
  const playertoWin = useAppSelector((state) => state.form.playertoWin);
  console.log('Coucou', playertoWin);

  const handleClick = () => {
    console.log('handleclick');
    alert('Restart');
  };

  return (
    <>
      <button onClick={handleClick}>Restart</button>
      <p>Le joueur à trouver est : {playertoWin.player}</p>
      <p>Westbrook à le même AGE</p>
      <p>Seth Curry fait la même TAILLE et le même numéro</p>
    </>
  );
}

export default Restart;
