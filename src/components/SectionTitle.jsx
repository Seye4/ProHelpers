import React from 'react'

const SectionTitle = ({text1, text2}) => {
  return (
    <div className='section-title'>
            <h3> {text1} <span> {text2} </span></h3>
            <div className='section-line'></div>
    </div>
  )
}

export default SectionTitle