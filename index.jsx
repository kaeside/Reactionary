var React = require('react');
var ReactDOM = require('react-dom');

var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageURL} />
                <div className="person-job">{this.props.job}</div>
            </div>
        );
    }
});


/*macDaddyElement - jsonData...
render everything...doc ready

board(props)
    title = props.title
    loops to create 2 lists

List(props == listArray)
props.title
loop to create 1 list of 3 cards

Card....something to create a single list item.


var Card = function(props){
    return (
            <li className='task-name'>{props.name}</li>
    )
};
*/
var Cards = function(props){
    return(
        <li>{props.data}</li>
    )
};

var List = function(props){
    var cardsArray = [];
    for (var i=0; i<props.data.cards.length; i++) {
        cardsArray.push(<Cards data={props.data.cards[i]}/>);
    }
    return (
        <div>
        <h1>{props.data.title} {props.hotdog}</h1>
        <ul>{cardsArray}</ul>
    </div>
    )
};


var Board = function(props){
    var listsArray = [];
    for (var i=0; i<props.data.lists.length; i++) {
        listsArray.push(<List data={props.data.lists[i]} hotdog={'hot dog!!!'}/>);
    }
    return (
        <div className='Board'>
            <h1>{props.data.title}</h1>
            <div>{listsArray}</div>
        </div>
    )
};

var seed = {
    title: 'Board title',
    lists: [
        {
            title: 'List 1 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        },
        {
            title: 'List 2 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        }
    ]
};




/*
var Person = function(props) {
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageURL}/>
            <div className="person-job">{props.job}</div>
        </div>
    );
};
*/

/*Person.defaultProps = {
    imageURL: "https://lovelace-media.imgix.net/uploads/749/e3255890-cc39-0133-825d-0ed2e059c4cf.jpg?",
    name: "Jon Snow",
    job: "Knowing nothing"
}

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander" imageURL="http://uifaces.com/assets/static/images/zoolander.jpg" job="Male model"/>
            <Person name="Donald Knuth" imageURL="http://www-cs-faculty.stanford.edu/~uno/don.gif" job="Clever chap"/>
            <Person/>
        </div>
    )
}*/
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Board data={seed}/>, document.getElementById('app'));
});
