import { DrawerProps } from '~/types'
import Close from '../Icon/Close'

function Drawer(props: DrawerProps) {
  const { heading, children } = props
  const closeDrawer = () => {
    document.body.classList.remove('drawer-active')
  }

  return (
    <div>
      <div
        role="button"
        onClick={closeDrawer}
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            closeDrawer()
          }
        }}
        tabIndex={0}
        className="cursor-pointer drawer-overlay overlay fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[99] opacity-0 invisible transition-property: all duration-200 ease-linear"
      ></div>
      <div className="rounded-lg md:rounded-none overflow-hidden drawer-content main-content w-full fixed md:w-[450px] xxl::w-[520px] bg-white z-[100] top-[100px] md:top-0 bottom-0 right-[-100%] transition-property: all duration-200 ease-linear">
        <div className="h-full">
          <div className="flex flex-col justify-start h-full">
            <div className="flex flex-row justify-between gap-4 pt-7 px-4 w-full">
              <div className="flex flex-col items-start gap-[6px] self-stretch">
                <p className="text-lg font-bold">{heading || 'Drawer'}</p>
              </div>
              <button className="icon cursor-pointer drawer-close-button" onClick={closeDrawer}>
                <Close style={{ width: 24, height: 24 }} />
              </button>
            </div>
            <div className="h-full px-4 pt-4 w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
