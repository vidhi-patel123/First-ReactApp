import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnchange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
        props.showAlert("Text updated!", "success");
    }

    const [text, setText] = useState('Enter text here2');
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnchange} id="myBox" className="form-control" />
            </div>           
            <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text: "Enter something to preview"}</p>
        </div>
        </>
    )
    }
