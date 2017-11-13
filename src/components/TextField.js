import React from 'react';

const TextField = (props) => {

  return(
    <label htmlFor={props.name}>{props.label}
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

export default TextField
