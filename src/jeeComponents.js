var alertsComponents = function() {};
alertsComponents.prototype = {
    error: function(argument) {
        return '<div style="background:red">ERROR</div>';
    },
    success: function(msg) {
        return '<div class="jee-text">'+
        '<div class="jee-title">failed</div>'+
        '<span class="jee-message">' + msg + '</span>'+
        '</div>';
    }
}