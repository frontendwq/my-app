import React from 'react';
import ListItem from './ListItem';
import Dialog from './Dialog';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [{ id: '0', name: '111', status: 0 }, { id: '1', name: '222', status: 0 }, { id: '2', name: '333', status: 0 },],
      filter: 'all',
    };

    this.addTask = this.addTask.bind(this);
    this.checkClick = this.checkClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.allClick = this.allClick.bind(this);
    this.activeClick = this.activeClick.bind(this);
    this.completedClick = this.completedClick.bind(this);
    this.clearComClick = this.clearComClick.bind(this);
  }
  addTask(item) {
    const listItems = this.state.listItems.slice();
    listItems.push(item);
    this.setState({
      listItems: listItems,
    });
  }
  checkClick(item) {
    const listItems = this.state.listItems.slice();
    for (let i = 0, l = listItems.length; i < l; i++) {
      if (listItems[i].id === item.id) {
        listItems[i].status = listItems[i].status === 0 ? 1 : 0;
        break;
      }
    }
    this.setState({
      listItems: listItems,
    });
  }
  handleDelete(item) {
    const listItems = this.state.listItems.slice();
    for (let i = 0, l = listItems.length; i < l; i++) {
      if (listItems[i].id === item.id) {
        listItems.splice(i, 1);
        break;
      }
    }
    this.setState({
      listItems: listItems,
    });
  }
  allClick() {
    this.setState({
      filter: 'all',
    });
  }
  activeClick() {
    this.setState({
      filter: 'active',
    });
  }
  completedClick() {
    this.setState({
      filter: 'completed',
    });
  }
  clearComClick() {
    const listItems = this.state.listItems.filter((item, index) => { return item.status === 0 });
    this.setState({
      listItems: listItems,
    });
  }
  render() {
    const filter = this.state.filter;
    const listItems = this.state.listItems.slice();
    let filterItems = [];
    const number = listItems.length > 0 ? listItems.length : 0;
    const anum = listItems.filter((item) => item.status === 0).length;
    const cnum = listItems.filter((item) => item.status === 1).length;
    if (filter === 'all') {
      filterItems = listItems;
    } else if (filter === 'active') {
      filterItems = listItems.filter((item) => item.status === 0);
    } else if (filter === 'completed') {
      filterItems = listItems.filter((item) => item.status === 1);
    }
    return (
      <div className='todolist'>
        <Dialog addTask={this.addTask} number={number} className='t-header'></Dialog>
        <ul className='t-body'>
          {filterItems.map((item) => {
            return <ListItem key={item.id} item={item} checkClick={this.checkClick} handleDelete={this.handleDelete}></ListItem>
          })}
        </ul>
        <div className='t-footer'>
          <span style={{ marginRight: '20px' }}>{anum} items left</span>
          <button className={`filter-btn ${filter === 'all' ? 'clicked-btn' : ''}`} onClick={this.allClick}>All</button>
          <button className={`filter-btn ${filter === 'active' ? 'clicked-btn' : ''}`} onClick={this.activeClick}>Active</button>
          <button className={`filter-btn ${filter === 'completed' ? 'clicked-btn' : ''}`} onClick={this.completedClick}>Completed</button>
          <button style={{ display: cnum > 0 ? '' : 'none' }} onClick={this.clearComClick}>Clear completed</button>
        </div>
      </div>
    );
  }
};

export default TodoList;