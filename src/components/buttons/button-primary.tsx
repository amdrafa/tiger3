import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
    return <button className='bg-primary-500 text-white py-2 px-4 text-lg hover:bg-primary-600' {...rest}>{text}</button>;
};
