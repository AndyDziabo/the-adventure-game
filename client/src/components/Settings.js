import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ChangeUpKey from "./ChangeUpKey";
import ChangeDownKey from "./ChangeDownKey";
import ChangeLeftKey from "./ChangeLeftKey";
import ChangeRightKey from "./ChangeRightKey";
import ChangeAttackKey from "./ChangeAttackKey";
import mainMenuImg from "./images/text_mainMenu.png";
import upImg from "./images/text_up.png";
import downImg from "./images/text_down.png";
import leftImg from "./images/text_left.png";
import rightImg from "./images/text_right.png";
import attackImg from "./images/text_attack.png";
import changeImg from "./images/text_change.png";

function Settings({ keys }) {
    const [toggleUp, setToggleUp] = useState(false);
    const [toggleLeft, setToggleLeft] = useState(false);
    const [toggleRight, setToggleRight] = useState(false);
    const [toggleDown, setToggleDown] = useState(false);
    const [toggleAttack, setToggleAttack] = useState(false);
    const [upKey, setUpKey] = useState(keys.up_key);
    const [upKeyCode, setUpKeyCode] = useState(keys.up_keyCode);
    const [downKey, setDownKey] = useState(keys.down_key);
    const [downKeyCode, setDownKeyCode] = useState(keys.down_keyCode);
    const [leftKey, setLeftKey] = useState(keys.left_key);
    const [leftKeyCode, setLeftKeyCode] = useState(keys.left_keyCode);
    const [rightKey, setRightKey] = useState(keys.right_key);
    const [rightKeyCode, setRightKeyCode] = useState(keys.right_keyCode);
    const [attackKey, setAttackKey] = useState(keys.attack_key);
    const [attackKeyCode, setAttackKeyCode] = useState(keys.attack_keyCode);
    const [keyPressed, setKeyPressed] = useState({key: "", keyCode: 0});
  
    return(
        <div className="main-menu">
            <div>
                <h2>Settings</h2>
                <div>
                    <div>
                        <div className="upKey">
                            <img src={upImg} alt="up" />
                        </div>
                        <h3 className="upKey-text">{upKey}</h3>
                        <div className="upKey-image" onClick={() => setToggleUp(true)}>
                            <img src={changeImg} alt="change" />
                        </div>
                    </div>
                    <div>
                        <div className="downKey">
                            <img src={downImg} alt="down" />
                        </div>
                        <h3 className="upKey-text">{downKey}</h3>
                        <div className="upKey-image" onClick={() => setToggleDown(true)}>
                            <img src={changeImg} alt="change" />
                        </div>
                    </div>
                    <div>
                        <div className="leftKey">
                            <img src={leftImg} alt="left" />
                        </div>
                        <h3 className="upKey-text">{leftKey}</h3>
                        <div className="upKey-image" onClick={() => setToggleLeft(true)}>
                            <img src={changeImg} alt="change" />
                        </div>
                    </div>
                    <div>
                        <div className="rightKey">
                            <img src={rightImg} alt="right" />
                        </div>
                        <h3 className="upKey-text">{rightKey}</h3>
                        <div className="upKey-image" onClick={() => setToggleRight(true)}>
                            <img src={changeImg} alt="change" />
                        </div>
                    </div>
                    <div>
                        <div className="attackKey">
                            <img src={attackImg} alt="attack" />
                        </div>
                        <h3 className="upKey-text">{attackKey}</h3>
                        <div className="upKey-image" onClick={() => setToggleAttack(true)}>
                            <img src={changeImg} alt="change" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="setting-main-menu">
                <NavLink to="/" exact>
                    <img src={mainMenuImg} alt="main-menu" />
                </NavLink>
            </div>
            <div>
                {toggleUp ? <ChangeUpKey setToggleUp={setToggleUp} keys={keys} upKey={upKey} setUpKey={setUpKey} upKeyCode={upKeyCode} setUpKeyCode={setUpKeyCode} /> : null}
                {toggleDown ? <ChangeDownKey setToggleDown={setToggleDown} keys={keys} downKey={downKey} setDownKey={setDownKey} downKeyCode={downKeyCode} setDownKeyCode={setDownKeyCode} /> : null}
                {toggleLeft ? <ChangeLeftKey setToggleLeft={setToggleLeft} keys={keys} leftKey={leftKey} setLeftKey={setLeftKey} leftKeyCode={leftKeyCode} setLeftKeyCode={setLeftKeyCode} /> : null}
                {toggleRight ? <ChangeRightKey setToggleRight={setToggleRight} keys={keys} rightKey={rightKey} setRightKey={setRightKey} rightKeyCode={rightKeyCode} setRightKeyCode={setRightKeyCode} /> : null}
                {toggleAttack ? <ChangeAttackKey setToggleAttack={setToggleAttack} keys={keys} attackKey={attackKey} setAttackKey={setAttackKey} attackKeyCode={attackKeyCode} setAttackKeyCode={setAttackKeyCode} /> : null}
            </div>
            
        </div>
    )
}

export default Settings;