import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './button'


export default function ButtonStyled(props) {
  const classes = useStyles();
  const {children, buttonStyle, handleClick} = props;

  return (
    <Button
        onClick = {handleClick}
        classes={{
            root: classes[buttonStyle], // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
    >
      {children}
    </Button>
  );
}