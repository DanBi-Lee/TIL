## JSON

> - 강의 주소 : [JSON 개념 정리 와 활용방법 및 유용한 사이트 공유 JavaScript JSON](https://youtu.be/FN_D4Ihs3LE)
> - 실습 파일 : [JSON](./index.html)

HTTP라는 것이 있고, JSON은 HTTP로 서버와 클라이언트가 서로 요청하고 전달하는 데이터의 형식중 하나가 JSON이다.

- HTTP : (HyperText Transfer Protocol) 클라이언트와 서버가 데이터를 어떻게 주고받을지 정한 규약
- HyperText에는 링크로된 문서 뿐만 아니라 전반적으로 사용되는 리소스, 파일도 포함된다.
- 그 전달 방법 : AJAX를 통해 서버와 통신하는데,
  - XHR이라는 오브젝트를 이용해서 서버에 데이터를 요청하고 받아올 수 있다.
  - 최근엔 fetch라는 오브젝트를 사용할 수 있게 되었다. (EI에는 지원되지 않음)
- AJAX와 XHR의 X는 XML을 말하는 것인데 요즘에는 JSON을 많이 이용한다.
- JSON의 특징
  - key와 value로 이루어져 있다.
  - 서버와 통신하지 않아도 오브젝트 파일 형태로 저장할 때 이용한다.
  - 데이터를 주고받을 때 간단하고, 가벼우며 읽기 좋다.
  - 데이터를 주고받을때 직렬화 시키는 데에 사용한다.
  - 플랫폼, 언어 상관없이 상욯라 수 있다.

### 유용한 사이트

- [JSON Diff](http://www.jsondiff.com/) : 데이터 비교
- [JSON Beautifier](https://jsonbeautifier.org/) : JSON 정렬
- [JSON Parser](https://jsonparser.org/) : JSON을 오브젝트로 변환
- [JSON Validator](https://tools.learningcontainer.com/json-validator/) : 유효한 JSON데이터인지 확인
