import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [bmiMessage, setBmiMessage] = useState(''); 
  const [display, setDisplay] = useState(true)

  console.log(height);
  const [show, setShow] = useState(false);

  const handleClose = () =>{ 
    setShow(false);
    handleReset();
  }

  const handleShow = (e) => { 
    setShow(true);
 
   const result = weight/Math.pow((height)/100,2);
   

   let message = ''; 

      if(weight && height){
            if (result < 18.5) { 
                message = 'You are Underweight'; 
            } else if (result >= 18.5 && result < 25) { 
                message = 'You are Normal weight'; 
            } else if (result >= 25 && result < 30) { 
                message = 'You are Overweight'; 
            } else { 
                message = 'You are Obese'; 
            } 
            setBmiMessage(message); 
            setBmi(result.toFixed(0))
            setDisplay(true)
          }
      else{
        setDisplay(false)
        toast.error(' No Valid Inputs!')
          
      }
        
  }

  
  const handleReset = () => {
   setHeight(0)
   setWeight(0)
   setBmi(0)
   setBmiMessage('')
   
    console.log('clicked');
  }


  return (
    <div className='d-flex justify-content-center align-items-center'>
{display &&
    <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-center'>Your BMI : {bmi}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {bmiMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} className='btn btn-warning bg-orange-400'>
              Close
            </Button>
            <Button onClick={handleClose} className='btn btn-warning bg-orange-400'>Understood</Button>
          </Modal.Footer>
        </Modal>
    </div>}

      <div className='rounded-xl bg-slate-200 shadow-2xl h-96 mt-16 p-6 pt-0 '>

        <div className=' flex justify-center align-middle'>
          <h1 className='font-sans mt-10 text-3xl text-orange-500'>Calculate Your BMI</h1>
        </div>

        <div className='mt-8'>
        <TextField id="standard-basic" value={weight || ''} onChange={(e) => {setWeight(e.target.value)}} label="WEIGHT kg " variant="standard" className='w-100'/>
        </div>

        <div className='mt-8'>
        <TextField id="standard-basic" value={height || ''} onChange={(e) => {setHeight(e.target.value)}} label="HEIGHT cm " variant="standard" className='w-100'/>
        </div>

        <div className='mt-12 flex justify-center'>
        <Button onClick={handleShow} className='btn btn-warning bg-orange-400 me-3 text-black'>Calculate</Button>
        <Button onClick={handleReset} className='text-black' variant='primary'>Reset</Button>
        </div>
      </div>
       <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        Transition="zoom"
        />
    </div>
  );
}

export default App;
 
