import React, { useState, useEffect } from "react";

export default function PlayerRoster({ memberScore, handleCorrectAnswer, displayInGame}) {
    return (
        <div className="player--roster">
            <ul className="rosters flex--col">
                {memberScore.map((member, memberIndex) => (
                    <li key={memberIndex} className="rosters--line flex--row">
                        <div className="roster-number box--shadow">
                            <p>{memberIndex + 1}</p>
                        </div>
                        <div className="roster box--shadow flex--row">
                            <div className="roster-avt flex--col">
                                <img src={member.avatar} alt="error" />
                            </div>
                            <div className="roster-information flex--col">
                                <p className="roster-name">{member.name}</p>
                                <p className="roster-score box--shadow">
                                    Score: {member.score}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* <button onClick={() => handleCorrectAnswer(userID.id)}>
                Đúng câu hỏi
            </button> */}
        </div>
    );
}
