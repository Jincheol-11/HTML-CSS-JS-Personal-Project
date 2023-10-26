# HTML-CSS-JS-Personal-Project

HTML5, CSS3, JSES6를 이용하여 직접 웹페이지를 만들어 보았습니다. 코드에 대해 자세하게 주석을 달아놓았으니 참고바랍니다.
 
## 목차

Ⅰ) **기술 스택**

Ⅱ) **주요 기능**

Ⅲ) **UI/UX**

Ⅳ) **프로젝트 구현 기술**

Ⅴ) **프로젝트를 마치며 느낀 점**


## Ⅰ) 기술 스택

### 사용 언어

- HTML5
- CSS3
- JSES6


## Ⅱ) 주요 기능

1. 5가지의 단어가 생겼다 사라졌다 하는 기능
2. 마우스 모양의 이모티콘이 반복적으로 움직이게 하는 기능
3. 페이스북 등 아이콘을 넣고 링크를 연결시키는 기능
4. 맨 위에 있는 메뉴를 누르면 해당 위치로 이동하는 기능
5. Contact me의 이메일을 적는 부분에서 autocomplete를 off하여 이전에 입력했던 내용을 알 수 없게 하는 기능

## Ⅲ) UX / UI

![image](https://github.com/Jincheol-11/HTML-CSS-JS-Personal-Project/assets/145963704/7ed7f0a5-436d-4387-a841-593bf913cf4d)

![image](https://github.com/Jincheol-11/HTML-CSS-JS-Personal-Project/assets/145963704/646de5e5-3c4b-4a4b-ad11-2a7f2a5ef980)

![image](https://github.com/Jincheol-11/HTML-CSS-JS-Personal-Project/assets/145963704/2cde52a6-c752-43cd-96f3-8a6bb1f37de4)

![image](https://github.com/Jincheol-11/HTML-CSS-JS-Personal-Project/assets/145963704/527c587e-02d7-4f4f-b078-b1469e64999b)

![image](https://github.com/Jincheol-11/HTML-CSS-JS-Personal-Project/assets/145963704/3e550064-0179-4b17-8f16-599bad04c441)

## Ⅳ) 프로젝트 구현 기술

### IN CSS3

첫 번째! 메뉴의 색깔이 하얗기에 그냥 스크롤을 내리면 배경과 구분하기가 힘듭니다. 따라서 스크롤을 하면 자연스레 맨위에 검은 배경이 나타나도록 설정해주었습니다.

```
header.active {
  /* 검은색 배경을 넣어주어 스크롤을 내려도 헤더가 잘 보이게 배치 */
  background-color: #000;
  animation: fadeIn 0.5 ease-in-out;
}

/* 안보였다가 나타나는 것 같은 효과 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

두 번째! 마우스를 위아래로 반복적으로 움직이도록하여 화면에서의 단조로움을 해소하려 했습니다.

```
main button.mouse {
  background-color: transparent;
  border: none; /* 테두리 표시X */
  font-size: 2rem;
  position: absolute;
  bottom: 1rem; /* 마우스 버튼 왼쪽 아래로 떨어뜨리기 */
  left: 50%;
  transform: translate(-50%); /* 조금 더 왼쪽으로 위치 조정 */
  color: white;
  cursor: pointer;
  animation: upDown 1s ease-in-out infinite; /* 아래의 keyframes upDown을 통해 애니메이션 속성을 추가, 1초마다 위아래로 무한반복  */
}

@keyframes upDown {
  0% {
    bottom: 1rem;
  }
  50% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 1rem;
  }
}
```

세 번째! 좌우 화면을 줄일 때 한 줄에 보이는 박스의 갯수를 조절했습니다. 

```
@media screen and (max-width: 1140px) {
  /* 화면 너비가 1140px 이하일 때의 메인과 섹션 영역의 너비 설정 */
  main .container {
    width: 992px;
  }
  section .container {
    width: 600px;
  }
  section .about-self .left {
    /* 너비 및 여백 조정 */
    width: 100%;
    margin-bottom: 1.5rem;
  }
  section .about-self .right {
    /* 너비 및 여백 조정 */
    width: 100%;
    padding: 0;
  }
  section .do-me .do-inner {
    /* 화면이 줄어들 때의 너비 및 여백 조정 (두줄로 보이도록) */
    width: 48%;
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
  section .do-me .do-inner:nth-child(2n + 1) {
    /* 1, 3, 5,....번째 본문 사각형에 오른쪽 마진영역 여백 4% 적용 */
    margin-right: 4%;
  }
  section .portfolio-me .portfolio-inner {
    /* 화면이 줄어들 때의 너비 및 여백 조정 (두줄로 보이도록) */
    width: 48%;
    margin-right: 0;
  }
  section .portfolio-me .portfolio-inner:nth-child(2n + 1) {
    /* 1, 3, 5,....번째 본문 사각형에 오른쪽 마진영역 여백 4% 적용 */
    margin-right: 4%;
  }
  section .contact-me .left {
    /* 화면 비율에 맞게 줄어듬  */
    width: 100%;
    margin-left: 0;
  }
}
```

### IN JSES6

첫 번째! 자신을 소개하는 문구를 작성하면서 다섯 단어를 나타내고 싶을 때, 문자가 생겼다 사라졌다 반복하는 코드를 작성하여 5단어가 순서대로 나오도록 설정했습니다.
```
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
```

두 번째! ScrollY값을 조절하여 해당 메뉴를 클릭할 때 그 메뉴에 맞는 위치로 이동할 수 있도록 설정하였습니다. 
```
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
```

## Ⅴ) 프로젝트를 마치며 느낀 점

처음 해보는 프로젝트였기에 시간도 오래 걸렸고, 우왕좌왕했습니다. 해당 프로젝트를 만들 때 2가지 문제가 발생했었습니다. <br>
먼저 배경이 회색과 흰색으로 메뉴에 맞게 번갈아 잡혀야 하는데 포트폴리오 부분에서 마진을 제대로 인식하지 못하여 이상한 경계에서 배경 색이 나누어졌습니다. CSS3에서의 띄어쓰기 문제였고, 고민끝에 해결할 수 있었습니다.<br> 
또한 스크롤을 내리기 전에는 검은배경이 없어야하는데 내리기 전부터 검은배경이 설정되어 있었습니다. 이는 즉시 JSES6 실행함수인 function의 괄호를 잘못 설정해서 생긴 문제였습니다. 처음다뤄보았기에 익숙치 않았습니다.<br>
직접 만들어보니 홈페이지의 생성 과정에 대해 더 자세히 알게되는 계기였고, 페이지 하나를 만드는 데에는 수많은 노력이 들어간다는 것을 느꼈습니다.

읽어주셔서 감사합니다. 좋은하루되세요!
