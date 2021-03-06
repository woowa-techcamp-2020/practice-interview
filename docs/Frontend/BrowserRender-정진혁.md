# 브라우저 렌더링 동작 과정 - 정진혁

## 브라우저의 구조

자세한 브라우저 구조는 마다 조금 상이

![browser01](https://user-images.githubusercontent.com/38618187/91383396-07e5d600-e867-11ea-93c3-a7c4c657168b.png)

- User Interface: 주소 표시줄, 이전/다음 버튼, 북마크 메뉴 등. 요청한 페이지를 보여주는 창을 제외한 나머지 모든 부분
- Browser Engine: User Interface와 Rendering Engine 사이의 동작을 제어
- Rendering Engine: 요청한 콘텐츠를 표시, HTML을 요청하면 HTML과 CSS를 파싱 하여 화면에 표시함

## 렌더링 엔진 동작 요약

HTML 문서가 전달되면 다음 과정을 진행.

![browser02](https://user-images.githubusercontent.com/38618187/91383399-0a483000-e867-11ea-80a6-dface0a9d2e2.png)

1. HTML 문서를 파싱 하여 DOM 트리, CSS 문서를 파싱 하여 CSSOM 트리 생성
2. DOM과 CSSOM을 이용하여 렌더 트리 생성
3. 각 노드의 위치와 크기를 계산하는 과정 진행(Layout)
4. 계산된 위치와 크기 등 실제 픽셀로 화면에 표현(Paint)

## 렌더링 엔진 동작 과정 상세

![browser03](https://user-images.githubusercontent.com/38618187/91383400-0ae0c680-e867-11ea-9fc5-1dc43a1d0269.png)

1. HTML을 파싱해서 DOM 노드를 만들고 이를 병합해서 DOM 트리 생성
2. CSS를 파싱해서 스타일 규칙(CSSOM 트리) 생성
3. DOM 트리와 스타일 규칙을 사용해서 Attachment라는 과정을 통해 Render Tree 생성
4. Render tree 배치(Layout)
5. 화면에 그림(Painting)

## 파싱

HTML 문서의 문자열을 브라우저가 이해할 수 있는 구조로 변환하는 작업

파싱의 결과는 노드 트리입니다.

### DOM(Document Object Model) 파싱 과정

![browser04](https://user-images.githubusercontent.com/38618187/91383404-0b795d00-e867-11ea-9d5e-dc71145e8f07.png)

1. 변환: raw byte를 문자열로 변환
2. 토큰화: W3C HTML5 표준에 따라 문자열을 고유 토큰으로 변환(엣날엔 브라우저 각각이 방식이 달랐음 ⇒호환성 똥)
3. 렉싱: 토큰화 한 걸 하나하나 객체로 변환
4. DOM 생성: 트리구조로 변환

### CSSOM(CSS Object Model) 파싱 과정

![browser05](https://user-images.githubusercontent.com/38618187/91383405-0c11f380-e867-11ea-8d8f-059300f2bc6d.png)

과정은 DOM 파싱 과정과 유사

![browser06](https://user-images.githubusercontent.com/38618187/91383406-0c11f380-e867-11ea-8405-bdcc1a177f3f.png)

CSSOM이 트리 구조를 가지는 이유는 하향식으로 규칙을 적용

(body style이 span에도 적용)

## 렌더 트리 구축

화면에 표시되는 노드들만 포함하여 트리 구축

![browser07](https://user-images.githubusercontent.com/38618187/91383408-0caa8a00-e867-11ea-9dc4-c6b41f438763.png)

1. DOM 트리에서 노드를 탐색함
   - 화면에 표시되지 않는 노드들은 추가안함(script, meta 태그)
   - display:none도 추가 안함(visibility: hidden은 포함됩니당 - 화면에 공간을 차지합니다)
2. 각 노드에 일치하는 CSSOM 규칙을 찾아 적용
3. 화면에 표시되는 노드를 콘텐츠 및 계산된 스타일로 트리 구축

## 레이아웃

위치와 크기 계산함

상대적인 측정값(%, 등등)을 절대적인 픽셀로 다 변환함

## 페인팅

각 노드를 화면의 실제 픽셀로 보여줌!

## 참고사항(Javascript, CSS)

### Javascript

**자바스크립트는 파서 차단 리소스(parser blocking resource)**

파싱 중 자바스크립트를 만나면 진행하던 파싱을 중지 후, 자바스크립트 엔진에게 권한을 넘겨 자바스크립트를 파싱하고 실행(속도가 느려짐)

때문에 자바스크립트는 head보다 body 태그가 닫히기 전에 좋음!

또는, script 태그에 defer 속성을 주면, 문서 파싱은 중단되지 않고 문서 파싱이 완료된 이후에 자바스크립트가 실행됨!

### CSS

**CSS는 렌더링 차단 리소스(render blocking resource)**

CSS는 렌더링에 반드시 필요하기 때문에 브라우저가 빠르게 CSS를 다운로드 하도록 하는 것이 좋다.

head 태그에 정의하는 게 좋음!

## 레퍼런스

[NAVER D2](https://d2.naver.com/helloworld/59361)

[https://www.youtube.com/watch?v=SmE4OwHztCc&t=1047s](https://www.youtube.com/watch?v=SmE4OwHztCc&t=1047s)

[https://beomy.github.io/tech/browser/browser-rendering/](https://beomy.github.io/tech/browser/browser-rendering/)
