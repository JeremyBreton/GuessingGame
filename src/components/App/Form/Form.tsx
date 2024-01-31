import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../src/hooks/redux';
import './Form.scss';
import {
  addPlayer,
  changeCurrentMessage,
  selectPlayer,
} from '../../../store/reducers/formReducer';
import { PlayerType } from '../../../@types';
import React from 'react';

type FormProps = {
  players: PlayerType[];
  filteredPlayers: PlayerType[];
  selectedPlayers: PlayerType[];
};

function Form({ players }: FormProps) {
  const dispatch = useDispatch();
  const currentMessage = useAppSelector((state) => state.form.currentMessage);
  const filteredPlayers = useAppSelector((state) => state.form.filteredPlayers);
  const selectedPlayer = useAppSelector((state) => state.form.selectedPlayers);
  // console.log(selectedPlayer);
  // Ajoutez un état pour suivre si les résultats sont ouverts ou fermés
  const [resultsOpen, setResultsOpen] = React.useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // console.log('je tape une lettre');
    // je veux modifier la valeur de `currentMessage` dans mon state Redux
    // avec la saisie utilisateur
    dispatch(changeCurrentMessage(event.target.value));
    // Ouvrez les résultats lorsqu'il y a du texte
    setResultsOpen(!!event.target.value);
  }

  function handleClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    player: any
  ) {
    // console.log('je click sur un résultat');
    // je veux modifier la valeur de `selectPlayer` dans mon state Redux
    // avec le click de l'utilisateur.
    dispatch(selectPlayer(player));
    // dispatch(addPlayer(selectedPlayer));
    // console.log('Player', selectedPlayer);
    // Fermez les résultats après avoir sélectionné un joueur
    setResultsOpen(false);
  }

  function handleCloseResults() {
    // Fermez les résultats lorsqu'on clique en dehors de la zone des résultats
    setResultsOpen(false);
  }

  React.useEffect(() => {
    // Ajoutez un écouteur d'événements pour fermer les résultats lors d'un clic en dehors du formulaire
    window.addEventListener('click', handleCloseResults);
    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener('click', handleCloseResults);
  }, []); // Utilisez un tableau vide pour garantir que cela ne s'exécute qu'une fois au montage

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Rechercher un joueur…"
          onChange={handleChange}
          value={currentMessage}
          onClick={(e) => {
            // Empêchez la propagation du clic pour éviter la fermeture immédiate des résultats
            e.stopPropagation();
          }}
        />
        {resultsOpen && currentMessage && (
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
