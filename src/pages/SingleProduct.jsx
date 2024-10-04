import { useLoaderData } from 'react-router-dom';

import axios from 'axios'
import ServiceTitle from '../components/ServiceTitle';
import ServiceContent from './ServiceContent';
import ServiceCard from '../components/ServiceCard';
import SectionCardOptB from '../components/SectionCardOptB';


export const loader = async ({params}) => {
    const id = params
    const res = await axios.get("/db/data.json")
    return res.data[params.id - 1]
  }

const SingleProduct = () => {

    const data = useLoaderData()
    // console.log(data);

  return (
    <>
       <ServiceTitle name={data.name} />
       {
            data.thumbnail === 1 ? <ServiceContent data={data} /> : <SectionCardOptB data = {data} />
        }
    </>
  )
}

export default SingleProduct