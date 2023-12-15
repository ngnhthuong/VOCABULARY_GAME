import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const SearchRoomModal = forwardRef(function SearchRoomModal({}, ref) {
  const searchRoomModal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        searchRoomModal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={searchRoomModal} className="open_modal">
      <div className="modal__background close-modal">
        <div className="modal__setting--frame box--shadow">
          <div className="modal__setting--headers">
            <div className="modal__setting--header">
              <p>Setting</p>
            </div>
            <form className="modal__setting--header-close" method="dialog">
              <button className="box--shadow">
                <i className="fas fa-times close--icon"></i>
              </button>
            </form>
          </div>
          <div className="modal__setting--body">
            <div className="modal__setting--bottom">
              <button
                className="logout__btn box--shadow"
              >
                LOG OUT
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
