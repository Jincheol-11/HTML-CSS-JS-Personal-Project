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












## Ⅳ) 프로젝트 구현 기술

### CSS3에서 재밌게 구현한 기술

- 마우스 위아래로 움직이는 애니메이션

```css
main button.mouse {
  background-color: transparent; /* 배경 투명 설정 */
  border: none; /* 테두리 없음 */
  color: white; /* 텍스트 컬러 설정 */
  font-size: 2rem; /* 글꼴 크기 설정 */
  position: absolute; /* 절대 위치 설정 */
  bottom: 1rem; /* 아래 여백 설정 */
  left: 50%; /* 가운데 위치로부터 왼쪽 정렬 */
  transform: translateX(-50%); /* X축 이동으로 중앙 정렬 */
  animation: upDown 1s ease-in-out infinite; /* 애니메이션 설정 */
  cursor: pointer; /* 커서를 포인터로 설정 */
}
```

- 마우스 애니메이션 키프레임 설정

```css
@keyframes upDown {
  0% {
    bottom: 1rem; /* 초기 위치 설정 */
  }
  50% {
    bottom: 1.5rem; /* 중간 위치 설정 */
  }
  100% {
    bottom: 1rem; /* 최종 위치 설정 */
  }
}
```

- 메인 타이틀 뒤의 수직선 스타일 설정

```css
main h2 span::after {
  content: ''; /* 가상 요소 내용 없음 */
  height: 40px; /* 세로 크기 설정 */
  width: 3px; /* 가로 크기 설정 */
  background-color: #fff; /* 배경 컬러 설정 */
  display: inline-block; /* 인라인 블록 요소로 설정 */
  animation: blink 0.7s ease-in-out infinite; /* 애니메이션 설정 */
}
```
- 수직선 깜빡임 애니메이션 키프레임 설정

```css
@keyframes blink {
  0% {
    opacity: 1; /* 최대 불투명 설정 */
  }
  100% {
    opacity: 0; /* 완전 투명 설정 */
  }
}
```

- 헤더 fixed 속성을 이용한 nav바의 효과 (앞서 말한 Gradient 사용의 설정)

```css
header.active {
  background-color: rgba(0, 0, 0);
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

### JSES6 에서 재밌게 구현한 기술



## Ⅴ) 프로젝트를 마치며 느낀 점

배우기 시작한지 얼마 안되서 함수를 사용하는 것이 자연스럽지 못했던 것 같아 아쉽다.
함수를 다 외우진 않고 찾아보는것에 좀 시간을 할당했다면
구조를 더 이해하는데 집중하고 시간을 많이 투자했다.
그로인해 함수가 눈에 들어오고 In 과 Out 이 명확해져 이해하기 좀더 수월했다.
함수 사용이 좀 더 원활해 지려면 코드를 보다 많이 작성하는 방법 밖에는 없을 것 같다.

# Peace Out! 🙌
