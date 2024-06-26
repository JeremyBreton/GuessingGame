import { useEffect, useState } from 'react';
import './ModalHowToPlay.scss';
import {
  openHowToPlayModal,
  openWinModal,
} from '../../../store/reducers/formReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';

function Modal() {
  const dispatch = useDispatch();
  const modalHowToPlayOpen = useSelector(
    (state) => state.form.modalHowToPlayOpen
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalHowToPlayOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [modalHowToPlayOpen]);

  const toggleHowToPlayModal = () => {
    dispatch(openHowToPlayModal()); // Utilisez l'action pour ouvrir la modal
  };

  return (
    <>
      {modalHowToPlayOpen && (
        <div className="modal-overlay-HTP" onClick={toggleHowToPlayModal}>
          <div className={`modal-content-HTP ${isOpen ? 'open' : ''}`}>
            <h2>Comment jouer ?</h2>
            <p>Vous avez 8 tentatives pour trouver le joueur mystère !</p>
            <br />
            <p>La couleur verte dans une colonne indique une correspondance</p>
            <br />
            <p>
              La couleur jaune dans la colonne équipe indique que le joueur a
              déjà joué dans la franchise, mais plus actuellement
            </p>
            <br />
            <p>
              La couleur jaune dans les colonnes taille, âge, numéro indiquent
              que le joueur est proche de ces chiffres
            </p>
            <br />
            <p>
              Un joueur avec FA dans son équipe est un joueur sans club (Free
              Agent)
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
