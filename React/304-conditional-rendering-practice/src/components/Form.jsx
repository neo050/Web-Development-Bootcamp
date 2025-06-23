import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" name="username" autoComplete="username" />
      <input type="password" placeholder="Password" name="password"/>
      {props.showConfirm&&<input type="password" placeholder="Confirm Password"  name="Confirm_Password" hidden={props.showConfirm}/>}
      <button type="submit">{props.buttonText}</button>
    </form>
  );
}

export default Form;
