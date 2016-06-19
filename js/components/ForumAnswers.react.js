var ForumAnswers = React.createClass({

    _onMarkCorrect: ForumActions.markAnswerCorrect,

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