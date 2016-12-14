import React, {Component} from 'react';

class TimeSlot extends Component{
  render(){
    const styles = {
      container: {
        width: '298px',
        backgroundColor: 'hsl(0,0%,98%)',
        align: 'center',
        height: '60px',
        margin: 'auto',
        border: '1px solid',
        borderTop: 'none',
        borderColor: 'hsl(0,0%,85%)'
      },
      text:{
        textAlign: 'center',
        fontSize: '18pt',
        paddingTop: '15px'
      }
    };

    return(
      <div style={styles.container}>
        <div style={styles.text}>
          {this.props.time.value}
        </div>
      </div>
    )
  }
}

export default TimeSlot;
