import React from 'react';
import { useState,useRef } from 'react';

import Post from './Post'
function Form() {
    const [isOpen,setIsOpen]= useState(false)
    const [title,setTitle]= useState("")
    const [image,setImage]= useState(null)
    const imageRef= useRef()

    const handleIsOpen = () => {
        document.body.style.background = "#DED0B6"
        document.body.style.opacity="0.9"
     setIsOpen(true)
    }
    const handleClose = () => {
        document.body.style.background="white"
        setIsOpen(false)

       }
    //storing data from the form
       const [post,setPost]= useState([])
       const handlePost = (e) => {
        e.preventDefault()
        const newPost={title,image}
        console.log(newPost)
        if(title != "" && image != null) {
            setPost([newPost,...post])
            setTitle(" ")
            imageRef.current.value = null
            setIsOpen (false)
    }
}
  return ( <div>
      <button onClick={handleIsOpen} className='w-[60px] rounded-full pb-4 h-[60px] bg-blue-600 text-white text-5xl fixed right-4 bottom-4 '> + </button>
<div style={{ display: isOpen === true ? "block" : "none"}} className='bg-yellow-900
 px-10 pb-10 mx-[30%] rounded mt-6 absolute hidden'>

<i  onClick={handleClose} class="fa-solid ml-[470px] text-white text-4xl fa-xmark"></i>
    <form>
       <input value={title} onChange={(event) =>{setTitle(event.target.value);}}className='h-[50px] w-[300px] ' type="text"  placeholder='Enter title'/>
         <br/>
    <input ref={imageRef} onChange={(e)=>{setImage(e.target.files[0]);}}
    className='mt-5 file:bg-purple-500 file:border-0 file:p-3 file:rounded' type="file"/>
    <br/>
     <button onClick={handlePost} className='bg-white mt-10 px-10 text-3xl py-2 rounded-xl hover:bg-purple-600 '>Post</button>
    </form>
    </div>


  
    {
        post.map ((item ) => {
            
            return isOpen ===true? "" :<Post 
            title = {item.title}
            image = {URL.createObjectURL(item.image)} />

        }
    
  )
  
}
     </div>
  )  
}

 export default Form