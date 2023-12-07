import { useState, useRef } from "react";
import heroChartImg from '../../assets/images/docks/heroChart.png';
import storeImg from '../../assets/images/docks/store.png';

import backpackImg from '../../assets/images/docks/backpack.png';
import guildImg from '../../assets/images/docks/guild.png';
import friendImg from '../../assets/images/docks/friend.png';
import settingImg from '../../assets/images/docks/setting.png';

import SettingModal from "./SettingModal.jsx";
import RankingModal from "./RankingModal.jsx";
import StoreModal from "./StoreModal.jsx";
import BackpackModal from "./Backpack.jsx"
import './docks.css';

export default function Docks() {

    const settingModal = useRef();
    const rankingModal = useRef();
    const storeModal = useRef();
    const backpackModal = useRef();

    function handleStart(nameDialog) {
        if(nameDialog === 'setting'){
            settingModal.current.open();
        } else if(nameDialog === 'ranking'){
            rankingModal.current.open();
        }  else if(nameDialog === 'store'){
            storeModal.current.open();
        } else if(nameDialog === 'backpack'){
            backpackModal.current.open();
        }
    }

    return (
        <>
            <SettingModal ref={settingModal} />
            <RankingModal ref={rankingModal} />
            <StoreModal ref={storeModal} />
            <BackpackModal ref={backpackModal} />

            
            <ul className="docks box--shadow flex--row">
                <li onClick={()=>handleStart("ranking")} className="dock flex--col">
                    <img src={heroChartImg} alt="dock error" />
                    <p className="title-icon">Ranking</p>
                </li>
                <li onClick={()=>handleStart("store")} className="dock flex--col">
                    <img src={storeImg} alt="dock error" />
                    <p className="title-icon">Store</p>
                </li>
                <li onClick={()=>handleStart("backpack")} className="dock flex--col">
                    <img src={backpackImg} alt="dock error" />
                    <p className="title-icon">Backpack</p>
                </li>
                <li onClick = {()=>handleStart("setting")} className="dock flex--col">
                    <img src={settingImg} alt="dock error" />
                    <p className="title-icon">Setting</p>
                </li>
            </ul>
        </>
    )
}

{/* <li className="dock flex--col">
<img src={guildImg} alt="dock error" />
<p className="title-icon">Guild</p>
</li>
<li className="dock flex--col">
<img src={friendImg} alt="dock error" />
<p className="title-icon">Friends</p>
</li> */}