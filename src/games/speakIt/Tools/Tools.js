import React from 'react';
import Refresh from "./Refresh/Refresh";
import Results from "./Results/Results";
import StartGame from "./StartGame/StartGame";

const Tools = ({resetTranscript,setTranscript, recognition,startListening,stopListening,setImage,setTranslation,listening,isClicked,setIsClicked,setIsRefresh,setShowStatistics,setAnswered}) => {

  return (
    <>
      <Refresh resetTranscript={resetTranscript} setTranscript={setTranscript} recognition={recognition} stopListening={stopListening} setImage={setImage} setTranslation={setTranslation} setIsClicked={setIsClicked} setIsRefresh={setIsRefresh} setAnswered={setAnswered}/>
      <StartGame recognition={recognition} startListening={startListening} listening={listening}  setIsClicked={setIsClicked} />
      <Results resetTranscript={resetTranscript} setShowStatistics={setShowStatistics} />
    </>
  );
};

export default Tools;
