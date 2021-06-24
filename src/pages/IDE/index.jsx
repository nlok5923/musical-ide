import { React, useState, useEffect } from "react";
import "./IDE.scss";
import MonacoEditor from 'react-monaco-editor';

const IDE = () => {

    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
      );

      const options = {
        selectOnLineNumbers: true,
        colorDecorators: true,
        cursorStyle: "line-thin",
        folding: true,
        foldingHighlight: true
      }; 

  return (
    <div>
      <div className="nav">
        <div className="nav-buttons">
          <button className="nav-buttons-run"> Run </button>
          <select className="nav-buttons-choose">
            <option className="nav-buttons-option" value="Python">
              Python
            </option>
            <option className="nav-buttons-option" value="Java">
              Java
            </option>
            <option className="nav-buttons-option" value="C++">
              C++
            </option>
          </select>
        </div>
        <div className="nav-logo">
          MUSICAL IDE
          <img
            className="nav-logo-img"
            src="asset/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className="nav-music-player">
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

{/* constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    }; */}
    {/* // return ( */}
      <MonacoEditor
        width="100%"
        height="500"
        language="cpp"
        theme="vs"
        value={code}
        options={options}
        // onChange={::this.onChange}
        // editorDidMount={::this.editorDidMount}
      />
    {/* // ); */}
  {/* // } */}

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
