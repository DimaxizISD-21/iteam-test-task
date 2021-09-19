import s from "./Score.module.scss";

const Score = ({wins}) => {
  return (
    <div className={s.score}>
      <div className={s.score__title}>Score</div>
      <div className={s.score__player}>Player 1: {wins.player_1}</div>
      <div className={s.score__player}>Player 2: {wins.player_2}</div>
    </div>
  );
};

export default Score;