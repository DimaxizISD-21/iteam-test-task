import s from "./Modal.module.scss";

const Modal = ({children, visible}) => {

  const modalRootStyles = [s.modal];
  if (visible) modalRootStyles.push(s.modal__active);

  return (
    <div className={modalRootStyles.join(" ")}>
      <div className={s.modal__wrapper}>
        {children}
      </div>
    </div>
  );
};

export default Modal;