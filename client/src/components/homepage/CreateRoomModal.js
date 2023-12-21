import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const CreateRoomModal = forwardRef(function CreateRoomModal({}, ref) {
  const createRoomModal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        createRoomModal.current.showModal();
      },
    };
  });
  function handleCreateRoom() {
    window.location.href = "/room";
  }
  return createPortal(
    <dialog ref={createRoomModal} className="open_modal">
      <div className="modal__background close-modal">
        <div className="modal__createroom--frame box--shadow">
          {/* <div className="header__modal-createroom">
            <p>CREATE ROOM</p>
          </div> */}
          <div className="body__modal-createroom box--shadow">
            <div className="message--createroom">
              <p>Do you want create room?</p>
            </div>
            <div className="body__modal--fn">
              <form
                method="dialog"
                className="box--shadow close__createroom--form"
              >
                <button className="cancel__createroom-btn box--shadow">
                  <i className="fas fa-times"></i>
                </button>
              </form>
              <button className="create__room-btn box--shadow-btn" onClick={handleCreateRoom}>
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

export default CreateRoomModal;
