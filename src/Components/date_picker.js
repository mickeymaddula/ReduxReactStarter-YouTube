import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class MyDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);

  }



  handleChangeStart(date) {
  //  date=mstartDate;
    this.setState({startDate: date});
    this.props.onStartDateSet(date);

  }

  handleChangeEnd(date) {
    //date=mendDate;
    this.setState({endDate: date});
    this.props.onEndDateSet(date);

  }

  render() {
    return(

<div><DatePicker
    selected={this.state.startDate}
    selectsStart
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart}
/>

<DatePicker
    selected={this.state.endDate}
    selectsEnd
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeEnd}
/>
</div>

);}
}


export default MyDatePicker;
