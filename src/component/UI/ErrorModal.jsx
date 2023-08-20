import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className="error-modal">
      <div
        className="backdrop-blur bg-white bg-opacity-30 fixed top-0 left-0 w-full h-full"
        onClick={props.onConfirm}
      ></div>
      <Card className="w-[36rem] p-0">
        <header className="bg-red-700 p-0 rounded-t-xl">
          <h2 className="text-center text-lg text-white p-2">
            {props.error.title}
          </h2>
        </header>
        <section className="p-4 ps-6">{props.error.message}</section>
        <footer className="p-2 flex justify-end">
          <Button className="w-32 border rounded-lg" onClick={props.onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;