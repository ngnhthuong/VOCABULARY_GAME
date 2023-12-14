import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const StoreModal = forwardRef(function StoreModal({},ref) {
    const storeModal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                storeModal.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={storeModal} className="open_modal">
            <div className="modal__background close-modal">
                <div className="modal__frame box--shadow">
                    <div className="modal__header">
                        <div className="modal__background--title">
                            <p className="modal__header--tille">Store</p>
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

export default StoreModal;
