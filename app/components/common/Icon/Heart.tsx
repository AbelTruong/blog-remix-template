import { Iconable } from '~/types'

function Heart(props: Iconable) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill={props.fill || 'none'}
            {...props}
        >
            <path
                stroke={props.stroke || 'currentColor'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.813 20.75S3.437 15.5 3.437 9.125a4.875 4.875 0 019.376-1.875v0a4.875 4.875 0 019.374 1.875c0 6.375-9.375 11.625-9.375 11.625z"
            ></path>
        </svg>
    )
}

export default Heart
