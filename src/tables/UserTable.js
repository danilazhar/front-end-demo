import React from 'react';

const UserTable = (props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skill sets</th>
            <th>Hobby</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.hobby.toString()}</td>
                    <td>{user.skillSets.toString()}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.deleteUser(user._id)}
                            className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default UserTable;
