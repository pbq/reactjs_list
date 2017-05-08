import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

// handleChange(date) {
//   this.setState({
//     startDate: date
//   });
// }

const Item = (props) => (
  <div>
    <input ref='editField' value={props.menu} readOnly='true' />
    <DatePicker selected={moment(props.date)} />
  </div>
)

export default Item
