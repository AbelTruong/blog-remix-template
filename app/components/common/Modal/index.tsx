import { useEffect } from 'react'
import { useScreen } from '~/hooks'
import { ModalType } from '~/types'

function Modal(props: ModalType) {
  const {
    heading,
    children,
    secondaryButton,
    primaryButton,
    setShowModal,
    className,
    showLine,
    heightChildren,
  } = props

  const screen = useScreen()

  useEffect(() => {
    const closeButton: HTMLElement | null = document.getElementById('modal-close-button')
    closeButton?.focus()
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div
        onClick={handleCloseModal}
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            handleCloseModal
          }
        }}
        role="button"
        tabIndex={0}
        className="cursor-pointer fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[100]"
        aria-labelledby={heading || 'Modal Title'}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 top-auto md:top-[50%] md:left-[50%] md:right-auto md:bottom-auto md:-translate-y-2/4 md:-translate-x-2/4 md:min-h-[200px] md:min-w-[400px] md:max-w-[600px] bg-white z-[100] rounded-t-[20px] md:rounded md:pt-4 pb-4 xxxxl:pt-6 xxxxl:pb-6 ${className}`}
      >
        <div className="flex flex-col md:gap-2">
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              if (screen == 'mobile') {
                handleCloseModal
              }
            }}
            onKeyDown={(e) => {
              if (e.keyCode == 13 && screen == 'mobile') {
                handleCloseModal
              }
            }}
            className="cursor-pointer md:cursor-default rounded-t-[20px] md:rounded-none px-6 md:px-0 pt-3 md:pt-0 pb-4 md:pb-0 bg-primary md:bg-[#fff] text-white md:text-[#252525] shadow-[0_4px_8px_0px_rgba(0,0,0,0.25)] md:shadow-none"
          >
            <div className="icon flex justify-center pb-3 md:pb-0">
              <span className="svg-element">
                <svg
                  width="64"
                  height="4"
                  viewBox="0 0 64 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M2 2H62"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className="flex justify-between items-center md:px-6">
              <span className="font-bold text-lg">{heading || 'Confirm modal'}</span>
              <button
                onClick={() => {
                  if (screen !== 'mobile') handleCloseModal()
                }}
                className="cursor-pointer"
                id="modal-close-button"
              >
                <span className="svg-element">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6791 10.6775L21.8646 21.863"
                      stroke={screen == 'mobile' ? 'white' : '#252525'}
                      strokeWidth="2.3009"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.86 10.6775L10.6745 21.863"
                      stroke={screen == 'mobile' ? 'white' : '#252525'}
                      strokeWidth="2.3009"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          {children && (
            <div
              className={`w-full ${
                heightChildren ? heightChildren : 'h-[200px]'
              } max-h-[510px] md:h-fit flex flex-col justify-center items-center`}
            >
              {showLine && <div className="hidden md:block w-full h-[1px] bg-[#BCBCBC]"></div>}
              <div className="overflow-auto w-full py-6 md:py-2 px-6 xxxxl:px-[32px]">
                {children}
              </div>
              {showLine && <div className="hidden md:block w-full h-[1px] bg-[#BCBCBC]"></div>}
            </div>
          )}
          {(secondaryButton || primaryButton) && (
            <div className="flex justify-end items-end gap-3 pt-0 md:pt-4 px-6 xxxxl:px-[32px]">
              {secondaryButton}
              {primaryButton}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
