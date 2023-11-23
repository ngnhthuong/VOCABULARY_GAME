import silverImg from "../../../../images/finance/gold.png"

export default function Gold() {
    return (
        <ul className="finance-area box--shadow flex--row">
            <li className="gold-img">
                <img src={silverImg} alt="" />
            </li>
            <li className="gold-number">
                99
            </li>
            <li className="gold-button box--shadow">
                <i className="fas fa-plus"></i>
            </li>
        </ul>
    )
}