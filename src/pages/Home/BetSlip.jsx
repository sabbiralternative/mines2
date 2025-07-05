const BetSlip = ({
  betAmount,
  setBetAmount,
  handleChangeBetAmount,
  isStartGame,
  handleStartGame,
  isAtLeastOneBoxWin,
  handleCashOut,
}) => {
  return (
    <>
      <div className="game-betslip">
        {isAtLeastOneBoxWin && isStartGame ? (
          <div onClick={handleCashOut} className="game-betslip__buttons">
            <div className="btn-new _cashout">
              <div className="btn-bg _bg1"></div>
              <div className="btn-bg _bg11"></div>
              <div className="btn-new__border">
                <div className="btn-bg _bg2"></div>
                <div className="btn-bg _bg22"></div>
                <div className="btn-new__inner">
                  <div className="btn-bg _bg1"></div>
                  <div className="btn-bg _bg11"></div>
                  <div className="btn-new__text">
                    <div className="text-wrapper">
                      <div className="text">Cash Out</div>
                      <div className="_small">
                        <span className="_roboto">$108.00</span>
                      </div>
                    </div>
                    <div className="indicator _cashout"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : isStartGame ? (
          <div onClick={handleStartGame} className="game-betslip__buttons">
            <div className="btn-new _cancel">
              <div className="btn-bg _bg1"></div>
              <div className="btn-bg _bg11"></div>
              <div className="btn-new__border">
                <div className="btn-bg _bg2"></div>
                <div className="btn-bg _bg22"></div>
                <div className="btn-new__inner">
                  <div className="btn-bg _bg1"></div>
                  <div className="btn-bg _bg11"></div>
                  <div className="btn-new__text">
                    <div className="text-wrapper">
                      <div className="text">Cancel</div>
                    </div>
                    <div className="indicator _cancel"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div onClick={handleStartGame} className="game-betslip__buttons">
            <div className="btn-new _placebet">
              <div className="btn-bg _bg1" />
              <div className="btn-bg _bg11" />
              <div className="btn-new__border">
                <div className="btn-bg _bg2" />
                <div className="btn-bg _bg22" />
                <div className="btn-new__inner">
                  <div className="btn-bg _bg1" />
                  <div className="btn-bg _bg11" />
                  <div className="btn-new__text">
                    <div className="text-wrapper">
                      <div className="text">Start Game</div>
                    </div>
                    <div className="indicator _placebet" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="input-text__wrapper">
          <div
            onClick={() => setBetAmount(100)}
            data-track="bet_1.min"
            className="input-button _sm"
          >
            <div className="input-button__text">min</div>
          </div>
          <div
            onClick={() => handleChangeBetAmount("minus")}
            data-track="bet_1.minus_1"
            className="input-button _sm"
          >
            <div className="input-button__text">-</div>
          </div>
          <div
            onClick={() => handleChangeBetAmount("plus")}
            data-track="bet_1.plus_1"
            className="input-button _sm"
          >
            <div className="input-button__text">+</div>
          </div>
          <div
            onClick={() => setBetAmount(10000)}
            data-track="bet_1.max"
            className="input-button _sm"
          >
            <div className="input-button__text">max</div>
          </div>
          <div className="games-input__wrapper">
            <label htmlFor="25e2cd39-c2d3-46ac-b64c-dbc2fc03a034">
              Bet Amount
              <span className="tooltip-box">
                i<span className="tooltip-hint">Max Profit $10000</span>
              </span>
            </label>
            <input
              type="text"
              inputMode="decimal"
              id="25e2cd39-c2d3-46ac-b64c-dbc2fc03a034"
              autoComplete="off"
              spellCheck="false"
              value={betAmount}
              className="games-input__number"
            />
          </div>
        </div>
        <div className="settings-input__wrapper _mines">
          <div className="settings-input__wrapper-inner">
            <div data-track className="button _sm">
              <div className="button__inner">
                <div className="button__text">3</div>
              </div>
            </div>
            <div data-track className="button _sm">
              <div className="button__inner">
                <div className="button__text">5</div>
              </div>
            </div>
            <div data-track className="button _sm">
              <div className="button__inner">
                <div className="button__text">10</div>
              </div>
            </div>
            <div data-track className="button _sm">
              <div className="button__inner">
                <div className="button__text">20</div>
              </div>
            </div>
            <div data-track className="button _sm _golden">
              <div className="button__inner">
                <div className="button__text">-</div>
              </div>
            </div>
            <div data-track className="button _sm _golden">
              <div className="button__inner">
                <div className="button__text">+</div>
              </div>
            </div>
            <div className="games-input__wrapper">
              <label htmlFor="mines">Mines</label>
              <input
                id="mines"
                name="mines"
                type="number"
                autoComplete="off"
                spellCheck="false"
                tabIndex={-1}
                className="games-input__number"
              />
            </div>
          </div>
        </div>
        <div className="game-details">
          <div className="game-details__inner">
            <div className="game-details__inner-container">
              <div className="game-details__title">Game details</div>
              <div className="game-details__row">
                <div className="game-details__row-icon _crystal" />
                <div className="game-details__row-text">Gems left</div>
                <div className="game-details__row-value">0</div>
              </div>
              <div className="game-details__row">
                <div className="game-details__row-icon _mine" />
                <div className="game-details__row-text">Mine risk:</div>
                <div className="game-details__row-value">0%</div>
              </div>
              <div className="game-details__row">
                <div className="game-details__row-icon _tiles" />
                <div className="game-details__row-text">Opened tiles</div>
                <div className="game-details__row-value">0/25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetSlip;
