var typingBool = false; 
var typingIdx=0; 

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing_text").text(); 

typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
   typingBool=true;     
   var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
    $(".typing").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++; 
   } else{ 
     //끝나면 반복종료 
    clearInterval(tyInt); 
   } 
}  

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation:true,
	navigationPosition: 'right',
	anchors:['num0', 'num1','num2','num3','num4' ],

	afterLoad: function(origin, destination, direction){
        var origin = this;
		

        //using index
        if(destination.index == 1){
			$('#photo').circleProgress({
				value: 0.90,
				size: 90,
				fill: {
				gradient: ["#00369B", "#4989FF"]
				},
				thickness:12,
				lineCap:'round'
				});
			$('#illust').circleProgress({
					value: 0.90,
					size: 90,
					fill: {
				gradient: ["#00369B", "#4989FF"]
					},
					thickness:12,
						lineCap:'round'
					});
			$('#figma').circleProgress({
				value: 0.85,
				size: 90,
				fill: {
				gradient: ["#00369B", "#4989FF"]
						},
				thickness:12,
					lineCap:'round'
			});;
			$('#html').circleProgress({
				value: 0.8,
				size: 90,
				fill: {
				gradient: ["#00369B", "#4989FF"]
						},
				thickness:12,
					lineCap:'round'
			});;
			$('#css').circleProgress({
				value: 0.9,
				size: 90,
				fill: {
				gradient: ["#00369B", "#4989FF"]
						},
				thickness:12,
					lineCap:'round'
			});
			$('#js').circleProgress({
				value: 0.9,
				size: 90,
				fill: {
				gradient: ["#00369B", "#4989FF"]
						},
				thickness:12,
					lineCap:'round'
			});;

			
        }else if(destination.index == 0) {
			$('#photo').circleProgress({
				value: 0.00,
				size: 90,
				fill: {
				gradient: ["#fff", "#fff"]
				},
				thickness:12,
				lineCap:'round'
				});
			$('#illust').circleProgress({
					value: 0.00,
					size: 90,
					fill: {
					gradient: ["#fff", "#fff"]
					},
					thickness:12,
						lineCap:'round'
					});
			$('#figma').circleProgress({
				value: 0.0,
				size: 90,
				fill: {
					gradient: ["#fff", "#fff"]
						},
				thickness:12,
					lineCap:'round'
			});
			$('#html').circleProgress({
				value: 0.0,
				size: 90,
				fill: {
					gradient: ["#fff", "#fff"]
						},
				thickness:12,
					lineCap:'round'
			});
			$('#css').circleProgress({
				value: 0.0,
				size: 90,
				fill: {
					gradient: ["#fff", "#fff"]
						},
				thickness:12,
					lineCap:'round'
			});
			$('#js').circleProgress({
				value: 0.0,
				size: 90,
				fill: {
					gradient: ["#fff", "#fff"]
						},
				thickness:12,
					lineCap:'round'
			});
		}

		if(destination.index == 0){
			$('.btn').hide()
			$('.nav').hide()
			$("#fp-nav ul li a span").css("border", "1px solid #fff");
        }else if(destination.index !== 0) {
			$('.btn').fadeIn()
			$('.btn').click(function(){
				$('.nav').toggleClass('on')
			})
			$("#fp-nav ul li a span").css("border", "1px solid #00369B");
		}
	}
});