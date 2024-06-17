type Props = {
    [key: string]: any
}

function Edit(props: Props) {
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
                    fill="#252525"
                    d="M17.688 16.25H9.82l6.438-6.43 2.055-2.062a1.242 1.242 0 000-1.766L14.82 2.5a1.258 1.258 0 00-1.765 0L3.68 11.875a1.243 1.243 0 00-.368.883v3.492a1.25 1.25 0 001.25 1.25h13.125a.625.625 0 100-1.25zM4.563 12.758l7.5-7.5 3.492 3.492-7.5 7.5H4.563v-3.492z"
                ></path>
            </svg>
        </span>
    )
}

export default Edit
