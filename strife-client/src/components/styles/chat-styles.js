import { makeStyles } from '@material-ui/core';

const chatStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20vh',
    background: '#181818',
    // backgroundColor: '#2a2a72', backgroundImage: 'linear-gradient(115deg, #2a2a72 0%, #009ffd 74%)'
  },

  messageBoxContainer: {
    margin: '5px',
  },

  announcementMsg: {
    margin: '15px',
  },

  createMessageContainer: {
    marginTop: '10px',
    display: 'flex',
  },

  chatMenuContainer: {
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatMenuIcon: {
    margin: '2vh',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.1) translateY(-5px)',
    },
  },

  onlineUsersContainer: {
    marginBottom: '10px',
  },

  callContainer: {
    marginBottom: '10px',
  },

  callInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  callButtonsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  acceptCallBtn: {
    animation: `$shake 1s`,
    animationIterationCount: 'infinite',
  },

  '@keyframes shake': {
    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
    '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
    '60%': { transform: 'translate(-3px, 1px) rotate(1deg)' },
    '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
  },

  nonSelectable: {
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    'user-select': 'none',
  },

  expandOnHover: {
    transition: '1.5s',
    '&:hover': {
      transform: 'scale(1.1) translateY(-5px)',
    },
  },

  expandFastOnHover: {
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(2)',
    },
  },
});

export default chatStyles;
