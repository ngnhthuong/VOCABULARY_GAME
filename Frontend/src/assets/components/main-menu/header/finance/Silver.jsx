import silverImg from "../../../../images/finance/silver.png"
export default function Silver() {
    return (
        <ul className="finance-area box--shadow flex--row">
            <li className="silver-img">
                <img src={silverImg} alt="" />
            </li>
            <li className="silver-number">
                9999999
            </li>
            <li className="silver-button box--shadow">
                <i className="fas fa-plus"></i>
            </li>
        </ul>
    )
}