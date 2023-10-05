import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../src/hooks/redux';
import './Form.scss';
import {
  changeCurrentMessage,
  selectPlayer,
} from '../../../store/reducers/formReducer';

type FormProps = {
  players: {
    player: string;
    playerId: number;
    team: string;
    teamId: number;
    conference: string;
    division: string;
    age: number;
    position: string;
    jersey: number;
    height: number;
    teams: string;
  }[];
  filteredPlayers: {
    player: string;
    playerId: number;
    team: string;
    teamId: number;
    conference: string;
    division: string;
    age: number;
    position: string;
    jersey: number;
    height: number;
    teams: string;
  }[];
};

function Form({ players }: FormProps) {
  const dispatch = useDispatch();
  const currentMessage = useAppSelector((state) => state.form.currentMessage);
  const filteredPlayers = useAppSelector((state) => state.form.filteredPlayers);
  const selectedPlayer = useAppSelector((state) => state.form.selectedPlayers);
  // console.log(selectedPlayer);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('je tape une lettre');
    // je veux modifier la valeur de `currentMessage` dans mon state Redux
    // avec la saisie utilisateur
    dispatch(changeCurrentMessage(event.target.value));
  }

  function handleClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    player: any
  ) {
    console.log('je click sur un résultat');
    // je veux modifier la valeur de `selectPlayer` dans mon state Redux
    // avec le click de l'utilisateur.
    dispatch(selectPlayer(player));
  }

  return (
    <div>
      <div>Texte tapé et récupéré : {currentMessage}</div>
      <p>Nb joueurs filtrés : {filteredPlayers.length}</p>
      <p>Joueur sélectionné :</p>
      <form className="form">
        <input
          type="select"
          className="form-input"
          placeholder="Saisissez un joueur…"
          onChange={handleChange}
          value={currentMessage}
        />
        {currentMessage && (
          <div className="form-results">
            {filteredPlayers.map((playerFiltered) => (
              <li
                className="form-results-li"
                key={playerFiltered.playerId}
                onClick={(event) => handleClick(event, playerFiltered)}
              >
                {playerFiltered.player}
              </li>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
