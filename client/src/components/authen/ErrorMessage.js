import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import '../modal.css';

const ErrorMessage = forwardRef(function ErrorMessage({ errorValue }, ref) {
    const errorMessage = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                errorMessage.current.showModal();
                errorMessage.current.classList.add("active");
            },
        };
    });

    return createPortal(
        <div id="effectModal" >
        <dialog ref={errorMessage}>
            <div className="modal-message box--shadow">
                <div className="modal-message__error box--shadow">
                    <div className="modal-message__title box--shadow">Warning</div>
                    <div className="modal-message__text">Your password or email Wrong!</div>
                    <form method="dialog" className="modal-message__close">
                        <button className="modal-message__close--btn box--shadow">Again</button>
                    </form>
                </div>
            </div>
        </dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default ErrorMessage;
