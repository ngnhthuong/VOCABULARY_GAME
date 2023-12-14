import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SettingModal = forwardRef(function SettingModal({}, ref) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const settingModal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        settingModal.current.showModal();
      },
    };
  });
  const handleLogout = () => {
    localStorage.removeItem('player');
    window.location.href = "/";
  };
  return createPortal(
    <dialog ref={settingModal} className="open_modal">
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
              <button className="logout__btn box--shadow" onClick={handleLogout}>LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default SettingModal;
