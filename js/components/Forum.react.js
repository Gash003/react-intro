var Forum = React.createClass({

    getInitialState: function () {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't it about time travel?",
                    correct: false
                },
                "2": {
                    body: "Tools used to build front-end applications",
                    correct: false
                },
                "3": {
                    body: "Synonim for 'respond'",
                    correct: false
                }
            }
        };
    },

    render: function () {

        //state --> Internal property of React object, that holds its state
        return (
            <div>
                <ForumHeader></ForumHeader>

                <div className="container">
                    <ForumQuestion />
                    <hr/>
                    <ForumAnswers allAnswers={this.state.allAnswers} />
                    <hr/>
                    <h4>Add an Answer</h4>
                    <ForumAddAnswerBox/>
                </div>
            </div>
        );
    }
});