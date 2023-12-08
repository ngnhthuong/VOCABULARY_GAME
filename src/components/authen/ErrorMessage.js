import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import '../modal.css';

const ErrorMessage = forwardRef(function ErrorMessage({ errorValue, errorHandler }, ref) {
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
        <dialog ref={errorMessage} id="effectModal" >
            <div className="modal-message ">
                <div className="modal-message__error box--shadow">
                    <div className="modal-message__title box--shadow">{errorValue.title}</div>
                    <div className="modal-message__text">{errorValue.message}</div>
                    <form method="dialog" className="modal-message__close">
                        <button onClick={errorHandler} className="modal-message__close--btn box--shadow">Again</button>
                    </form>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ErrorMessage;
