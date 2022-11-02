import react from 'react';

function Teacher(){
    return(
        <div className="TeachersMain">
            <div className="TeachersHeading"><h1>Teachers</h1></div>
            <div className="Teachers">
            <img src={`./Images/teachers/teachers.jpg`} alt=""/>
            </div>
            <div className="addmission">            <h1><a href="https://forms.gle/QJWNGdg3m7LZjebY8">Apply For Addmission</a></h1>
</div>
        </div>

    )
}
export default Teacher