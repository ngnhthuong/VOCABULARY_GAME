import "./match.css";
import { useState } from "react";

const vocabGame = [
    ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
    ['Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen'],
    ['Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One'],
    ['Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight'],
    ['Twenty-Nine', 'Thirty', 'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five'],
    ['Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Forty', 'Forty-One', 'Forty-Two'],
    ['Forty-Three', 'Forty-Four', 'Forty-Five', 'Forty-Six', 'Forty-Seven', 'Forty-Eight', 'Forty-Nine']
]

export default function Gameboard() {
    const [activeTrue, setActiveTrue] = useState(false);
    function winnerPeople(){
        setActiveTrue(true);
    }
    return <div className="body-match">
        <ol className="col-match">
            {
                vocabGame.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="row-match">
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={winnerPeople} className="button-style shadow--box" id= {activeTrue ? 'active-user1' : undefined }>
                                        {col}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    </div>

}