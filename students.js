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
      name: "한유진",
      age: 20,
      major: "컴퓨터공학과",
      tags: ["AI챗", "캠퍼스 라이프", "프로젝트"],
      personality: "차분하지만 승부욕이 있고, 팀 프로젝트에서 추진력이 강하다.",
      headline: "컴퓨터와 게임을 좋아하는 신입생",
      thumb: "./assets/images/students/yuji_01.jpg",
      photos: [
        "./assets/images/students/yuji_01.jpg",
        "./assets/images/students/yuji_02.jpg",
        "./assets/images/students/yuji_03.jpg",
        "./assets/images/students/yuji_04.jpg"
      ],
      profile: {
        "학년": "1학년",
        "관심 분야": "대화 UX / 캐릭터 인터랙션",
        "동아리": "미디어콘텐츠 연구회",
        "좋아하는 공간": "도서관 라운지"
      }
    },
    {
      id: "st-002",
      name: "정유진",
      age: 21,
      major: "경영학과",
      tags: ["기획", "브랜딩", "스토리"],
      personality: "말보다 결과로 보여주는 타입. 전략을 세우면 끝까지 밀고 간다.",
      headline: "서비스 기획과 사용자 흐름 담당.",
      thumb: "./assets/images/students/dohyun_01.jpg",
      photos: [
        "./assets/images/students/dohyun_01.jpg",
        "./assets/images/students/dohyun_02.jpg",
        "./assets/images/students/dohyun_03.jpg",
        "./assets/images/students/dohyun_04.jpg"
      ],
      profile: {
        "학년": "2학년",
        "관심 분야": "서비스 기획 / 사용자 흐름",
        "동아리": "창업학회",
        "좋아하는 공간": "학생회관 2층 라운지"
      }
    },
    {
      id: "st-003",
      name: "박서연",
      age: 20,
      major: "심리학과",
      tags: ["감정선", "대화", "관계"],
      personality: "관찰력이 뛰어나고 공감이 빠르다. ‘말의 온도’에 예민하다.",
      headline: "사람을 좋아하고 심리를 연구하는 학생",
      thumb: "./assets/images/students/seoyeon_01.jpg",
      photos: [
        "./assets/images/students/seoyeon_01.jpg",
        "./assets/images/students/seoyeon_02.jpg",
        "./assets/images/students/seoyeon_03.jpg",
        "./assets/images/students/seoyeon_04.jpg"
      ],
      profile: {
        "학년": "1학년",
        "관심 분야": "대화 심리 / 캐릭터 감정 모델",
        "동아리": "상담 스터디",
        "좋아하는 공간": "잔디광장"
      }
    },
    {
      id: "st-004",
      name: "최가빈",
      age: 22,
      major: "산업디자인학과",
      tags: ["UI", "비주얼", "브랜드"],
      personality: "깔끔한 기준이 있고, 흐트러진 디테일을 그냥 못 넘긴다.",
      headline: "디자인 감각이 뛰어난 3학년 학생",
      thumb: "./assets/images/students/minjae_01.jpg",
      photos: [
        "./assets/images/students/minjae_01.jpg",
        "./assets/images/students/minjae_02.jpg",
        "./assets/images/students/minjae_03.jpg",
        "./assets/images/students/minjae_04.jpg"
      ],
      profile: {
        "학년": "3학년",
        "관심 분야": "UX/UI / 인터랙션",
        "동아리": "디자인 스튜디오",
        "좋아하는 공간": "메이커스페이스"
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