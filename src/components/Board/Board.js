import {useCallback, useEffect, useState} from "react";
import Square from "../Square/Square";

import s from "./Board.module.scss";

const Board = ({squares, winPos, handleClickSquare}) => {

  const [crossedLineStyle, setCrossedLineStyle] = useState("");

  const checkCrossedLine = useCallback(() => {
    switch(winPos?.toString()) {
      case '0,1,2':
        setCrossedLineStyle(`${s.horizontalTop}`);
        break;
      case '3,4,5':
        setCrossedLineStyle(`${s.horizontalCenter}`);
        break;
      case '6,7,8':
        setCrossedLineStyle(`${s.horizontalBottom}`);
        break;
      case '0,3,6':
        setCrossedLineStyle(`${s.verticalLeft}`);
        break;
      case '1,4,7':
        setCrossedLineStyle(`${s.verticalCenter}`);
        break;
      case '2,5,8':
        setCrossedLineStyle(`${s.verticalRight}`);
        break;
      case '0,4,8':
        setCrossedLineStyle(`${s.diagonalFirst}`);
        break;
      case '2,4,6':
        setCrossedLineStyle(`${s.diagonalSecond}`);
        break;
      default:
        return;
    }
  }, [winPos]);

  useEffect(() => {
    checkCrossedLine();
  }, [checkCrossedLine]);

  return (
    <div className={s.board}>
      <div className={s.board__wrapper}>
        {squares.map((square, id) => (
          <Square key={id} value={square} handleClickSquare={() => handleClickSquare(id)}/>
        ))}
        {winPos && <div className={`${s.board__crossedLine} ${crossedLineStyle}`}/>}
      </div>
    </div>
  );
};

export default Board;