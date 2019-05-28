import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { hover: false };

    this.checkClick = this.checkClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.mouseOver = this.mouseOver.bind(this);
    // this.mouseOut = this.mouseOut.bind(this);
  }
  checkClick(e) {
    //const checked=e.target.checked; console.log(e,checked)
    //Warning: This synthetic event is reused for performance reasons. If you're seeing this, 
    //you're accessing the property `target` on a released/nullified synthetic event. This is set to null. 
    //If you must keep the original synthetic event around, use event.persist().
    this.props.checkClick(this.props.item);
  }
  handleDelete() {
    this.props.handleDelete(this.props.item);
  }
  // mouseOver() {
  //   this.setState({
  //     hover: true
  //   })
  // }
  // mouseOut() {
  //   this.setState({
  //     hover: false
  //   })
  // }
  render() {
    /* const item = this.props.item;
    let styleObj = item.status === 1 ? { textDecoration: 'line-through', color: '#d9d9d9' } : {};
    return (
      <li style={{ border: '1px solid #ccc' }} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <input type='checkbox' onClick={this.checkClick} defaultChecked={item.status === 1 ? true : false}></input>
        <span style={styleObj}>{item.name}</span>
        <span style={{ display: this.state.hover ? '' : 'none', marginLeft: '320px' }} onClick={this.handleDelete}>删除</span>
      </li>
    ); */
    const item = this.props.item;
    let styleObj = item.status === 1 ? { textDecoration: 'line-through', color: '#d9d9d9' } : {};
    return (
      <li style={styleObj}>
        <input type='checkbox' onClick={this.checkClick} defaultChecked={item.status === 1 ? true : false}></input>
        <span>{item.name}</span>
        <span className='delete-btn' onClick={this.handleDelete}>删除</span>
      </li>
    );
  }
};

export default ListItem;