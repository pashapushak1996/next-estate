import clsx from 'clsx';

import {ButtonEnum} from "@/app/components/button/button.types";

interface ButtonProps {
    roundedSide?: 'left' | 'right',
    variant: ButtonEnum,
    onClick: () => void,
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({variant, onClick, roundedSide, children}) => {
    const classNames = clsx('flex text-white items-center justify-center p-3 cursor-pointer', {
        'rounded-lg': !roundedSide,
        'bg-sky-500 hover:bg-sky-600': variant === ButtonEnum.primary,
        'bg-red-500 hover:bg-red-600': variant === ButtonEnum.error,
        'border border-solid border-sky-500 text-sky-500': variant === ButtonEnum.outline,
        'bg-gray-800 hover:bg-gray-900':variant === ButtonEnum.secondary,
        'rounded-r-lg': roundedSide === 'right',
        'rounded-l-lg': roundedSide === 'left'
    });

    const handleOnClick = (event: any) => {
        onClick();
    }

    return (
        <div onClick={handleOnClick} className={classNames}>
            {children}
        </div>
    );
};
