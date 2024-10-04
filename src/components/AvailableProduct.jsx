import ServiceCardInfo from '../components/ServiceCardInfo'

const AvailableProduct = ({data}) => {
    // console.log(data.products);
    
  return (
    <div className="product">
        <h3> {data.subServiceName} </h3>
        <div className='long-line l-line' ></div>
        <p>{data.subServiceInfo}</p>

        <div className="service-list">
            {
                data.products.map(
                    (item, index) => {
                        return (
                            // <ServiceCardInfo amount={props.products.amount} img={props.products.productImg} />
                            <ServiceCardInfo key={index} data={item} />
                        )
                    }
                )
            }
            {/* <ServiceCardInfo amount={amount} img={productImg} /> */}
            
        </div>

        
    </div>
  )
}

export default AvailableProduct