import React from 'react'

const ServiceTitle = ({name}) => {
  return (
    <div className='services-page'>
        <div className='section-title'>
            <h3>{name}  <span></span></h3>
            <div className='section-line'></div>
        </div>
    </div>
  )
}

export default ServiceTitle