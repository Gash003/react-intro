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