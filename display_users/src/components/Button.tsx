import React from 'react';

interface IProps {
  buttonText: string;
  handleClick: () => void;
}

const Button: React.FC<IProps> = ({ buttonText, handleClick }) => {
  return (
    <div className='button' onClick={handleClick}>
      {buttonText}
    </div>
  );
};

export default Button;
