import React, { useState, useEffect } from "react";

import "./ingame.css"
import LobbyChat from "../lobby/LobbyChat.jsx";
import PlayerRoster from "./PlayerRoster.jsx";
import RanDomVocabulary from "./RanDomVocabulary.jsx";
import VocabularyPanel from "./VocabularyPanel.jsx";
export default function InGame({ userID, roomID, roomData, displayInGame }) {
    const [memberScore, setMemberScore] = useState([]);

    let vocabylary_panel = [
        ['hello', 'hello', 'hellohello22', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        ['hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
    ]

    useEffect(() => {
        if (roomData) {
            const initialMembers = roomData
                .filter((room) => room.id === roomID)
                .map((room) =>
                    room.member.map((member) => ({ ...member, score: 0 }))
                )
                .flat()
                .sort((a, b) => b.score - a.score);
            setMemberScore(initialMembers);
        }
    }, [roomData, roomID]);

    const handleCorrectAnswer = (memberId) => {
        const updatedMembers = memberScore.map((member) =>
            member.id === memberId ? { ...member, score: member.score + 10 } : member
        );
        const sortedMembers = [...updatedMembers].sort((a, b) => b.score - a.score);
        setMemberScore(sortedMembers);
    };
    let randomVocab = "hello";

    return (
        // ${displayInGame ? 'open' : 'close'}
        <div id="in-game" className={`flex--row ${displayInGame ? 'open' : 'close'}`}>
            <div className="right-ingame flex--col">
                <div className="ingame-random__vocabulary box--shadow">
                <RanDomVocabulary randomVocab = {randomVocab}/>
                </div>
                <div className="ingame-panel__vocabulary box--shadow">
                    < VocabularyPanel vocabylary_panel = {vocabylary_panel}/>
                </div>
            </div>
            <div className="left-ingame flex--col">
                <div className="ingame__roster box--shadow">
                    <PlayerRoster memberScore={memberScore} handleCorrectAnswer={handleCorrectAnswer} displayInGame={displayInGame} />
                </div>
                <div className="ingame__chat">
                    <LobbyChat playerChatName={userID.name} />
                </div>
                <div className="ingame__function box--shadow">
                    {/* <button onClick={() => handleCorrectAnswer(userID.id)}>
                        Đúng câu hỏi
                    </button> */}
                </div>
            </div>
        </div>
    )
}