import { useDispatch } from "react-redux";
import { useState } from "react";
import { actionYP, actionYM } from "./features/action";
import "./ShopStyle/shop.css";
import axe from "./images/shopAxe.png";
import sword from "./images/shopSword.png";
import health from "./images/shopHealth.png";
import exit from "./images/shopExit.png";
import ShopPurchase from "./ShopPurchase";

function Shop({ setToggleShop }) {
    const [togglePurchase, setTogglePurchase] = useState(true);
    const [item, setItem] = useState();
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();
    var yP = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-y'));
    var yM = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--map-y'));

    function handleExit() {
        yP += 15;
        yM += 15;
        document.documentElement.style.setProperty('--player-y', yP);
        dispatch(actionYP(yP));
        document.documentElement.style.setProperty('--map-y', yM);
        dispatch(actionYM(yM));
        setToggleShop(false);
    }

    function handlePurchase(selected) {
        setTogglePurchase(false);
        if(selected === "health"){
            setAmount(10);
        }else if(selected === "sword"){
            setAmount(40);
        }else if(selected === "axe"){
            setAmount(50);
        }
        setItem(selected);
    }

    return(
        <div className="shop">
            
            <div className="shop-left">
                <div className="shop-exit">
                    <img src={exit} onClick={handleExit} alt="exit" />
                </div>
                
            </div>
            <div className="shop-right">
                <div className="shop-board-top">
                    <div className="shop-board-TL" onClick={() => handlePurchase("health")}>
                        <img src={health} alt="health" />
                    </div>
                    <div className="shop-board-TR">
                    </div>
                </div>
                <div className="shop-board-bottom">
                    <div className="shop-board-BL" onClick={() => handlePurchase("sword")}>
                        <img src={sword} alt="sword" />
                    </div>
                    <div className="shop-board-BR" onClick={() => handlePurchase("axe")}>
                        <img src={axe} alt="axe" />
                    </div>
                </div>
            </div>
            {togglePurchase ? 
                null 
            : 
                <ShopPurchase setTogglePurchase={setTogglePurchase} item={item} amount={amount} /> 
            }
        </div>
    )
}

export default Shop;