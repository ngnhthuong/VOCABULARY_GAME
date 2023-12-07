import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const BackpackModal = forwardRef(function BackpackModal({},ref) {
    const backpackModal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                backpackModal.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={backpackModal} className="open_modal">
            <div className="modal__background close-modal">
                <div className="modal__frame box--shadow">
                    <div className="modal__header">
                        <div className="modal__background--title">
                            <p className="modal__header--tille">Backpack</p>
                        </div>
                        <form method="dialog" className="box--shadow close__modal">
                            <button>
                                <i className="fas fa-times close--icon"></i>
                            </button>
                        </form>
                    </div>
                    <div className="modal box--shadow"></div>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default BackpackModal;
