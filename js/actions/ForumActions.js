var ForumActions = {
    addNewAnswer: function (answerText) {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_ADDED,
            newAnswer: answerText
        });
    },
    markAnswerCorrect: function (id) {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
            id: id
        });
    }
};