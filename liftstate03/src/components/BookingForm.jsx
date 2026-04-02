import {useState} from 'react';

const BookingForm = ({onSubmitBooking}) => {
    // name email phone date time guests occasion
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('2');
    const [occasion, setOccasion] = useState('Dinner');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const timeChangeHandler = (event) => {
        setTime(event.target.value);
    }
    const guestsChangeHandler = (event) => {
        setGuests(event.target.value);
    }
    const occasionChangeHandler = (event) => {
        setOccasion(event.target.value);
    }

    const handleSubmitBooking = (event) => {
        event.preventDefault();
        // now use callback function
         onSubmitBooking({name, email, phone, date, time, guests, occasion})
         // clear values
         setName('');
         setEmail('');
         setPhone('');
         setDate('');
         setTime('');
         setGuests('');
         setOccasion('');
    }

    return(
        <form onSubmit={handleSubmitBooking}>
            <h3>Child Component BookingForm.jsx</h3>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={nameChangeHandler} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={emailChangeHandler}/>
                    </label>
                </div>
                <div>
                     <label>
                        Phone:
                        <input type="text" value={phone} onChange={phoneChangeHandler}/>
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input type="text" value={date} onChange={dateChangeHandler}/>
                    </label>
                 </div>
                 <div>  
                    <label>
                        Time:
                        <input type="text" value={time} onChange={timeChangeHandler}/>
                    </label>
                 </div> 
                 <div>   
                    <label>
                        Guests:
                        <input type="text" value={guests} onChange={guestsChangeHandler}/>
                    </label>
                 </div>
                 <div>  
                    <label>
                        Occasion:
                        <input type="text" value={occasion} onChange={occasionChangeHandler}/>
                    </label>
                 </div>
                 <div>                                                                                                       
                <button type="submit">Submit to App.jsx</button>
                </div> 
            </form>           
    )
}

export default BookingForm;