import React, { useRef, useState } from 'react';
import './init.css';
import user1IMG from '../../assets/images/player/user1.png';
import user2IMG from '../../assets/images/player/user2.png';
import user3IMG from '../../assets/images/player/user3.png';
import user4IMG from '../../assets/images/player/user4.png';
import user5IMG from '../../assets/images/player/user5.png';
import user6IMG from '../../assets/images/player/user6.png';
import user7IMG from '../../assets/images/player/user7.png';

export default function InitPlayer() {
    const avatar = useRef();
    const [selectedAvatar, setSelectedAvatar] = useState({
        name: null,
        avatar: user1IMG,
    });

    const handleAvatarClick = (image) => {
        setSelectedAvatar(image);
    };

    function submitClick(){
        window.location.href = './homepage';
    }
    console.log(selectedAvatar);
    return (
        <div className='init-form'>
            <div className='init-information'>
                <label>PLAYER NAME</label>
                <input className='init-name box--shadow' type="text"/>
                <button onClick={submitClick} className='init-btn box--shadow'>Create</button>
            </div>
            <ul className="init-avatar box--shadow">
                {[
                    user1IMG,
                    user2IMG,
                    user3IMG,
                    user4IMG,
                    user5IMG,
                    user6IMG,
                    user7IMG,
                ].map((image, index) => (
                    <li
                        key={index}
                        onClick={() => handleAvatarClick(image)}
                        className={`avatar box--shadow ${selectedAvatar === image ? 'selected flash' : ''}`}
                    >
                        <img src={image} alt={`avatar-${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
