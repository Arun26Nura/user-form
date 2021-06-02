import React,{useState} from 'react';

import AddUser from './components/userForm/AddUser';
import UserList from './components/userForm/UserList';

function App() {
  const users=[{
    key:Math.random().toString(),
    name:"Arun",
    age:26
  }]

  const[userList,setUserList]= useState([]);

  const userListHandler=(uName,uAge)=>{
    setUserList((oldUserList)=>{
      return [...oldUserList,{key:Math.random.toString(),name:uName,age:uAge}]
    })
  }



  return (
    <div>
      <AddUser setUserDetails={userListHandler}/>
      <UserList users={userList}/>
    </div>
    
  );
}

export default App;
