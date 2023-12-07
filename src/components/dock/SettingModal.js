import { forwardRef, useImperativeHandle, useRef } from "react";
const SettingModal = forwardRef(function SettingModal({},ref) {
    const settingModal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                settingModal.current.showModal();
            }
        }
    });
    return (
        <dialog ref={settingModal} className="open_modal">
            <div className="modal__background close-modal">
                <div className="modal__frame box--shadow">
                    <div className="modal__header">
                        <div className="modal__background--title">
                            <p className="modal__header--tille">Setting</p>
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
        </dialog>
    );
});

export default SettingModal;
