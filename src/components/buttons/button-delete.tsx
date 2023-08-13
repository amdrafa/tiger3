import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export const DeleteButton: React.FC<ButtonProps> = ({ text = "Delete", ...rest }) => {
    return <button className='bg-red-700 text-white py-2 px-4 text-lg hover:bg-red-800' {...rest}>{text}</button>;
};
