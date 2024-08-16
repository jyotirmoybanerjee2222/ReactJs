//propTypes = a mechanism that ensures the passed value
//             is of correct datatype
//  

// default props

//props: read-only properties that are shared between components.
// a parent component can send data to a child component .
// <component keyvalue/>


import propTypes from 'prop-types'
function Student(props){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
            
        </div>
    )

}

Student.propTypes = {
  name: propTypes.string,
  age:propTypes.string,
  isStudent:propTypes.bool,
}

Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent:"false",
}

export default Student


// index.css

// .student {
//     font-family: Arial;
//     font-size: 2em;
//     padding: 10px;
//     border: 1px solid hsl(0, 50%, 50%);
//  }
 
//  .student p{
//     margin:0;
 
//  }
 
 