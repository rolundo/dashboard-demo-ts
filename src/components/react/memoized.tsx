import { memo, useRef } from 'react'

function Memoized() {
  const renderCount = useRef(0)
  return (
    <div>
      <p>
        {`This component's props do not change, so I have rendered: ${renderCount.current++} times`}
      </p>
    </div>
  )
}
export default memo(Memoized)
