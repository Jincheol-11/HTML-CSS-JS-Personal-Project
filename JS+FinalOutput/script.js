//즉시 실행 함수
(function () {
  const spanEl = document.querySelector("main h2 span");
  // 데이터 변수 중 여러개의 데이터를 출력하기 위해서 배열을 선택
  const txtArr = [
    "Web Publisher",
    "Front-end Developer",
    "Web UI Designer",
    "UX Designer",
    "Back-END Designer",
  ];
  let index = 0;
  // split 메소드를 사용하면 문자별로 쪼개짐
  let currentTxt = txtArr[index].split("");

  // spanEl 코드가 해석됨에 따라 밑 함수가 실행되어 이 안의 코드가 실행됨
  function writeTxt() {
    // shift 메소드를 통해 currentTxt의 한글자를 꺼내 추가함.
    spanEl.textContent += currentTxt.shift();
    //   currentTxt에 담긴 배열의 길이가 0이 아닐때만 실행
    if (currentTxt.length !== 0) {
      //   글자마다 나오는 시간이 다 다르게 하는 메소드
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      // currentTxt가 다시 실행될 때 복구될 수 있도록 설정
      currentTxt = spanEl.textContent.split("");
      // 3초 후에 문구 지워지도록 설정
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    // pop을 하여 맨 뒤 데이터 꺼냄
    currentTxt.pop();
    // currentTxt.join(""): 원본 손상을 막기 위해 배열을 하나의 문자열로 바꿔줌
    // 한번 실행에 맨 뒷글자 하나가 사라짐
    spanEl.textContent = currentTxt.join("");
    // currentTxt의 길이가 0이 아니라면 0이 될 때까지 계속 실행
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      // 0 1 2 3 4를 반복하도록 하여 5가지의 문자열이 계속 지워졌다가 작성되도록 함.
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }

  writeTxt();
})();

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
(function () {
  // 헤더 태그 가져옴
  const headerEl = document.querySelector("header");
  // 윈도우에서 스크롤이 발생한다면 scrollCheck 함수 실행
  window.addEventListener("scroll", function () {
    requestAnimationFrame(scrollCheck);
  });

  function scrollCheck() {
    // scrollY를 지원한다면 scrollY 실행, 지원하지않는다면 pageYoffset 실행
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    // 수직방향으로 스크롤이 발생한다면 active 추가, 그게 아니라면 삭제
    if (browserScrollY > 0) {
      headerEl.classList.add("active");
    } else {
      headerEl.classList.remove("active");
    }
    console.log("scroll");
  }
})();

//애니메이션 스크롤
const animationMove = function (selector) {
  // 이동할 대상 요소 가져오기
  const targetEl = document.querySelector(selector);
  // 현재 브라우저의 스크롤 값(y 값)
  const browserScrollY = window.pageYOffset;
  // 이동할 대상의 위치(y 값) 좌표값을 구할 수 있음.
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // 해당 위치로 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};

// 스크롤 입력 값이 true인 것만 찾기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener("click", function (e) {
    // 클릭 시 타겟 요소에 접근
    const target = this.dataset.target;
    // 타겟을 넘김
    animationMove(target);
  });
}
