

import Gold from "./Gold";
import BuyGold from "./BuyGold";
import Silver from "./Silver";

export default function Finance() {
    return (
        <div id="finance" className="flex--row">
            <BuyGold/>
            <Silver/>
            <Gold/>
        </div>
    )
}