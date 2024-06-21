import React from 'react'

const ScrollToTop = React.memo(() => {
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="hidden transition-property: all duration-200 ease-linear cursor-pointer opacity-100 hover:opacity-60 fixed bottom-[100px] left-[20px] z-[20] scroll-to-top w-[40px] h-[40px] bg-primary justify-center items-center rounded-full"
    >
      <span className="svg-element">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5625 12.5L10.8125 6.25L17.0625 12.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
})

ScrollToTop.displayName = 'ScrollToTop'

export default ScrollToTop
