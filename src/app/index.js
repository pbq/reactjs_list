var React = require('react');
var ReactDOM = require('react-dom');

/* [TODO HEADER] */
var todoHeader = React.createClass({
  render : function(){
    return (<header id="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autofocus />
      </header>);
  }
});

/* [TODO FOOTER] */
var todoFooter = React.createClass({
  render : function(){
    return (
      <footer id="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
});



/* [TODO LIST] */
var todoList = React.createClass({
  render : function(){
    return (
      <div>
        <todoHeader/>
        <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
        </ul>
      </section>
      <todoFooter/>
    </div>
  );
  }
});


ReactDOM.render(<todoList/>, document.getElementById('todoApp'));
