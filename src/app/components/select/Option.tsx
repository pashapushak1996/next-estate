import {memo} from "react";

import {SelectOption} from "@/app/components/select/select.types";

interface SelectOptionProps extends SelectOption {
    onClick?: () => void;
    className?:string[];
}

const Option: React.FC<SelectOptionProps> = ({className,label, onClick}) => {
    const classNames = className?.join(' ') || '';
    return (
        <div className={'border-b p-3 border-gray-700' + classNames} onClick={onClick}>
            {label}
        </div>
    );
};

export default memo(Option);
