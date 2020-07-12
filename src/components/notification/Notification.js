import React, { useState } from 'react';

const card = {
  position: 'absolute',
  width: 500,
  height: 300,
  backgroundColor: 'whitesmoke',
  borderRadius: 10,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,
};
const header = {
  width: '100%',
  height: 88,
};
const avatar = {
  width: 150,
  height: 150,
  borderRadius: '50%',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  boxShadow: '0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)',
};
const text = {
  textAlign: 'center',
};
const buttonArea = {
  display: 'flex',
  justifyContent: 'center',
};
const button = {
  margin: '0px 10px',
  padding: '2px 10px',
  border: '2px solid blue',
  borderRadius: 5,
  color: 'blue',
  cursor: 'pointer',
};
const info = {
  padding: 15,
  fontSize: 13,
};
const tan = {
  position: 'absolute',
  zIndex: 99,
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0% 0% / cover',
  width: '100%',
  height: '100vh',
};
const giff = {
  width: 150,
  height: 150,
  borderRadius: '50%',
};
export const Notification = () => {
  const [state, setState] = useState({ isVisible: false });

  const toggleNotification = () => {
    setState({ isVisible: !state.isVisible });
  };

  if (!state.isVisible) {
    return (
      <button type="submit" className="btn btn-primary m-1" onClick={toggleNotification}>
        Show Notification
      </button>
    );
  }

  return (
    <div style={tan}>
      <div style={card}>
        <div style={header}>
          <div style={avatar}>
            <img
              style={giff}
              alt=""
              src="https://cdn.discordapp.com/attachments/720545085640409091/731882326526656592/goodjob.gif"
            />
          </div>
          <button
            className="close"
            type="button"
            aria-label="Close"
            onClick={toggleNotification}
            style={{ margin: '0 7px' }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div style={text}>
          <div>
            <h6>Ура! На сегодня все</h6>
          </div>
          <div style={info}>
            <p>
              Есть еще новые карточки, но дневной лимит исчерпан. Вы можете увеличить лимит в
              настройках, но пожалуйста,имейте ввиду,что чем больше новых карточек вы посмотрите,
              тем больше вам нужно будет повторять в ближайшее время!
              <br />
              Для обучение сверх обычного расписания нажмите кнопку &quot;Учить еще&quot;.
            </p>
          </div>
        </div>
        <div style={buttonArea}>
          <div style={button}>Настройки</div>
          <div style={button}>Учить еще</div>
        </div>
      </div>
    </div>
  );
};
