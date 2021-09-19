import cross from "../../assets/icons/cross.svg";
import circle from "../../assets/icons/circle.svg";

import s from "./Square.module.scss";

const Square = ({handleClickSquare, value}) => {

  // const squareStyle = `${!value ? `${s.square}` : `${s.square}`}`;
  const playerIcon = value === "X" ? `${cross}` : value === "O" ? `${circle}` : "";

  return (
    <div className={s.square} onClick={() => handleClickSquare()}>
      <img className={s.square__img} src={playerIcon} alt={playerIcon}/>
    </div>
  );
};

export default Square;