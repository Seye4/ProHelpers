import React from 'react'

const SectionCardOptB = ({data}) => {
  return (
    <div className='section'>

        {/* <div className='section-title'>
            <h3>Ünserer  <span>Leistungen</span></h3>
            <div className='section-line'></div>
        </div> */}

        <article >

          <div className='services-pics'>
              <img className='img service-pic pic1' src={data.picture} alt="" />
              <img className='img service-pic pic2' src={data.picture2} alt="" />
              <img className='img service-pic pic3' src={data.picture3} alt="" />            
          </div>         

        </article>

        <div className='service-content'>
          {/* <p className='detailed-info' style={{ whiteSpace: "pre-wrap" }} >{data.moreInfo}</p>             */}
          <p className='detailed-info' style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{__html:data.moreInfo}} ></p>            
        </div>
          
      </div>
  )
}

export default SectionCardOptB