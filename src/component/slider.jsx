import React from 'react'


function Slider(props){
const [count,setCount] = React.useState(0)
const arr = ["./Images/slides/class.jpg","./Images/slides/class1.jpg","./Images/slides/class3.jpg","./Images/slides/class4.jpg","./Images/slides/class5.jpg","./Images/ptm/ptm.jpg","./Images/ptm/ptm3.jpg"]
const [img,setImg] = React.useState(arr[count])

setInterval(()=>{
   if(count > arr.length-2){
         setCount(0)
        setImg(arr[count])
   }else{
         setCount(count+1)
        setImg(arr[count])
   }
},5000)




    
    return(
       <div className="slider">
        <div  className="slide">
        <img className="Img"  src={img} alt=""/>
        </div>
       </div>
     
    )
}

export default Slider