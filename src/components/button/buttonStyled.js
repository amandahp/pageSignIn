import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

    
const useStyles = makeStyles({
    signIn: {
        color: 'blue',
        backgroundColor: '#A4C7A7',
        width: '225px',
        height: '56px',
        borderRadius: 0,
        "&:hover": {
        backgroundColor: "#A4C7A7 !important"
        }
    }
});

export default useStyles;