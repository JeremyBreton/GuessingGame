import { useState } from 'react';
import './ModalLoose.scss';
import { openWinModal } from '../../../store/reducers/formReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import { openLooseModal } from '../../../store/reducers/formReducer';

function ModalLoose() {
  const dispatch = useDispatch();
  const modalOpenLoose = useSelector((state) => state.form.modalOpenLoose);
  const playertoWin = useAppSelector((state) => state.form.playertoWin);

  const toggleModal = () => {
    dispatch(openLooseModal()); // Utilisez l'action pour ouvrir la modal
  };

  return (
    <>
      {modalOpenLoose && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <p>Perdu !</p>
            <br />
            <p>Le joueur mystère est</p>
            <br />
            <h2>
              {playertoWin.player} ({playertoWin.team})
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalLoose;
