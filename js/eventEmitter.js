var EventEmitter = {
    init: function() {
        this._events = {};
    },
    on: function(type, listener) {
        this._events[type] = this._events[type] || [];
        this._events[type].push(listener);
    },
    emit: function(type) {
        if(this._events[type]) {
            this._events[type].forEach(function(listener) {
                listener()
            });
        }
    },
    removeListener: function(type, listener) {
        if(this._events[type]) {
            var index = this._events[type].indexOf(listener);
            this._events[type].splice(index, 1);
        }
    }
};