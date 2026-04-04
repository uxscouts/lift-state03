import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import BookingForm from './BookingForm';



function BookingHours({ onValueChange }){
    // array of objects for the drop down
    const options = [
  { label: 'Select a time', value: '' }, 
  { label: '1pm', value: '1pm' },
  { label: '2pm', value: '2pm' },
  { label: '3pm', value: '3pm' },
  { label: '4pm', value: '4pm' },
  { label: '5pm', value: '5pm' },
  { label: '6pm', value: '6pm' },
  { label: '7pm', value: '7pm' },
  { label: '8pm', value: '8pm' },
  { label: '9pm', value: '9pm' },
    ];



    return(
        <div>
                <Input type="select" id="res-time" onChange={(e) => onValueChange(e.target.value)}>
                {options.map((option) => (
                    <option
                    key={option.value || 'default'}
                    value={option.value}
                    disabled={option.value === ''} 
                    >
                    {option.label}
                    </option>
                ))}
                </Input>
        </div>
    )
}

export default BookingHours;