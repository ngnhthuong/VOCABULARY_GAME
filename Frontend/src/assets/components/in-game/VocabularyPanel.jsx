import React from "react";
export default function VocabularyPanel({ vocabylary_panel }) {
    return (
        <ul className="flex--col col--panel">
            {
                vocabylary_panel.map((col, colIndex) => (
                    <li key={colIndex} className="col-panel__child">
                        <ul className="flex--row row--panel">
                            {
                                col.map((row, rowIndex) => (
                                    <li key={rowIndex} className="row-panel__child">
                                        <button>{row}</button>
                                    </li>
                                    ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}