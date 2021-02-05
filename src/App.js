import React from 'react'
import logo from './logo.svg';
import './App.css';
import Introduction from './profile/Profile component/Introduction'
 import imgSrc from "../src/images/Memoji.png";
 import UserCard from './profile/Profile component/UserCard'

 const MyBio =[
   {
    name: "Safa Zgaya",
    age: 24,
    email: "safa.zgaya@gmail.com",
    address: "Tunis",
    isAuth: true,
   }
 ];

export default function App() {
  const alertName = (name) => alert(name);
  return(
    <div>
      <Introduction imgSrc={imgSrc} name="Safa Zgaya" />
      {MyBio.map((currentUser,i)=>(
      <UserCard key={i} user={currentUser} alertName={alertName} /> 
      ))}
    
      
    </div>
  );
}
  
