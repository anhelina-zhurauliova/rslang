/* eslint react/prop-types: 0 */

import React from 'react';
import { useMedia } from 'react-media';

const GLOBAL_MEDIA_QUERIES = {
  small: '(max-width: 400px)',
  medium: '(min-width: 600px) and (max-width: 1199px)',
  large: '(min-width: 1200px)',
};

const myStyle = {
  textAlign: 'center',
  width: '100%',
  height: 300,
  margin: '40px 0',
};
const image = {
  maxWidth: 370,
};
const respnsiveImage = {
  width: 'calc(100% - 20px)',
};
const translate = {
  position: 'relative',
  width: 390,
  margin: '0 auto',
  marginTop: 20,
  fontSize: 23,
  height: 36,
  color: 'rgb(229,180,225)',
};
const responsiveText = {
  width: '90%',
};
const microphone = {
  width: 25,
  position: 'absolute',
  left: 0,
  bottom: 3,
};
const speechRecognition = {
  borderBottom: '1px solid white',
};

const PlayGround = ({ url, translation, transcript, listening }) => {
  const finalSentence = transcript.toString().split(' ');
  const result = finalSentence[Array.from(finalSentence).length - 1];
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  let imageStyle;
  let textStyle;
  if (matches.small) {
    imageStyle = respnsiveImage;
    textStyle = { ...translate, ...responsiveText };
  } else {
    imageStyle = image;
    textStyle = translate;
  }

  return (
    <div style={myStyle}>
      <img alt="" style={imageStyle} src={url} />
      {listening ? (
        <p style={{ ...translate, ...speechRecognition }}>
          <img
            alt=""
            style={microphone}
            src="https://image.flaticon.com/icons/svg/3142/3142073.svg"
          />
          {result}
        </p>
      ) : (
        <p style={textStyle}>{translation}</p>
      )}
    </div>
  );
};

export default PlayGround;
