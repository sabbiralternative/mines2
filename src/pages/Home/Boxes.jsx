import { useState } from "react";
import { cn } from "../../utils/cn";
import WinModal from "./WinModal";

const Boxes = ({
  isStartGame,
  setIsStartGame,
  setBoxData,
  boxData,
  showWinModal,
  betAmount,
  setShowWarning,
}) => {
  const [loadingBoxId, setLoadingBoxId] = useState(null);

  const handleBoxClick = (box) => {
    if (isStartGame) {
      setLoadingBoxId(box.id);
      setTimeout(() => {
        setLoadingBoxId(null);
        if (box.mine) {
          const updatedBoxes = boxData?.map((boxObj) => ({
            ...boxObj,
            roundEnd: true,
            win: boxObj?.mine ? false : true,
            showBox: boxObj.mine ? false : boxObj.win ? false : true,
            isBombOpacityFull:
              boxObj.mine && box.id === boxObj.id ? true : false,
          }));
          setBoxData(updatedBoxes);
          setIsStartGame(false);
        } else {
          const updatedBoxes = boxData?.map((boxObj) =>
            box?.id === boxObj.id
              ? {
                  ...boxObj,
                  win: true,
                  showBox: false,
                  isWinOpacityFull: true,
                }
              : boxObj
          );
          setBoxData(updatedBoxes);
        }
      }, 300);
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
  };

  console.log(loadingBoxId);

  return (
    <div className="chart-wrapper">
      <div className="table-holder">
        {showWinModal && <WinModal betAmount={betAmount} />}

        <div className={cn("game-tiles", isStartGame && "_active")}>
          {boxData?.map((box) => {
            return (
              <div
                onClick={() => handleBoxClick(box)}
                key={box?.id}
                className={cn(
                  "game-tile",
                  box?.win && "_active _win",
                  loadingBoxId === box?.id && "_loading",
                  box?.roundEnd &&
                    box?.mine &&
                    box?.isBombOpacityFull &&
                    "_active _lose _opened !opacity-100",
                  box?.roundEnd &&
                    box?.mine &&
                    !box?.isBombOpacityFull &&
                    "_active _lose opacity-50",
                  box?.roundEnd && box?.isWinOpacityFull && box?.win
                    ? "opacity-100"
                    : "opacity-50"
                )}
              >
                <div className="game-tile__inner-possible-win">$1.08</div>
                <div className="game-tile__inner">
                  {box?.win && <div className="diamond"></div>}
                  {box?.roundEnd && box?.mine && (
                    <div
                      className="bomb"
                      style={{
                        backgroundImage: `url("/public/images/bomb_shadow.svg")`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
