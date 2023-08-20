import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddTask = (props) => {
  const { setTaskList } = props;
  const [subject, setSubject] = useState("");
  const [task, setTask] = useState("");
  const [error, setError] = useState();
  const addHandler = (e) => {
    e.preventDefault();
    if (subject.trim().length === 0) {
        setError({
            title: "Bu Alan Zorunludur!",
            message: "Lütfen bir konu giriniz."
          });
      return;
    }
    if (task.trim().length === 0) {
        setError({
            title: "Bu Alan Zorunludur!",
            message: "Lütfen bir görev giriniz."
          });
      return;
    }
    console.log(subject, task);
    const uniqueId = () => Math.floor(Math.random() * 1000);
    console.log(uniqueId());

    const newTaskList = (prevState) => [
      { id: uniqueId(), subject: subject, task: task },
      ...prevState,
    ];
    setTaskList(newTaskList);
    setSubject("");
    setTask("");
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
        {error && <ErrorModal onConfirm = {errorHandler}  error = {error}/>}
      <Card className="mt-10 p-12">
        <label htmlFor="subject">Konu</label>
        <input
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          id="subject"
          value={subject}
          placeholder="Konu Giriniz"
          className="mt-2 h-9 border rounded-md p-2"
        />
        <label htmlFor="task" className="mt-2">
          Görev
        </label>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          id="task"
          value={task}
          placeholder="Görev Giriniz"
          className="mt-2 h-9 border rounded-md p-2"
        />
        <div className="flex justify-center mt-4">
          <Button
            onClick={addHandler}
            className="mt-2 w-64 border rounded-md"
            type={"submit"}
          >
            Ekle
          </Button>
          <Button
            className="mt-2 w-64 border rounded-md bg-red-700 ml-4"
            type={"submit"}
            onClick={() => props.setIsOpen(false)}
          >
            Vazgeç
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddTask;
