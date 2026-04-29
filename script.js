const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const CHECKUP_CONFIG = {
  calendlyUrl: "https://docs.google.com/forms/d/1P2xc1AzjeNA1UJE9m71t5a1RciQF1xJ7LQqhmJsjbtM/edit",
  questions: [
    {
      id: "performance_basis",
      text: "你目前主要用什麼判斷廣告成效？",
      options: [
        { label: "幾乎完全看 ROAS", score: 3 },
        { label: "ROAS + 其他指標", score: 2 },
        { label: "有搭配營收或新客分析", score: 1 },
        { label: "有做過增量或對照測試", score: 0 }
      ]
    },
    {
      id: "retargeting_share",
      text: "你的轉換中，再行銷 retargeting 大約佔多少？",
      options: [
        { label: "超過 70%", score: 3 },
        { label: "50–70%", score: 2 },
        { label: "30–50%", score: 1 },
        { label: "低於 30%", score: 0 }
      ]
    },
    {
      id: "conversion_revenue_gap",
      text: "近期是否出現「轉換數上升，但營收沒有明顯成長」？",
      options: [
        { label: "經常發生", score: 3 },
        { label: "偶爾發生", score: 2 },
        { label: "很少", score: 1 },
        { label: "沒有", score: 0 }
      ]
    },
    {
      id: "new_existing_customer_split",
      text: "你是否能清楚區分新客與舊客的轉換？",
      options: [
        { label: "完全沒有", score: 3 },
        { label: "有，但沒在用", score: 2 },
        { label: "有部分分析", score: 1 },
        { label: "有完整策略", score: 0 }
      ]
    },
    {
      id: "organic_lift_when_ads_down",
      text: "當你降低或暫停某些廣告時，自然流量是否會上升？",
      options: [
        { label: "有明顯上升", score: 3 },
        { label: "有一點", score: 2 },
        { label: "沒注意過", score: 2 },
        { label: "沒有", score: 0 }
      ]
    },
    {
      id: "budget_decision_basis",
      text: "你通常怎麼決定要不要加預算？",
      options: [
        { label: "看 ROAS 或 CPA", score: 3 },
        { label: "看轉換數", score: 2 },
        { label: "看整體營收", score: 1 },
        { label: "有測試後再決定", score: 0 }
      ]
    },
    {
      id: "intentional_holdout",
      text: "你是否曾經刻意「關掉一部分廣告」來觀察影響？",
      options: [
        { label: "從來沒有", score: 3 },
        { label: "很少", score: 2 },
        { label: "有嘗試過", score: 1 },
        { label: "有系統化測試", score: 0 }
      ]
    },
    {
      id: "data_readiness",
      text: "你目前的數據狀況是？",
      options: [
        { label: "廣告數據分散", score: 3 },
        { label: "有部分整合", score: 2 },
        { label: "大致整合", score: 1 },
        { label: "完整串接", score: 0 }
      ]
    },
    {
      id: "conversion_volume",
      text: "你近 30 天大約有多少筆可用來判斷成效的轉換？",
      options: [
        { label: "少於 30 筆，或每週波動很大", score: 8, resultLevel: "data_limited" },
        { label: "30–99 筆", score: 5, resultLevel: "data_limited" },
        { label: "100–299 筆", score: 2 },
        { label: "300 筆以上", score: 0 }
      ]
    },
    {
      id: "kpi_type",
      text: "你的 KPI 比較接近哪種？",
      options: [
        { label: "點擊 / CTR / 下載", score: 3 },
        { label: "轉換數", score: 2 },
        { label: "營收 / ROAS", score: 1 },
        { label: "新客 / LTV / 增量", score: 0 }
      ]
    },
    {
      id: "confidence_in_truth",
      text: "你對目前廣告成效的「真實性」有多有信心？",
      options: [
        { label: "老實說不太確定", score: 3 },
        { label: "有點懷疑", score: 2 },
        { label: "大致相信", score: 1 },
        { label: "有測試驗證過", score: 0 }
      ]
    }
  ],
  results: [
    {
      level: "data_limited",
      min: -1,
      max: -1,
      title: "資料量可能還不夠穩定",
      summary: "你的帳戶不一定有明顯浪費，但目前可用轉換量可能不足，直接做正式增量測試容易判讀失準。建議先確認資料量與轉換品質，再決定測試方式。",
      meaning: "當轉換量太少或波動太大時，測驗結果容易被少數事件影響。這不代表廣告一定不好，而是目前比較難用一次測試判斷哪些預算真的帶來新增營收。",
      nextStep: "建議先整理近 30–90 天的轉換量、新客比例與營收穩定度。如果資料量仍偏少，可以先做方向性診斷，例如檢查再行銷佔比、自然流量替代效果與低價值轉換來源。",
      ctaLabel: "免費預約 45 分鐘廣告諮詢"
    },
    {
      level: "ready",
      min: 0,
      max: 8,
      title: "可以開始規劃增量測試",
      summary: "你的數據與策略已具備進行增量測試的基本條件。下一步是透過實驗驗證，進一步優化預算配置。",
      meaning: "你已經不只依賴平台表面數字做決策，通常也具備區分受眾、衡量營收或觀察對照組的基礎。這代表帳戶比較適合直接做增量測試，確認哪些投放真的創造新增需求。",
      nextStep: "建議先選定一個高預算或高疑慮的廣告活動，安排一個簡單的對照測試，再用營收、新客與自然流量變化交叉判讀。",
      ctaLabel: "免費預約 45 分鐘增量諮詢"
    },
    {
      level: "medium",
      min: 9,
      max: 21,
      title: "建議先做簡易增量診斷",
      summary: "你的帳戶具備基本條件，但目前仍有部分決策依賴表面指標。透過簡單測試，可能可以找出預算優化空間。",
      meaning: "目前的成效判斷可能混合了真實增量與平台歸因帶來的高估。若再行銷、ROAS 或轉換數在決策中佔比太高，部分預算可能正在追逐本來就會轉換的人。",
      nextStep: "建議先做低風險診斷：檢查新舊客比例、再行銷佔比、自然流量替代效果，並挑一個受眾或活動做短期暫停測試，觀察整體營收是否真的受影響。",
      ctaLabel: "免費預約 45 分鐘廣告健檢"
    },
    {
      level: "high_risk",
      min: 22,
      max: 38,
      title: "建議先做廣告健康檢查",
      summary: "你的廣告很可能正在放大本來就會發生的轉換。部分預算可能沒有實際帶來新增營收，建議先進行增量診斷，而不是繼續優化 ROAS。",
      meaning: "你的帳戶很可能高度依賴平台歸因、再行銷或低價值轉換訊號。這會讓報表看起來漂亮，但真實新增營收不一定同步增加，預算也可能被分配到低增量活動。",
      nextStep: "建議先暫停複雜優化，改做帳戶健康檢查：盤點轉換品質、再行銷佔比、新舊客拆分與自然流量替代效果，再決定哪些廣告應該保留、降預算或測試關停。",
      ctaLabel: "免費預約 45 分鐘廣告健檢"
    }
  ]
};

