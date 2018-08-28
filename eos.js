function insert() {
    var content = document.getElementById("send_message").value;
    var send_from = document.getElementById("send_from").value;
    var send_to = document.getElementById("send_to").value;
    $.ajax({
        type: "POST",//方法
        url: "http://150.109.32.195:9999",//表单接收url
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: "from:" + send_from + ";" + "to:" + send_to + ";" + "七夕链语:" + content,
        dataType: "json",
        async: true,
        timeout: 5000,
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        },
        error: function (textStatus, jqXHR) {
            console.log("error");
            console.log(textStatus);
            console.log(jqXHR);
        }

    }
    );
}