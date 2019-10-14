var getChecked = name => {
    var ele = document.getElementsByName("operators");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) return ele[i].id;
    }
    return null;
};

var errorlog = errortext => {
    var err = `<div class="alert alert-danger alert-dismissible fade show">
        <strong>Lỗi!</strong> %%message%% .
    </div>`;
    var errlog = err.replace(/%%message%%/, errortext);
    showerr = document.querySelector(".show-error");
    showerr.insertAdjacentHTML("beforeend", errlog);
};

var calculate = () => {
    document.querySelector(".show-error").innerHTML = "";

    var firstNumStr = document.getElementById("firstNum").value;
    var secondNumStr = document.getElementById("secondNum").value;
    if (firstNumStr === "" || secondNumStr === "") {
        if (firstNumStr === "") errorlog("Chưa nhập số thứ nhất.");
        if (secondNumStr === "") errorlog("Chưa nhập số thứ hai.");
    }

    var firstNum = Number.parseFloat(firstNumStr);
    var secondNum = Number.parseFloat(secondNumStr);
    var hasError = false;
    if (firstNum != firstNumStr && firstNumStr !== "") {
        errorlog("Số thứ nhất không hợp lệ");
        hasError = true;
    }
    if (secondNum != secondNumStr && secondNumStr !== "") {
        errorlog("Số thứ hai không hợp lệ");
        hasError = true;
    }

    var check = getChecked("operators");
    if (check === null) {
        errorlog("Chưa chọn toán tử");
        hasError = true;
    }
    if (hasError) return;
    var result;
    if (check === "plus") {
        result = firstNum + secondNum;
    } else if (check === "sub") {
        result = firstNum - secondNum;
    } else if (check === "mul") {
        result = firstNum * secondNum;
    } else if (check === "div") {
        result = firstNum / secondNum;
    }
    document.getElementById("resultfield").value = result;
};
