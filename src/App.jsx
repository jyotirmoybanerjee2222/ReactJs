//import Button from "./Button";
//import Student from "./student.jsx"
//condition rendering :
import UserGreeting from "./UserGreeting";


function App() {
 //return(<Button/>); 

 // props
//  return(
//     <>
    
//     <Student name="Jyotirmoy" age = "30" isStudent = {true}/>
//     <Student name="Patrik" age = "42" isStudent = {true}/>
//     <Student name="Patrik" age = "42" isStudent = {false}/>
//     <Student name="saabak" age = "27" isStudent = {true}/>
//     <Student></Student>

//     </>
//  );

//conditioned rendering 
return(
   <>
       <UserGreeting isLoggedIn={true} ></UserGreeting>
       <UserGreeting isLoggedIn={true} userName="Anisha"></UserGreeting>
       <UserGreeting isLoggedIn={false} userName="Shyamal"></UserGreeting>
       <UserGreeting isLoggedIn={true} ></UserGreeting>

   </>
);
}

export default App
