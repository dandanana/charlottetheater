$(document).ready(function () {

  /* 탑메뉴 */
  $(".menu_main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });


  /* -----------------------메인---------------------- */
  let $mimg = $(".changeimg01 ul li"); //changeimg01 ul li의 경로가 $mimg에 저장됐다는 말. 앞으로 $mimg를 사용하면 됨
  let $mbtn = $(".btn01 ul li");
  let oldmidx=0; //기존이미지
  let midx=0; //새로 바뀌는 이미지
  let img_mn = $mimg.length; // length메서드 -> 1,2,3... 이미지의 개수를 세어서 변수를 저장한다. 
  // 움직임이 필요해서 변수 선언 해주는 것들

  //이미지와 버튼이 바뀌는 함수
  function changeImg(midx){ //매개변수가 있는 함수 -->idx는 선택되는 이미지

    if(oldmidx !=midx){ //기존의 이미지와 선택된 이미지가 다를 때...
      
      $mbtn.eq(oldmidx).removeClass("active"); //eq : 해당하는 요소의 몇번째라고 찝어주는 것, 기존 하단버튼 비활성화 -> active 클라스를 삭제
      $mbtn.eq(midx).addClass("active"); //선택된 하단버튼 활성화 -> active 클라스 추가
      $mimg.eq(oldmidx).stop().fadeOut("2000");//기존 이미지 사라짐
      $mimg.eq(midx).stop().fadeIn("2000"); //기존 이미지 나타남
    }
    oldmidx=midx; //선택된 이미지는 다시 기존 이미지로 저장되어서 faed Out
  };

  //자동함수 생성, 어떻게 움직일지 설정 시작
  function changeAuto(){
    
    midx++;
    //선택한 이미지가 마지막일 때 다시 처음 이미지부터 시작
    if(midx>img_mn-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      midx=0;
    }

    changeImg(midx);
  };

  timer=setInterval(changeAuto,5000); //3초 간격으로 함수를 자동재생

  //하단 버튼 클릭시...
  $mbtn.click(function(){
    clearInterval(timer); //버튼클릭시 자동함수 해지 ->clearInterval(변수) -> 클릭과 동시에 이것부터 실행(위에 timer 변수를 만든 이유)
    midx=$(this).index(); //0,1,2...
    changeImg(midx);
    timer=setInterval(changeAuto,5000); //버튼을 클륵 안 할 때는 다시 함수 자동재생
  });
});


/*------------------section-1 : 캐릭터 & 배우 소개 자동 슬라이드 ----------------*/
$(document).ready(function () {

let $img = $('.changeimg ul li'); //changeimg ul li의 경로가 $img에 저장됐다는 말. 앞으로 $img를 사용하면 됨
  let $btn = $('.btn ul li');
  let $lbtn = $('.side_btn .lbtn');
  let $rbtn = $('.side_btn .rbtn');
  //클릭할 때(경로) 움직여야하는 것들 가지고 온 것

  let oldidx = 0; //기존이미지
  let idx = 0; //새로 바뀌는 이미지
  let img_n = $img.length; // length메서드 -> 1,2,3... 이미지의 개수를 세어서 변수를 저장한다.
  // 움직임이 필요해서 변수 선언 해주는 것들

  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx) {
    //매개변수가 있는 함수 -->idx는 선택되는 이미지

    if (oldidx != idx) {
      //기존의 이미지와 선택된 이미지가 다를 때...

      $btn.eq(oldidx).removeClass('active'); //eq : 해당하는 요소의 몇번째라고 찝어주는 것, 기존 하단버튼 비활성화 -> active 클라스를 삭제
      $btn.eq(idx).addClass('active'); //선택된 하단버튼 활성화 -> active 클라스 추가
      $img.eq(oldidx).stop().fadeOut('6000'); //기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn('6000'); //기존 이미지 나타남
    }
    oldidx = idx; //선택된 이미지는 다시 기존 이미지로 저장되어서 faed Out
  }

  //자동함수 생성, 어떻게 움직일지 설정 시작
  function changeAuto() {
    idx++;
    //선택한 이미지가 마지막일 때 다시 처음 이미지부터 시작
    if (idx > img_n - 1) {
      //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx = 0;
    }

    changeImg(idx);
  }

  timer = setInterval(changeAuto, 6000); //6초 간격으로 함수를 자동재생

  //하단 버튼 클릭시...
  $btn.click(function () {
    clearInterval(timer); //버튼클릭시 자동함수 해지 ->clearInterval(변수) -> 클릭과 동시에 이것부터 실행(위에 timer 변수를 만든 이유)
    idx = $(this).index(); //0,1,2...
    changeImg(idx);
    timer = setInterval(changeAuto, 3000); //버튼을 클륵 안 할 때는 다시 함수 자동재생
  });

  //좌우 버튼 클릭시...
  //오른쪽버튼
  $rbtn.click(function () {
    clearInterval(timer);
    idx++;
    if (idx > img_n - 1) {
      //선택한 이미지가 0,1,2.....4 마지막일 때 맨 처음부터 다시 시작
      idx = 0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 3000);
  });

  $lbtn.click(function () {
    clearInterval(timer);
    idx--;
    if (idx < 0) {
      //선택한 이미지가 4,3,2...0 첫번째일 때 맨 마지막부터 다시 시작
      idx = img_n - 1; //총개수 5-1=4(index 0,1,2,3,4)
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 3000);
  });
});