/*lamu.html 파일의 'global chart'의 그림들 클릭시 하이퍼링크 그림으로 바뀜*/
function over(obj){
	obj.src="media/hyp.png";
}
function out(obj){
	obj.src="media/bill.png";
}
function out2(obj){
	obj.src="media/youtube.png";
}
function out3(obj){
	obj.src="media/apple.png";
}
function out4(obj){
	obj.src="media/spotify.png";
}


/*lamu.html 파일의 목차들(domestic chart, global chart 등) 클릭시 글자가 이텔릭체로 바뀜*/
function up(obj){
	obj.style.fontStyle="normal";
}
function down(obj){
	obj.style.fontStyle="italic";
}


/*lamu.html 파일의 'special price'의 '50% discount'글자 클릭시 크기가 커짐*/
/*about lamu.html 파일의 'lamu 슬로건'위의 글자 클릭시 크기가 커짐*/
function change2(obj,size){
	obj.style.fontSize=size;
}


/*about lamu.html 파일의 'lamu 로고 표시'버튼 클릭시 페이지에 있는 'lamu로고'글자 모양이 바뀜*/
function viewLogo(){ 
	let tagArray=document.getElementsByClassName("logo");
	for(let i=0;i<tagArray.length;i++){
		let tag= tagArray[i];
		tag.style.color="orchid";
		tag.style.fontSize="30px";
		tag.style.textDecoration="underline";
	}
}


/*about lamu.html에서 'lamu의 로고' 그림 클릭시 그림이 변화함*/
let files = ["media/3lamu.png",
	"media/1lamu.png",
	"media/2lamu.png"];
let imgs = new Array();
for (let i=0;i<files.length;i++){
	imgs[i]=new Image();
	imgs[i].src=files[i];
}

let next =1;
function change1(img){
	img.src=imgs[next].src;
	next++;
	next%=imgs.length;
}


/*lamu.html 파일의 special price의 'buy now'버튼과 '특가그림' 클릭시 다이얼로그 출력*/
function alertEX() { 
	alert("구매하시겠습니까?");
}


/*jQuery적용: lamu.html 파일의 'lamu imformation'에 show, hide버튼 삽입하여 아래 정보 컨트롤함*/
$(document).ready(function(){
	$("#show").click(function(){
		$("div").show();
	});
	$("#hide").click(function(){
		$("div").hide();
	});
});


/*jquery, Ajax적용: lamu.html에서 미세먼지 수치 제공 */
    function q1() {
        $('#names-q1').empty()
        $.ajax({
            type: "GET",
            url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
            data: {},
            success: function(response) {
                let rows = response['RealtimeCityAir']['row']
                for (let i = 0; i < rows.length; i++) {
                    let name = rows[i]['MSRSTE_NM']
                    let mise = rows[i]['IDEX_MVL']
                    let temp_html = ``
                    if (mise < 60) {
                        temp_html = ` <li>${name} : ${mise}</li>`
                    } else {
                        temp_html = ` <li style="color: red;"class="bad">${name} : ${mise}</li>`
                    }

                    $('#names-q1').append(temp_html)
                }
            }
        })
    }



