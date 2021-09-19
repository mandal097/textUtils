import React, { useState } from 'react'



export default function TextForm(props) {

    // setText(new text
    const handleUpClick = () => {
        // console.log('uppercase was clicked')
        let newText = text.toUpperCase()
        props.showAlert('converted to uppercase', 'success')
        setText(newText)
        // document.getElementsById('')
        // setText('newText')
    }
    const handleLoClick = () => {
        // console.log('uppercase was clicked')
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('converted to lowercase', 'success')
        // setText('newText')
    }

    const handleClearClick = () => {
        // console.log('uppercase was clicked')
        let newText = ''
        setText(newText)
        props.showAlert('text has been cleared', 'success')
        // setText('newText')
    }
    const handleCopy = () => {
        console.log('copy to clipboard')
        var text = document.getElementById('MyBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert('copied to clipboard', 'success')
        
    }
    const handleTrim = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('text has been trimed haha', 'success')

    }


    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState(' ')

    return (
        <>
            <div className="container mb-3" style={{ backgroundColor: props.mode === 'dark' ? "grey" : 'white', color: props.mode === 'dark' ? "#042743" : "black", borderRadius: 10 + 'px' }}>
                <h2 className='my-2' style={{ color: props.mode === 'dark' ? "white" : "black" }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? "#042743" : 'white', color: props.mode === 'dark' ? "white" : "black" }} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mb-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary  mx-2 mb-2" onClick={handleCopy}>copy to clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 " onClick={handleTrim}>remove extra spaces</button>


            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
                <h1>Your Text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
