import { useState } from "react";
import BetSlip from "./BetSlip";
import Boxes from "./Boxes";
import Navbar from "./Navbar";
import GameHistory from "./GameHistory";
import GameModeTab from "./GameModeTab";
import Statistic from "./Statistic";
import { generateRoundId } from "../../utils/generateRoundId";
import { useOrderMutation } from "../../redux/features/events/events";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/auth";

const Home = () => {
  const { mutate: handleAuth } = useAuth();
  const [addOrder] = useOrderMutation();
  const [minesCount, setMinesCount] = useState(1);
  const [betAmount, setBetAmount] = useState(100);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const initialBoxData = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    id: i + 1,
    win: false,
    roundEnd: false,
    isOpacityFull: false,
  }));
  const [boxData, setBoxData] = useState(initialBoxData);
  const isAtLeastOneBoxWin = boxData.some((box) => box.win);
  const activeBoxCount = boxData.filter((box) => box.win).length;

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

  const handleStartGame = async () => {
    if (betAmount) {
      setBoxData(initialBoxData);
      setSelectedBoxes([]);
      const round_id = generateRoundId();
      sessionStorage.removeItem("round_id");
      sessionStorage.setItem("round_id", round_id);
      const payload = [
        {
          eventId: 20002,
          eventName: "Mines",
          isback: 0,
          stake: betAmount,
          type: "bet",
          mines_count: minesCount,
          round_id,
        },
      ];
      const res = await addOrder(payload).unwrap();
      if (res?.success) {
        handleAuth();
        setIsStartGame(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        setIsStartGame(false);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  const handleCashOut = async () => {
    const round_id = sessionStorage.getItem("round_id");
    const payload = [
      {
        round_id: Number(round_id),
        type: "cashout",
        box_count: activeBoxCount,
        eventId: 20002,
        selected_tiles: selectedBoxes,
      },
    ];

    const res = await addOrder(payload).unwrap();
    if (res?.success) {
      handleAuth();
      const findBoxAndChange = boxData?.map((boxObj, i) => ({
        ...boxObj,
        win: res?.all?.[i] === 1 ? true : false,
        mine: res?.all?.[i] === 0 ? true : false,
        roundEnd: true,
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
    }
  };

  return (
    <div id="app" className="mines">
      <div id="post-message-size" className="game-wrapper demo">
        <Navbar />
        <div className="game-container">
          <GameHistory />
          <GameModeTab />
          <Boxes
            setSelectedBoxes={setSelectedBoxes}
            selectedBoxes={selectedBoxes}
            addOrder={addOrder}
            activeBoxCount={activeBoxCount}
            setShowWarning={setShowWarning}
            betAmount={betAmount}
            isStartGame={isStartGame}
            boxData={boxData}
            setBoxData={setBoxData}
            setIsStartGame={setIsStartGame}
            showWinModal={showWinModal}
          />
          <BetSlip
            activeBoxCount={activeBoxCount}
            setMinesCount={setMinesCount}
            minesCount={minesCount}
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
