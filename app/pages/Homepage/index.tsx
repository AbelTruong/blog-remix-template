import { useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/common/Button'
import Drawer from '~/components/common/Drawer'
import Modal from '~/components/common/Modal'
import { NotifyType } from '~/types'

function HomePage() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showDrawer, setShowDrawer] = useState<boolean>(false)

  console.log('🚀🚀🚀 ~ HomePage ~ showDrawer:', showDrawer)
  const { setNotify: notify } = useOutletContext<any>()

  const handleShowNotify = ({ message, status }: NotifyType) => {
    notify({ message, status })
  }

  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <button onClick={() => handleShowNotify({ message: 'Successfully', status: 'success' })}>
          Show notify
        </button>
        <button
          onClick={() => {
            document.body.classList.add('drawer-active')
          }}
        >
          Show Drawer
        </button>
        <button onClick={() => handleShowNotify({ message: 'Nothing here', status: 'warning' })}>
          Show something
        </button>
      </div>
      <Button>Click now</Button>

      {showModal && (
        <Modal
          heading="Confirmation"
          setShowModal={setShowModal}
          primaryButton={
            <button className="h-[46px]" onClick={() => setShowModal(false)}>
              Done
            </button>
          }
        >
          <div className="flex flex-col gap-2">
            <p className="text-base xxl:text-lg font-bold mb-4">
              It looks like you have denied access to your location. To enable location access,
              please follow these steps:
            </p>
            <ol className="text-sm xxl:text-base font-normal flex flex-col gap-[6px] pl-8">
              <li className="list-disc">Open your browser`s settings.</li>
              <li className="list-disc">Find the option for location access.</li>
              <li className="list-disc">Allow location access for our website.</li>
            </ol>
          </div>
        </Modal>
      )}

      <Drawer heading="Something">Content ben trong na ba con </Drawer>
    </div>
  )
}

export default HomePage
