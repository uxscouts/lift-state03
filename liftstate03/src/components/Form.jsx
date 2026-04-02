import {useState} from 'react';

const Form = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail ] = useState('');

    
    // handle input changes and update local state
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    // handle input changes and update local state
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent browser reload
        // call parent's callback function with local state value
        onSubmit({name, email});
        // clear values if you want
        setName('');
        setEmail('');
    }
        return(
            <form onSubmit={handleSubmit}>
                <h3>Child Component Form.jsx</h3>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleNameChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange}/>
                    </label>
                </div>
                <button type="submit">Submit to App.jsx</button>
            </form>
        )
}

export default Form;