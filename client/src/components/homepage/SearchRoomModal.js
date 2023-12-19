import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const SearchRoomModal = forwardRef(function SearchRoomModal(
  { socket, displayError, setDisplayError },
  ref
) {
  const [inputValue, setInputValue] = useState("");
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
    setDisplayError("Enter room ID");
    setInputValue(e.target.value);
  };

  const handleJoinRoom = () => {

    console.log(inputValue);
    socket.emit("room-found", inputValue);
    socket.on("room-response", (data) => {
      console.log(data.message);
      if (data.requestMessage) {
        navigate(`/room?inputValue=${inputValue}`);
      } else {
        setInputValue('');
        setDisplayError(data.message);
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
            <p className="dont__exist--room">{displayError}</p>
            <div className="modal__findroom--btn">
              <form className="findroom__dialog--btn" method="dialog">
                <button className="findroom--btn box--shadow">
                  <i className="fas fa-times"></i>
                </button>
              </form>
              <button
                className="findroom--btn box--shadow"
                onClick={handleJoinRoom}
              >
                <i className="fas fa-sign-in-alt"></i>
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
