import ReactDOM from "react-dom";
import {BackDrop, ItemContainer} from "./ModalWindow.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { closeModalWindow } from "hooks/ModalWindow";


export const ModalWindow = () => {

    function closeModal(e) {
        e.preventDefault();
        closeModalWindow(e);
      }

    return ReactDOM.createPortal(
        <BackDrop onClick={closeModal}>
          <ItemContainer
            onClick={(e) => e.stopPropagation()}
          >
            <AiFillCloseCircle
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
            >
            </AiFillCloseCircle>
            </ItemContainer>
            </BackDrop>, 
    document.querySelector("#popup-root")
  );
}