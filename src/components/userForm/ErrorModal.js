import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";
import Helper from "../Helper/Helper";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onconfirm}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onconfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Helper>
      {ReactDOM.createPortal(
        <Backdrop onconfirm={props.onconfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onconfirm={props.onconfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Helper>
  );
};

export default ErrorModal;
