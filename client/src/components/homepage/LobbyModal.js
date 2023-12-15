import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import CreateRoomModal from "./CreateRoomModal";
import SearchRoomModal from "./SearchRoomModal";

const LobbyModal = forwardRef(function LobbyModal({}, ref) {
  const lobbyModal = useRef();
  const createRoomModal = useRef();
  const searchRoomModal = useRef();
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

  return createPortal(
    <>
      <CreateRoomModal ref={createRoomModal} />
      <SearchRoomModal ref={searchRoomModal} />
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
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <a href="/room">
                          <button className="modal__listroom--join box--shadow">
                            <i className="fas fa-sign-in-alt"></i>
                          </button>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join room--full  box--shadow">
                          <i className="fas fa-ban"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join room--full  box--shadow">
                          <i className="fas fa-ban"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join room--full  box--shadow">
                          <i className="fas fa-ban"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join room--full  box--shadow">
                          <i className="fas fa-ban"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join box--shadow">
                          <i className="fas fa-sign-in-alt"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="modal__listroom--room box--shadow">
                      <li className="modal__listroom--label">102</li>
                      <li className="modal__listroom--label">CowCow</li>
                      <li className="modal__listroom--label">4/5</li>
                      <li className="modal__listroom--label modal__listroom--fn">
                        <button className="modal__listroom--join room--full  box--shadow">
                          <i className="fas fa-ban"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
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
                    Search room
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
