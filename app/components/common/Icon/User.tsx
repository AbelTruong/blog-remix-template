type Props = {
    [key: string]: any
}

function User(props: Props) {
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
                    d="M12.813 15.5a6 6 0 100-12 6 6 0 000 12z"
                ></path>
                <path
                    stroke="#252525"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.719 20.75a10.5 10.5 0 0118.187 0"
                ></path>
            </svg>
        </span>
    )
}

export default User
