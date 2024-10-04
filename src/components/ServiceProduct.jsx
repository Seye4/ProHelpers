
import Option from './Option';
import { useSelector, useDispatch } from 'react-redux'

const ServiceProduct = ({data}) => {   
    
  return (
    <>
        {
            data && 
            data.map( (item, index) => {
                return (
                    
                    <div className='service-product' key={index}>
                        <img src={item.img} alt="" />
                        <article>          
                            <h3>{item.name}</h3>
                            <p>Menge</p>
                            <Option item={item} quantity={item.amount} productId={item.productId} />                        
                        </article>
                    </div>
                )
            }) 
        }
        
    </>
    
  )
}

export default ServiceProduct