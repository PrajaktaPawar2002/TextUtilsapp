import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // toUpperCase is a javascrpt funcyion
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleUpPunctuations = () => {
    const newText = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = text.replace(newText, '');
    setText(result);
    props.showAlert("Punctuations is removed!", "success");


  }


  const handleUpCapitalizeCase = () => {
    const newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(newText);
    props.showAlert("Capitalized the first letter of each words!", "success");
  }


  // const handleUpNumberRemove = () => {
  //     const regularexpression = /[0-9]/g;
  //     const result = text.replace(regularexpression, '');
  //     setText(result);
  //     props.showAlert("Number removed!", "success");
  // }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };


  // useState use here
  //text - value
  //settext - function
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state


  return (
    <>
 
      {/* parent container */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >

        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            // onchange listener use for text typing
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#CCC8AA" : "white",
              color: props.mode === "dark" ? "#2C3639" : "#000000",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        

        <button
          disabled={text.length === 0}
          class="btn btn-outline-info mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          class="btn btn-outline-dark mx-1 my-1"
          onClick={handleLoClick}
        >
        Lowercase
        </button>
        <button disabled={text.length === 0}
          class="btn btn-outline-info mx-1 my-1"
          onClick={handleUpPunctuations}>
          Remove Punctuations</button>

        <button disabled={text.length === 0}
          class="btn btn-outline-dark mx-1 my-1"
          onClick={handleUpCapitalizeCase}>
          Capitalize </button>

        {/* <button disabled={text.length === 0}
          className="btn btn-primary btn-sm my-2"
          onClick={handleUpTitleCase}>
          Title Case</button> */}

        {/* <button disabled={text.length===0} 
                className="btn btn-primary btn-sm mx-2  my-2"
                 onClick={handleUpNewLine}>
                  Remove New Line</button>

                <button disabled={text.length===0} 
                className="btn btn-primary btn-sm mx-2  my-2"
                 onClick={handleUpNumberRemove}>
                  Remove Numbers</button> */}

        <button
          disabled={text.length === 0}
          class="btn btn-outline-info  mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          class="btn btn-outline-dark  mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          class="btn btn-outline-info  mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>


      {/* Text summary code  */}


      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>No of words and character :
        {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          {" "}

          words and 
          {" "}
          {text.length}
          {" "} 
          characters
        </p>

        <p>Total Reading time : 
          {/* 125 word - 1 minutes, 1 word - 1/125 = 0.008 */}
          {/* 0.008 * number of words */}
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
           Minutes Reading Time
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}












