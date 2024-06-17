type Props = {
    [key: string]: any
}

function Clock(props: Props) {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
            >
                <path
                    stroke="#252525"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M12.813 21.5a9 9 0 100-18 9 9 0 000 18z"
                ></path>
                <path
                    stroke="#252525"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.813 7.25v5.25h5.25"
                ></path>
            </svg>
        </span>
    )
}

export default Clock
