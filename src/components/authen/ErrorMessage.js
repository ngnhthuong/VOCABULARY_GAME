import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const ErrorMessage = forwardRef(function ErrorMessage({errorValue}, ref) {
    const errorMessage = useRef();
    console.log(errorValue)
    useImperativeHandle(ref, () => {
        return {
            open() {
                errorMessage.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={errorMessage}>
            <div>{errorValue.title}</div>
            <div>{errorValue.message}</div>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ErrorMessage;
