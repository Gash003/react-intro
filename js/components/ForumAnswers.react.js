var ForumAnswers = React.createClass({

    _onMarkCorrect: function(id) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });
    },

    render: function() {
        var allAnswers = this.props.allAnswers;
        var answsers = [];

        for(var key in allAnswers) {
            answsers.push(
                <ForumAnswer key={key} id={key} answer={allAnswers[key]} onMarkCorrect={ this._onMarkCorrect }/>
            );
        }

        return (
            <div>
                { answsers }
            </div>
        );
    }

});