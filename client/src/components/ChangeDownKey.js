import "./SettingsStyle/settings.css";
import { useEffect, useState } from "react";
import selectImg from "./images/text_select.png";

function ChangeDownKey({ setToggleDown, keys, downKey, setDownKey, downKeyCode, setDownKeyCode}) {
    const [toggleKey, setToggleKey] = useState(false);

    useEffect(() => {
      function handleKeyDown(e) {
          e.preventDefault();
          setToggleKey(true);
          setTimeout(function(){
            setToggleKey(false);
          },100);
          setDownKey(e.key);
          setDownKeyCode(e.keyCode);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, []);
 
    function handleSelect() {
      fetch(`/settings/${keys.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          down_key: downKey,
          down_keyCode: downKeyCode,
        }),
      }).then((r) => {
        if(r.ok){
          setToggleDown(false);
        }else{
          r.json().then((err) => console.log(err));
        }
      });
    }
    
    return (
        <div className="change-main">
          <div className="change-container">
            <h2 className="change-title">
                Choose Key 
            </h2>
            <div className="change-body">
              <div className="key-container">
                <div className={toggleKey ? "key-down" : "key-up"}>
                  <h3>{downKey}</h3>
                </div>
              </div>
            </div>
            <div className="select-btn" onClick={handleSelect}>
              <img src={selectImg} alt="select" />
            </div>
          </div>
        </div>
      )
}

export default ChangeDownKey;