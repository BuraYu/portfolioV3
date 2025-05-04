import React, { useEffect, useRef, useState } from "react";

import "./cli.css";

const Cli = () => {
  const [data, setData] = useState([]);
  const about =
    "I'm Burak, a former team leader turned web developer. After five years of managing a diverse team, I transitioned into coding, where I now enjoy building, problem-solving, and exploring the tech world.";
  const unknownCommand = "unknown command";
  const socials = "You'll find my socials right above the terminal.";
  const help = "about | projects | clear | socials ";
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
        hurr(about);
        break;
      case "":
        hurr("you forgot to enter something");
        break;
      case "projects":
        hurr(projects);
        break;
      case "help":
        hurr(help);
        break;
      case "socials":
        hurr(socials);
        break;
      default:
        hurr(unknownCommand);
    }
  };

  const hurr = (inputValue) => {
    let i = 0;

    setData((prev) => [...prev, ""]);

    const interval = setInterval(() => {
      setData((prev) => {
        if (!prev.length) return prev;

        let updatedData = [...prev];
        let lastIndex = updatedData.length - 1;

        if (i < inputValue.length) {
          updatedData[lastIndex] += inputValue[i];
          i++;
        } else {
          clearInterval(interval);
        }

        return updatedData;
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
        {data.map((ele) => {
          return <p>{ele}</p>;
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
