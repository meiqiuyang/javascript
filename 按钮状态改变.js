var SWITCH_BUTTON_INFO = {
    CLICK_FUN: "",
    TEXT: ""
}

var SwitchButtonOff = function (button, option) {
    var text = option.text || "处理中...";//按钮显示的内容

    SetButtonText(button, text);

    SWITCH_BUTTON_INFO.CLICK_FUN = GetButtonClickFun(button);

    SWITCH_BUTTON_INFO.TEXT = GetButtonText(button);

    ClearButtonClickFun(button);
};

var SwitchButtonOn = function (button, option) {
    var text = option.text || "处理成功",//按钮显示的内容
        timeout = option.timeout || 1000,//过度时间
        timeoutText = option.timeoutText || "处理成功";//过度期间显示的文本

    SetButtonText(button, timeoutText);

    setTimeout(function () { SetButtonToNormal(button, text); }, timeout);
};

var SetButtonToNormal = function (button, text) {
    SetButtonText(button, SWITCH_BUTTON_INFO.TEXT);
    SetButtonClickFun(button, SWITCH_BUTTON_INFO.CLICK_FUN);
};

var SetButtonText = function (button, text) {
    if (document.getElementById(button).value)
        document.getElementById(button).value = text;
    if (document.getElementById(button).innerText)
        document.getElementById(button).innerText = text;
};

var GetButtonText = function (button) {
    if (document.getElementById(button).value)
        return document.getElementById(button).value;
    if (document.getElementById(button).innerText)
        return document.getElementById(button).innerText;
};

var GetButtonClickFun = function (button) {
    return document.getElementById(button).onclick
};

var SetButtonClickFun = function (button, fun) {
    document.getElementById(button).onclick = fun;
};

var ClearButtonClickFun = function (button) {
    document.getElementById(button).onclick = function () { };
};