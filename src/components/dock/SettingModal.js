import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const SettingModal = forwardRef(function SettingModal({},ref) {
    const settingModal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                settingModal.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={settingModal} className="open_modal">
            <div className="modal__background close-modal">
                <div className="modal__frame box--shadow">
                    <div className="modal__header">
                        <div className="modal__background--title">
                            <p className="modal__header--title">Setting</p>
                        </div>
                        <form method="dialog" className="box--shadow close__modal">
                            <button>
                                <i className="fas fa-times close--icon"></i>
                            </button>
                        </form>
                    </div>
                    <div className="modal box--shadow">
                        <a href="/">
                            <button>Exit</button>
                        </a>
                    </div>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default SettingModal;
