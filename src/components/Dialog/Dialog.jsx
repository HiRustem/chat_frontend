import React, { forwardRef } from 'react'

const Dialog = forwardRef(({ children }, ref) => {
  return (
    <dialog className='dialog' ref={ref}>
      {children}
    </dialog>
  )
})

export default Dialog