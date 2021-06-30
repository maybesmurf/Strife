import React from 'react';
import useStyles from '../../styles/chat-styles';
import { Typography } from '@material-ui/core';
import ChatMenu from './ChatMenu/ChatMenu.jsx';

export default function Header(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.headerContainer}>
                <Typography variant="h2" style={{ paddingTop: '20px', letterSpacing: '1px', fontFamily: "'Syncopate', sans-serif" }}>strife</Typography>
                {/* TODO: Add login/logout/control buttons under the header */}
                <ChatMenu requestFriendsList={props.requestFriendsList} />
            </div>
        </>
    );
}