/* =========================
   Buildings Page
   - Data-driven cards (easy add/remove)
   - Click to expand: image centers & grows, card extends down
   - NO gallery; show floors list
   - Search / random / collapse all
   ========================= */

(function () {
  const buildings = [
  {
    "id": "b-001",
    "name": "대학본부",
    "buildingNo": "001",
    "major": "행정 및 대학 운영",
    "thumb": "./assets/b (8).png",
    "note": "학교의 행정 업무가 집중된 심장부 건물.",
    "floors": [
      { "floor": "1F", "desc": "종합민원실 / 입학처 / 은행" },
      { "floor": "2F", "desc": "교무처 / 학생처 / 기획처" },
      { "floor": "3F", "desc": "총장실 / 이사회실 / 대회의실" },
      { "floor": "4F", "desc": "정보기획팀 / 서버실 / 대외협력팀" }
    ]
  },
  {
    "id": "b-101",
    "name": "정보관",
    "buildingNo": "101",
    "major": "컴퓨터공학과 / 소프트웨어융합",
    "thumb": "./assets/b (7).png",
    "note": "IT 및 소프트웨어 교육의 중심 전공관.",
    "floors": [
      { "floor": "1F", "desc": "로비 / IT 서비스 센터 / 오픈 라운지" },
      { "floor": "2F", "desc": "대형 강의실 / PC 실습실" },
      { "floor": "3F", "desc": "코딩 전용 실습실 / 학과 사무실" },
      { "floor": "4F", "desc": "데이터사이언스 랩 / 교수 연구실" },
      { "floor": "5F", "desc": "AI 연구센터 / 클라우드 실습실" },
      { "floor": "6F", "desc": "대학원실 / 프로젝트 협업룸" }
    ]
  },
  {
    "id": "b-102",
    "name": "공학관",
    "buildingNo": "102",
    "major": "기계공학 / 전기전자공학",
    "thumb": "./assets/b (10).png",
    "note": "최첨단 공학 실험 및 실습이 이루어지는 전공관.",
    "floors": [
      { "floor": "1F", "desc": "기초공학 실습실 / 공동기기실" },
      { "floor": "2F", "desc": "회로 설계실 / 전공 강의실" },
      { "floor": "3F", "desc": "로봇 제어 실습실 / 학과 사무실" },
      { "floor": "4F", "desc": "스마트 모빌리티 연구실 / 교수 연구실" },
      { "floor": "5F", "desc": "에너지 시스템 랩 / 대학원 연구실" },
      { "floor": "6F", "desc": "반도체 공정 실습실 / 미팅룸" },
      { "floor": "7F", "desc": "캡스톤 디자인실 / 세미나실" }
    ]
  },
  {
    "id": "b-201",
    "name": "인문관",
    "buildingNo": "201",
    "major": "인문학부 / 국어국문학",
    "thumb": "./assets/b (1).png",
    "note": "비판적 사고와 인문학적 소양을 기르는 전공관.",
    "floors": [
      { "floor": "1F", "desc": "인문대 라운지 / 학생회실" },
      { "floor": "2F", "desc": "전공 강의실 / 소그룹 세미나룸" },
      { "floor": "3F", "desc": "고전 연구실 / 학과 사무실" },
      { "floor": "4F", "desc": "언어 실습실 / 교수 연구실" },
      { "floor": "5F", "desc": "인문학 연구소 / 대학원 열람실" }
    ]
  },
  {
    "id": "b-202",
    "name": "경영관",
    "buildingNo": "202",
    "major": "경영학과 / 경제학과",
    "thumb": "./assets/b (3).png",
    "note": "비즈니스 리더를 양성하는 토론 중심 전공관.",
    "floors": [
      { "floor": "1F", "desc": "글로벌 경영 라운지 / 취업지원센터" },
      { "floor": "2F", "desc": "경영 전용 강의실 / 커리어 개발실" },
      { "floor": "3F", "desc": "금융 시뮬레이션룸 / 학과 사무실" },
      { "floor": "4F", "desc": "케이스 스터디룸 / 교수 연구실" },
      { "floor": "5F", "desc": "MBA 강의실 / 경영 연구소" },
      { "floor": "6F", "desc": "경영대학원 행정실 / 휴게실" }
    ]
  },
  {
    "id": "b-203",
    "name": "법학관",
    "buildingNo": "203",
    "major": "법학과 / 공공정책학",
    "thumb": "./assets/b (12).png",
    "note": "법적 사고와 정의를 배우는 전공관.",
    "floors": [
      { "floor": "1F", "desc": "모의법정 / 법학전문도서실" },
      { "floor": "2F", "desc": "전공 강의실 / 고시 준비실" },
      { "floor": "3F", "desc": "법률 상담소 / 학과 사무실" },
      { "floor": "4F", "desc": "공공정책 연구소 / 교수 연구실" },
      { "floor": "5F", "desc": "대학원 세미나실 / 열람실" }
    ]
  },
  {
    "id": "b-204",
    "name": "사회관",
    "buildingNo": "204",
    "major": "사회학과 / 정치외교학과",
    "thumb": "./assets/b (16).png",
    "note": "사회 현상을 분석하고 탐구하는 전공관.",
    "floors": [
      { "floor": "1F", "desc": "사회과학 라운지 / 학과 학생회실" },
      { "floor": "2F", "desc": "전공 강의실 / 통계 분석실" },
      { "floor": "3F", "desc": "사회조사 연구소 / 학과 사무실" },
      { "floor": "4F", "desc": "미디어 센터 / 교수 연구실" },
      { "floor": "5F", "desc": "학술 세미나실 / 대학원 연구실" }
    ]
  },
  {
    "id": "b-301",
    "name": "자연관",
    "buildingNo": "301",
    "major": "물리학 / 화학 / 생명과학",
    "thumb": "./assets/b (9).png",
    "note": "기초 과학 연구와 실험 중심의 전공관.",
    "floors": [
      { "floor": "1F", "desc": "기초 과학 실습실 / 실험실 안전센터" },
      { "floor": "2F", "desc": "전공 강의실 / 분석 기기실" },
      { "floor": "3F", "desc": "생명공학 실험실 / 학과 사무실" },
      { "floor": "4F", "desc": "화학 합성 연구실 / 교수 연구실" },
      { "floor": "5F", "desc": "물성 물리 연구소 / 공동 실험동" },
      { "floor": "6F", "desc": "대학원 통합 실험실 / 세미나룸" }
    ]
  },
  {
    "id": "b-302",
    "name": "의학관",
    "buildingNo": "302",
    "major": "의예과 / 의학과 / 간호학과",
    "thumb": "./assets/b (11).png",
    "note": "최첨단 의료 교육 및 연구가 이루어지는 대형 건물.",
    "floors": [
      { "floor": "1F", "desc": "로비 / 의학 도서관 / 행정실" },
      { "floor": "2F", "desc": "기초 의학 실습실 / 대강의실" },
      { "floor": "3F", "desc": "간호학 실습실 / 시뮬레이션 센터" },
      { "floor": "4F", "desc": "임상 교육 센터 / PBL 학습실" },
      { "floor": "5F-7F", "desc": "의과학 연구소 / 기초 의학 실험실" },
      { "floor": "8F-10F", "desc": "교수 연구실 / 세미나실" },
      { "floor": "11F-14F", "desc": "심화 연구실 / 국책 사업단" },
      { "floor": "15F", "desc": "스카이 라운지 / 컨퍼런스 홀" }
    ]
  },
  {
    "id": "b-401",
    "name": "학생회관",
    "buildingNo": "401",
    "major": "학생 지원 시설",
    "thumb": "./assets/b (5).png",
    "note": "학생들의 편의와 자치 활동을 위한 공간.",
    "floors": [
      { "floor": "B1", "desc": "푸드코트 / 편의점 / 서점" },
      { "floor": "1F", "desc": "학생 서비스센터 / 보건진료소" },
      { "floor": "2F", "desc": "총학생회실 / 동아리 연합회" },
      { "floor": "3F", "desc": "중앙 동아리실 / 소극장" },
      { "floor": "4F", "desc": "학생 휴게실 / 심리상담센터" }
    ]
  },
  {
    "id": "b-501",
    "name": "중앙도서관",
    "buildingNo": "501",
    "major": "학습·연구 인프라",
    "thumb": "./assets/b (15).png",
    "note": "방대한 자료와 집중 학습 공간을 제공하는 도서관.",
    "floors": [
      { "floor": "B1", "desc": "미디어실 / 스튜디오 / 보존서고" },
      { "floor": "1F", "desc": "자료 검색 / 대출·반납 / 북카페" },
      { "floor": "2F", "desc": "제1열람실 / 그룹 스터디룸" },
      { "floor": "3F", "desc": "제2열람실 / 전자 정보실" },
      { "floor": "4F", "desc": "학술지실 / 고문헌 자료실" },
      { "floor": "5F", "desc": "연구 열람실 / 야외 정원" }
    ]
  },
  {
    "id": "b-601",
    "name": "예술관",
    "buildingNo": "601",
    "major": "회화 / 디자인 / 음악",
    "thumb": "./assets/b (13).png",
    "note": "창의적 예술 활동과 실기가 이루어지는 전공관.",
    "floors": [
      { "floor": "1F", "desc": "아트 갤러리 / 입체 조형실" },
      { "floor": "2F", "desc": "회화 작업실 / 디자인 스튜디오" },
      { "floor": "3F", "desc": "디지털 아트랩 / 학과 사무실" },
      { "floor": "4F", "desc": "음악 연습실 / 합주실" },
      { "floor": "5F", "desc": "개인 실기실 / 교수 연구실" }
    ]
  },
  {
    "id": "b-701",
    "name": "까치 기숙사",
    "buildingNo": "701",
    "major": "학생 거주 시설",
    "thumb": "./assets/b (4).png",
    "note": "학생들에게 안락한 주거 환경을 제공하는 기숙사.",
    "floors": [
      { "floor": "1F", "desc": "안내데스크 / 사생 식당 / 무인택배함" },
      { "floor": "2F", "desc": "피트니스 센터 / 세탁실 / 커뮤니티실" },
      { "floor": "3F-12F", "desc": "사생실 / 층별 휴게 공간" }
    ]
  },
  {
    "id": "b-801",
    "name": "국제교류관",
    "buildingNo": "801",
    "major": "국제교류 / 한국어학당",
    "thumb": "./assets/b (18).png",
    "note": "글로벌 네트워크와 언어 교육의 장.",
    "floors": [
      { "floor": "1F", "desc": "국제교류팀 / 글로벌 라운지" },
      { "floor": "2F", "desc": "한국어학당 교무실 / 어학 실습실" },
      { "floor": "3F", "desc": "외국어 전용 강의실 / 세미나룸" },
      { "floor": "4F", "desc": "교환학생 지원센터 / 게스트룸" }
    ]
  },
  {
    "id": "b-802",
    "name": "창업지원관",
    "buildingNo": "802",
    "major": "스타트업 / 산학협력",
    "thumb": "./assets/b (17).png",
    "note": "학생 창업과 아이디어 실현을 돕는 공간.",
    "floors": [
      { "floor": "1F", "desc": "창업 카페 / 아이디어 월" },
      { "floor": "2F", "desc": "메이커스페이스 / 3D 프린팅실" },
      { "floor": "3F", "desc": "창업 보육실 / 협업 오피스" }
    ]
  },
  {
    "id": "b-803",
    "name": "산학협력관",
    "buildingNo": "803",
    "major": "산학협력단 / 기업연구소",
    "thumb": "./assets/b (14).png",
    "note": "기업과 대학이 기술을 공유하고 협력하는 공간.",
    "floors": [
      { "floor": "1F", "desc": "산학협력단 사무실 / 기술이전센터" },
      { "floor": "2F", "desc": "입주기업 부설 연구소" },
      { "floor": "3F", "desc": "공동 연구실 / 회의실" }
    ]
  },
  {
    "id": "b-804",
    "name": "국책연구관",
    "buildingNo": "804",
    "major": "특수 목적 연구단",
    "thumb": "./assets/b (19).png",
    "note": "대규모 국가 연구 프로젝트를 수행하는 연구관.",
    "floors": [
      { "floor": "1F", "desc": "연구 지원팀 / 대형 회의실" },
      { "floor": "2F", "desc": "중점 연구소 1 / 분석실" },
      { "floor": "3F", "desc": "중점 연구소 2 / 세미나실" }
    ]
  },
  {
    "id": "b-901",
    "name": "대강당&컨벤션홀",
    "buildingNo": "901",
    "major": "문화 예술 / 대형 행사",
    "thumb": "./assets/b (6).png",
    "note": "다양한 행사와 문화 공연이 열리는 복합 홀.",
    "floors": [
      { "floor": "1F", "desc": "컨벤션홀 / 전시 로비" },
      { "floor": "2F", "desc": "대강당 객석(하부) / 무대시설" },
      { "floor": "3F", "desc": "대강당 객석(상부) / 조정실" }
    ]
  },
  {
    "id": "b-902",
    "name": "스포츠관",
    "buildingNo": "902",
    "major": "체육학과 / 생활체육",
    "thumb": "./assets/b (20).png",
    "note": "실내 스포츠와 건강 증진을 위한 체육 시설.",
    "floors": [
      { "floor": "1F", "desc": "실내 체육관 / 스포츠 행정실" },
      { "floor": "2F", "desc": "피트니스 센터 / 스피닝룸" },
      { "floor": "3F", "desc": "다목적 GX실 / 요가 스튜디오" }
    ]
  },
  {
    "id": "b-903",
    "name": "운동장",
    "buildingNo": "903",
    "major": "야외 체육 시설",
    "thumb": "./assets/b (21).png",
    "note": "인조 잔디와 트랙이 갖춰진 야외 활동 공간.",
    "floors": [
      { "floor": "1F", "desc": "그라운드 / 육상 트랙 / 관람석" }
    ]
  }
];

  const grid = document.getElementById("buildingGrid");
  const searchInput = document.getElementById("buildingSearch");
  if (!grid) return;

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderCard(b) {
    const floorsHtml = (b.floors || []).map(f => `
      <div class="floor">
        <div class="f-l">${escapeHtml(f.floor)}</div>
        <div class="f-r">${escapeHtml(f.desc)}</div>
      </div>
    `).join("");

    return `
      <article class="expand-card" data-id="${escapeHtml(b.id)}">
        <div class="card-top">
          <div class="thumb" aria-hidden="true">
            <img src="${escapeHtml(b.thumb)}" alt="" loading="lazy" />
          </div>

          <div class="meta">
            <h3>${escapeHtml(b.name)}</h3>
            <div class="meta-row">
              <span class="chip">건물 번호 ${escapeHtml(b.buildingNo)}</span>
              <span class="chip">${escapeHtml(b.major)}</span>
            </div>
            <p class="muted small" style="margin:10px 0 0;">${escapeHtml(b.note || "")}</p>
          </div>

          <div class="meta-actions">
            <button class="btn btn-ghost" type="button" data-action="toggle-building" aria-expanded="false">
              열기/닫기
            </button>
          </div>
        </div>

        <div class="card-expand" role="region" aria-label="${escapeHtml(b.name)} 층별 안내">
          <div class="expand-inner">
            <div class="detail-grid">
              <div class="detail">
                <strong>건물명</strong>
                <span>${escapeHtml(b.name)}</span>
              </div>
              <div class="detail">
                <strong>건물 번호</strong>
                <span>${escapeHtml(b.buildingNo)}</span>
              </div>
              <div class="detail">
                <strong>연계 전공/시설</strong>
                <span>${escapeHtml(b.major)}</span>
              </div>
              <div class="detail">
                <strong>요약</strong>
                <span>${escapeHtml(b.note || "—")}</span>
              </div>
            </div>

            <div class="floors" aria-label="층별 구성">
              ${floorsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function render(list) {
    grid.innerHTML = list.map(renderCard).join("");
  }

  function setOpen(card, open) {
    card.classList.toggle("is-open", open);
    const btn = card.querySelector('[data-action="toggle-building"]');
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function collapseAll() {
    grid.querySelectorAll(".expand-card.is-open").forEach(card => setOpen(card, false));
  }

  function openAll() {
    grid.querySelectorAll(".expand-card").forEach(card => setOpen(card, true));
  }

  function toggleCard(card) {
    const isOpen = card.classList.contains("is-open");
    // ✅ 다른 카드 자동 접기 제거 (여러 개 유지)
    setOpen(card, !isOpen);

    if (!isOpen) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function filterBuildings(q) {
    const s = q.trim().toLowerCase();
    if (!s) return buildings;

    return buildings.filter(b => {
      const hay = [
        b.name, b.buildingNo, b.major, b.note,
        ...(b.floors || []).map(x => `${x.floor} ${x.desc}`)
      ].join(" ").toLowerCase();

      return hay.includes(s);
    });
  }

  function openRandom() {
    const cards = Array.from(grid.querySelectorAll(".expand-card"));
    if (!cards.length) return;
    const pick = cards[Math.floor(Math.random() * cards.length)];
    toggleCard(pick);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest('[data-action="toggle-building"]');
    if (btn) {
      const card = btn.closest(".expand-card");
      if (card) toggleCard(card);
      return;
    }

    const card = e.target.closest(".expand-card");
    if (card && !e.target.closest("button,a,input")) {
      toggleCard(card);
      return;
    }

    const open = e.target.closest('[data-action="open-all-buildings"]');
    if (open) openAll();

    const c = e.target.closest('[data-action="collapse-all-buildings"]');
    if (c) collapseAll();

    const r = e.target.closest('[data-action="random-open-building"]');
    if (r) openRandom();
  });

  searchInput?.addEventListener("input", () => {
    const list = filterBuildings(searchInput.value);
    render(list);
  });

  render(buildings);
})();