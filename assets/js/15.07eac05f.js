(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"event-객체란-캡처링과-버블링-이벤트-위임-쓰로틀링-디바운싱-한규현"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-객체란-캡처링과-버블링-이벤트-위임-쓰로틀링-디바운싱-한규현"}},[t._v("#")]),t._v(" Event 객체란? 캡처링과 버블링, 이벤트 위임, 쓰로틀링 & 디바운싱 - 한규현")]),t._v(" "),s("h2",{attrs:{id:"event-객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-객체"}},[t._v("#")]),t._v(" Event 객체")]),t._v(" "),s("ul",[s("li",[t._v("이벤트에 대한 정보를 담고 있는 객체")]),t._v(" "),s("li",[t._v("eventListener 함수에 매개변수로 전달된다")])]),t._v(" "),s("h3",{attrs:{id:"event-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-발생"}},[t._v("#")]),t._v(" Event 발생")]),t._v(" "),s("ul",[s("li",[t._v("사용자 액션(마우스 클릭 등)")]),t._v(" "),s("li",[s("code",[t._v("HTMLElement.click()")]),t._v(" 메소드 호출이나 "),s("code",[t._v("EventTarget.dispatchEvent()")]),t._v(" 를 사용하여 의도적으로 만들어낼 수 있음")])]),t._v(" "),s("p",[t._v("하나의 Element는 다수의 listener를 가질 수 있다. (동일한 이벤트에 대해서도.)")]),t._v(" "),s("h3",{attrs:{id:"event-bubbling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-bubbling"}},[t._v("#")]),t._v(" Event Bubbling")]),t._v(" "),s("p",[t._v("특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성")]),t._v(" "),s("h3",{attrs:{id:"event-capturing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-capturing"}},[t._v("#")]),t._v(" Event Capturing")]),t._v(" "),s("p",[t._v("이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  capture"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default 값은 false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"event-stoppropagation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-stoppropagation"}},[t._v("#")]),t._v(" event.stopPropagation()")]),t._v(" "),s("p",[t._v("해당 event가 전파되는 것을 막음. (나까지만 실행)")]),t._v(" "),s("p",[s("code",[t._v("event.stopImmediatePropagation()")])]),t._v(" "),s("p",[t._v("element에 click 이벤트핸들러가 세 개(eH1, eH2, eH3) 있다고 가정.")]),t._v(" "),s("p",[t._v("stopPropagation()을 어디서 하던지 세개 다 실행하지만, immediate함수 실행하면 이후 이벤트 핸들러까지도 동작 안함")]),t._v(" "),s("h3",{attrs:{id:"event-delegation-이벤트-위임"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-delegation-이벤트-위임"}},[t._v("#")]),t._v(" Event Delegation (이벤트 위임)")]),t._v(" "),s("p",[t._v("버블링/캡쳐링을 활용한 이벤트 핸들링 패턴.")]),t._v(" "),s("p",[t._v("element마다 핸들러를 할당하지 않고, 공통 조상에 이벤트 핸들러를 단 하나만 달아서 여러 요소의 이벤트를 한번에 처리할 수 있음.")]),t._v(" "),s("p",[t._v("todo리스트 개발할때 어떻게 했는지 생각해보자.")]),t._v(" "),s("p",[t._v("예시) 카드를 클릭하여 수정할 수 있다.")]),t._v(" "),s("ol",[s("li",[t._v("맨처음에 이벤트를 다 달았다 ⇒ 새 카드가 추가되면...? 또달아야된다")]),t._v(" "),s("li",[t._v("클래스로 관리했다. 각각의 카드에 이벤트 핸들러가 달려있다. ⇒ 말도안되지만 카드가 10만개고 카드당 이벤트핸들러가 여러개면 리소스가 많이 든다.")]),t._v(" "),s("li",[t._v("이벤트 위임을 활용했다. ⇒ 이벤트는 공통 조상에 하나만 달려있다. 걔가 이벤트를 받아서 어떤 카드가 클릭된건지 판단하고, 처리한다. 새 카드가 추가되어도 끄떡없다. 카드가 많아져도 상관없다.")])]),t._v(" "),s("p",[t._v("but, 이벤트가 다양해지면 다양해질수록 비교연산이 많이 필요할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HTMLElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("CardData")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ids"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementIds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  columnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.column'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  cardElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.card'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cardFormElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.card.new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  createCardBtnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.action-btn.new-card-btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  deleteCardBtnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.delete-card-btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  editOkBtnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.card-btn.edit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  createCardOKBtnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.card-btn.add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cancelBtnElm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("closest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.card-btn.cancel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HTMLElement\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cardElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    createCardBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deleteCardBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editOkBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    createCardOKBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cancelBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createCardBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCardFormHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createCardOKBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCardHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editOkBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" previousCardId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPreviousCardNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cardElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("editCardHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" previousCardId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cancelBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelCreateOrEditHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deleteCardBtnElm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteCardHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"throttling-debouncing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throttling-debouncing"}},[t._v("#")]),t._v(" Throttling, Debouncing")]),t._v(" "),s("p",[t._v("이벤트 핸들러가 많은 연산(예 : 무거운 계산 및 기타 DOM 조작)을 수행(이벤트 핸들러의 과도한 횟수가 발생하는 것)하는 경우 에 대해 제약을 걸어 제어할 수 있는 수준으로 이벤트를 발생(그 핸들러를 더 적게 실행하면 빠져 나갈 수 있음)시키는 것을 목표로 하는 기술")]),t._v(" "),s("p",[t._v("왜? JS연산이 많아지면 리소스를 많이 잡아먹음 → 프레임떨어짐 → 드드드득")]),t._v(" "),s("h3",{attrs:{id:"debounce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debounce"}},[t._v("#")]),t._v(" debounce")]),t._v(" "),s("p",[t._v("연달아 호출되는것중에 마지막 or 제일 처음 함수만 호출")]),t._v(" "),s("p",[t._v("이번에 자동완성에 사용될 수 있음.\ninput의 onChange에 api호출 걸면 '바나나맛 우유' 칠때 모음갯수+자음갯수만큼 api호출일어남.")]),t._v(" "),s("p",[t._v("리소스 낭비일 뿐만 아니라 싱크에 대한 보장도 못함.")]),t._v(" "),s("h3",{attrs:{id:"throttle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throttle"}},[t._v("#")]),t._v(" throttle")]),t._v(" "),s("p",[t._v("연달아 호출되는 이벤트를 일정한 주기마다 발생하게 함")]),t._v(" "),s("p",[t._v("만약 스크롤에 debounce 달면 스크롤이 멈췄을 쯤 발생함. 무한스크롤 구현한다고 가정하면")]),t._v(" "),s("p",[t._v("스크롤 스윽스윽 끝까지 내려서 그만뒀을 때 api호출됨. 이 때 throttle이 더 적합함.")]),t._v(" "),s("p",[t._v("스크롤 내릴때 중간중간 100ms마다 이벤트 발생시켜서 일정 범위에 도달하면 api호출!")]),t._v(" "),s("p",[t._v("⇒ 사용자가 Footer에 닿기 전에 호출할 수 있음")]),t._v(" "),s("p",[t._v("lodash 인스톨하면 편하게 쓸 수 있다...ㅎㅎ")]),t._v(" "),s("h3",{attrs:{id:"구현해보자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#구현해보자"}},[t._v("#")]),t._v(" 구현해보자")]),t._v(" "),s("p",[s("strong",[t._v("debounce")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notionScroller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".notion-scroller.vertical.horizontal"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnotionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n        notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n        notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("throttle")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notionScroller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".notion-scroller.vertical.horizontal"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnotionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("interval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n          notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n          notionScroller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"참고문헌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고문헌"}},[t._v("#")]),t._v(" 참고문헌")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ko.javascript.info/bubbling-and-capturing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ko.javascript.info/bubbling-and-capturing"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Event",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/ko/docs/Web/API/Even"),s("OutboundLink")],1),t._v("t")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://webclub.tistory.com/607",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webclub.tistory.com/607"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);