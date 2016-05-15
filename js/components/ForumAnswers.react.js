var ForumAnswers = React.createClass({

    render: function() {
        var allAnswers = this.props.allAnswers;
        var answsers = [];

        for(var key in allAnswers) {
            answsers.push(
                <ForumAnswer key={key} id={key} answer={allAnswers[key]} />
            );
        }

        return (
            <div>
                { answsers }
            </div>
        );
    }

});