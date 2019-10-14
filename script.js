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
    var hasError = false;
    if (firstNumStr === "") {
        errorlog("Chưa nhập số thứ nhất.");
        hasError = true;
    }
    if (secondNumStr === "") {
        errorlog("Chưa nhập số thứ nhất.");
        hasError = true;
    }

    var firstNum = Number.parseFloat(firstNumStr);
    var secondNum = Number.parseFloat(secondNumStr);

    var check = getChecked("operators");
    if (check === null) {
        errorlog("Chưa chọn toán tử");
        return;
    }
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

checkValid = obj => {
    document.querySelector(".show-error").innerHTML = "";
    var number = document.getElementById(obj.id).value;
    var hasError = false;
    if (number === "") {
        errorlog("Chưa nhập số thứ " + (obj.id == "firstNum" ? "nhất" : "hai") + ".");
        hasError = true;
    }
    if (isNaN(number)) {
        errorlog("Dữ liệu của số thứ " + (obj.id == "firstNum" ? "nhất" : "hai") + " không hợp lệ.");
        hasError = true;
    }
};
