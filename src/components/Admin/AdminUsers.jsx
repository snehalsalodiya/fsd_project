/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../storage/auth";
import {NavLink} from 'react-router-dom';
export const AdminUsers = () => {
    const { TokenAuthorization } = useAuth();
    
    /*******************************
     to store data from backend...
     *******************************/
    const [users, setUsers] = useState([]);

    const getAllUserData = async () => {
        try {
            const Response = await fetch('http://localhost:5000/api/admin/users', {
                method: "GET",
                headers: {
                    "Authorization": TokenAuthorization,
                },
            });
            
            const data = await Response.json();
            setUsers(data);
            console.log(`users ${data}`);
        } catch (error) {
            console.log("not get data for admin");
        }
    }
    
    /*******************************
     * to delete user from  stored data from backend...
    *******************************/
   console.log(TokenAuthorization);
   const deleteUser = async (id) => {
       try {
           console.log(`user id :${id}`);
           const Response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
               method: "DELETE",
               headers: { 
                   "Authorization": TokenAuthorization,
                },
            });
            if (Response.ok) {
                console.log("resopnse getted...");
                // Assuming the server returns a single user object
                const deletedUser = await Response.json();
                
                // If 'deletedUser' is an array, you might need to adjust this part
                setUsers(prevUsers => prevUsers.filter(user => user._id !== deletedUser._id));
           
                const updatedUsers = users.filter(user => user._id !== deletedUser._id);
           //     setUsers(updatedUsers);
           console.log(updatedUsers);
           
           console.log(`User with id ${id} deleted successfully`);
        } else {
            // Handle non-successful response
            console.log('Delete operation failed');
        }
    } catch (error) {
        console.log("Error during delete operation:", error);
    }
};

    useEffect(() => {
        getAllUserData();
        
    }, []);

    return (
        <>
    <section className="admin-users-section  text-white">
                            
        <div className="container">
        <h1 className="mt-2 main-heading text-7xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r  from-cyan-400 to-gray-500 text-transparent bg-clip-text">
               USER DATA
            </span>
        </h1>
        </div>
        <div className="container mx-auto admin-users mt-4">
            <table className=" min-w-full  rounded-lg overflow-hidden">
                <thead className="bg-gray-300 text-black">
                    <tr>
                        <th className="py-2  border-b">Name</th>
                        <th className="py-2  border-b">Email</th>
                        <th className="py-2  border-b">Phone</th>
                        <th className="py-2  border-b">Update</th>
                        <th className="py-2  border-b">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((currUser, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                            <td className="py-2 px-4 border-b">{currUser.username}</td>
                            <td className="py-2 px-4 border-b">{currUser.email}</td>
                            <td className="py-2 px-4 border-b">{currUser.phone}</td>
                           
                            <td className="py-2 px-4 border-b">
                                <NavLink
                                    to={`/update/${currUser._id}`}
                                    className="bg-green-600 text-white py-1 px-2 rounded focus:outline-double focus:shadow-md transition duration-300 hover:bg-yellow-700"
                                >
                                    Edit
                                </NavLink>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => deleteUser(currUser._id)}
                                    className="bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300 hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
</>

);
}