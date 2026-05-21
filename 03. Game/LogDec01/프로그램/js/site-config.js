/**
 * 사이트 전역 설정
 * GitHub Project Pages( /저장소명/ ) 배포 시 basePath 를 '/저장소명' 으로 설정한다.
 * User/Organization Pages( username.github.io ) 는 '' 로 둔다.
 */
window.SITE_CONFIG = {
  basePath: "",
  siteName: "Personal Home",
  tagline: "개인 프로젝트 & 게임 포트폴리오",
  author: "",

  sections: [
    {
      id: "games",
      title: "Games",
      description: "진행 중·완료한 게임 프로젝트",
      hubPath: "games/index.html",
      projects: [
        {
          id: "logdec01",
          title: "LogDec01",
          description: "Obsidian 기획 + 웹 프로토타입. 현재 저장소 프로젝트.",
          path: "games/logdec01/index.html",
          status: "dev",
        },
        {
          id: "game-02",
          title: "Game 02",
          description: "프로젝트 슬롯 (준비 중)",
          path: "games/game-02/index.html",
          status: "planned",
        },
        {
          id: "game-03",
          title: "Game 03",
          description: "프로젝트 슬롯 (준비 중)",
          path: "games/game-03/index.html",
          status: "planned",
        },
      ],
    },
  ],
};
