var Header = React.createClass({
  render: function(){
    return(
      <nav>
        <h1>NavBit</h1>
        {this.props.children}
      </nav>
    );
  }
});
var Clock = React.createClass({
  render: function(){
    return (
      <span>{new Date().toLocaleTimeString()}</span>
    );
  }
});
var List = React.createClass({
  render: function(){
    return (
      <ul>
        <li>{this.props.fName}</li>
        <li>{this.props.lName}</li>
        <li>{this.props.age}</li>
      </ul>
    );
  }
});
var Content = React.createClass({
  render: function(){
    return(
      <div>
      <Header>
        <hr/>
        <h2>{this.props.h2}</h2>
        <Clock/>
      </Header>
      <hr/>
      <List fName={"Petter"} lName={"Lopez"} age={30} />
      </div>
    );
  }
});
React.render(<Content h2="This is H2."/>, document.getElementById('root'));
