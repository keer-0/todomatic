import React,{useState} from "react";
import './TodoList.css'
import { MdDelete } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

function TodoList(){
    const[inputtext,setInputText]=useState("");
  const[tasks,setTasks]=useState([]);
  
  


const deleteTask=(itemVal)=>{
  
  tasks.splice(tasks.indexOf(itemVal),1)
  setTasks([...tasks]); 

};
  const changeHandler=(e)=>{
    setInputText(e.target.value);
    console.log(inputtext)
  };
  const addTask=()=>{
    if(inputtext){
      setTasks([...tasks, inputtext]);
      setInputText("");
    }
 
    console.log(tasks)
 
}
  return (
    <div className="Todo">
    <p>Let's-Start-Todo-Application</p>
 
      
      <br/>
      
                <input type="text" onChange={changeHandler} placeholder="add-task-here" 
                value={inputtext}/>
               
            <button className="todo-button" onClick={addTask} data-testid="button"><GrAdd size={25} color="black"/></button>
            <br/><br/>
            <div>

              <p>Enter-Tasks-todo</p>
              </div>
                
            <table className="center">
            
            
              <thead>
                <tr>
                  <th>
                    <td>
                    <ul>
            
            {tasks.map( (itemval,index) =>{
                   return <li className="adding" key={index}>{itemval}
                   
                   <button className="Removed" onClick={deleteTask} value={itemval}><MdDelete size={30} color="black"/></button></li>
                   
           })}
           
    
           
       </ul>
                    </td>
                  
                  </th>
                </tr>
              </thead>
          
        </table>
        </div>
            
      
  );
}
export default TodoList;