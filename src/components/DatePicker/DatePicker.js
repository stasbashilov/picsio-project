import React from "react";
import { DateRange } from 'react-date-range';

import './DatePicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class CustomDatePicker extends React.Component {
  state = {
    isVisible: false,
    selectionRange: {
      startDate: new Date(),
      endDate: new Date(),
      color: '#0FB2AB',
      key: 'selection',
    }
  }

  handleSelect = (ranges) => {
    this.setState({

      selectionRange: {
        ...this.state.selectionRange,
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate
      }
    })
  }

  handlePickerShow = () => this.setState({ isVisible: true })
  handlePickerClose = () => this.setState({ isVisible: false })

  render() {
    const className = `${this.state.isVisible ? 'datepicker_close datepicker_close--rotate' : 'datepicker_close'} `;

    return (
      <div className='container'>
        <div className={className} onClick={this.state.isVisible ? this.handlePickerClose : this.handlePickerShow}></div>
        
        <div className='react-datepicker__input-container' onClick={this.handlePickerShow}>
          {this.state.selectionRange.startDate.toLocaleDateString()}
          {' - '}
          {this.state.selectionRange.endDate.toLocaleDateString()}
        </div>
       
        {this.state.isVisible ? <div className='datepicker'>
            <DateRange
              ranges={[this.state.selectionRange]}
              onChange={this.handleSelect}
            />
          </div> : null}
      </div>
    )
  }
}

export default CustomDatePicker