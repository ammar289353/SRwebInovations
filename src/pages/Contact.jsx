import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

  return (
    <>
     <section>
            <div className='h-[45vw] sm:h-[45vw] md:h-[45vw] lg:h-[38vw] w-full text-center relative overflow-hidden'
             style={{
                 backgroundImage: `url('https://img.alicdn.com/imgextra/i4/6000000000490/O1CN01D5fXgg1FUSjXOMz2D_!!6000000000490-0-tbvideo.jpg')`,
                backgroundSize: 'cover'
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                >
                <p className='text-white text-center pt-[20vw] sm:pt-[20vw] md:pt-44 lg:pt-52 text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] '>TECHIGEMS PAKISTAN</p>
                <div
                    className={`absolute top-1/2 mr-[9vw] sm:mr-[8vw] md:mr-[8vw] lg:mr-14 transform transition-transform ${
                     isHovered ? '-translate-y-2' : ''
                    } ${isHovered ? 'left-[38%]' : 'right-[30%]'}`}
                    >
                 <h1
                    className={`text-white text-center text-[7vw] font-bold ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                >
                     Contact Us
                </h1>
                </div>
            </div>
     </section>
     <section className=' flex text-center m-20 ml-48'>
        <div>
        <h1 className='font-bold text-[3vw] pr-12 '>Get in Touch</h1>
        <h3 className='font-bold text-[2vw] text-left py-2'>Email</h3>
        <p className="text-left py-2">mammar6058@gmail.com</p>
        <h3 className='font-bold text-[2vw] text-left  py-2'>Whatsapp</h3>
        <p className="text-left  py-2">03240631513</p>
        <h3 className='font-bold text-[2vw] text-left  py-2'>Contact</h3>
        <p className="text-left  py-2">03180617788</p>
        </div>
    <Paper elevation={10} className='w-[600px] h-[70vh] p-6 rounded-xl'>
        <h1 className='font-bold text-[3vw] '>Send a Message </h1>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-error"
          label="Name"
          placeholder="Enter your name"
          variant="filled"
        />
        <TextField
          required
          id="outlined-error-helper-text"
          label="Email"
          placeholder="Enter your Email"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-error"
          label="Phone"
          variant="filled"
          placeholder="Enter your Phone Number"
        />
        <TextField
          required
          id="filled-error-helper-text"
          label="Subject"
          variant="filled"
          placeholder="Enter Subject of your message"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-error"
          label="Message"
          variant="filled"
          multiline
          rows={4}
        />
        
      </div>
    </Box>
    </Paper>
            </section>
    </>
  )
}

export default Contact
