import { Iconable } from '~/types'

function Subtract(props: Iconable) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 16"
            className="w-3 h-4"
            {...props}
        >
            <g clipPath="url(#clip0_3121_178737)">
                <path
                    fill="#000"
                    d="M11.88 6.26v1.575a.76.76 0 01-.23.559.76.76 0 01-.558.23H1.108a.76.76 0 01-.558-.23.76.76 0 01-.23-.559V6.26a.76.76 0 01.23-.558.76.76 0 01.558-.23h9.984a.76.76 0 01.558.23.76.76 0 01.23.558z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_3121_178737">
                    <path
                        fill="#fff"
                        d="M0 0H11.8V15H0z"
                        transform="matrix(1 0 0 -1 .2 15.216)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Subtract
