import React, { useState } from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'
import axios from "axios";
import cloneDeep from "lodash.clonedeep";

const App = () => {

    const initialFormState = {_id: null, name: '', username: ''};

    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState);

    React.useEffect(() => {
        const fetchData = async () => {
            let url = `http://localhost:8081/users`;
            try {
                const res = await axios.get(url);
                setData(res.data.users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    async function addUser(user) {
        try {
            let res = await axios.post(`http://localhost:8081/users`, user);
            if (res.status === 200) {
                setData([...data, user])
            }
        } catch (err) {
            console.log(err);
        }
    }

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({_id: user._id, name: user.name, email: user.email, skillSets: user.skillSets, hobby: user.hobby});
    }

    async function updateUser(id, updatedUser) {
        setEditing(false)
        let res = await axios.put(`http://localhost:8081/users/${id}`, updatedUser);
        if (res.status === 200) {
            let tmpData = cloneDeep(data);
            let index = tmpData.findIndex(data => data._id === id);
            tmpData[index] = updatedUser;
            setData(tmpData);
        }
    }

    async function deleteUser(id) {
        let res = await axios.delete(`http://localhost:8081/users/${id}`);
        if (res.status === 200) {
            let tmpData = cloneDeep(data);
            let index = tmpData.findIndex(data => data._id === id);
            tmpData.splice(index, 1);
            setData(tmpData);
        }
    }

    return (
        <div className="container">
            <h1>Frontend Demo App</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h3>Add user</h3>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-large">
                    <h3>View users</h3>
                    <UserTable users={data} editRow={editRow} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    )
}

export default App
