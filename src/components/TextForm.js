import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('Uppercase button clicked: ' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = ()=>{
        // console.log('Lowercase button clicked: ' + text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClear = ()=>{
        let newText = ''
        setText(newText)
    }

    const handleTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    const capitalize = () => {
        
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event)=>{
        // console.log('On Change')
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-info" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-info" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-info mx-2" onClick={capitalize}>Title Case</button>
            <button className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
