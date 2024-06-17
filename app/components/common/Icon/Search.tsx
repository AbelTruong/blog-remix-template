import { Iconable } from '~/types'

function Search(props: Iconable = {}) {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 24"
                className="w-4 h-4"
            >
                <path
                    stroke={props?.stroke || '#000000'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.688 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM17.256 16.444L21.812 21"
                ></path>
            </svg>
        </span>
    )
}

export default Search
