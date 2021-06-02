import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
 

  const submitValuesHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Empty Values",
        message: "Name or Age should not be empty",
      });
      return;
    }
    if (+age <= 0) {
        setError({
            title: "Invalid Age",
            message: "Age should not be Negative",
          });
      return;
    }
    props.setUserDetails(name, age);
    setName("");
    setAge("");
    console.log(name + " " + age);
  };
  const userNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  
  const errorModalHandler=()=>{
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal onconfirm={errorModalHandler} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={submitValuesHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years) </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
