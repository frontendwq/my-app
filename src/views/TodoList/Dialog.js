import React from 'react';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.mytext = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  handleClick() {
    const value = this.mytext.current.value;
    const number = this.props.number; console.log(value, number);
    if (value) {
      this.props.addTask({
        id: number,
        name: value,
        status: 0,
      });
      this.mytext.current.value = '';
    }
  }
  keyPress(e) {
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像，react里的事件对象为 SyntheticEvent（合成对象，e.keyCode === 13为false）。
      this.handleClick();
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <input type='text' ref={this.mytext} placeholder='请输入' onKeyPress={this.keyPress}></input>
        {/* <button onClick={this.handleClick}>submit</button> */}
        <input type='button' value='Save Task' onClick={this.handleClick}></input>
      </div>
    );
  }
};

export default Dialog;