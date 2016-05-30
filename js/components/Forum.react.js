var Forum = React.createClass({

    getInitialState: function () {

        return {
            allAnswers: ForumStore.getAnswers()
        };
    },

    componentDidMount: function() {
        ForumStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    },

    render: function () {

        //state --> Internal property of React object, that holds its state
        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr/>
                    <ForumAnswers allAnswers={this.state.allAnswers} />
                    <hr/>
                    <h4>Add an Answer</h4>
                    <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer } />
                </div>
            </div>
        );
    },

    _onAddAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
});