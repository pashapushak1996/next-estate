export type IconTypes =
    'facebook'
    | 'dashboard'
    | 'heart'
    | 'profile'
    | 'instagram'
    | 'hamburger'
    | 'list'
    | 'close'
    | 'search'
    | 'checkbox'
    | 'checkbox-checked'
    | 'arrow-left'
    | 'arrow-right'
    | 'lamp'
    | 'delete'
    | 'calendar'
    | 'letter'
    | 'phone'
    | 'call'
    | 'home'
    | 'pool'
    | 'wifi'
    | 'winter'
    | 'parking'
    | 'danger'
    | 'safe-box';

export type IconColorsType = 'white' | 'yellow' | 'red' | 'blue' | 'gray';

export const IconColorsMap:{ [key in IconColorsType]: string } ={
    'white':'white',
    'yellow':'yellow-400',
    'red':'red-500',
    'blue':'sky-500',
    'gray':'gray-800'
}

export const IconsMap: { [key in IconTypes]: string } = {
    'facebook': 'M12.8334 12.3749H15.1251L16.0417 8.70825H12.8334V6.87492C12.8334 5.93075 12.8334 5.04159 14.6667 5.04159H16.0417V1.96159C15.7429 1.92217 14.6145 1.83325 13.4228 1.83325C10.9341 1.83325 9.16675 3.35217 9.16675 6.14159V8.70825H6.41675V12.3749H9.16675V20.1666H12.8334V12.3749Z',
    'dashboard': 'M4.21875 11.8125C3.99497 11.8125 3.78036 11.7236 3.62213 11.5654C3.4639 11.4072 3.375 11.1925 3.375 10.9688V4.22046C3.375 3.99668 3.4639 3.78207 3.62213 3.62384C3.78036 3.4656 3.99497 3.37671 4.21875 3.37671H10.9688C11.1925 3.37671 11.4071 3.4656 11.5654 3.62384C11.7236 3.78207 11.8125 3.99668 11.8125 4.22046V10.9688C11.8125 11.1925 11.7236 11.4072 11.5654 11.5654C11.4071 11.7236 11.1925 11.8125 10.9688 11.8125H4.21875ZM16.0312 11.8125C15.8075 11.8125 15.5929 11.7236 15.4346 11.5654C15.2764 11.4072 15.1875 11.1925 15.1875 10.9688V4.22046C15.1875 3.99668 15.2764 3.78207 15.4346 3.62384C15.5929 3.4656 15.8075 3.37671 16.0312 3.37671H22.7796C23.0033 3.37671 23.218 3.4656 23.3762 3.62384C23.5344 3.78207 23.6233 3.99668 23.6233 4.22046V10.9688C23.6233 11.1925 23.5344 11.4072 23.3762 11.5654C23.218 11.7236 23.0033 11.8125 22.7796 11.8125H16.0312ZM4.21875 23.625C3.99497 23.625 3.78036 23.5361 3.62213 23.3779C3.4639 23.2197 3.375 23.005 3.375 22.7813V16.0313C3.375 15.8075 3.4639 15.5929 3.62213 15.4346C3.78036 15.2764 3.99497 15.1875 4.21875 15.1875H10.9688C11.1925 15.1875 11.4071 15.2764 11.5654 15.4346C11.7236 15.5929 11.8125 15.8075 11.8125 16.0313V22.7813C11.8125 23.005 11.7236 23.2197 11.5654 23.3779C11.4071 23.5361 11.1925 23.625 10.9688 23.625H4.21875ZM16.0312 23.625C15.8075 23.625 15.5929 23.5361 15.4346 23.3779C15.2764 23.2197 15.1875 23.005 15.1875 22.7813V16.0313C15.1875 15.8075 15.2764 15.5929 15.4346 15.4346C15.5929 15.2764 15.8075 15.1875 16.0312 15.1875H22.7796C23.0033 15.1875 23.218 15.2764 23.3762 15.4346C23.5344 15.5929 23.6233 15.8075 23.6233 16.0313V22.7813C23.6233 23.005 23.5344 23.2197 23.3762 23.3779C23.218 23.5361 23.0033 23.625 22.7796 23.625H16.0312Z',
    'heart': 'M15.12 3.29077C13.3465 3.29077 11.831 4.55493 10.9984 5.42646C10.1658 4.55493 8.65369 3.29077 6.881 3.29077C3.82554 3.29077 1.69238 5.42054 1.69238 8.46923C1.69238 11.8285 4.34169 13.9997 6.90469 16.0998C8.11469 17.0924 9.367 18.1179 10.3274 19.2552C10.489 19.4455 10.7259 19.5555 10.9747 19.5555H11.0238C11.2734 19.5555 11.5095 19.4447 11.6702 19.2552C12.6323 18.1179 13.8838 17.0915 15.0946 16.0998C17.6568 14.0005 20.3078 11.8293 20.3078 8.46923C20.3078 5.42054 18.1746 3.29077 15.12 3.29077Z',
    'profile': 'M11.423 3.38452C12.4889 3.38452 13.5113 3.80797 14.265 4.56173C15.0188 5.31548 15.4422 6.33779 15.4422 7.40375C15.4422 8.46972 15.0188 9.49203 14.265 10.2458C13.5113 10.9995 12.4889 11.423 11.423 11.423C10.357 11.423 9.33471 10.9995 8.58096 10.2458C7.82721 9.49203 7.40375 8.46972 7.40375 7.40375C7.40375 6.33779 7.82721 5.31548 8.58096 4.56173C9.33471 3.80797 10.357 3.38452 11.423 3.38452ZM11.423 13.4326C15.8642 13.4326 19.4614 15.2312 19.4614 17.4518V19.4614H3.38452V17.4518C3.38452 15.2312 6.98173 13.4326 11.423 13.4326Z',
    'instagram': '"M11.3926 0.917673C12.0858 0.915013 12.7791 0.92198 13.4721 0.938572L13.6564 0.945221C13.8691 0.952821 14.0791 0.96232 14.3327 0.97372C15.3435 1.02122 16.0331 1.18081 16.6383 1.41545C17.2652 1.65674 17.7934 1.98352 18.3216 2.51169C18.8045 2.98629 19.1783 3.56039 19.4169 4.19405C19.6515 4.79917 19.8111 5.48979 19.8586 6.50054C19.87 6.75322 19.8795 6.96411 19.8871 7.1769L19.8928 7.36119C19.9097 8.05389 19.917 8.74679 19.9146 9.43969L19.9156 10.1484V11.3928C19.9179 12.086 19.9106 12.7792 19.8937 13.4722L19.888 13.6565C19.8804 13.8693 19.8709 14.0792 19.8595 14.3329C19.812 15.3436 19.6506 16.0333 19.4169 16.6384C19.179 17.2728 18.8052 17.8473 18.3216 18.3217C17.8466 18.8046 17.2722 19.1784 16.6383 19.417C16.0331 19.6517 15.3435 19.8113 14.3327 19.8588C14.0791 19.8702 13.8691 19.8797 13.6564 19.8873L13.4721 19.893C12.7791 19.9098 12.0858 19.9171 11.3926 19.9148L10.684 19.9158H9.44048C8.74726 19.9181 8.05405 19.9108 7.36103 19.8939L7.17674 19.8882C6.95123 19.88 6.72577 19.8705 6.50038 19.8597C5.48963 19.8122 4.79996 19.6507 4.1939 19.417C3.55998 19.1789 2.98578 18.8051 2.51153 18.3217C2.02805 17.847 1.65394 17.2726 1.41529 16.6384C1.18065 16.0333 1.02106 15.3436 0.973561 14.3329C0.962981 14.1075 0.953481 13.882 0.945062 13.6565L0.940313 13.4722C0.922799 12.7792 0.914882 12.086 0.916564 11.3928V9.43969C0.913912 8.74679 0.92088 8.05389 0.937463 7.36119L0.944112 7.1769C0.951712 6.96411 0.961211 6.75322 0.972611 6.50054C1.02011 5.48884 1.1797 4.80012 1.41434 4.19405C1.65313 3.56008 2.02797 2.98614 2.51248 2.51264C2.98641 2.02888 3.56024 1.65443 4.1939 1.41545C4.79996 1.18081 5.48868 1.02122 6.50038 0.97372L7.17674 0.945221L7.36103 0.940472C8.05372 0.922967 8.74662 0.91505 9.43953 0.916723L11.3926 0.917673ZM10.4161 5.66743C9.78674 5.65853 9.16191 5.7748 8.5779 6.00948C7.99389 6.24416 7.46234 6.59257 7.01415 7.03446C6.56597 7.47636 6.21007 8.00292 5.96716 8.58356C5.72424 9.16419 5.59915 9.78731 5.59915 10.4167C5.59915 11.0461 5.72424 11.6692 5.96716 12.2499C6.21007 12.8305 6.56597 13.3571 7.01415 13.799C7.46234 14.2409 7.99389 14.5893 8.5779 14.8239C9.16191 15.0586 9.78674 15.1749 10.4161 15.166C11.6758 15.166 12.8839 14.6656 13.7747 13.7748C14.6654 12.8841 15.1658 11.676 15.1658 10.4162C15.1658 9.15652 14.6654 7.9484 13.7747 7.05765C12.8839 6.1669 11.6758 5.66743 10.4161 5.66743ZM10.4161 7.56733C10.7946 7.56036 11.1708 7.62889 11.5226 7.76892C11.8744 7.90895 12.1947 8.11768 12.4649 8.38291C12.7351 8.64814 12.9498 8.96455 13.0963 9.31367C13.2429 9.66278 13.3184 10.0376 13.3184 10.4162C13.3185 10.7949 13.2431 11.1697 13.0967 11.5189C12.9502 11.868 12.7357 12.1845 12.4656 12.4498C12.1955 12.7152 11.8752 12.924 11.5235 13.0641C11.1717 13.2043 10.7956 13.2729 10.417 13.2661C9.6612 13.2661 8.93633 12.9658 8.40188 12.4314C7.86742 11.8969 7.56717 11.1721 7.56717 10.4162C7.56717 9.66041 7.86742 8.93554 8.40188 8.40108C8.93633 7.86663 9.6612 7.56638 10.417 7.56638L10.4161 7.56733ZM15.4033 4.2425C15.0969 4.25477 14.807 4.38514 14.5945 4.60631C14.382 4.82748 14.2634 5.12228 14.2634 5.42899C14.2634 5.7357 14.382 6.03051 14.5945 6.25168C14.807 6.47285 15.0969 6.60322 15.4033 6.61548C15.7182 6.61548 16.0203 6.49038 16.243 6.26769C16.4657 6.045 16.5908 5.74297 16.5908 5.42804C16.5908 5.11311 16.4657 4.81108 16.243 4.5884C16.0203 4.36571 15.7182 4.2406 15.4033 4.2406V4.2425Z',
    'hamburger': 'M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z',
    'list': 'M6.66667 21.6667C7.58333 21.6667 8.33333 20.9167 8.33333 20.0001C8.33333 19.0834 7.58333 18.3334 6.66667 18.3334C5.75 18.3334 5 19.0834 5 20.0001C5 20.9167 5.75 21.6667 6.66667 21.6667ZM6.66667 28.3334C7.58333 28.3334 8.33333 27.5834 8.33333 26.6667C8.33333 25.7501 7.58333 25.0001 6.66667 25.0001C5.75 25.0001 5 25.7501 5 26.6667C5 27.5834 5.75 28.3334 6.66667 28.3334ZM6.66667 15.0001C7.58333 15.0001 8.33333 14.2501 8.33333 13.3334C8.33333 12.4167 7.58333 11.6667 6.66667 11.6667C5.75 11.6667 5 12.4167 5 13.3334C5 14.2501 5.75 15.0001 6.66667 15.0001ZM13.3333 21.6667H33.3333C34.25 21.6667 35 20.9167 35 20.0001C35 19.0834 34.25 18.3334 33.3333 18.3334H13.3333C12.4167 18.3334 11.6667 19.0834 11.6667 20.0001C11.6667 20.9167 12.4167 21.6667 13.3333 21.6667ZM13.3333 28.3334H33.3333C34.25 28.3334 35 27.5834 35 26.6667C35 25.7501 34.25 25.0001 33.3333 25.0001H13.3333C12.4167 25.0001 11.6667 25.7501 11.6667 26.6667C11.6667 27.5834 12.4167 28.3334 13.3333 28.3334ZM11.6667 13.3334C11.6667 14.2501 12.4167 15.0001 13.3333 15.0001H33.3333C34.25 15.0001 35 14.2501 35 13.3334C35 12.4167 34.25 11.6667 33.3333 11.6667H13.3333C12.4167 11.6667 11.6667 12.4167 11.6667 13.3334ZM6.66667 21.6667C7.58333 21.6667 8.33333 20.9167 8.33333 20.0001C8.33333 19.0834 7.58333 18.3334 6.66667 18.3334C5.75 18.3334 5 19.0834 5 20.0001C5 20.9167 5.75 21.6667 6.66667 21.6667ZM6.66667 28.3334C7.58333 28.3334 8.33333 27.5834 8.33333 26.6667C8.33333 25.7501 7.58333 25.0001 6.66667 25.0001C5.75 25.0001 5 25.7501 5 26.6667C5 27.5834 5.75 28.3334 6.66667 28.3334ZM6.66667 15.0001C7.58333 15.0001 8.33333 14.2501 8.33333 13.3334C8.33333 12.4167 7.58333 11.6667 6.66667 11.6667C5.75 11.6667 5 12.4167 5 13.3334C5 14.2501 5.75 15.0001 6.66667 15.0001ZM13.3333 21.6667H33.3333C34.25 21.6667 35 20.9167 35 20.0001C35 19.0834 34.25 18.3334 33.3333 18.3334H13.3333C12.4167 18.3334 11.6667 19.0834 11.6667 20.0001C11.6667 20.9167 12.4167 21.6667 13.3333 21.6667ZM13.3333 28.3334H33.3333C34.25 28.3334 35 27.5834 35 26.6667C35 25.7501 34.25 25.0001 33.3333 25.0001H13.3333C12.4167 25.0001 11.6667 25.7501 11.6667 26.6667C11.6667 27.5834 12.4167 28.3334 13.3333 28.3334ZM11.6667 13.3334C11.6667 14.2501 12.4167 15.0001 13.3333 15.0001H33.3333C34.25 15.0001 35 14.2501 35 13.3334C35 12.4167 34.25 11.6667 33.3333 11.6667H13.3333C12.4167 11.6667 11.6667 12.4167 11.6667 13.3334Z',
    'close': 'M19.41 17.9999L27.7 9.70994C27.8638 9.51864 27.9494 9.27256 27.9397 9.02089C27.93 8.76921 27.8256 8.53047 27.6475 8.35238C27.4694 8.17428 27.2307 8.06995 26.979 8.06023C26.7274 8.05051 26.4813 8.13612 26.29 8.29994L18 16.5899L9.70997 8.28994C9.52167 8.10164 9.26627 7.99585 8.99997 7.99585C8.73367 7.99585 8.47828 8.10164 8.28997 8.28994C8.10167 8.47825 7.99588 8.73364 7.99588 8.99994C7.99588 9.26624 8.10167 9.52164 8.28997 9.70994L16.59 17.9999L8.28997 26.2899C8.18529 26.3796 8.10027 26.4899 8.04025 26.614C7.98022 26.738 7.94649 26.8732 7.94117 27.0109C7.93586 27.1486 7.95906 27.2859 8.00934 27.4143C8.05961 27.5426 8.13587 27.6591 8.23332 27.7566C8.33078 27.854 8.44732 27.9303 8.57565 27.9806C8.70398 28.0309 8.84131 28.0541 8.97903 28.0487C9.11675 28.0434 9.25188 28.0097 9.37594 27.9497C9.50001 27.8896 9.61033 27.8046 9.69997 27.6999L18 19.4099L26.29 27.6999C26.4813 27.8638 26.7274 27.9494 26.979 27.9397C27.2307 27.9299 27.4694 27.8256 27.6475 27.6475C27.8256 27.4694 27.93 27.2307 27.9397 26.979C27.9494 26.7273 27.8638 26.4812 27.7 26.2899L19.41 17.9999Z',
    'search': 'M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z',
    'checkbox': 'M3.5 7.875C3.5 6.71468 3.96094 5.60188 4.78141 4.78141C5.60188 3.96094 6.71468 3.5 7.875 3.5H20.125C21.2853 3.5 22.3981 3.96094 23.2186 4.78141C24.0391 5.60188 24.5 6.71468 24.5 7.875V20.125C24.5 21.2853 24.0391 22.3981 23.2186 23.2186C22.3981 24.0391 21.2853 24.5 20.125 24.5H7.875C6.71468 24.5 5.60188 24.0391 4.78141 23.2186C3.96094 22.3981 3.5 21.2853 3.5 20.125V7.875ZM7.875 5.25C7.17881 5.25 6.51113 5.52656 6.01884 6.01884C5.52656 6.51113 5.25 7.17881 5.25 7.875V20.125C5.25 20.8212 5.52656 21.4889 6.01884 21.9812C6.51113 22.4734 7.17881 22.75 7.875 22.75H20.125C20.8212 22.75 21.4889 22.4734 21.9812 21.9812C22.4734 21.4889 22.75 20.8212 22.75 20.125V7.875C22.75 7.17881 22.4734 6.51113 21.9812 6.01884C21.4889 5.52656 20.8212 5.25 20.125 5.25H7.875Z',
    'checkbox-checked': 'M8.54199 3.5C7.38167 3.5 6.26887 3.96094 5.4484 4.78141C4.62793 5.60188 4.16699 6.71468 4.16699 7.875V20.125C4.16699 21.2853 4.62793 22.3981 5.4484 23.2186C6.26887 24.0391 7.38167 24.5 8.54199 24.5H20.792C21.9523 24.5 23.0651 24.0391 23.8856 23.2186C24.7061 22.3981 25.167 21.2853 25.167 20.125V7.875C25.167 6.71468 24.7061 5.60188 23.8856 4.78141C23.0651 3.96094 21.9523 3.5 20.792 3.5H8.54199ZM5.91699 7.875C5.91699 7.17881 6.19355 6.51113 6.68584 6.01884C7.17812 5.52656 7.8458 5.25 8.54199 5.25H20.792C21.4882 5.25 22.1559 5.52656 22.6481 6.01884C23.1404 6.51113 23.417 7.17881 23.417 7.875V20.125C23.417 20.8212 23.1404 21.4889 22.6481 21.9812C22.1559 22.4734 21.4882 22.75 20.792 22.75H8.54199C7.8458 22.75 7.17812 22.4734 6.68584 21.9812C6.19355 21.4889 5.91699 20.8212 5.91699 20.125V7.875ZM19.6615 11.9945C19.8258 11.8302 19.9181 11.6074 19.9181 11.375C19.9181 11.1426 19.8258 10.9198 19.6615 10.7555C19.4972 10.5912 19.2744 10.4989 19.042 10.4989C18.8096 10.4989 18.5868 10.5912 18.4225 10.7555L12.917 16.2628L10.9115 14.2555C10.7472 14.0912 10.5243 13.9989 10.292 13.9989C10.0596 13.9989 9.83679 14.0912 9.67249 14.2555C9.50819 14.4198 9.41589 14.6426 9.41589 14.875C9.41589 15.1074 9.50819 15.3302 9.67249 15.4945L12.2975 18.1195C12.3788 18.201 12.4753 18.2656 12.5816 18.3097C12.6879 18.3539 12.8019 18.3766 12.917 18.3766C13.0321 18.3766 13.146 18.3539 13.2524 18.3097C13.3587 18.2656 13.4552 18.201 13.5365 18.1195L19.6615 11.9945Z',
    'arrow-left': 'M17.2117 3.14509C17.362 2.98597 17.4796 2.79879 17.5576 2.59425C17.6356 2.3897 17.6726 2.17179 17.6664 1.95295C17.6602 1.73411 17.611 1.51864 17.5215 1.31883C17.432 1.11902 17.3041 0.938787 17.145 0.788423C16.9859 0.638059 16.7987 0.520509 16.5941 0.442483C16.3896 0.364457 16.1717 0.327484 15.9528 0.333674C15.734 0.339865 15.5185 0.389098 15.3187 0.478563C15.1189 0.568027 14.9387 0.695971 14.7883 0.85509L0.621653 15.8551C0.329092 16.1645 0.166079 16.5742 0.166079 17.0001C0.166079 17.4259 0.329092 17.8356 0.621653 18.1451L14.7883 33.1468C14.9377 33.3094 15.1179 33.4407 15.3184 33.533C15.519 33.6254 15.7359 33.677 15.9565 33.6849C16.1772 33.6927 16.3972 33.6566 16.6038 33.5787C16.8104 33.5008 16.9994 33.3826 17.16 33.231C17.3205 33.0794 17.4493 32.8975 17.5389 32.6957C17.6285 32.4939 17.6772 32.2763 17.682 32.0555C17.6868 31.8348 17.6477 31.6153 17.5669 31.4098C17.4862 31.2043 17.3654 31.0169 17.2117 30.8584L4.12498 17.0001L17.2117 3.14509Z',
    'arrow-right': 'M18.7883 6.14509C18.638 5.98597 18.5204 5.79879 18.4424 5.59425C18.3644 5.3897 18.3274 5.17179 18.3336 4.95295C18.3398 4.73411 18.389 4.51864 18.4785 4.31883C18.568 4.11902 18.6959 3.93879 18.855 3.78842C19.0141 3.63806 19.2013 3.52051 19.4059 3.44248C19.6104 3.36446 19.8283 3.32748 20.0472 3.33367C20.266 3.33987 20.4815 3.3891 20.6813 3.47856C20.8811 3.56803 21.0613 3.69597 21.2117 3.85509L35.3783 18.8551C35.6709 19.1645 35.8339 19.5742 35.8339 20.0001C35.8339 20.4259 35.6709 20.8356 35.3783 21.1451L21.2117 36.1468C21.0623 36.3094 20.8821 36.4407 20.6816 36.533C20.481 36.6254 20.2641 36.677 20.0435 36.6849C19.8228 36.6927 19.6028 36.6566 19.3962 36.5787C19.1896 36.5008 19.0006 36.3826 18.84 36.231C18.6795 36.0794 18.5507 35.8975 18.4611 35.6957C18.3715 35.4939 18.3228 35.2763 18.318 35.0555C18.3132 34.8348 18.3523 34.6153 18.4331 34.4098C18.5138 34.2043 18.6346 34.0169 18.7883 33.8584L31.875 20.0001L18.7883 6.14509Z',
    'lamp': 'M22.4858 6.10225C20.9969 3.16145 18.1192 0.990866 14.7834 0.276672C11.2901 -0.479533 7.71086 0.332688 4.97635 2.48927C2.22752 4.63185 0.666992 7.83872 0.666992 11.2697C0.666992 14.8967 2.8861 18.6917 6.23623 20.8903V22.0526C6.22191 22.4447 6.2076 23.0469 6.69437 23.537C7.19546 24.0411 7.93993 24.0972 8.52692 24.0972H15.8714C16.6445 24.0972 17.2315 23.8871 17.6324 23.495C18.1764 22.9488 18.1621 22.2487 18.1478 21.8706V20.8903C22.586 17.9635 25.3778 11.7878 22.4858 6.10225Z',
    'delete': 'placeholder for delete',
    'calendar': 'placeholder for calendar',
    'letter': 'M16.6667 3.33325H3.33341C2.41675 3.33325 1.67508 4.08325 1.67508 4.99992L1.66675 14.9999C1.66675 15.9166 2.41675 16.6666 3.33341 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 14.9999V4.99992C18.3334 4.08325 17.5834 3.33325 16.6667 3.33325ZM16.6667 6.66659L10.0001 10.8333L3.33341 6.66659V4.99992L10.0001 9.16658L16.6667 4.99992V6.66659Z',
    'phone': 'M15.5833 1.83325H6.41659C5.4055 1.83325 4.58325 2.6555 4.58325 3.66659V18.3333C4.58325 19.3443 5.4055 20.1666 6.41659 20.1666H15.5833C16.5943 20.1666 17.4166 19.3443 17.4166 18.3333V3.66659C17.4166 2.6555 16.5943 1.83325 15.5833 1.83325ZM6.41659 15.5823V4.58325H15.5833L15.5851 15.5823H6.41659Z',
    'call': 'M16.025 12.7166L13.9084 12.475C13.6595 12.4457 13.4072 12.4733 13.1705 12.5556C12.9338 12.6378 12.7188 12.7727 12.5417 12.95L11.0084 14.4833C8.64269 13.2802 6.71985 11.3573 5.5167 8.99163L7.05837 7.44997C7.4167 7.09163 7.5917 6.59164 7.53337 6.0833L7.2917 3.9833C7.24446 3.57678 7.04936 3.20183 6.74356 2.92984C6.43777 2.65785 6.04262 2.50782 5.63337 2.5083H4.1917C3.25003 2.5083 2.4667 3.29164 2.52503 4.2333C2.9667 11.35 8.65837 17.0333 15.7667 17.475C16.7084 17.5333 17.4917 16.75 17.4917 15.8083V14.3666C17.5 13.525 16.8667 12.8166 16.025 12.7166Z',
    'home': 'M10.7022 28.16V23.5734C10.7022 22.4026 11.6583 21.4535 12.8377 21.4535H17.1489C17.7153 21.4535 18.2585 21.6768 18.6589 22.0744C19.0594 22.472 19.2844 23.0112 19.2844 23.5734V28.16C19.2808 28.6468 19.4731 29.1148 19.8186 29.4603C20.164 29.8057 20.6341 30 21.1244 30H24.0657C25.4395 30.0035 26.7581 29.4643 27.7308 28.5012C28.7034 27.5382 29.25 26.2305 29.25 24.8667V11.8003C29.25 10.6987 28.7581 9.65376 27.9069 8.947L17.901 1.0138C16.1605 -0.377157 13.6667 -0.332247 11.9781 1.12047L2.20052 8.947C1.30911 9.63293 0.776328 10.681 0.75 11.8003V24.8534C0.75 27.6958 3.07107 30 5.93426 30H8.80844C9.82684 30 10.6545 29.1843 10.6619 28.1733L10.7022 28.16Z',
    'pool': 'placeholder for pool',
    'wifi': 'placeholder for wifi',
    'winter': 'M4.5 10.5L9.75 13.5M9.75 13.5L18 18M9.75 13.5L4.5 15M9.75 13.5L9 8.25M31.5 25.5L26.25 22.5M26.25 22.5L18 18M26.25 22.5L27 27.75M26.25 22.5L31.5 21M18 18L9.75 22.5M18 18V7.5M18 18V27.75M18 18L26.25 13.5M9.75 22.5L4.5 25.5M9.75 22.5L4.5 21M9.75 22.5L9 27.75M18 7.5V3M18 7.5L14.25 6M18 7.5L21.75 6M18 27.75V33M18 27.75L21.75 30M18 27.75L14.25 30M26.25 13.5L31.5 10.5M26.25 13.5L31.5 15M26.25 13.5L27 8.25',
    'parking': 'M18 3C26.2845 3 33 9.7155 33 18C33 26.2845 26.2845 33 18 33C9.7155 33 3 26.2845 3 18C3 9.7155 9.7155 3 18 3ZM20.25 10.5H16.5C15.7044 10.5 14.9413 10.8161 14.3787 11.3787C13.8161 11.9413 13.5 12.7044 13.5 13.5V24C13.5 24.3978 13.658 24.7794 13.9393 25.0607C14.2206 25.342 14.6022 25.5 15 25.5C15.3978 25.5 15.7794 25.342 16.0607 25.0607C16.342 24.7794 16.5 24.3978 16.5 24V21H20.25C21.6424 21 22.9777 20.4469 23.9623 19.4623C24.9469 18.4777 25.5 17.1424 25.5 15.75C25.5 14.3576 24.9469 13.0223 23.9623 12.0377C22.9777 11.0531 21.6424 10.5 20.25 10.5ZM20.25 13.5C20.8467 13.5 21.419 13.7371 21.841 14.159C22.2629 14.581 22.5 15.1533 22.5 15.75C22.5 16.3467 22.2629 16.919 21.841 17.341C21.419 17.7629 20.8467 18 20.25 18H16.5V13.5H20.25',
    'danger': 'M9.29941 2.93396C10.4892 2.27414 12.0027 2.70766 12.6676 3.88683L19.0278 14.9251C19.1677 15.2545 19.229 15.5225 19.2465 15.8008C19.2815 16.451 19.054 17.0831 18.6078 17.5695C18.1617 18.0542 17.558 18.3403 16.9019 18.375H4.09404C3.82284 18.3585 3.55163 18.297 3.29792 18.2016C2.02939 17.69 1.41699 16.2508 1.93316 15.0031L8.33708 3.87903C8.55579 3.48799 8.88823 3.15072 9.29941 2.93396ZM10.498 13.3635C10.078 13.3635 9.72809 13.7103 9.72809 14.1274C9.72809 14.5427 10.078 14.8904 10.498 14.8904C10.9179 14.8904 11.2591 14.5427 11.2591 14.1179C11.2591 13.7025 10.9179 13.3635 10.498 13.3635ZM10.498 7.9541C10.078 7.9541 9.72809 8.29137 9.72809 8.70842V11.1613C9.72809 11.5774 10.078 11.9251 10.498 11.9251C10.9179 11.9251 11.2591 11.5774 11.2591 11.1613V8.70842C11.2591 8.29137 10.9179 7.9541 10.498 7.9541Z',
    'safe-box': 'placeholder for safe-box',
};
