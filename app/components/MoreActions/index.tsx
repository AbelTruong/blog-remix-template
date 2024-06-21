import React from 'react'
import { showMore } from '~/assets/images'

const MoreActions = React.memo(() => {
  const handleShowMoreActions = () => {
    alert('Are you OKE!')
  }

  return (
    <div
      className="more-actions"
      onClick={() => handleShowMoreActions()}
      onKeyDown={() => handleShowMoreActions()}
      tabIndex={0}
      role="button"
    >
      <img src={showMore} alt="more action" />
    </div>
  )
})

MoreActions.displayName = 'MoreActions'

export default MoreActions
