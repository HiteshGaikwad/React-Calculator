
import React,{useState} from "react";
import "./App.css"

const App=()=>{

  const [num1, setNum1]= useState("");
  const [num2,setNum2]= useState("");
  const [result, setResult]= useState("");
  const [operation , setOperation]= useState("");
  const [ans, setAns]= useState();
  const [errorMessage, setErrorMessage]= useState("");
  const [successMessage, setSuccessMessage]= useState("");
  const [sign, setSign]= useState("");

  //function callled on the clicking event at any operation
  function handleEvent(value){
    //if validation is success then calculate 
       if(validation() && validateNumber()) {
      setOperation(value);
      calculate(num1, num2, value);
    }
  }

  //validate input: if the input is number type or not
  function validateNumber(){
    //if the inputs are not the number then setError message else setSuccess message
    if(isNaN(num1) || isNaN(num2)){
      setErrorMessage("Error");
      setSuccessMessage("");
      setResult("Please enter valid number");
      setAns("");
      setSign("");
      return false;
    }else{
      setSuccessMessage("Success");
      setErrorMessage("");
      setResult("")
      setAns("")
      return true;
    }
    
  }

  //validate the inputs: inputs should not be empty
  function validation(){
    if(num1==="" || num2===""){
      setErrorMessage("Error");
      setSuccessMessage("");
      validateError();
      setSign("");
      setAns("")
      return false;
    } else{
      setResult("");
      setErrorMessage("");
      return true;
    }
  }

  //if at the validation any input found empty then build error message to specify the empty input box
  function validateError(){
      if(num1==="" && num2===""){
        setResult("Inputs Cannot Be Empty");
      } else if(num1===""){
        setResult("Num1 Cannot Be Empty");
      } else{
        setResult("Num2 Cannot Be Empty");
      }
  }


  //if all the validation got success the do calculation basesd on inputs and operation 
  function calculate(num1, num2,operation){
    setResult("Result :");
    if(operation==="add"){
      const n1= +num1;
      const res= n1 + +num2;
      setAns(res);
      setSign("+");
    } else if(operation==="subtract"){
      setAns(num1 - num2);
      setSign("-");
  }
  else if(operation==="multiply"){
    setAns(num1 * num2);
    setSign("*");
  } else if(operation==="divide"){
    setAns(num1 / num2);
    setSign("/");
   } else{
    setAns("");
    setSign("");
   }
}

  return(
    <div className="main-box">
    <div className="main-frame">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input type="text" onChange={(e)=>setNum1(e.target.value)} placeholder="Num 1"/>
        <p className="sign">{sign}</p>
        <input type="text" onChange={(e)=>setNum2(e.target.value)} placeholder="Num 2"/>
        </div>
        <div className="buttons">
        <button className="btn"  onClick={()=>handleEvent("add")}>+</button>
        <button className="btn" onClick={()=>handleEvent("subtract")}>-</button>
        <button className="btn" onClick={()=>handleEvent("multiply")}>*</button>
        <button className="btn" onClick={()=>handleEvent("divide")}>/</button>
        </div>
        <div>
        <p className={`error ${errorMessage ? "visible" : ""}`}>
          {errorMessage}
        </p>
        <p className={`success ${successMessage ? "visible" : ""}`}>
          {successMessage}
        </p>
        </div> 
        <p className="result">{result} {ans}</p> 
    </div>
    </div>
  )
}

export default App;