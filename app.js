import react,{useState} from 'react';
function StudentForm(){
    const [student, setStudent]= useState({
        studentName: ""
        studentNumber:"",
        phoneNumber:"",
    });
};
return(
    <div style={{padding:"20px",maxwidth:"100px", margin:"auto"}}>
        <h2>student from</h2>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom:"10px"}}>
                <label>student name:</label>
                <input 
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student name"
                style={{display:"block",width:"100%",padding:"5px"}}
                />
            </div>
            <div style={{marginBottom:"10px"}}>
            <label>student number:</label>
                <input 
                type="text"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                placeholder="Enter student number"
                style={{display:"block",width:"100%",padding:"5px"}}
                /> 
            </div>
            <div style={{marginBottom:"10px"}}>
                <label>phoneNumber:</label>
                <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                style={{display:"block",width:"100%",padding:"5px"}}
                />
            </div>
            <button type="submit" style={{padding:"10px 20px",cursor:"pointer"}}>
                Submit
            </button>

        </form>
        {submittedData && (
            <div style={{marginTop:"20px"}}>
            <h3>submitted Data</h3>
            <p><Strong>Name:</Strong>{submittedData.studentName}</p>
            <p><Strong>Number:</Strong>{submittedData.studentName}</p>
            <p><Strong>phone:</Strong>{submittedData.studentName}</p>
            </div>
        )}
    </div>
);
export default StudentForm;