// 연습문제

// 1. pages 폴더를 만들어서, 거기에 아래와 같이 5개의 더미(가짜, 임의의) 컴포넌트를 추가합니다(각 컴포넌트의 내용은 <h1> elements만 들어가있어도 돼요).
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. 다섯 개의 페이지가 아래와 같이 이동할 수 있도록 라우트를 정의합니다.
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<어떤-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<어떤-id>/edit => EditEventPage
// 3. <MainNavigation> component가 모든 페이지에서 상단에 보이도록 root layout을 추가해주세요.
// 4. MainNavigation 내에 적절하게 링크들을 추가 및 연결시켜 줍니다.
// 5. MainNavigation에서 현재 내가 어느 페이지 안에 있는지 알 수 있도록, 해당 링크는 "active" class를 갖도록 합니다.
// 6. EventsPage에 더미(가짜) 이벤트 목록을 추가해주세요.
//    각 항목(이벤트)은 해당하는 EventDetailPage로 이동하도록 연결되어야 합니다.
// 7. EventDetailPage에서 선택된 항목(이벤트)의 Id가 페이지 상에 노출되도록 해주세요.
// 보너스: /events/... 페이지들의 컴포넌트 상단에 <EventNavigation>라는 네비게이션을 보여주는 또 다른(중첩된) 레이아웃 경로를 만들어주세요.

function App() {
  return <div></div>;
}

export default App;
