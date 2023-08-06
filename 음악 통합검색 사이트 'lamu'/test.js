/*Type Script 적용: about lamu.html에서 콘솔창 실행시 제작자(나)에 대한 정보 나옴 */
function welcom(message, userName) {
    if (message === void 0) { message = "Welcome"; }
    if (userName === void 0) { userName = "Everyone"; }
    console.log("".concat(message, " ").concat(userName));
}
welcom();

welcom("I am Jung Ji Min, ","20220816 Computer Engineering");
welcom("major at"," Duksung Women's University");
welcom("Enjoy","!") 