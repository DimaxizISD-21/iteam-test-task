import Modal from "../Modal/Modal";

import style from "../Modal/Modal.module.scss";

const ModalGameTie = ({visible, restart}) => {
  return (
    <Modal visible={visible}>
      <h2 className={style.modal__title}>The game is Tie!</h2>
      <div className={style.modal__info__center}>
        <button
          className={`${style.modal__btn} ${style.btn__restart}`}
          onClick={() => restart()}>Restart Game
        </button>
      </div>
    </Modal>
  );
};

export default ModalGameTie;