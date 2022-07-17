import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { DynDropDown } from './dynDropDown'
export const FeedbackGenerator = () => {
    const [academicYear, setAcademicYear] = useState('')
    const [semester, setSemester] = useState('')

    const chooseFeedback = async () => {
        let data = {
            academicYear: academicYear,
            semester: semester
        }
        const { data: res } = await axios.post('/feedbackGenerator', data)
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
        <Button className='btn btn-primary' onClick={chooseFeedback}>Give Feedback</Button>
    </table>
</div>
    )
}
