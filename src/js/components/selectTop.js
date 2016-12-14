import React, {Component} from 'react';

class SelectTop extends Component{
  render() {
    const styles = {
      container: {
        width: '300px',
        backgroundColor: 'hsl(0,0%,37%)',
        align: 'center',
        height: '60px',
        margin: 'auto',
        marginTop: '40px'
      },
      text:{
        color: 'white',
        textAlign: 'center',
        fontSize: '28pt',
        padding: '6px'
      }
    };

    return(
      <div style={styles.container}>
        <div style={styles.text}>Appointments</div>
      </div>
    )
  }
};

export default SelectTop;
