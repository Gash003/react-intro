var ForumAddAnswerBox = React.createClass({
    getInitialState: function() {
        return {
            value: ''
        };
    },

    _onChange: function(event) {
        this.setState({
            value: event.target.value
        });
    },

    _addAnswer: function() {
        this.props.onAddAnswer(this.state.value);
    },

    render: function() {
        return (
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8" onChange={ this._onChange } />
                &nbsp;<input type="button" className="btn btn-primary" value="Add" onClick={ this._addAnswer } />
            </div>
        );
    }
});