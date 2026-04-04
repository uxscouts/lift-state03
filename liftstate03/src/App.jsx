import { useState } from 'react'
import Form from './components/Form';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import './App.css'

function App() {
  const [formData, setFormData] = useState(null);
  const [formDataBooking, setFormDataBooking] = useState(null);


  // this function is passed as a prop to child component
  const handleFormSubmit = (data) =>{
    console.log("Data received in App.js", data);
    setFormData(data); // update state in the parent component
  }

    // this function is passed as a prop to child component
  const handleSubmitBooking = (data) => {
    console.log("Booking data received in App.js", data);
    setFormDataBooking(data); // update state in the parent component
  }

  return (
    <>
      <div className="App">
        <h1>Parent Component (App.jsx)</h1>
        <Form onSubmit={handleFormSubmit}/>
        { formData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
          </div>
        )}
      </div>



      <div className="App">
        <h2>Parent to BookingForm.jsx</h2>
        <BookingPage onSubmitBooking={handleSubmitBooking}/>
        { formDataBooking && (
          <div>
            <h2>Submitted Data</h2>
              <p>Name: {formDataBooking.name}</p>
              <p>Email: {formDataBooking.email}</p>
              <p>Phone: {formDataBooking.phone}</p>
              <p>Date: {formDataBooking.date}</p>
              <p>Time: {formDataBooking.time}</p>
              <p>Time2: {formDataBooking.time2}</p>
              <p>Guests: {formDataBooking.guests}</p>
              <p>Occasion: {formDataBooking.occasion}</p>
          </div>



        )}
      </div>
    </>
  )
}

export default App
