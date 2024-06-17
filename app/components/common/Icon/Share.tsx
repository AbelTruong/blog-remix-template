type Props = {
    [key: string]: any
}

function Share(props: Props) {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
            >
                <path
                    d="M5.8125 12.5C7.19321 12.5 8.3125 11.3807 8.3125 10C8.3125 8.61929 7.19321 7.5 5.8125 7.5C4.43179 7.5 3.3125 8.61929 3.3125 10C3.3125 11.3807 4.43179 12.5 5.8125 12.5Z"
                    stroke={props.stroke || 'black'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.5625 18.125C15.9432 18.125 17.0625 17.0057 17.0625 15.625C17.0625 14.2443 15.9432 13.125 14.5625 13.125C13.1818 13.125 12.0625 14.2443 12.0625 15.625C12.0625 17.0057 13.1818 18.125 14.5625 18.125Z"
                    stroke={props.stroke || 'black'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.5625 6.875C15.9432 6.875 17.0625 5.75571 17.0625 4.375C17.0625 2.99429 15.9432 1.875 14.5625 1.875C13.1818 1.875 12.0625 2.99429 12.0625 4.375C12.0625 5.75571 13.1818 6.875 14.5625 6.875Z"
                    stroke={props.stroke || 'black'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.4609 5.72656L7.91406 8.64844"
                    stroke={props.stroke || 'black'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.91406 11.3516L12.4609 14.2734"
                    stroke={props.stroke || 'black'}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    )
}

export default Share
