//import Button from "./Button";
//import Student from "./student.jsx"
//condition rendering :
//import UserGreeting from "./UserGreeting";

//List
import List from "./List.jsx";


// function App() {
//  //return(<Button/>); 

//  // props
// //  return(
// //     <>
    
// //     <Student name="Jyotirmoy" age = "30" isStudent = {true}/>
// //     <Student name="Patrik" age = "42" isStudent = {true}/>
// //     <Student name="Patrik" age = "42" isStudent = {false}/>
// //     <Student name="saabak" age = "27" isStudent = {true}/>
// //     <Student></Student>

// //     </>
// //  );

// //conditioned rendering 
// return(
//    <>
//        <UserGreeting isLoggedIn={true} ></UserGreeting>
//        <UserGreeting isLoggedIn={true} userName="Anisha"></UserGreeting>
//        <UserGreeting isLoggedIn={false} userName="Shyamal"></UserGreeting>
//        <UserGreeting isLoggedIn={true} ></UserGreeting>

//    </>
// );
// }

//list
function App(){
   const fruits = [{ id: 1, name:"apple" ,calories: 95}, 
      { id : 2,name:"orange" ,calories:155},
      {id : 3,name:"banna",calories:45},
      {id: 4 ,name:"pinaple",calories:25}];


      const vegetable = [{ id: 6, name:"potatoes" ,calories: "apple"}, 
                         { id : 7,name:"celary" ,calories:155},
                         {id : 8,name:"carriots",calories:45},
                         {id: 9,name:"pcorn",calories:25}];



     return(<>
               {fruits.length > 0  && <List item={fruits} category = "Fruits"/>}
               {vegetable.length>0 ?<List item={vegetable} category = "vegetable"/>: null}
     
            </>)
}


export default App
