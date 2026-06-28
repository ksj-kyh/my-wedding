/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 * images/hero/1.jpg - 메인 사진 (1장, 필수)
 * images/story/1.jpg, 2.jpg, ... - 스토리 사진들 (순번, 자동 감지)
 * images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 * images/location/1.jpg - 약도/지도 이미지 (1장)
 * images/og/1.jpg - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,

  // ── 메인 (히어로) ──
  groom: {
    name: "김요한",
    nameEn: "Yohan Kim",
    father: "",
    mother: "정민애",
    fatherDeceased: false,
    motherDeceased: false,
    childOrder: "장남"
  },

  bride: {
    name: "김소정",
    nameEn: "Sojeong Kim",
    father: "",
    mother: "이현숙",
    fatherDeceased: false,
    motherDeceased: false,
    childOrder: "차녀"
  },

  wedding: {
    date: "2026-08-29",
    time: "11:00",
    venue: "글로리아 1층 라비아홀",
    hall: "",
    address: "광주광역시 서구 상무대로 683",
    tel: "062-371-3500",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1943035846",
      naver: "https://naver.me/GUwSjbeY"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "믿음 안에서 살아온 두 사람이\n하나님의 계획하심 속에 만나\n사랑으로 한 가정을 이루려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "저희는 서로에게서\n작은 기쁨도 크게 나누는 마음과\n어려움 속에서도 의미를 발견하는 지혜를 배웠습니다.\n\n서로의 이야기에 귀 기울이며\n마음을 나누는 시간 속에서\n삶의 기쁨과 고민, 선택의 순간까지도\n함께 나누고 의지할 수 있음을 알게 되었습니다.\n\n그 확신으로\n저희는 평생을 함께하기로 결심했습니다."
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김요한", bank: "기업은행", number: "659-015343-01-018" },
      { role: "어머님", name: "정민애", bank: "농협은행", number: "601028-52-070677" }
    ],
    bride: [
      { role: "신부", name: "김소정", bank: "국민은행", number: "776802-01-152720" },
      { role: "어머님", name: "이현숙", bank: "농협은행", number: "601135-52-203389" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김요한 ♥ 김소정 결혼합니다",
    description: "2026년 8월 29일, 소중한 분들을 초대합니다."
  }
};