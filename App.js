import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {
  const [oldId, newId] = useState([{
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  }]);


   function GetUsers(event){
   event.preventDefault();

   console.log("clicked");
   axios("https://reqres.in/api/users?page=1").then((res) => {
     console.log(res.data);
     console.log(res.data.data[0]);
     console.log(res.data.page);
     console.log(res.data.data);
  
     newId(res.data.data);

   }).catch((error) => {console.log(error)});
 }

 function CreateCard(oldId) {
  return (
    <div id = "user-card" >
    <img src = {oldId.avatar} />
    <p> {oldId.id} </p>
    <p id = "name" > {oldId.first_name} {oldId.last_name} </p>
    <p> {oldId.email} </p>
    </div>
  );
}

 return (
   <div>
    <div id = "head" > <h1 id = "head-main" > LETS GROW MORE </h1>
     <button onClick = {GetUsers} id = "getUsers" >Get Users</button> <br /></div>
     <div id = "user-body" >
 
   {oldId.map((c) => <CreateCard key = {c.id} email = {c.email} first_name = {c.first_name} last_name = {c.last_name} avatar = {c.avatar} />)}
   </div>
   </div>
 );
}



export default App;

