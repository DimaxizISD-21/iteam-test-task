import Modal from "../Modal/Modal";

import style from "../Modal/Modal.module.scss";

const ModalChangePlayer = ({visible, setVisible, setCurrentPlayer}) => {

  const handleChangePlayer = (e) => {
    switch (e.target.id) {
      case "X":
        setCurrentPlayer(true);
        setVisible(false);
        break;
      case "O":
        setCurrentPlayer(false);
        setVisible(false);
        break;
      default:
        return;
    }
  };

  return (
    <Modal visible={visible}>
      <h2 className={style.modal__title}>Change player</h2>
      <div className={style.modal__info}>
        <button
          id="X"
          className={`${style.modal__btn} ${style.player}`}
          onClick={(e) => handleChangePlayer(e)}>Player - 1
        </button>
        <button
          id="O"
          className={`${style.modal__btn} ${style.player}`}
          onClick={(e) => handleChangePlayer(e)}>Player - 2
        </button>
      </div>
    </Modal>
  );
};

export default ModalChangePlayer;