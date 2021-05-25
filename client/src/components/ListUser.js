import React, {Fragment, useEffect, useState} from "react";

// Importing from AddUser
import AddUser from "./AddUser";


// Importing from EditTodo component
import EditList from "./EditList";

const ListUser = () => {

    // const gets default value of an empty array
    const [list, setList] = useState([]);
    // todos inherit info from setTodos. Check the console.log(todos)

    // delete todo function
    const deleteUser = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/list/${id}`,{
                method: "DELETE"
            });

            // refreshing screen after deleting (spit out all todos with the exception of the "id" (from deleteTodo) deleted)
            // filter function refreshes after a condition. In this case "todo => todo.todo_id !== id"
            setList(list.filter(list => list.contact_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }


    const getList = async() => {
        try {

            //another fetch request
            const response = await fetch("http://localhost:5000/list")
            // parsing json data first
            const jsonData = await response.json()

            // empty array gets info data from backend converted into json data
            setList(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getList();
        // [] inserted, so fetch request shows up once and not a lot of times
    }, []);
    
    // console.log(todos); -> I can see the data on console
    return (
        <Fragment>
            {" "}
        <h1 className="text-center mt-5">Add a favorite person.</h1>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}

            {/* Mapping  */}
            {list.map(list => (
                // primary key from the database.sql -> backend db file
                <tr key={list.contact_id}>
                    <td>{list.first_name}</td>
                    <td>{list.last_name}</td>
                    <td>{list.birth_date}</td>
                    <td>{list.phone_number}</td>
                    <td>{list.address_info}</td>
                    <td>{list.notes}</td>
                    <td>
                        {/* from component EditTodo.js */}
                        {/* Adding a prop to EditTodo component */}
                        <EditList list = { list }/>  
                    </td>
                    <td>
                        <button className="btn btn-danger" 
                        // deleteToDo is a a function to specify what to delete. In this case, the id from the database file
                        onClick={() => deleteUser(list.contact_id)}>Delete</button>
                    </td>
                </tr>
            ))}
             </tbody>
        </table>
        <AddUser />
        </Fragment>
    );
}

export default ListUser;