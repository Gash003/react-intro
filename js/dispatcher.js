var Dispatcher = {
    init: function() {
        this._lastID = 0;
        this._callbacks = {};
    },
    register: function(callback) {
        var id = 'CID_' + this._lastID++;
        this._callbacks[id] = callback;
        return id;
    },
    dispatch: function(action) {
        for(var id in this._callbacks) {
            if(this._callbacks.hasOwnProperty(id)) {
                this._callbacks[id](action);
            }
        }
    },
    waitFor: function(ids) {
        // TODO
    }
};