import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import CreateRoomModal from "./CreateRoomModal";
import SearchRoomModal from "./SearchRoomModal";
import { useNavigate } from "react-router-dom";

const LobbyModal = forwardRef(function LobbyModal({ socket, rooms }, ref) {
  const navigate = useNavigate(); // Add this line

  const lobbyModal = useRef();
  const createRoomModal = useRef();
  const searchRoomModal = useRef();
  const [displayedRooms, setDisplayedRooms] = useState([]);
  function handleOpenModal(nameDialog) {
    if (nameDialog === "createRoom") {
      console.log("createRoom");
      createRoomModal.current.open();
    } else if (nameDialog === "searchRoom") {
      searchRoomModal.current.open();
    }
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        lobbyModal.current.showModal();
      },
    };
  });

  useEffect(() => {
    if (rooms !== null) {
      setDisplayedRooms(rooms);
    }
  }, [rooms]);

  const handleJoinRoom = (roomCode) => {
    socket.emit("room-found", roomCode);
    socket.on("room-response", (data) => {
      if (data) {
        console.log("room found");
        navigate(`/room?inputValue=${roomCode}`);
      }
    });
  };

  return createPortal(
    <>
      <CreateRoomModal ref={createRoomModal} />
      <SearchRoomModal ref={searchRoomModal} socket={socket} />
      <dialog ref={lobbyModal} className="open_modal">
        <div className="modal__background close-modal">
          <div className="modal__frame box--shadow">
            <div className="modal__header">
              <div className="modal__lobby--title">
                <p className="modal__lobby--tille">L 0 B B Y</p>
              </div>
              <form method="dialog" className="box--shadow close__modal">
                <button>
                  <i className="fas fa-times close--icon"></i>
                </button>
              </form>
            </div>
            <div className="modal__lobby">
              <div className="modal__lobby--listroom box--shadow">
                <ul className="modal__listroom--header box--shadow">
                  <li className="modal__listroom--label">ID</li>
                  <li className="modal__listroom--label">Name</li>
                  <li className="modal__listroom--label">Quantity</li>
                  <li className="modal__listroom--label"></li>
                </ul>

                <ul className="modal__listroom box--shadow">
                  {displayedRooms.map((room, roomkey) => (
                    <li key={roomkey}>
                      <ul className="modal__listroom--room box--shadow">
                        <li className="modal__listroom--label">
                          {room.roomID}
                        </li>
                        <li className="modal__listroom--label">{room.name}</li>
                        <li className="modal__listroom--label">{`${room.roomMember.length}  / 4`}</li>
                        {room.roomMember.length < 4 ? (
                          <li className="modal__listroom--label modal__listroom--fn">
                            <button
                              className="modal__listroom--join box--shadow"
                              onClick={() => handleJoinRoom(room.roomID)}
                            >
                              <i className="fas fa-sign-in-alt"></i>
                            </button>
                          </li>
                        ) : (
                          <li className="modal__listroom--label modal__listroom--fn">
                            <button className="modal__listroom--join room--full  box--shadow">
                              <i className="fas fa-ban"></i>
                            </button>
                          </li>
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="modal__listroom--function box--shadow">
                <li>
                  <button
                    onClick={() => handleOpenModal("createRoom")}
                    className="create__room box--shadow"
                  >
                    Create Room
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOpenModal("searchRoom")}
                    className="find__room box--shadow"
                  >
                    Find room
                  </button>
                </li>
                <li className="start__animation">
                  <button className="start__now box--shadow">Start Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});

export default LobbyModal;
