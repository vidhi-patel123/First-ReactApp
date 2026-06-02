import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div ClassName="text-center">
      <img src={loading} alt="Loading..." />
    </div>
    )
  }

export default Spinner