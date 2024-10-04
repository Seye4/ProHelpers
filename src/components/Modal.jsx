import { useSelector, useDispatch } from 'react-redux'
import service_1 from '../assets/img/service_1.jpg'
import { useRef } from 'react';

// export const toggleModal = () => {  

//     if(!dialogRef.current)
//     {
//         return
//     }

//     dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.show()
   
// }

const Modal = () => {
    
    const dispatch = useDispatch()


  return (
    <dialog className='modal' ref={dialogRef}>
            <div>
                <button>close</button>
                <ul>
                    <li className='modal-list'>
                        <img className='img' src={service_1} alt="" />
                        <p>Accordion</p>
                        <p>$34</p>
                        <div className='modal-input'>
                            <button>-</button>
                                <p>4</p>
                            <button>+</button>
                        </div>
                        
                    </li>
                </ul>
                
                <div>
                    {/* <button onClick={}>Go To Cart</button> */}
                    <button onClick={() => toggleModal("modal")}>Kasse</button>
                </div>
            </div>
        </dialog>
  )
}

export default Modal

{/* <table>
                <thead>
                    <th>Name</th>
                    <th>amount</th>
                    <th>cost</th>
                </thead>
                <tbody>
                    <tr>Accordion</tr>
                    <tr>35$</tr>
                    <tr>120$</tr>
                    <tr><button>+</button></tr>
                    <tr><button>-</button></tr>
                    <tr>Accordion</tr>
                    <tr>35$</tr>
                    <tr>120$</tr>
                    <tr><button>+</button></tr>
                    <tr><button>-</button></tr>
                    <tr>Accordion</tr>
                    <tr>35$</tr>
                    <tr>120$</tr>
                    <tr><button>+</button></tr>
                    <tr><button>-</button></tr>
                    
                </tbody>
            </table> */}