import { useState } from "react";
import BetSlip from "./BetSlip";
import Boxes from "./Boxes";
import Navbar from "./Navbar";
import GameHistory from "./GameHistory";
import GameModeTab from "./GameModeTab";
import Statistic from "./Statistic";

const Home = () => {
  const [betAmount, setBetAmount] = useState(100);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const initialBoxData = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    mine: (i + 1) % 5 === 0,
    showBox: true,
    win: false,
    roundEnd: false,
    isBombOpacityFull: false,
    isWinOpacityFull: false,
  }));
  const [boxData, setBoxData] = useState(initialBoxData);
  const isAtLeastOneBoxWin = boxData.some((box) => box.win);

  const handleChangeBetAmount = (type) => {
    if (type === "minus") {
      if (betAmount > 0 && betAmount <= 100) {
        setBetAmount((prev) => Math.max(prev - 10, 0));
      } else if (betAmount > 100 && betAmount <= 1000) {
        setBetAmount((prev) => Math.max(prev - 100, 0));
      } else if (betAmount > 1000) {
        setBetAmount((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (betAmount >= 0 && betAmount < 100) {
        setBetAmount((prev) => prev + 10);
      } else if (betAmount >= 100 && betAmount < 1000) {
        setBetAmount((prev) => prev + 100);
      } else if (betAmount >= 1000) {
        setBetAmount((prev) => prev + 500);
      }
    }
  };

  const handleStartGame = () => {
    setIsStartGame((prev) => !prev);
    setBoxData(initialBoxData);
  };

  const handleCashOut = async () => {
    const findBoxAndChange = boxData?.map((boxObj) => ({
      ...boxObj,
      win: boxObj?.mine ? false : boxObj.win,
      roundEnd: true,
      showBox: boxObj.mine ? false : boxObj.win ? false : true,
    }));

    setBoxData(findBoxAndChange);
    setIsStartGame(false);
    setShowWinModal(true);

    setTimeout(() => {
      setShowWinModal(false);
    }, 2000);

    setTimeout(() => {
      setBoxData(initialBoxData);
    }, 2500);
  };

  return (
    <div id="app" className="mines">
      <div id="post-message-size" className="game-wrapper demo">
        <Navbar />
        <div className="game-container">
          <GameHistory />
          <GameModeTab />
          <Boxes
            setShowWarning={setShowWarning}
            betAmount={betAmount}
            isStartGame={isStartGame}
            boxData={boxData}
            setBoxData={setBoxData}
            setIsStartGame={setIsStartGame}
            showWinModal={showWinModal}
          />
          <BetSlip
            betAmount={betAmount}
            handleCashOut={handleCashOut}
            handleChangeBetAmount={handleChangeBetAmount}
            handleStartGame={handleStartGame}
            isAtLeastOneBoxWin={isAtLeastOneBoxWin}
            isStartGame={isStartGame}
            setBetAmount={setBetAmount}
          />
          <Statistic />
        </div>
        <div className="messages">
          {showWarning && (
            <div className="messages">
              <div className="message _open _success">
                <div className="message__title">Please press Start Game</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="demo-label _demo" />
    </div>
  );
};

export default Home;
