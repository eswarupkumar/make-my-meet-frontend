import React, { useState } from "react";
import axios from "axios";

import "../css/create-poll.css";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [time, setTime] = useState([]);

  const createPoll = () => {
    console.log(question, time);
    const payload = {
      question: question,
      option: time,
    };

    axios({
      url: "http://localhost:5000/createPoll",
      method: "POST",
      data: payload,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addOption = () => {
    var input = document.createElement("input");
    var minusButton = document.createElement("button");
    minusButton.innerHTML = "Remove";
    input.setAttribute("type", "datetime-local");
    input.setAttribute("required", true);
    input.addEventListener("change", (e) => {
      setTime((rest) => [...rest, e.target.value]);
    });
    document.getElementById("options").appendChild(input);
    document.getElementById("options").appendChild(minusButton);
  };

  return (
    <div>
      <h1>Create Poll</h1>
      <div>
        <div>
          <label>Enter your question :</label>
          <input
            type="text"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Enter options:</label>
          <div className="optionInput">
            <input
              type="datetime-local"
              onChange={(e) => {
                setTime((rest) => [...rest, e.target.value]);
              }}
              required
            ></input>
            <input
              type="datetime-local"
              onChange={(e) => {
                setTime((rest) => [...rest, e.target.value]);
              }}
              required
            ></input>
            <div className="totalOptions">
              <div id="options"></div>
            </div>
          </div>
        </div>
        <div>
          <button type="button" onClick={addOption}>
            Add
          </button>
        </div>
        <div>
          <button type="submit" onClick={createPoll}>
            Submit
          </button>
        </div>
        <p>{time}</p>
      </div>
    </div>
  );
}
