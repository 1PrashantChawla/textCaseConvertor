import React from 'react'
import { useState } from 'react'

// HOOKS bina class banaye class ke features use karne me madad karte hai 

export default function TextForm(props) {

    // FUNCTION FOR UPPER CASE  
    const handleUpperClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
       text.length>0 && props.showAlert("Converted To Upper Case","primary")
       text.length<1 && props.showAlert("Enter The Text First","warning")
    }



    // LOGIC FOR ALTERNATE CASE 1
    function swapCase1(text1) {
        
        //with first letter starting Lower case
        return text1.split('').map((c, i) =>
            i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
        ).join('');
      
    }
    // LOGIC FOR ALTERNATE CASE 2
    function swapCase2(textSample) {
        //with first letter starting upper case
        return textSample.split('').map((c, i) =>
            i % 2 == 0 ? c.toUpperCase() : c.toLowerCase()
        ).join('');
        
    }




    // FUNCTION FOR  LOWER CASE 
    const handleLowerClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        text.length>0 && props.showAlert("Converted To Lower Case","primary")
       text.length<1 && props.showAlert("Enter The Text First","warning")
    }



    // FUNCTION FOR  ALTERNATE CASE 1
    const handleAlternateClick1 = () => {
        //with first letter starting lower case
        let newText = swapCase1(text);
        setText(newText)
        console.log(newText);
        text.length>0 && props.showAlert("Converted To AlternateCase1","primary")
        text.length<1 && props.showAlert("Enter The Text First","warning")

    };


    // FUNCTION FOR  ALTERNATE CASE 2
    const handleAlternateClick2 = () => {
        //with first letter starting upper case
        let newText = swapCase2(text);
        setText(newText)
        console.log(newText);

        //Alert
        text.length>0 && props.showAlert("Converted To AlternateCase2","primary")
        text.length<1 && props.showAlert("Enter The Text First","warning")

    };


    // handleClearClick FUNCTION SETTING THE TEXT TO EMPTY STRING 
    const handleClearClick = () => {

        setText("")
      const confirm=  window.confirm("Do you want to Clear Text")
        if (confirm==true){
        props.showAlert("Text Cleared","danger") 
        }


    }
    // handleCopyClick FUNCTION will copy the text to clipboard
    const handleCopyText= () => {

       navigator.clipboard.writeText(text);
       props.showAlert("Copied To Clipboard!","success")

    }

    //Removing Extra Spaces
    const handleExtraSpaces= () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        text.length<0 && props.showAlert("Enter the text First to remove extra spaces");
        text.length>0 && props.showAlert("Extra Spaces Removed !","success");
       

    }



    // WE will notice that WE cannot add more text in the textbox. This is due to the reason as we didn’t
    //  assign a function to the ‘Onchange’ event. SO WE ARE ASSIGNING IT BELOW
    //ON CHANGE FUNCTION is nescessary SO THAT WE CAN WRITE IN THE TEXT AREA  and our state variable which is text here 
    //  gets updated as we type
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }


// ------------------- USE STATE  concept_____________

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (

        <>
            <div className="container mx-auto my-3 ">
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{backgroundColor:props.mode=='light'?'white':'black',color:props.mode=='light'?'black':'white'}}  >

                    {/* text is a state variable which we have used below and if we want to change the value of state variable we 
                    have to take use of the function which we define earlier that is setText function
                    so in handleOnChange function we can use   setText(event.target.value) so that whatever we type in the text area we can 
                    its get set to the setText.  */}

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" style={{backgroundColor:props.mode=='light'?'white':'black',color:props.mode=='light'?'black':'white'}}  ></textarea>
                </div>


                {/* //BUTTONS  */}

                <button className="btn btn-primary " onClick={handleUpperClick}>Uppercase</button>
                <button className="btn btn-primary" onClick={handleLowerClick}>Lowercase</button>
                <button className="btn btn-primary" onClick={handleAlternateClick1}>Alternatecase1</button>
                <button className="btn btn-primary" onClick={handleAlternateClick2}>Alternatecase2</button>
                <button className="btn btn-primary" onClick={handleClearClick}>ClearText</button>
                <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={handleCopyText}>CopyText</button>




            </div>

            {/* TEXT SUMMARY ARE  */}

            <div className="container my-3">
                <h1>
                    Your Text Summary Report Is Here
                </h1>
                <p>
                    {/* text.split(" ") will split the text as soon as it encounters " "space andw will  store it in an array  */}
                    {text.split(" ").length-1} Words and {text.length} Characters


                </p>
                <p>
                    Read in {.008 * text.split(" ").length} minutes.
                </p>
                <h2>
                    {/* //if text is empty we run the js below */}
                {text.length>0?"Preview Here":"Enter Your Text Above To Preview"}
                </h2>
                <p>{text.length>0?text:"Enter Your Text Above To Preview"}</p>
            </div>

        </>
    )
}
