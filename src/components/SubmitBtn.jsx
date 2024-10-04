import { useNavigation } from "react-router-dom"

const SubmitBtn = ({text}) => {
    const  navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

  return (
    <button className='btn btn-contact' type='submit' disabled={isSubmitting} >
        { 
            isSubmitting ?  <> 
                <span></span> sending
            </> : text || 'submit'
        }
    </button>
  )
}

export default SubmitBtn