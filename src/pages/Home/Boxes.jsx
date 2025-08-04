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
  activeBoxCount,
  addOrder,
  selectedBoxes,
  setSelectedBoxes,
}) => {
  const [loadingBoxId, setLoadingBoxId] = useState(null);

  const handleBoxClick = async (box) => {
    if (isStartGame) {
      setLoadingBoxId(box.id);

      const round_id = sessionStorage.getItem("round_id");
      const payload = [
        {
          round_id: Number(round_id),
          type: "select_box",
          box_id: box?.id,
          box_count: activeBoxCount,
          eventId: 20002,
          selected_tiles: [...selectedBoxes, box?.id],
        },
      ];
      const res = await addOrder(payload).unwrap();

      if (res.success) {
        setSelectedBoxes((prev) => [...prev, box?.id]);
        setLoadingBoxId(null);
        if (res?.gem === 0) {
          const updatedBoxes = boxData?.map((boxObj, i) => ({
            ...boxObj,
            roundEnd: true,
            mine: res?.all?.[i] === 0 ? true : false,
            isOpacityFull:
              res.gem === 0 && box.id === boxObj.id
                ? true
                : boxObj?.isOpacityFull,
            win: res?.all?.[i] === 0 ? false : true,
          }));
          setBoxData(updatedBoxes);
          setIsStartGame(false);
        } else {
          const updatedBoxes = boxData?.map((boxObj) =>
            box?.id === boxObj.id
              ? {
                  ...boxObj,
                  win: true,
                  isOpacityFull: true,
                }
              : boxObj
          );
          setBoxData(updatedBoxes);
        }
      }
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
  };

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
                  box?.roundEnd && box?.mine && "_active _lose",
                  // box?.roundEnd &&
                  //   box?.mine &&
                  //   box?.isOpacityFull &&
                  //   " _opened",

                  box?.isOpacityFull ? "opacity-100 " : "opacity-50"
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
