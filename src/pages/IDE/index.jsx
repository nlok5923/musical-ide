import { React, useState } from "react";
import "./IDE.scss";
import MonacoEditor from "react-monaco-editor";
import Player from "../../components/Player/index";
import Draggable from "react-draggable";
import axios from "axios";
import base64 from "base-64"

const IDE = () => {
  const [code , setCode] = useState(`#include<bits/stdc++.h> using namespace std; int main() {\n  cout<<"hell0"<<endl; return 0; \n}`);
  const [input, setInput] = useState("test");
  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true,
    cursorStyle: "line-thin",
    folding: true,
    foldingHighlight: true,
  };

const handleSubmit = async () => {
  console.log(btoa(code));
  console.log(atob("I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0="))
  console.log(base64.encode(code))
  var options = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': 'acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
    },
    data:{
       language_id : 52,
       source_code: "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
       stdin: "SnVkZ2Uw"
  }
  };

  let token = "";
  axios.request(options).then(function (response) {
    // console.log(response.data);
    token = response.data.token;
  }).then(() => {
    var optionSubmission = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'x-rapidapi-key': 'acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
      }
    };
    
    axios.request(optionSubmission).then(function (resp) {
      console.log(resp.data);
      console.log(atob(resp.data.stdout));
    }).catch(function (error) {
      console.error(error);
    })
       
  })

  // var axios = require("axios").default;
  // const response = await axios.post(
  //   "https://judge0-extra.p.rapidapi.com/submissions",

  //   {
  //     headers: {
  //       "x-rapidapi-host": "judge0-extra.p.rapidapi.com",
  //       "x-rapidapi-key": "acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73", 
  //       "content-type": "application/json",
  //        accept: "application/json",
  //     },
  //     data: {
  //       language_id: 52,
  //       source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
  //       stdin: 'SnVkZ2Uw'
  //     },
  //     params: {base64_encoded: 'true', fields: '*'},
  //   }
  // );

  // console.log(response);
}


  
  /*
  var options = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/about',
    headers: {
      'x-rapidapi-key': 'acbeeacb85mshceacaa6063ca021p1f634bjsn6775c6acac73',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
    }
  };*/

  //request
  /*
  const response = await fetch(
    "https://judge0-extra.p.rapidapi.com/submissions",
    {
      method: "POST",
      headers: {
        "x-rapidapi-host": "judge0-extra.p.rapidapi.com",
        "x-rapidapi-key": "Your API Key", //// Get yours for free at https://rapidapi.com/hermanzdosilovic/api/judge0
        "content-type": "application/json",
         accept: "application/json",
      },
      body: JSON.stringify({
        source_code: this.state.input,
        stdin: this.state.user_input,
        language_id: this.state.language_id,
      }),
    }
  );*/

  return (
    <div>
      <div className="nav">
        <div className="nav-buttons">
          <button className="nav-buttons-run" onClick={() => handleSubmit()}> Run </button>
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
        </div>
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
          automaticLayout = {true}
          onChange ={(value, e) => setCode(value)}
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
              className="textarea"
              rows="9"
              placeholder="Enter input"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
