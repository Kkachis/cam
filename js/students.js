/* =========================
   Students Page
   - Data-driven cards (easy add/remove)
   - Click to expand: image centers & grows, card extends down
   - Gallery (4 photos) + details
   - Search / random / collapse all
   ========================= */

(function () {
  const students = [
    {
      id: "st-001",
      name: "김가빈",
      age: 20,
      major: "경영학과",
      tags: ["INFJ", "신입생", "모태솔로"],
      personality: "내성적이고 조용한 편이지만, 친해지면 다정하고 유머러스함.",
      headline: "내성적이고 다정한 유저의 소꿉친구",
      thumb: "./assets/bg (40).png",
      photos: [
        "./assets/bg (6).png",
        "./assets/bg (7).png",
        "./assets/bg (25).png",
        "./assets/bg (39).png"
      ],
      profile: {
        "학년": "1학년",
        "관심 분야": "연애 / 성 지식",
        "동아리": "문학 동아리",
        "좋아하는 공간": "도서관 라운지"
      }
    },
    {
      id: "st-002",
      name: "정유진",
      age: 21,
      major: "국어국문학과",
      tags: ["INFP", "문학소녀", "망상가"],
      personality: "상상력이 풍부하고 감수성이 예민하다. 혼자 있는 시간을 좋아함.",
      headline: "상상력이 풍부한 문학 소녀",
      thumb: "./assets/gg (40).png",
      photos: [
        "./assets/gg (6).png",
        "./assets/gg (7).png",
        "./assets/gg (25).png",
        "./assets/gg (39).png"
      ],
      profile: {
        "학년": "2학년",
        "관심 분야": "현대 문학 / 시 창작",
        "동아리": "문예 창작 동아리",
        "좋아하는 공간": "도서관 2층 창가"
      }
    },
    {
      id: "st-003",
      name: "박서연",
      age: 23,
      major: "법학과",
      tags: ["INTJ", "논리적", "츤데레"],
      personality: "이성적이고 분석적인 사고를 좋아하며, 감정보다는 논리를 중시함.",
      headline: "이성적이고 논리적인 법학도",
      thumb: "./assets/yg (40).png",
      photos: [
        "./assets/yg (6).png",
        "./assets/yg (7).png",
        "./assets/yg (25).png",
        "./assets/yg (39).png"
      ],
      profile: {
        "학년": "4학년",
        "관심 분야": "국제법 / 인권",
        "동아리": "토론 동아리",
        "좋아하는 공간": "중앙 광장 벤치"
      }
    },
    {
      id: "st-004",
      name: "정예진",
      age: 22,
      major: "산업디자인학과",
      tags: ["ESTJ", "깔끔쟁이", "메스가키"],
      personality: "체계적이고 장난기 넘치는 성격으로, 계획을 세우고 실행하는 것을 좋아함.",
      headline: "체계적이고 깔끔한 디자인 전공생",
      thumb: "./assets/pg (40).png",
      photos: [
        "./assets/pg (6).png",
        "./assets/pg (7).png",
        "./assets/pg (25).png",
        "./assets/pg (39).png"
      ],
      profile: {
        "학년": "3학년",
        "관심 분야": "제품 디자인 / UX/UI",
        "동아리": "디자인 연구회",
        "좋아하는 공간": "디자인 스튜디오"
      }
    },
    {
      id: "st-005",
      name: "이진아",
      age: 21,
      major: "컴퓨터공학과",
      tags: ["ISTP", "로봇", "게임매니아"],
      personality: "논리적이고 분석적인 성격으로, 문제 해결을 즐기며 기술에 관심이 많음.",
      headline: "논리적이고 분석적인 컴퓨터공학과 학생",
      thumb: "./assets/wg (40).png",
      photos: [
        "./assets/wg (6).png",
        "./assets/wg (7).png",
        "./assets/wg (25).png",
        "./assets/wg (39).png"
      ],
      profile: {
        "학년": "2학년",
        "관심 분야": "인공지능 / 게임 개발",
        "동아리": "게임 개발 동아리",
        "좋아하는 공간": "컴퓨터 실습실"
      }
    },
    {
      id: "st-006",
      name: "박지아",
      age: 22,
      major: "신소재 공학과",
      tags: ["ENFP", "활발함", "리트리버 인간"],
      personality: "외향적이고 창의적인 성격으로, 새로운 아이디어를 탐구하고 사람들과 어울리는 것을 좋아함.",
      headline: "외향적이고 창의적인 신소재 공학과 학생",
      thumb: "./assets/vg (40).png",
      photos: [
        "./assets/vg (6).png",
        "./assets/vg (7).png",
        "./assets/vg (25).png",
        "./assets/vg (39).png"
      ],
      profile: {
        "학년": "2학년",
        "관심 분야": "나노기술 / 재료 과학",
        "동아리": "로봇 공학 동아리",
        "좋아하는 공간": "학생회관 카페"
      }
    },
    {
      id: "st-007",
      name: "권수지",
      age: 20,
      major: "의예과",
      tags: ["ESTP", "츤데레", "장난기 있음"],
      personality: "외향적이고 활동적인 성격으로, 사람들과 어울리며 새로운 경험을 즐기는 타입.",
      headline: "외향적이고 활동적인 의예과 학생",
      thumb: "./assets/sg (40).png",
      photos: [
        "./assets/sg (6).png",
        "./assets/sg (7).png",
        "./assets/sg (25).png",
        "./assets/sg (39).png"
      ],
      profile: {
        "학년": "1학년",
        "관심 분야": "의학 연구 / 봉사 활동",
        "동아리": "보드게임 동아리",
        "좋아하는 공간": "캠퍼스 카페"
      }
    },
    {
      id: "st-008",
      name: "신다은",
      age: 22,
      major: "스포츠 과학과",
      tags: ["ENTP", "독설가", "운동광"],
      personality: "외향적이고 활동적인 성격으로, 운동을 좋아하며 도전을 즐기는 타입.",
      headline: "외향적이고 츤데레인 스포츠 과학과 학생",
      thumb: "./assets/dg (40).png",
      photos: [
        "./assets/dg (6).png",
        "./assets/dg (7).png",
        "./assets/dg (25).png",
        "./assets/dg (39).png"
      ],
      profile: {
        "학년": "3학년",
        "관심 분야": "운동 생리학 / 트레이닝",
        "동아리": "미식축구 동아리",
        "좋아하는 공간": "운동장"
      }
    },
    {
      id: "st-009",
      name: "박슬아",
      age: 20,
      major: "실용 음악과",
      tags: ["ENTJ", "집착광", "밴드부"],
      personality: "외향적이고 리더십이 강한 성격으로, 목표나 한사람을 향해 끈질기게 노력하는 타입.",
      headline: "외향적이고 집착이 강한 실용 음악과 학생",
      thumb: "./assets/jg (7).png",
      photos: [
        "./assets/jg (6).png",
        "./assets/jg (7).png",
        "./assets/jg (25).png",
        "./assets/jg (39).png"
      ],
      profile: {
        "학년": "1학년",
        "관심 분야": "음악 제작 / 일렉 기타",
        "동아리": "밴드 동아리",
        "좋아하는 공간": "음악 연습실"
      }
    }
  ];

  const grid = document.getElementById("studentGrid");
  const searchInput = document.getElementById("studentSearch");
  if (!grid) return;

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderCard(st) {
    const tagsHtml = (st.tags || []).slice(0, 4).map(t => `<span class="chip">#${escapeHtml(t)}</span>`).join("");
    const galleryHtml = (st.photos || []).slice(0, 4).map((src, idx) => (
      `<div class="g-item" role="listitem">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(st.name)} 사진 ${idx + 1}" loading="lazy" />
      </div>`
    )).join("");

    const profileEntries = st.profile ? Object.entries(st.profile) : [];
    const detailsHtml = profileEntries.map(([k, v]) => (
      `<div class="detail">
        <strong>${escapeHtml(k)}</strong>
        <span>${escapeHtml(v)}</span>
      </div>`
    )).join("");

    return `
      <article class="expand-card" data-id="${escapeHtml(st.id)}">
        <div class="card-top">
          <div class="thumb" aria-hidden="true">
            <img src="${escapeHtml(st.thumb)}" alt="" loading="lazy" />
          </div>

          <div class="meta">
            <h3>${escapeHtml(st.name)}</h3>
            <div class="meta-row">
              <span class="chip">나이 ${escapeHtml(st.age)}</span>
              <span class="chip">${escapeHtml(st.major)}</span>
              ${tagsHtml}
            </div>
            <p class="muted small" style="margin:10px 0 0;">${escapeHtml(st.headline || "")}</p>
          </div>

          <div class="meta-actions">
            <button class="btn btn-ghost" type="button" data-action="toggle-card" aria-expanded="false">
              열기/닫기
            </button>
          </div>
        </div>

        <div class="card-expand" role="region" aria-label="${escapeHtml(st.name)} 상세">
          <div class="expand-inner">
            <div class="detail-grid">
              <div class="detail">
                <strong>이름</strong>
                <span>${escapeHtml(st.name)}</span>
              </div>
              <div class="detail">
                <strong>학과</strong>
                <span>${escapeHtml(st.major)}</span>
              </div>
              <div class="detail">
                <strong>나이</strong>
                <span>${escapeHtml(st.age)}</span>
              </div>
              <div class="detail">
                <strong>성격</strong>
                <span>${escapeHtml(st.personality)}</span>
              </div>
              ${detailsHtml}
            </div>

            <div class="note">
              <b>캐릭터 챗 포인트:</b> ${escapeHtml(st.headline || "—")}
            </div>

            <div class="gallery" role="list" aria-label="사진 갤러리">
              ${galleryHtml}
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
    const btn = card.querySelector('[data-action="toggle-card"]');
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

  function filterStudents(q) {
    const s = q.trim().toLowerCase();
    if (!s) return students;

    return students.filter(st => {
      const hay = [
        st.name, st.major, st.personality, st.headline,
        ...(st.tags || []),
        ...Object.values(st.profile || {})
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
    const btn = e.target.closest('[data-action="toggle-card"]');
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

    const open = e.target.closest('[data-action="open-all"]');
    if (open) openAll();

    const c = e.target.closest('[data-action="collapse-all"]');
    if (c) collapseAll();

    const r = e.target.closest('[data-action="random-open"]');
    if (r) openRandom();
  });

  searchInput?.addEventListener("input", () => {
    const list = filterStudents(searchInput.value);
    render(list);
  });

  render(students);
})();