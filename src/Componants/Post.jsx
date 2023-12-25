 
 function Post(props){
  return <div className="flex justify-center">
    

    <div className="border-2 mt-4 border-gray-500 h-[300px]">
        <img className="props" src={props.image} />
        <p>{props.title}</p>

    </div>
  </div>

 }

 export default Post