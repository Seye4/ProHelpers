import AvailableProduct from '../components/AvailableProduct'

const ServiceContent = ({data}) => {

    // const {id,name, picture, info} = data
    // console.log(data.SubServices);
    

    if (!data) {
        return (
            <h4 style={{textAlign: 'center'}}> There seems to be an error </h4>
        )
    }

  return (
    <div className='section product-gap'>
        { data.SubServices.map((item) => {
                return <AvailableProduct key={item.subServiceName} data={item}  />
            })
        }          
    </div>
  )
}

export default ServiceContent