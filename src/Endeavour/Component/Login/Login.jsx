// import  { useState } from 'react';
import './style.scss'; // Import the CSS file with styles
// import Lottie from 'react-lottie';
// import Lotti from "./Animation - 1711183829487.json";
import {HashLink as Link} from 'react-router-hash-link';
import Log from "../../../assets/log.gif"
// import {HashLink as Link} from 'react-router-hash-link';
const Login = () => {
  // const [attachmentImage, setAttachmentImage] = useState('');
  // const [attachmentExtension, setAttachmentExtension] = useState('');
  // const [isAttachmentVisible, setIsAttachmentVisible] = useState(false);
  // const [isRemoveButtonVisible, setIsRemoveButtonVisible] = useState(false);
  // const [isDragOver, setIsDragOver] = useState(false);

  // const handleAttachmentChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     setAttachmentImage(event.target.result);
  //     setIsAttachmentVisible(true);
  //     setIsRemoveButtonVisible(true);
  //   };

  //   if (file.type.startsWith('image/') || file.type === 'application/pdf') {
  //     setAttachmentExtension('');
  //     reader.readAsDataURL(file);
  //   } else {
  //     setAttachmentImage('');
  //     setAttachmentExtension(`.${file.name.split('.').pop().toUpperCase()}`);
  //   }
  // };

  // const handleRemoveAttachment = () => {
  //   setAttachmentImage('');
  //   setAttachmentExtension('');
  //   setIsAttachmentVisible(false);
  //   setIsRemoveButtonVisible(false);
  // };

  // const handleDragEnter = () => {
  //   setIsDragOver(true);
  // };

  // const handleDragLeave = () => {
  //   setIsDragOver(false);
  // };

  // const handleDrop = () => {
  //   setIsDragOver(false);
  // };

  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className="md:w-[40%] max-w-96 flex justify-center items-center md:m-4 mt-16"
            style={{
                
            }}>
      {/* <Lottie options={{ animationData: Lotti }} background="transparent"  speed={2}  style={{width: "90%", height: "90%", marginTop:"10px"}}  loop autoplay></Lottie> */}
     <img src={Log} className='md:m-8 md:mt-16 ' alt="" />
      </div>
      <div className='md:w-[60%]  flex justify-center items-center'>
    <div className="mail-wrapper  mt-24 my-12 w-full flex justify-center items-center">
      <form className="mail w-auto flex flex-col justify-center items-center">
      <h1 className='text-center text-3xl font-serif '>Log In</h1>
      {/* <input type="text" name="UserName" id="" placeholder='UserName' className='m-2 p-1 border-black border-b-2 w-[90%]'/> */}
      <input type="email" name="email" id="" placeholder='E-Mail' className='m-2 p-1 border-black border-b-2 md:w-[90%]'/>
      <input type="password" name="password" id="" placeholder='Password' className='m-2 p-1 border-black border-b-2 md:w-[90%]'/>
      {/* <input type="number" name="phonenumber" id="" placeholder='Phone-Number' className='m-2 p-1 border-black border-b-2 w-[90%]'/> */}

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5'>

      <button type="submit" className='md:w-[30%] w-[50%] h-8 bg-blue-800 text-white my-2 '>Submit</button>
      <Link to="/register">
      <button type="submit" className='md:w-[120%]  h-8 bg-blue-800 text-white my-2 '>Don`t have an Account!!</button>
      </Link>
      <button className="button bg-white text-black border-none font-serif text-md  ">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
</svg>
  Continue with Google
</button>
</div>

      {/* <Link to="/login"> */}
      {/* <button type="submit" className='w-[50%] h-8 bg-blue-400 text-white my-2 mx-auto'>Already have an Account!!</button> */}
      {/* </Link> */}


        
      </form>
      {/* <img className={`mail-paperclip front ${isAttachmentVisible ? '' : 'hidden'}`} src="https://assets.codepen.io/4175254/paperclip-front.png" alt="" />
      <img className={`mail-paperclip back ${isAttachmentVisible ? '' : 'hidden'}`} src="https://assets.codepen.io/4175254/paperclip-back.png" alt="" /> */}
    </div>
      </div>
      </div>
  );
};

export default Login;