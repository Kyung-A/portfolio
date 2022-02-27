export const projectList = [
  {
    id: 1,
    title: '△△기업 서비스 리뉴얼',
    image: null,
    date: '2021.01월~',
    descriptionList: [
      {
        item: '자사 서비스 리뉴얼 초기 기획 담당 ',
      },
      {
        item: '자사 웹 서비스의 일관적인 디자인, 유지보수 비용을 줄이기 위한 디자인 가이드 도입 추진',
      },
      {
        item: 'UI/UX 라이브러리 디자인 및 개발 (Node.js, Sass)',
      },
      {
        item: 'Java 전자정부프레임워크 기반으로 관리자 화면 UI, 프론트, 백엔드 개발',
      },
      {
        item: '사용자 화면 JSP, React UI 개발',
      },
      {
        item: 'Highcharts 라이브러리를 활용한 데이터 시각화 서비스 React, TypeScript 환경 UI, 프론트 개발',
      },
      {
        item: '기존 React로 구성된 highcharts 데이터 시각화 서비스를 Java, Javascript로 변환 작업 진행중 ',
      },
    ],
    url: null,
  },
  {
    id: 2,
    title: '동대문구청 데이터 플랫폼',
    image: `${process.env.PUBLIC_URL + '/images/dongdaemun.jpg'}`,
    date: '2021.11월~2021.12월 (약 1개월)',
    descriptionList: [
      {
        item: '동대문구의 마을지도, 데이터 시각화 웹 서비스',
      },
      {
        item: '데이터 시각화 관련, 지도 서비스 관련, 그 외 서비스 페이지 React, TypeScript 환경 UI, 프론트 개발',
      },
      {
        item: '지도 서비스 POI 관리자 화면 JSP UI 개발',
      },
    ],
    url: null,
  },
  {
    id: 3,
    title: '동작구청 우리동네지도',
    image: `${process.env.PUBLIC_URL + '/images/dongjak.png'}`,
    date: '2021.11월~2021.12월 (약 1개월)',
    descriptionList: [
      {
        item: '동작구의 각종 공공시설 정보를 제공하는 GIS 기반 시각화 웹 서비스',
      },
      {
        item: '데이터 시각화 관련, 지도 서비스 관련, 그 외 서비스 페이지 React, TypeScript 환경 UI, 프론트 개발',
      },
      {
        item: '지도 서비스 POI 관리자 화면 JSP UI 개발',
      },
    ],
    url: null,
  },
  {
    id: 4,
    title: '소상공인 버팀목자금 대시보드',
    image: `${process.env.PUBLIC_URL + '/images/nhmon.png'}`,
    date: '2020.12월~2021.01월 (약 1개월)',
    descriptionList: [
      {
        item: '소상공인진흥공단에서 버팀목자금 관리를 위한 관리자 대시보드 화면',
      },
      { item: '대시보드 전체 퍼블리싱 담당' },
      {
        item: 'CSS 모듈화에 신경을 많이 쓴 프로젝트',
      },
    ],
    url: null,
  },
  {
    id: 5,
    title: '소상공인 빅데이터 저장소',
    image: `${process.env.PUBLIC_URL + '/images/bigcen.png'}`,
    date: '2020.12월~2021.01월 (약 1개월)',
    descriptionList: [
      {
        item: '서울시의 다양한 상가업소 정보를 그래프와 지도로 보여주는 웹 서비스',
      },
      { item: '홈페이지 전 페이지 디자인 담당 및 JSP 환경 퍼블리싱' },
    ],
    url: 'https://www.sdatadam.co.kr/main',
  },
];

export const studyList = [
  {
    id: 1,
    title: 'React 아키텍쳐, 디자인 시스템, 파일 구조에 대한 고찰',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKyyhp%2FbtroubZTvKz%2FNcAebRoG6dMcKucRuCwZUK%2Fimg.png',
    description:
      '허술하게 시작한 디렉토리 구조는 어수선한 환경을 만든다! 과연 어떤게 최선의 파일 구조일까? 다양한 정보들을 접해보면서 그에 대한 느낀점들을 쭉 적어보았다.',
    url: 'https://kyung-a.tistory.com/35',
  },
  {
    id: 2,
    title: 'react-router-dom v6 업데이트 후 달라진 점',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc10Sx0%2FbtroC8NZilR%2Fwis1TmeiDxHLTUP8YrsvNk%2Fimg.png',
    description:
      'v6의 등장! 생각보다 매우 많이 달라졌다. 전 버전인 v5와의 차이점과 코드 비교, 추가된 부분을 알아보자.',
    url: 'https://kyung-a.tistory.com/36',
  },
  {
    id: 3,
    title: 'CSS guidelines, 나쁜 CSS 습관',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcO9VIH%2FbtqT166Fjzu%2FKm8UxNgO6Gq4k7PGc885U0%2Fimg.jpg',
    description:
      'CSS만 잘 써도 유지보수가 용이해지고, 재사용성이 어마무시해진다! 무엇보다 프론트엔드 개발자와의 충돌을 줄여주기도 하니까 꼭 알아놔야겠지? (속닥속닥)',
    url: 'https://kyung-a.tistory.com/20',
  },
  {
    id: 4,
    title: '로그인 시 header에 Authorization이 안 뜨는 현상',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGn94g%2Fbtrh4NvArs6%2FqLjwbsMJhxLNDYM8K0i3Y0%2Fimg.jpg',
    description:
      '토이 프로젝트 에러 보고서. 프론트, 백을 심도 깊이 수정해보며 해결했다.',
    url: 'https://kyung-a.tistory.com/33',
  },
  {
    id: 5,
    title: '일반 HTML 파일에 HTML include/imports 하는 방법',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchYucM%2FbtqPTCW6C5F%2FZYJWjXLmXc7REt9WmKDeEk%2Fimg.jpg',
    description:
      '회사 입사 초기 시절. 꼬꼬마 개발자에게 주어진 퍼블리싱 업무에서 효율성을 어떻게 끌어올릴 수 있을까?',
    url: 'https://kyung-a.tistory.com/18',
  },
];
