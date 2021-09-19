import {useCallback, useEffect, useState} from 'react';
import Board from "../Board/Board";
import Score from "../Score/Score";
import ModalChangePlayer from "../UI/ModalChangePlayer/ModalChangePlayer";
import ModalGameTie from "../UI/ModalGameTie/ModalGameTie";
import ModalPlayerWin from "../UI/ModalPlayerWin/ModalPLayerWin";
import {calculateWinner} from "../../utils/calculateWinner";

import s from "./Game.module.scss";

const Game = () => {

  const [squares, setSquares] = useState([...Array(9).fill(null)]);
  const [countWins, setCountWins] = useState({player_1: 0, player_2: 0});
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [modalChangePlayerVisible, setChangePlayerVisible] = useState(true);
  const [modalPlayerWinVisible, setModalPlayerWinVisible] = useState(false);
  const [modalGameTieVisible, setModalGameTieVisible] = useState(false);
  const checkWinner = calculateWinner(squares);

  const handleClickSquare = (id) => {
    const copySquares = [...squares];
    if (checkWinner?.winner || copySquares[id]) return;
    copySquares[id] = currentPlayer ? "X" : "O";
    setCurrentPlayer(!currentPlayer);
    setSquares(copySquares);
  };

  const restartGame = () => {
    setSquares([...Array(9).fill(null)]);
    setModalPlayerWinVisible(false);
    setModalGameTieVisible(false);
    setChangePlayerVisible(true);
  };

  const countPlayersWins = useCallback(() => {
    switch (checkWinner?.winner) {
      case "X":
        setCountWins(prevState => ({...prevState, player_1: prevState.player_1 + 1}));
        setModalPlayerWinVisible(true);
        break;
      case "O":
        setCountWins(prevState => ({...prevState, player_2: prevState.player_2 + 1}));
        setModalPlayerWinVisible(true);
        break;
      default:
        return;
    }
  }, [checkWinner?.winner]);

  const checkGameTie = squares.every((val) => val !== null);

  useEffect(() => {
    countPlayersWins();
    if (checkGameTie) return setModalGameTieVisible(true);
  }, [countPlayersWins, checkGameTie]);

  return (
    <div className={s.gameWrapper}>
      <Board squares={squares} winPos={checkWinner?.winPos} handleClickSquare={handleClickSquare}/>
      <Score wins={countWins} />
      <ModalChangePlayer
        visible={modalChangePlayerVisible}
        setVisible={setChangePlayerVisible}
        setCurrentPlayer={setCurrentPlayer}
      />
      <ModalPlayerWin visible={modalPlayerWinVisible} currentPlayer={currentPlayer} restart={restartGame}/>
      <ModalGameTie visible={modalGameTieVisible} restart={restartGame}/>
    </div>
  );
};

export default Game;