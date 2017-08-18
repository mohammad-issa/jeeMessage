var jee_components = function() {};
jee_components.prototype = {
    con_unit: function(title,msg) {
        return '<div class="jee-message">'+
        '<div class="jee-title">'+ title +'</div>'+
        '<span class="jee-msg">' + msg + '</span>'+
        '</div>';
    },
}