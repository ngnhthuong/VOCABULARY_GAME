import { forwardRef, useImperativeHandle, useRef, useState} from "react";
import { createPortal } from "react-dom";
import { useNavigate } from 'react-router-dom';

const SearchRoomModal = forwardRef(function SearchRoomModal({socket}, ref) {
  const [inputValue, setInputValue] = useState('');
  const searchRoomModal = useRef();
  const navigate = useNavigate(); // Add this line

  useImperativeHandle(ref, () => {
    return {
      open() {
        searchRoomModal.current.showModal();
      },
    };
  });
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleJoinRoom = () => {
    socket.emit("room-found", inputValue);
    socket.on("room-response", (data) => {
      if(data){
        console.log("room found");
        navigate(`/room?inputValue=${inputValue}`); 
      } else {
        const errorExistRoom = document.querySelector(".dont__exist--room");
        errorExistRoom.textContent = "Room does not exist or full!";
      }
      });
  };
  return createPortal(
    <dialog ref={searchRoomModal} className="open_modal">
      <div className="modal__background close-modal">
        <div className="modal__findroom--frame box--shadow">
          <div className="modal__findroom--body">
            <input
              className="modal__findroom--input box--shadow"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Room ID"
            />
            <p className="dont__exist--room">Enter your room ID!</p>
            <div className="modal__findroom--btn">
              <form className="findroom__dialog--btn" method="dialog">
                <button className="findroom--btn box--shadow">
                  <i className="fas fa-times"></i>
                </button>
              </form>
              <button className="findroom--btn box--shadow" onClick={handleJoinRoom}>
                <i className="fas fa-sign-in-alt" ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});
export default SearchRoomModal;
