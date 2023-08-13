import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    hasSearchIcon?: boolean;
}

export const Input: React.FC<InputProps> = ({ hasSearchIcon = false, ...rest }) => {
    return (
        <div className='flex items-center'>
            <input className='bg-gray-100 border-b-gray-200 border-b-2 h-11 w-full px-4' {...rest} />
            {hasSearchIcon ? (
                <span className='bg-primary-500 h-11 flex justify-center p-2 items-center text-white cursor-pointer hover:bg-primary-600'>
                    <BiSearchAlt2 size={'1.8rem'} />
                </span>
            ) : (
                ''
            )}
        </div>
    )
};

