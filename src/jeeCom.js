var jee_components = function() {};
jee_components.prototype = {
    error: function(argument) {
        return '<div style="background:red">ERROR</div>';
    },
    success: function(msg) {
        return '<div class="jee-message">'+
        '<div class="jee-title">failed</div>'+
        '<span class="jee-msg">' + msg + '</span>'+
        '</div>';
    }
}