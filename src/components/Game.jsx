import React, { useEffect, useRef, useState } from "react";
import "./Game.scss";

{
  /*choices 👊✌🤚 */
}
export const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [cpuChoice, setCpuChoice] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [result, setResult] = useState("Result will appear here");

  const choices = ["👊", "🤚", "✌"];

  // function winner() {

  // }
  function handleChoiceClick(choice) {
    const rndIndex = Math.floor(Math.random() * choices.length);
    const randomCpuChoice = choices[rndIndex];
    setPlayerChoice(choice);
    setCpuChoice(randomCpuChoice);
  }

  useEffect(() => {
    if (playerChoice === cpuChoice) setResult("Draw");
    else if (
      (playerChoice === "👊" && cpuChoice === "✌") ||
      (playerChoice === "✌" && cpuChoice === "🤚") ||
      (playerChoice === "🤚" && cpuChoice === "👊")
    ) {
      setResult("Player Won");
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setResult("Cpu Won");
      setCpuScore((prevScore) => prevScore + 1);
    }
  }, [playerChoice, cpuChoice]);

  return (
    <div className="game-div">
      <h1>Rock Paper Scissors</h1>

      <p>{result}</p>
      <div className="game-field">
        <div className="scenario">
          <p>Player: {playerScore}</p>
          <div className="choice-container">{playerChoice}</div>
          <p>CPU: {cpuScore}</p>
          <div className="choice-container">{cpuChoice}</div>
        </div>
        <div className="choices">
          {choices.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => handleChoiceClick(e)}
                className="choice"
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
