const WinModal = ({ betAmount }) => {
  return (
    <div className="win-screen">
      <div className="win-screen__head">You win!</div>
      <div className="win-screen__content">
        <div
          className="win-screen__content-payout"
          style={{ fontSize: "23px" }}
        >
          {betAmount}
        </div>
        <div className="win-screen__content-footer">
          <div className="win-screen__content-text">Multiplier</div>
          <div className="win-screen__content-odd">x1.08</div>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
