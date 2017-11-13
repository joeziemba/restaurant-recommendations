import React from 'react';

const Textarea = (props) => {

  return(
    <label htmlFor={props.name}>{props.label}
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </label>
  )
}

export default Textarea
