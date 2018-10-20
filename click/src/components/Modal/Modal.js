//import React from "react";
import React from "react";
import "./Modal.css";

const Modal = (props) => {
    console.log(props)
    if (!props.show) {
        return null;
    }
    else {
        return (
            <div id="congratsmodal" class="modal">
                <div class="row justify-content-center">
                    <div class="modal-content col-11 col-sm-11 col-md-9 col-lg-6 col-xl-5">
                        <span class="close" onClick={(event) =>{ props.closeModal(event) }}>&times;</span>
                        <h3>Congratulations!</h3>
                        <p>You won the game! You can close this dialog box and play again.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;