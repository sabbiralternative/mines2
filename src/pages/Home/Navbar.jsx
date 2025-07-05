import { useSelector } from "react-redux";
import { useSound } from "../../context/ApiProvider";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoMicSharp } from "react-icons/io5";

const Navbar = () => {
  const { sound, setSound } = useSound();
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);

  const handleSoundToggle = () => {
    if (sound) {
      sessionStorage.setItem("sound", false);
      setSound(false);
    } else {
      sessionStorage.removeItem("sound");
      setSound(true);
    }
  };
  return (
    <div className="game-header">
      <div data-track="back" className="game-header__back">
        {/* <i className="iconFont iconFont-angle-left" /> */}
        <MdKeyboardArrowLeft />
      </div>
      <div className="game-header__logo" />
      <div className="game-header__balance-title">Balance:</div>
      <div className="game-header__balance">
        <div data-track="balance" className="game-header__balance-text">
          <span>{balance}</span>
        </div>
        <div className="game-header__balance-delta">-1</div>
      </div>
      <div className="game-header__buttons">
        <div onClick={handleSoundToggle} className="game-header__button">
          <div className="game-header__button--inner undefined">
            {/* <i className="iconFont iconFont-sound" /> */}
            <IoMicSharp />
          </div>
        </div>
        <div data-track="settings" className="game-header__button">
          <div className="game-header__button--inner undefined">
            {/* <i className="iconFont iconFont-settings" /> */}
            <IoIosSettings />
          </div>
        </div>
      </div>
      <div className="settings-modal-mobile-wrapper">
        <div className="settings modal-light">
          <div className="settings__inner">
            <div className="settings__close">
              <i className="iconFont iconFont-close" />
            </div>
            <div className="settings__title">Settings</div>
            <div className="settings__content">
              <div className="settings-input">
                <div className="settings-input__inner">
                  <label htmlFor="name">Nickname</label>
                  <input autoComplete="off" type="text" />
                </div>
              </div>
              <div data-track="settings.limits" className="settings__link">
                <div className="settings__icon">
                  <i className="iconFont iconFont-limits" />
                </div>
                <div className="settings__name settings__item-name">Limits</div>
              </div>
              <div data-track="settings.rules" className="settings__link">
                <div className="settings__icon">
                  <i className="iconFont iconFont-rules" />
                </div>
                <div className="settings__name settings__item-name">Rules</div>
              </div>
              <span className="settings__item">
                <div className="settings__item-icon settings__icon">
                  <i className="iconFont iconFont-sound" />
                </div>
                <div className="settings__range">
                  <div className="range-slider _sound">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step="0.1"
                      className="range-slider__input"
                    />
                    <div className="range-slider__bg">
                      <div className="range-slider__bg-inner" />
                      <div
                        className="range-slider__active"
                        style={{ transform: "translateX(100%)" }}
                      />
                    </div>
                    <div
                      className="range-slider__btn-wrap"
                      style={{ transform: "translateX(0%)" }}
                    >
                      <div
                        className="range-slider__btn"
                        style={{ transform: "translateX(0%)" }}
                      />
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
