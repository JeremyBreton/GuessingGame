import { useDispatch, useSelector } from 'react-redux';
import './Navbar.scss';
import { openHowToPlayModal } from '../../../store/reducers/formReducer';

function Navbar() {
  const dispatch = useDispatch();
  const modalHowToPlayOpen = useSelector(
    (state) => state.form.modalHowToPlayOpen
  );

  const toggleHowToPlayModal = () => {
    dispatch(openHowToPlayModal()); // Utilisez l'action pour ouvrir la modal
  };

  return (
    <div className="navbar">
      <button onClick={toggleHowToPlayModal}>Comment jouer ?</button>
    </div>
  );
}

export default Navbar;
