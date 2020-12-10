import React, {useState, useEffect} from 'react'

const EditUserForm = (props) => {
    const [formData, setFormData] = useState(props.currentUser);

    useEffect(() => {
        setFormData(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        props.updateUser(formData._id, formData)
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex-large">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex-large">
                        <label>Hobby</label>
                        <input
                            type="text"
                            name="hobby"
                            value={formData.hobby.toString()}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                        <label>Skill Sets</label>
                        <input
                            type="text"
                            name="skillSets"
                            value={formData.skillSets.toString()}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                        <button>Update user</button>
                        <button
                            onClick={() => props.setEditing(false)}
                            className="button muted-button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditUserForm
