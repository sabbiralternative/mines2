const Statistic = () => {
  return (
    <div className="game-statistic">
      <div className="border" />
      <ul className="tabs">
        <li data-track="tab.all_bets" className="tabs__item _active">
          <div className="tabs__item-inner">
            <div className="text">All Bets</div>
          </div>
        </li>
        <li data-track="tab.top_bets" className="tabs__item">
          <div className="tabs__item-inner">
            <div className="text">Top bets</div>
          </div>
        </li>
        <li data-track="tab.my_bets" className="tabs__item">
          <div className="tabs__item-inner">
            <div className="text">My bets</div>
          </div>
        </li>
      </ul>
      <div className="content">
        <div className="tab-content">
          <div className="titles">
            <div className="titles__item">Game</div>
            <div className="titles__item">Multiplier</div>
            <div className="titles__item">Payout</div>
          </div>
          <div className="separator" />
          <div className="rows">
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _turbomines" />
                Turbomines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _crash" />
                Crash X
              </div>
              <div className="cell _fw500">1.12x</div>
              <div className="cell _fw600">$1.31</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _fruittowers" />
                Fruit Towers
              </div>
              <div className="cell _fw500">1.90x</div>
              <div className="cell _fw600">$1.34</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _dice" />
                Dice Twice
              </div>
              <div className="cell _fw500">1.95x</div>
              <div className="cell _fw600">$0.11</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _turboplinko" />
                Turboplinko
              </div>
              <div className="cell _fw500">0.74x</div>
              <div className="cell _fw600">$0.22</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _javelinx" />
                Javelin X
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _hilo" />
                Hi-lo
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _towers" />
                Towers
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _hilo" />
                Hi-lo
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _mines" />
                Mines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _turbomines" />
                Turbomines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">Tap on any bet to see details</div>
    </div>
  );
};

export default Statistic;
