var answerData = {
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
};


var ForumStore = Object.create(EventEmitter);
ForumStore.init();

ForumStore.emitChange = function() {
    this.emit('change');
};

ForumStore.getAnswers = function() {
    return answerData;
};

ForumStore.addChangeListener = function(istener) {
    this.on('change', istener);
};

ForumStore.addAnswer = function(newAnswer) {
    answerData[Object.keys(answerData).length + 1] = {
        body: newAnswer,
        correct: false
    };
    this.emitChange();
};

ForumStore.markAsCorrect = function(id) {
    for(var key in answerData) {
        if(answerData.hasOwnProperty(key)) {
            answerData[key].correct = false;
        }
    }
    answerData[id].correct = true;
    this.emitChange();
};

ForumDispatcher.register(function(action) {
    switch(action.actionType) {
        case 'FORUM_ANSWER_ADDED': {
            console.log('Answer added!');
            ForumStore.addAnswer(action.newAnswer);
            break;
        }
        case 'FORUM_ANSWER_MARKED_CORRECT': {
            console.log('Answer Marked correct!');
            ForumStore.markAsCorrect(action.id);
            break;
        }
    }
});
