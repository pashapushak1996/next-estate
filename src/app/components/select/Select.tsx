import Option from "@/app/components/select/Option";
import {useCallback, useState} from "react";
import Icon from "@/app/components/icon/Icon";
import {SelectOption} from "@/app/components/select/select.types";
import {IconTypes} from "@/app/components/icon/icon.types";

interface SelectProps {
    options: SelectOption[];
    onChange: (option: SelectOption) => void;
}

const Select: React.FC<SelectProps> = ({options, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

    const openSelect = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleOptionClick = useCallback(
        (option: SelectOption) => {
            onChange(option);
            setSelectedOption(option);
        },
        [onChange]
    );

    const iconName = `chevron-${isOpen ? 'down' : 'up'}` as IconTypes;

    return <div onClick={openSelect} className='border border-gray-700 rounded-lg overflow-hidden relative'>
        <div className='absolute center right-4 top-4'>
            <Icon name={iconName} color='gray' hoverColor='gray' size={20}/>
        </div>
        <Option label={selectedOption?.label || 'Select'} className={[isOpen ? '' : ' border-b-0']}/>
        {isOpen && options.map((el, index) =>
            <Option className={[index === options.length - 1 ? ' border-b-0' : ' ']}
                    key={el.label + index} onClick={() => {
                handleOptionClick(el);
            }} label={el.label}/>)}
    </div>
}
export default Select;
