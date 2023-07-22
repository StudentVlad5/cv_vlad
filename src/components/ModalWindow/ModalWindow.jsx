import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { closeModalWindow } from "hooks/ModalWindow";
import ReactPlayer from 'react-player';
import {BackDrop, ItemContainer} from "./ModalWindow.styled";
import video from '../../images/movie/Comp 2.mp4';


export const ModalWindow = ({isPlaying, setPlaying}) => {


  function closeModal(e) {
        e.preventDefault();
        setPlaying(false);
        closeModalWindow(e);
    }

    return ReactDOM.createPortal(
        <BackDrop onClick={(e)=>closeModal(e)}>
          <ItemContainer
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{display:"flex", justifyContent:"center", alignItems:"start", margin:"20px 0"}}>
              <div className="player-wrapper">
                <ReactPlayer url={video} playing={isPlaying} controls  width="100%" height="100%" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} className="react-player"/>
                </div>
                <AiFillCloseCircle style={{width:"45px"}}
                  type="button"
                  onClick={(e)=>closeModal(e)}
                  aria-label="Close modal"
                >
              </AiFillCloseCircle>
            </div>
            </ItemContainer>
            </BackDrop>, 
    document.querySelector("#popup-root")
  );
}