function isGaConfigured() {
  return typeof GA_MEASUREMENT_ID === "string" && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";
}

function initializeAnalytics() {
  if (!isGaConfigured()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

function trackEvent(eventName, params = {}) {
  if (!eventName) return;

  if (typeof window.gtag === "function" && isGaConfigured()) {
    window.gtag("event", eventName, params);
  }
}

function getResultByScore(score) {
  const scoreBasedResults = CHECKUP_CONFIG.results.filter((result) => result.min >= 0);
  return scoreBasedResults.find((result) => score >= result.min && score <= result.max) || scoreBasedResults[0];
}

function getMaxRawScore() {
  return CHECKUP_CONFIG.questions.reduce((total, question) => {
    const highestOptionScore = Math.max(...question.options.map((option) => option.score));
    return total + highestOptionScore;
  }, 0);
}

function getDisplayScore(score) {
  const maxRawScore = getMaxRawScore();
  if (maxRawScore === 0) return 0;
  return Math.round((score / maxRawScore) * 100);
}

function getResultByAnswers(score, answers) {
  const blockingLevel = answers
    .map((selectedIndex, questionIndex) => CHECKUP_CONFIG.questions[questionIndex].options[selectedIndex])
    .find((option) => option && option.resultLevel);

  if (blockingLevel) {
    return CHECKUP_CONFIG.results.find((result) => result.level === blockingLevel.resultLevel) || getResultByScore(score);
  }

  return getResultByScore(score);
}

function setTrackedLinks() {
  document.querySelectorAll("[data-track-click]").forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent(link.dataset.trackClick, {
        destination: link.getAttribute("href") || ""
      });
    });
  });
}

