import React,{useState} from 'react';

function Library(){
    const image = ["./Images/Librarye/library.jpg","./Images/Librarye/library3.jpg"]
    const [state,setState] = useState(0)

    setInterval(()=>{
        if(state === image.length-1){
            setState(0)
        }else{
            setState(state+1)
        }
    },2000)
    return(
        <div className="LibraryMain">
            <div className="Library">
            <div className="LibraryLeft">
            <img src={"./Images/girl.png"} alt=""/>
            </div>
            <div className="LibraryRight">
            <img src={`${image[state]}`} alt=""/>

            </div>
            </div>
        </div>

    )
}
export default Library