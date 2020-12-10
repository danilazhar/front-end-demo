import React, {useState} from 'react';


const AddUserForm = (props) => {
    const initialFormState = {_id: null, name: '', email: '', phone: '', skillSets: [], hobby: []};
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        props.addUser(formData)
        setFormData(initialFormState)
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div className="flex-large">
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                        <label>Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                    <div className="flex-large">
                        <label>Hobby</label>
                        <input type="text" name="hobby" value={formData.hobby} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                    <label>Skill Set</label>
                    <input type="text" name="skillSets" value={formData.skillSets} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large">
                        <button>Add new user</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddUserForm
