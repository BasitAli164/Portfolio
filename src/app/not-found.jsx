import React from 'react'

const ErrorPage = async({params}) => {
    console.log("QIE",await params)
    // const para=await params;
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <h1> Page Not  Found </h1>
    </div>
  )
}

export default ErrorPage
