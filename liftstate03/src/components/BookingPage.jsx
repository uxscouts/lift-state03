import {useState} from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({onSubmitBooking}) => {
    return(
        <>
            <h1>Booking page</h1>
            <BookingForm  onSubmitBooking={onSubmitBooking}/>
        </>
    );
}

export default BookingPage;