import React from 'react'

const HomeChild = () => {
   let data = useContext(Context)
  return (
    <div>{data}</div>
  )
}

export default HomeChild