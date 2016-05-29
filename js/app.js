ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);

var myEmitter = Object.create(EventEmitter);
myEmitter.init();

myEmitter.on('STARTED_THE_APP', function() {
    console.log('started the app');
});

myEmitter.on('STARTED_THE_APP', function() {
    console.log('started the app #2');
});

myEmitter.emit('STARTED_THE_APP');

ForumDispatcher.register(function(action) {
    console.log('received an action');
    console.log(action);
});