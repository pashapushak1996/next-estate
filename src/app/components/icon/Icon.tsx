import {IconColorsMap, IconColorsType, IconsMap, IconTypes} from "@/app/components/icon/icon.types";
import clsx from "clsx";


interface IconProps {
    name: IconTypes,
    color: IconColorsType,
    hoverColor: IconColorsType
    size: number
}

const Icon: React.FC<IconProps> = ({name, size=24, color, hoverColor}) => {
    const classNames = clsx(`fill-${IconColorsMap[color]} hover:fill-${IconColorsMap[hoverColor]}`);
    return (
        <svg
            className={classNames}
            width={size}
            height={size}
            viewBox={`0 0 ${size + 10} ${size + 10}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={IconsMap[name]}
            ></path>
        </svg>
    );
};

export default Icon;
