# 학원 관리 프로젝트

> 주제 : 학원 선생님 입장에서 학원 관리 시스템
> 동기 : (대학교 풀스택 프로젝트)부모님이 학원 선생님이셔서 매일 학생들 개인별로 할일을 지정하고 학생 관리를 꼼꼼하게 하시는 것을 보고 이걸 웹으로 만들 수 있지 않을까라는 생각이 들어서 진행하게 되었다.

> 백엔드 : 플라스크
> 프론트엔드 기술 : React,redux,redux-saga,ssr

> 구성 : 로그인,회원가입,학생 목록 리스트 페이지, 학생 목록 리스트에 학생 등록 페이지, 선생님 개인의 시간관리 페이지, 학생 목록 리스트에서 클릭시 학생 개인의 todo를 등록할 수 있는 페이지 등등

---

# 22.03.25

> 아직 백엔드를 구성하는 플라스크는 배우질 않아서 차츰 배워나가면 백엔드 쪽을 구성할 생각이다.
> 서버가 없기 때문에 프론트엔드 쪽에서 실제 데이터를 서버를 이용해 저장하거나 가져올 수는 없기 때문에 더미데이터를 사용해서 프론트엔드를 먼저 완성을 할 생각이다.

> 첫날이라서 어떤 식으로 진행을 할지 계획을 짜고 생각을 하느라 시간이 좀 많이 걸렸던 것 같다.
> 로그인 성공하면 보여줄 웹의 레이아웃 컴포넌트를 만들고 적용만 시켜놓았다.
> 회원가입과 로그인페이지를 구성하고 리덕스를 이용해 전역 상태 관리를 해주었다.
> 로그인 성공 시 user에 {id,password}가 저장이 된다.

(아래는 간단한 로그인 화면이다. antd를 사용은 해봤지만 정확히 기억이 나질 않아서 찾아보면서 진행했다)
<img width="1440" alt="스크린샷 2022-03-25 오후 5 53 34" src="https://user-images.githubusercontent.com/88185154/160088083-8d2367db-a343-47f4-97ae-6a734698747d.png">

> 비동기 작업을 하는 redux-saga는 컴포넌트와 리듀서설정이 조금씩 되면 같이 만들어 진행할 계획이다.

---
