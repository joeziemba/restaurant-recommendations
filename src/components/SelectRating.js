import React from 'react';

const SelectRating = (props) => {

  return(
    <label htmlFor={props.name}>Rating:
      <select value={props.selectedOption} name={props.name} onChange={props.onChange} >
        <option value=''></option>
        <option value="20">1 star</option>
        <option value="40">2 stars</option>
        <option value="60">3 stars</option>
        <option value="80">4 stars</option>
        <option value="100">5 stars</option>
      </select>
    </label>
  )
}

export default SelectRating
