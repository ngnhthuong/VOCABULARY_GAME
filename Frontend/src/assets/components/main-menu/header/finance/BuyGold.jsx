import buyGoldImg from "../../../../images/finance/buygold.png"

export default function BuyGold(){
    return (
        <ul className="finance-area buy-gold box--shadow flex--row">
            <li className="buy-gold__img">
                <img src={buyGoldImg} alt="buygold" />
            </li>
            <li className="buy-gold__title">BUY GOLD</li>
        </ul>
    )
}