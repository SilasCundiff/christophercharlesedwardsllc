import React from 'react';
import './TextError.scss';

export default function TextError(props) {
  return (
    <div className='TextError'>
      <em className='error'>{props.children}</em>
    </div>
  );
}
