import React, { useEffect, useRef, useState } from "react";

import "./cli.css";

const Cli = () => {
  const [data, setData] = useState([]);
  const about =
    "I'm Burak, a former team leader turned web developer. After five years of managing a diverse team, I transitioned into coding, where I now enjoy building, problem-solving, and exploring the tech world.";
  const unknownCommand = "unknown command";
  const socials = "You'll find my socials right above the terminal.";
  const help = "about | projects | clear | socials";
  const projects =
    "There is an arrow pointing on button to open the sidebar. Feel free to click it to get an overview of my projects.";

  const cliRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (cliRef.current) {
      cliRef.current.scrollTop = cliRef.current.scrollHeight;
    }
  }, [data]);

  const test = (inputValue) => {
    switch (inputValue) {
      case "clear":
        setData([]);
        break;
      case "about":
        inputCase(about);
        break;
      case "":
        inputCase("you forgot to enter something");
        break;
      case "projects":
        inputCase(projects);
        break;
      case "help":
        inputCase(help);
        break;
      case "socials":
        inputCase(socials);
        break;
      default:
        inputCase(unknownCommand);
    }
  };

  const inputCase = (inputValue) => {
    let i = 0;
    const newLine = "";

    setData((prev) => [...prev, newLine]);
    const lineIndex = data.length;

    const interval = setInterval(() => {
      i++;
      setData((prev) => {
        const updated = [...prev];
        if (i <= inputValue.length) {
          updated[lineIndex] = inputValue.slice(0, i);
        } else {
          clearInterval(interval);
        }
        return updated;
      });
    }, 15);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      test(event.target.value);
      event.target.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="cli-container" ref={cliRef} onClick={handleClick}>
      <p>
        Welcome to the Terminal. For a list of available commands, type 'help'
      </p>

      <div>
        {data.map((ele, index) => {
          return <p key={index}>&gt;{ele}</p>;
        })}
      </div>
      <div className="input-wrapper">
        <label>&gt;</label>
        <input
          ref={inputRef}
          size={70}
          maxLength={70}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default Cli;
