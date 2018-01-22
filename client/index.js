var url = 'ws://localhost:8181';
var ws = new WebSocket(url);
ws.onopen = function () {
    appendContent('已建立连接');
};

ws.onmessage = function (msg) {
    appendContent('消息:' + msg.data);
};

ws.onerror = function () {
    appendContent('连接错误');
};

ws.onclose = function () {
    appendContent('已关闭连接');
};

function appendContent(str) {
    document.getElementById('D_content').innerHTML += str + '</br>';
}

document.getElementById('btn').onclick = function () {
    var msg = document.getElementById('Input_msg').value;
    ws.send(msg);
}