import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import { DynDropDown } from '../Common/DropdownChoice/dynDropDown'
export const ResultChoice = () => {
    const [academicYear, setAcademicYear] = useState('')
    const [semester, setSemester] = useState('')

    const chooseFeedback = () => {
        window.location.replace("http://localhost:3000/facultyDashboard/results?" + academicYear + "+" + semester)
    }
  return (
    <div style={{backgroundColor:'',width:'100%',height:'100%'}}>
        <table style={{width:'100%'}}>
            <tbody style={{width:'100%'}}>
                <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                    <td style={{flex:'1'}}><label>Academic Year:</label></td>
                    <td style={{flex:'1'}}><DynDropDown onChange={val=>{setAcademicYear(val)}} label='year'/></td>
                </tr>
                <tr class='tdVal' style={{display: 'flex'}}>
                    <td style={{flex:'1'}}><label>Semester:</label></td>
                    <td style={{flex:'1'}}><DynDropDown onChange={val=>{setSemester(val)}} label='semesters'/></td>
                </tr>
            </tbody>
            <Button className='btn btn-primary' onClick={chooseFeedback}>Show Results</Button>
        </table>
    </div>
  )
}
