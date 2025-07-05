const GameModeTab = () => {
  return (
    <div className="game-mode-tabs">
      <div data-track="tab.manual" className="mode-btn active">
        <div className="mode-btn__inner">
          <div className="mode-btn__text">Manual</div>
          <div className="mode-btn__indicator" />
        </div>
      </div>
      <div data-track="tab.auto" className="mode-btn">
        <div className="mode-btn__inner">
          <div className="mode-btn__text">Auto</div>
          <div className="mode-btn__indicator" />
        </div>
      </div>
    </div>
  );
};

export default GameModeTab;
