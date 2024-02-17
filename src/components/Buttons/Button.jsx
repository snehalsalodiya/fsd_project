/* eslint-disable no-unused-vars */
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Button() {
  const handleButtonClick = () => {
    // Your custom logic when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <AwesomeButton
      onPress={handleButtonClick} // Add onClick event
      type="primary"
    >
      Send Message
    </AwesomeButton>
  );
}

export default Button;
