import { React, useState } from "react";
import "./IDE.scss";
import MonacoEditor from "react-monaco-editor";
import Player from "../../components/Player/index";
import Draggable from "react-draggable";
import axios from "axios";
import Loader from "../../components/Loader/index";
import { useAlert } from 'react-alert'

const IDE = () => {
  const alert = useAlert()
  const [code, setCode] = useState(`Enter your code here`);
  const [languageId, setLanguage] = useState(0);
  const [input, setInput] = useState("test");
  const [output, setOutput] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true,
    cursorStyle: "line-thin",
    folding: true,
    foldingHighlight: true,
  };

  var judgeOptions = {
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

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      alert.success('Submitted Successfully');
      let token = "";
      axios
        .request(judgeOptions)
        .then(function (response) {
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
              alert.success('Ran Successfully');
              setisLoading(false);
            })
            .catch(function (error) {
              setOutput(error);
              alert.error('Error occured');
              setisLoading(false);
              console.error(error);
            });
        })
        .catch((err) => {
          setOutput(err);
          alert.error('Error occured');
          setisLoading(false);
        })
    } catch (err) {
      console.log(err);
      setOutput(err);
      setisLoading(false);
      alert.error('Error occured');
    }
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-buttons">
          <button className="nav-buttons-run" onClick={() => handleSubmit()}>
            Run
          </button>
          <select
            className="nav-buttons-choose"
            onChange={(e) => setLanguage(e.target.value)}
          >
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
            {/* <option className="nav-buttons-option" value={63}> */}
              {/* JavaScript (Node.js 12.14.0) */}
            {/* </option> */}
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
              {isLoading && <Loader />}
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
        <MonacoEditor
          width="100%"
          height="500"
          language="cpp"
          theme="vs-dark"
          value={code}
          options={options}
          automaticLayout={true}
          onChange={(value, e) => setCode(value)}
        />
      </div>
      <div className="i-o">
        <div className="i-o-input">
          <div className="i-o-input-head">
            <p> Input </p>
          </div>
          <div className="i-o-input-box">
            <textarea
              onChange={(e) => setInput(e.target.value)}
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
            <textarea value={output} className="textarea" rows="9"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
/*
#include<bits/stdc++.h>
using namespace std;

int main() {
    cout<<"hello"<<endl;
}*/