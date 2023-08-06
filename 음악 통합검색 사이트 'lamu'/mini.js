/*login.html, contact.html파일의 send버튼과 login버튼을 누르면 다이얼로그가 표시됨*/
let result = document.getElementById("result");

function confirmEX() {
	let ret = confirm("전송할까요?");
	if(ret == true) {
		result.innerHTML ="전송되었습니다. 소중한 의견 감사합니다:)";		  
	}
	else {
		result.innerHTML ="취소되었습니다.";		  
	}
}
function confirmEX1() {
	let ret = confirm("로그인할까요?");
	if(ret == true) {
		result.innerHTML ="로그인하였습니다:)";		  
	}
	else {
		result.innerHTML ="취소되었습니다.";		  
	}
}

/*login.html, contact.html파일의 하단에 현재시간 표시됨*/
let current = new Date();

document.write("현재시간: "+current.toLocaleString());


/*login.html, contact.html파일의 입력칸에서 해당칸 입력을 안하면 다음칸으로 안넘어감*/
function checkFilled(obj){
	if(obj.value==""){
		obj.focus();
	}
}

/*login.html, contact.html파일의 홀수초, 짝수초의 배경색이 다름*/
if(current.getSeconds()%2==0)
	document.body.style.backgroundColor="lightpink";
else
	document.body.style.backgroundColor="lightblue";



