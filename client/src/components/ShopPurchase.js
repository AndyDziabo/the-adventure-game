import { useDispatch, useSelector } from "react-redux";
import { updateHealthPacks, updateItem1, updateItem2, updateItem3, updateItem4, updateItem5, updateItem6 } from "./features/inventory";
import { gameCoins } from "./features/game";
import buyImg from "./images/text_buy.png";
import noImg from "./images/text_noThanks.png";
import okImg from "./images/text_ok.png";

import { useState } from "react";

function ShopPurchase({ setTogglePurchase, item, amount }) {
    let broke = false;
    let room = true;
    const coins = useSelector((state) => state.game.value.coins);
    const inventory = useSelector((state) => state.inventory.value);
    const dispatch = useDispatch();

    if(amount > coins){
        broke = true;
    }

    function handlePurchase() {
        let newCoins;
        if(item === "health"){
            let newHealthPacks = inventory.healthPacks + 1;
            newCoins = coins - amount;
            dispatch(updateHealthPacks(newHealthPacks));
            dispatch(gameCoins(newCoins));
        }else{
            if(inventory.item1.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem1(item));
                dispatch(gameCoins(newCoins));
            }else if(inventory.item2.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem2(item));
                dispatch(gameCoins(newCoins));
            }else if(inventory.item3.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem3(item));
                dispatch(gameCoins(newCoins));
            }else if(inventory.item4.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem4(item));
                dispatch(gameCoins(newCoins));
            }else if(inventory.item5.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem5(item));
                dispatch(gameCoins(newCoins));
            }else if(inventory.item6.id === 0){
                newCoins = coins - amount;
                dispatch(updateItem6(item));
                dispatch(gameCoins(newCoins));
            }else{
                room = false;
            }
        }
        setTogglePurchase(true)
    }

    return(
        <div className="shop-purchase">
            <div className="shop-purchase-container">
                {broke ?
                    <>
                        <h3>{`They're ${amount} coins, you don't have enough Bud!`}</h3>
                        <div className="shop-ok-btn" onClick={() => setTogglePurchase(true)}>
                            <img src={okImg} alt="ok" />
                        </div>
                    </>
                :
                    room ?
                        <>
                            <h3>{`The ${item} is ${amount} coins?`}</h3>
                            <div className="shop-buy-btn" onClick={handlePurchase}>
                                <img src={buyImg} alt="buy" />
                            </div>
                            <div className="shop-no-btn" onClick={() => setTogglePurchase(true)}>
                                <img src={noImg} alt="no" />
                            </div>
                        </>
                    :
                        <>
                            <h3>Not enough room, come back when you get rid of something.</h3>
                        </>
                }
            </div>
        </div>
    )
}

export default ShopPurchase;