import { React, useState, useEffect } from "react";
import "./IDE.scss";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-markup';

const IDE = () => {

    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
      );

  return (
    <div>
      <div className="header">
        <div className="header-buttons">
          <button className="header-buttons-run"> Run </button>
          <select className="header-buttons-choose">
            <option className="header-buttons-option" value="Python">
              {" "}
              Python{" "}
            </option>
            <option className="header-buttons-option" value="Java">
              {" "}
              Java{" "}
            </option>
            <option className="header-buttons-option" value="C++">
              {" "}
              C++{" "}
            </option>
          </select>
        </div>
        <div className="header-logo">
          MUSICAL IDE
          <img
            className="header-logo-img"
            src="asset/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className="header-music-player">
          <button>test</button>
        </div>
      </div>
      <div
        className="area"
        style={{
          backgroundImage: `url("asset/images/bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }} 
      >
    <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.jsx)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      </div>
      <div className="i-o">
        <div className="i-o-input">
          <div className="i-o-input-head">
            <p> Input </p>
          </div>
          <div className="i-o-input-box">
            <textarea
              className="textarea"
              rows="9"
              cols="80"
              placeholder="Enter input"
            ></textarea>
          </div>
        </div>
        <div className="i-o-output">
          <div className="i-o-output-head">
            <p> Output </p>
          </div>
          <div className="i-o-output-box">
            <textarea
              className="textarea"
              rows="9"
              cols="80"
              placeholder="Enter input"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
