import PropTypes from 'prop-types'
function List(props){
    // const fruits = [{ id: 1, name:"apple" ,calories: 95}, 
    //                 { id : 2,name:"orange" ,calories:155},
    //                 {id : 3,name:"banna",calories:45},
    //                 {id: 4 ,name:"pinaple",calories:25}];
    //fruits.sort();//sorting lexicographily
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // fruits.sort((a,b) => a.calories - b.calories);//numeric
    // fruits.sort((a,b) => b.calories - a.calories);//numeric

    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);
    // // const listItems = lowCalFruit.map( fruit => <li key={fruit.id}>{fruit.name}: &nbsp;                             
    // //                                        <b>{fruit.calories}</b></li>)
    // const listItems = highCalFruit.map( fruit => <li key={fruit.id}>{fruit.name}: &nbsp;                             
    //                                        <b>{fruit.calories}</b></li>)
    // const listItems = fruits.map( fruit => <li key={fruit.id}>{fruit.name}: &nbsp;                             
    //                                        <b>{fruit.calories}</b></li>)    
    
    const category = props.category;
    const itemList = props.item; 

    const listItems = itemList.map( item => <li key={item.id}>{item.name}: &nbsp;                             
                                           <b>{item.calories}</b></li>)
    // return(fruits);
    return(<>
           <h3 className = "list-category">{category}</h3>
           <ol  className = "list-items">{listItems}</ol>
           </>
           );
}

List.propTypes = {
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.number
    })),

}

List.defaultProps = {
    category : "category",
    item:[],
 
 }
export default List