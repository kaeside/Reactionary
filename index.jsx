var React = require('react');
var ReactDOM = require('react-dom');

var BoardReactor = React.createClass({

    onAddInputChanged: function(){
        console.log('value changed');
    },

    onAddClick: function(event) {
        event.preventDefault();
        console.log('clicked!')
    },

    render: function(){
        return (
            <div>
                <Board data={this.props.data}
                    changeInput={this.onAddInputChanged}
                    clicky={this.onAddClick} />
            </div>
        )
    }

});

var Board = function(props){
    var listsArray = [];
    console.log(props.data.lists);
    for (var i = 0; i < props.data.lists.length; i++) {
        listsArray.push(<List data={props.data.lists[i]} changeInput={props.changeInput} clicky={props.clicky}/>);
    };


    return (
        <div className='Board'>
            <h1>{props.data.title}</h1>
            <div>{listsArray}</div>
        </div>
    )
};

var List = function(props) {
    var cardsArray = [];
    for (var i = 0; i < props.data.cards.length; i++) {
        cardsArray.push(<Cards data={props.data.cards[i]}/>);
    }
    return (
        <div>
            <h1>{props.data.title} {props.hotdog}</h1>
            <ul>{cardsArray}</ul>
            <form>
                <input type="text" placeholder="Write your name" onChange={props.changeInput}/>
                <input type="submit" onClick={props.clicky}/>
            </form>
        </div>
    )
};

var Cards = function(props) {
    return (
        <li>{props.data}</li>
    )
};

var seed = {
    title: 'Board title',
    lists: [
        {
            title: 'List 1 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        }, {
            title: 'List 2 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <BoardReactor data={seed}/>, document.getElementById('app'));
});
