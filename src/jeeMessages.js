"use strict";

var jee_alert = function() {

    this.option = {
        size: 200,
        color: '#fff',
        alert_duration: 3000,
        top: 70,
    }
    this.components = new alertsComponents();
    this.alert_div = document.getElementsByClassName("alert-div");
};
jee_alert.prototype = {
    msgOption: function(obj) {
        this.option.size = obj.size !== undefined ? obj.size : this.option.size;
        this.option.color = obj.color !== undefined ? obj.color : this.option.color;
        this.option.alert_duration = obj.alert_duration !== undefined ? obj.alert_duration : this.option.alert_duration;
        this.option.top = obj.top !== undefined ? obj.top : this.option.top;
        console.log(this.option)
    },
    init: function() {
        var mainDiv = document.createElement("div");
        mainDiv.className = 'jee';
        document.body.appendChild(mainDiv);
    },
    computeHeigth: function(elmClass, length) {
        var elm = document.getElementsByClassName(elmClass)[length];
        var height = elm.offsetHeight;
        var style = getComputedStyle(elm);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
        // return $('.jee').children().eq(length - 1).outerHeight(true);
    },
    addMsg: function(msg) {
        var alertDiv = document.createElement("div");
        alertDiv.className = 'alert-div';
        document.getElementsByClassName('jee')[0].appendChild(alertDiv);

        var length = this.alert_div.length;
        this.alert_div[length - 1].innerHTML = this.components.success(msg);
        var element_heigth = this.computeHeigth('alert-div', length - 1);
        var total_heigth =0;
        console.log($('.alert-div').eq(0).outerHeight(true));
        for (var i = 0; i < this.alert_div.length; i++) {
        	total_heigth+=this.computeHeigth('alert-div', i);
        	// debugger;
        }
        // this.alert_div[length - 1].style.top = (element_heigth * length - this.computeHeigth('alert-div', length - 1)) + this.option.top + "px";
        // this.alert_div[length - 1].style.top =  total_heigth + this.option.top + "px";
        this.alert_div[length - 1].style.top =  total_heigth + this.option.top - element_heigth + "px";

        if (length == 1) {
            this.timings();
        }
    },
    fadeEffect: function() {
        var fadeTarget = document.getElementsByClassName("alert-div")[0];
        var fade_interval = setInterval(function() {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity < 0.1) {
                jeeAlert.shiftUp(length);
                clearInterval(fade_interval);
            } else {
                fadeTarget.style.opacity -= 0.1;
            }
        }, 50);
    },
    shiftUp: function(length) {
        var w = document.getElementsByClassName("alert-div").length;
        for (var i = 0; i < w - 1; i++) {
            var prev_heigth = this.computeHeigth('alert-div', 0);
            var curr_top = parseFloat($('.alert-div').eq(i + 1).css("top"));

            $('.alert-div').eq(i + 1).animate({ top: curr_top - prev_heigth });
        }
        this.removeMsg(length);
    },
    removeMsg: function(length) {
        var child = document.getElementsByClassName("alert-div");
        child[0].parentNode.removeChild(child[0]);
        jeeAlert.timings();
    },
    timings: function() {
        var length = document.getElementsByClassName("alert-div").length;
        if (length >= 1) {
            setTimeout(function() {
                jeeAlert.fadeEffect(length)
            }, this.option.alert_duration);
        }
    },
}

// --------------------------------------------------
var jeeAlert = new jee_alert();
jeeAlert.init();