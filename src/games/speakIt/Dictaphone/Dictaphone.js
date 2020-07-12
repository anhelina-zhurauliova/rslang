import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import WordList from "../WordsList/WordsList";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const options = {
  autoStart: false,
  continuous: true,
};


const Dictaphone = ({speech,setTranscript,setListening,words,setTranslation,setImage,setShowStatistics,setAnswered,answered,isRefresh,setIsRefresh,
                      transcript,
                      startListening,
                      stopListening,
                      listening,
                      recognition,
                      browserSupportsSpeechRecognition,resetTranscript,isClicked,setIsClicked
                    }) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  recognition.lang = 'en-US';
  recognition.interimResults = true;
  setListening(listening);
  setTranscript(transcript);



  return (
    <div>
      <WordList
        startListening={startListening}
        stopListening={stopListening}
        words={words}
        setTranslation={setTranslation}
        setImage={setImage}
        transcript={speech}
        listening={listening}
        setShowStatistics={setShowStatistics}
        setAnswered={setAnswered}
        answered={answered}
        isRefresh={isRefresh}
        setIsRefresh={setIsRefresh}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setTranscript={setTranscript}
        resetTranscript={resetTranscript}
      />
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(options)(Dictaphone);
