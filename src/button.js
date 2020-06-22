import React from 'react';

const Button = (props) => {
    let that = props.props;
    return (<td className={that.state.isPanelActive ? 'active': 'emptyCell'}><button className={that.state.isPanelActive ? 'active': ''}  onClick={(e) => that.handleEvent(e)}>{that.props.value}</button></td>);
}

export default Button;