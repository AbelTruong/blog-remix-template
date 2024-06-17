type Props = {
    [key: string]: any
}

function Info(props: Props) {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
            >
                <path
                    fill="#006BB6"
                    d="M10.813 1.875A8.125 8.125 0 1018.937 10a8.14 8.14 0 00-8.125-8.125zm-.157 3.75a.937.937 0 110 1.875.937.937 0 010-1.875zm.781 8.75h-.624a.624.624 0 01-.626-.625V10a.625.625 0 110-1.25h.626a.625.625 0 01.624.625v3.75a.624.624 0 110 1.25z"
                ></path>
            </svg>
        </span>
    )
}

export default Info
