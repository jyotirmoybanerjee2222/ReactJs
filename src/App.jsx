//import Button from "./Button";
import Student from "./student.jsx"

function App() {
 //return(<Button/>); 
 return(
    <>
    
    <Student name="Jyotirmoy" age = "30" isStudent = {true}/>
    <Student name="Patrik" age = "42" isStudent = {true}/>
    <Student name="Patrik" age = "42" isStudent = {false}/>
    <Student name="saabak" age = "27" isStudent = {true}/>
    <Student></Student>

    </>
 );
}

export default App
