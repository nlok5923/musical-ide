import { React, useState } from "react";
import "./IDE.scss";
import MonacoEditor from "react-monaco-editor";
import Player from "../../components/Player/index";
import Draggable from "react-draggable";
import axios from "axios";

const IDE = () => {
  const [code, setCode] = useState(
    `Enter your code here`
  );
  /*
  const langauges = useState([]);
  langauges[71] = "python";
  langauges[52] = "cpp";
  langauges[62] = "java";
  langauges[48] = "c";
  langauges[63] = "javascript";
  langauges[71] = "python";
*/
  const [languageId, setLanguage] = useState(0);
  const [input, setInput] = useState("test");
  const [output, setOutput] = useState("");

  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true,
    cursorStyle: "line-thin",
    folding: true,
    foldingHighlight: true,
  };

  const handleSubmit = async () => {

    var options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73",
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: languageId,
        source_code: btoa(code),
        stdin: btoa(input),
      },
    };

    let token = "";
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        token = response.data.token;
      })
      .then(() => {
        var optionSubmission = {
          method: "GET",
          url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "x-rapidapi-key":
              "acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          },
        };

        axios
          .request(optionSubmission)
          .then(function (resp) {
            console.log(resp.data);
            console.log(atob(resp.data.stdout));
            setOutput(atob(resp.data.stdout));
          })
          .catch(function (error) {
            console.error(error);
          });
      });
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-buttons">
          <button className="nav-buttons-run" onClick={() => handleSubmit()}>
            Run
          </button>
          <select className="nav-buttons-choose" onChange={(e) => setLanguage(e.target.value)}>
            <option className="nav-buttons-option" value={71}>
              Python (3.8.1)
            </option>
            <option className="nav-buttons-option" value={62}>
              Java (OpenJDK 13.0.1)
            </option>
            <option className="nav-buttons-option" value={52}>
              C++ (GCC 7.4.0)
            </option>
            <option className="nav-buttons-option" value={48}>
              C (GCC 7.4.0)
            </option>
            <option className="nav-buttons-option" value={63}>
              JavaScript (Node.js 12.14.0)
            </option>
            <option className="nav-buttons-option" value={46}>
              Bash
            </option>
          </select>
        </div>
        <div className="nav-logo">MUSICAL IDE</div>
        <div className="nav-music-player">
          <Draggable
            bounds={{ top: -100, left: -1400, right: 140, bottom: 1000 }}
            grid={[25, 25]}
            handle=".handle"
            scale={1}
          >
            <div className="draggable-player handle">
              <Player />
            </div>
          </Draggable>
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
          theme="vs-dark"
          value={code}
          options={options}
          automaticLayout={true}
          onChange={(value, e) => setCode(value)}
          // onChange = {(value, e) => handleCodeChange(value, e)}
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
              onChange = {(e) => setInput(e.target.value)}
              className="textarea"
              rows="9"
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
              value={output}
              className="textarea"
              rows="9"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