function initQuizPage() {
  const form = document.getElementById("quizForm");
  const questionTitle = document.getElementById("quiz-question");
  const optionsList = document.getElementById("optionsList");
  const questionCounter = document.getElementById("questionCounter");
  const progressPercent = document.getElementById("progressPercent");
  const progressFill = document.getElementById("progressFill");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  if (!form || !questionTitle || !optionsList) return;

  const answers = new Array(CHECKUP_CONFIG.questions.length).fill(null);
  let currentIndex = 0;

  function renderQuestion() {
    const question = CHECKUP_CONFIG.questions[currentIndex];
    const total = CHECKUP_CONFIG.questions.length;
    const progress = Math.round(((currentIndex + 1) / total) * 100);

    questionTitle.textContent = question.text;
    questionCounter.textContent = `第 ${currentIndex + 1} 題 / 共 ${total} 題`;
    progressPercent.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;
    prevButton.disabled = currentIndex === 0;
    nextButton.textContent = currentIndex === total - 1 ? "查看結果" : "下一題";
    nextButton.disabled = answers[currentIndex] === null;

    optionsList.innerHTML = "";
    question.options.forEach((option, optionIndex) => {
      const optionId = `${question.id}_${optionIndex}`;
      const label = document.createElement("label");
      label.className = "option-card";
      label.setAttribute("for", optionId);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.id;
      input.id = optionId;
      input.value = String(optionIndex);
      input.checked = answers[currentIndex] === optionIndex;

      const content = document.createElement("span");
      content.className = "option-content";
      content.innerHTML = `<span class="option-key">${String.fromCharCode(65 + optionIndex)}</span><span>${option.label}</span>`;

      input.addEventListener("change", () => {
        answers[currentIndex] = optionIndex;
        nextButton.disabled = false;
      });

      label.append(input, content);
      optionsList.appendChild(label);
    });
  }

  function completeQuiz() {
    const score = answers.reduce((total, selectedIndex, questionIndex) => {
      const option = CHECKUP_CONFIG.questions[questionIndex].options[selectedIndex];
      return total + option.score;
    }, 0);
    const result = getResultByAnswers(score, answers);

    trackEvent("quiz_completed", {
      score,
      level: result.level
    });

    window.location.href = `result.html?score=${encodeURIComponent(score)}&level=${encodeURIComponent(result.level)}`;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  nextButton.addEventListener("click", () => {
    if (answers[currentIndex] === null) return;

    if (currentIndex === CHECKUP_CONFIG.questions.length - 1) {
      completeQuiz();
      return;
    }

    currentIndex += 1;
    renderQuestion();
  });

  renderQuestion();
}

function initResultPage() {
  const params = new URLSearchParams(window.location.search);
  const parsedScore = Number.parseInt(params.get("score") || "", 10);
  const score = Number.isFinite(parsedScore) ? Math.min(Math.max(parsedScore, 0), getMaxRawScore()) : 0;
  const level = params.get("level");
  const resultFromScore = getResultByScore(score);
  const result = CHECKUP_CONFIG.results.find((item) => item.level === level) || resultFromScore;
  const displayScore = getDisplayScore(score);
  const resultHero = document.getElementById("resultHero");
  const scorePill = document.getElementById("scorePill");
  const resultCta = document.getElementById("resultCta");

  const cta = document.querySelector("[data-track-click='consultation_cta_click']");
  if (cta) cta.setAttribute("href", CHECKUP_CONFIG.calendlyUrl);
  if (resultCta && result.ctaLabel) resultCta.textContent = result.ctaLabel;

  document.body.dataset.resultLevel = result.level;
  if (resultHero) resultHero.classList.add(`result-${result.level}`);
  if (scorePill) scorePill.classList.add(`score-${result.level}`);

  document.getElementById("scoreValue").textContent = String(displayScore);
  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultSummary").textContent = result.summary;
  document.getElementById("resultMeaning").textContent = result.meaning;
  document.getElementById("resultNextStep").textContent = result.nextStep;
}

document.addEventListener("DOMContentLoaded", () => {
  initializeAnalytics();
  trackEvent("page_view", {
    page_path: window.location.pathname,
    page_title: document.title
  });
  setTrackedLinks();

  const page = document.body.dataset.page;
  if (page === "quiz") initQuizPage();
  if (page === "result") initResultPage();
});
