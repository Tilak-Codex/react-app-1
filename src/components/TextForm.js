import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        
        setText(newText);
    }
    const handleOnChange=(event)=>{
       // console.log("OK");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        setText('');
    }
  const [text,setText]=useState('');

  return (
    <>
      <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea  className="form-control"placeholder="enter text" value={text} onChange={handleOnChange}id="myBox" rows="8"/>
    </div>
    <button className="btn btn-primary me-2" onClick={handleUpClick}>Conver to uppercase</button>
    <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container">
 <h1>Your text Summary</h1>
 <p>You have enterted {text.length} letters</p>
 <p>You have enterted {text.split(" ").filter(element=>{return element.length!==0}).length} words</p>
 <p>Fun Fact:</p>
 <p>You can read the above sentence in {0.008 * text.split(" ").length} Minutes</p>
</div>
    </>
  )
}
