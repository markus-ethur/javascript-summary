import React, { useCallback, useEffect, useState } from 'react'

const UseMemoVSUseCallback = () => {

  const [app] = useState();

  // prevent memory-leak / looping
  const startApp = useCallback((t: string) => {
    console.log(app, t);
  }, [app])

  useEffect(() => {
    startApp('t');
  }, [startApp])


  return (
    <div>UseMemoVSUseCallback</div>
  )
}

export default UseMemoVSUseCallback;