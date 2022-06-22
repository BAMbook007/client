import React from "react";
import classes from './MyInputRef.module.css';

const MyInputRef = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.MyInput}{...props}/>
  );
});


export default MyInputRef;