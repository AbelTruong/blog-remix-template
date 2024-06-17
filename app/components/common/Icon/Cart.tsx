type Props = {
    [key: string]: any
}

function Cart(props: Props) {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                viewBox="0 0 23 22"
                fill="none"
            >
                <g clipPath="url(#clip0_2654_113992)">
                    <path
                        d="M16.627 15.8125H6.81289L4.41523 2.62969C4.38718 2.47182 4.30483 2.32871 4.18242 2.22514C4.06002 2.12157 3.90526 2.06404 3.74492 2.0625H2.18945"
                        stroke={props.stroke || 'black'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.6875 19.25C8.63674 19.25 9.40625 18.4805 9.40625 17.5312C9.40625 16.582 8.63674 15.8125 7.6875 15.8125C6.73826 15.8125 5.96875 16.582 5.96875 17.5312C5.96875 18.4805 6.73826 19.25 7.6875 19.25Z"
                        stroke={props.stroke || 'black'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.623 19.25C17.5723 19.25 18.3418 18.4805 18.3418 17.5312C18.3418 16.582 17.5723 15.8125 16.623 15.8125C15.6738 15.8125 14.9043 16.582 14.9043 17.5312C14.9043 18.4805 15.6738 19.25 16.623 19.25Z"
                        stroke={props.stroke || 'black'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.18359 12.375H16.9773C17.2987 12.376 17.6102 12.2636 17.8569 12.0578C18.1037 11.8519 18.27 11.5656 18.3266 11.2492L19.375 5.5H4.9375"
                        stroke={props.stroke || 'black'}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2654_113992">
                        <rect width={22} height={22} fill="white" transform="translate(0.8125)" />
                    </clipPath>
                </defs>
            </svg>
        </span>
    )
}

export default Cart
