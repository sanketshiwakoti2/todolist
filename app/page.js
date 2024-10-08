"use client";
import React, { useState } from "react";

const page = () => {
  const [time, settime] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { time, desc }]);
    settime("");
    setDesc("");
  };
  let renderTask =
    task.length == 0 ? (
      <tr>
        <td colSpan="2">No Task Available</td>
      </tr>
    ) : (
      task.map((t, i) => {
        return (
          <tr className="border-2 p-4" key={i}>
            <td className="p-4">{t.time}</td>
            <td className="p-4">{t.desc}</td>
            <td className="p-4">
              <button
                className="bg-red-500 rounded p-2 text-white"
                onClick={(i) => {
                  let temp=[...task]
                  temp.splice(i,1)
                  setTask(temp)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );

  return (
    <>
      <h1 className="bg-gray-800 text-white text-5xl p-4 text-center font-bold">
        My ToDo List
      </h1>
      <form className="p-10 text-center" onSubmit={submitHandler}>
        <input
          className="border-2 border-zinc-600 text-center rounded-2xl px-3 py-2 mx-3 my-2"
          placeholder="Enter time"
          value={time}
          onChange={(e) => {
            settime(e.target.value);
          }}
        />
        <input
          className="border-2 border-zinc-600 text-center rounded-2xl px-3 py-2 mx-3 my-2"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="bg-green-500 rounded-lg px-3 py-2 mx-3 font-bold"
          type="submit"
        >
          Add Task
        </button>
      </form>

      <hr />
      <div className="text-center border">
        <table className="border-2 border-collapse relative w-full">
          <thead className="relative">
            <tr>
              <th className="p-4">time</th>
              <th className="p-4">Description</th>
            </tr>
          </thead>
          <tbody className="relative">{renderTask}</tbody>
        </table>
      </div>
    </>
  );
};

export default page;
