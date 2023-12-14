import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const RankingModal = forwardRef(function RankingModal({},ref) {
    const rankingModal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                rankingModal.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={rankingModal} className="open_modal">
            <div className="modal__background">
                <div className="modal__frame box--shadow">
                    <div className="modal__header">
                        <div className="modal__background--title">
                            <p className="modal__header--tille">Ranking</p>
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

export default RankingModal;
