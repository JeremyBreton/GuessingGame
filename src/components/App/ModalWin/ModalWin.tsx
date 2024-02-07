import { useState } from 'react';
import './ModalWin.scss';
import { openWinModal } from '../../../store/reducers/formReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';

function Modal() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.form.modalOpen);
  const playertoWin = useAppSelector((state) => state.form.playertoWin);

  // const [modal, setModal] = useState(false);

  const toggleModal = () => {
    // setModal(!modal);
    dispatch(openWinModal()); // Utilisez l'action pour ouvrir la modal
  };

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <p>Bien joué !</p>
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

export default Modal;
