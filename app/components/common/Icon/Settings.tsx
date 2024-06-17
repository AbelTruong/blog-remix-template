type Props = {
    [key: string]: any
}

function Settings(props: Props) {
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.813 17a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                ></path>
                <path
                    stroke="#252525"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18.034 6.603c.238.219.463.444.675.675l2.56.366c.417.724.738 1.5.956 2.306l-1.556 2.072s.028.637 0 .956l1.556 2.072a9.585 9.585 0 01-.956 2.306l-2.56.366s-.44.46-.675.675l-.365 2.56c-.725.416-1.5.738-2.307.955l-2.072-1.556a5.434 5.434 0 01-.956 0l-2.072 1.556a9.584 9.584 0 01-2.306-.956l-.365-2.56a17.255 17.255 0 01-.675-.674l-2.56-.366A9.677 9.677 0 013.4 15.05l1.556-2.072s-.028-.637 0-.956L3.4 9.95a9.582 9.582 0 01.956-2.306l2.56-.366c.218-.231.443-.456.675-.675l.365-2.56a9.676 9.676 0 012.306-.956l2.072 1.557c.318-.028.638-.028.957 0l2.071-1.557a9.582 9.582 0 012.307.957l.365 2.559z"
                ></path>
            </svg>
        </span>
    )
}

export default Settings
