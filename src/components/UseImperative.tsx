import {useRef} from 'react'
import Modal from './Modal'

const UseImperativeHandle = () => {

    const modalRef = useRef()

    const handleOpenModal = () => {
        modalRef.current.openModal()
    }

    console.log('parent rendered')

  return (
		<div className="main">
			<h1>UseImperativeHandle</h1>

            <p>Parent Component</p>
            <Modal ref={modalRef}/>
            <button onClick={handleOpenModal}>Open</button>
		</div>
	);
}

export default UseImperativeHandle