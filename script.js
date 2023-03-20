"use strict";
//dùng Dom để trỏ đến các phần tử cần xử lý
const email = document.getElementById("email");
const hide = document.querySelector(".hide");
const error = document.getElementById("error-email");
const btn = document.getElementById("button");
const fEmail = document.getElementById("femail");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//vent click button
btn.addEventListener("click", function () {
  const check = email.value; //lấy giá trị input  khi nhập email
  const checkEmail = check.match(regex); //dùng hàm match để kiểm tra định dạng của input email
  if (checkEmail) {
    hide.style.display = "block";
    fEmail.style.display = "none";
  } else if (check === "") {
    error.textContent = "(*) hãy nhập 1 email";
    error.style.color = "red";
  } else {
    error.textContent = "(*) vui lòng nhập đúng email";
    error.style.color = "red";
  }
});

//phần ẩn thông tin
//Dùng DOM để chọn phần tử cần xử lý

const myContent = document.querySelectorAll(".job-content");
const jobInfo = document.querySelectorAll(".job-info1");

const btnView = document.querySelectorAll(".btn-viewmore");

for (
  let i = 0;
  i < jobInfo.length;
  i++ //dùng vòng lặp for để truy xuất vào từng ô
){
  //sự kiện mouseover và mouseout để ẩn và hiện nút viwemore khi di chuột đến phần tử
  jobInfo[i].addEventListener("mouseover", function () {
    btnView[i].style.display = "block";
  });


  jobInfo[i].addEventListener("mouseout", function () {
    btnView[i].style.display = "none";
  })
};
//sự kiện click để ẩn hiện thông tin của content
for (let i = 0; i < btnView.length; i++)
  btnView[i].addEventListener("click", function () {
    if (myContent[i].style.display === "none") {
      myContent[i].style.display = "block";
      btnView[i].innerHTML = "▼ Less more";
    } else {
      myContent[i].style.display = "none";
      btnView[i].innerHTML = "▲ View more";
    }
  });
