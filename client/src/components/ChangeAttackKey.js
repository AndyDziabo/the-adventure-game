import "./SettingsStyle/settings.css";
import { useEffect, useState } from "react";
import selectImg from "./images/text_select.png";

function ChangeAttackKey({ setToggleAttack, keys, attackKey, setAttackKey, attackKeyCode, setAttackKeyCode}) {
    const [toggleKey, setToggleKey] = useState(false);
    useEffect(() => {
      function handleKeyDown(e) {
          e.preventDefault();
          setToggleKey(true);
          setTimeout(function(){
            setToggleKey(false);
          },100);
          setAttackKey(e.key);
          setAttackKeyCode(e.keyCode);
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
            attack_key: attackKey,
            attack_keyCode: attackKeyCode,
        }),
      }).then((r) => {
        if(r.ok){
          setToggleAttack(false);
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
                  <h3>{attackKey}</h3>
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

export default ChangeAttackKey;