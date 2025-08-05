// 명언 데이터 배열
const quotes = [
  "오늘이 내가 살아갈 유일한 날이다.",
  "어둠이 짙을수록 별은 더욱 빛난다.",
  "세상이 널 밀어내려 할 때, 그 힘을 네게 밀어붙여라.",
  "인생은 달려가는 여정이 아니라, 지금 이 순간을 즐기는 것이다.",
  "최고의 기회는 실패 뒤에 숨어 있다.",
  "성공은 길고 먼 여정이지만, 시작은 단 한 걸음이다.",
  "어떤 일이든 시작이 반이다.",
  "당신이 힘들 때, 그 고통은 곧 성장의 씨앗이 된다.",
  "가장 어두운 시간이 가장 빛나는 순간을 준비한다.",
  "한 걸음씩 나아가다 보면 어느새 목적지에 도달한다.",
  "지금이 아니면 언제 할 것인가?",
  "불가능한 일은 없다. 단지 생각의 한계를 넘지 못했을 뿐이다.",
  "어떤 길을 가더라도, 끝까지 가면 그 길은 나만의 길이 된다.",
  "실패는 성공의 어머니, 도전은 성장의 씨앗이다.",
  "내일을 위해 오늘을 최선을 다해 살아라.",
  "작은 변화도 큰 변화를 만들어낼 수 있다.",
  "불가능은 한계가 아니라 시작일 뿐이다.",
  "인생은 오늘이 가장 중요한 순간이다.",
  "누구나 할 수 있다고 믿을 때, 그때가 시작이다.",
  "어려운 길일수록 그 끝은 더 아름답다.",
  "자신에게 기회를 주지 않으면, 기회는 너에게 오지 않는다.",
  "성공은 준비된 자에게 찾아온다.",
  "너의 길을 믿고, 계속 나아가라.",
  "인생에서 가장 중요한 것은 오늘이다.",
  "포기하지 않으면, 반드시 그 길은 열린다.",
  "당신이 원하는 것은 항상 노력 뒤에 온다.",
  "어떤 일이든 멈추지 않고 계속 도전하라.",
  "과거를 떠나 미래를 향해 가자.",
  "모든 것이 변할 때, 내가 변하지 않으면 큰 성장을 이룬다.",
  "매일 조금씩 발전하는 것이 진정한 성공이다.",
  "성공을 원한다면, 먼저 실패를 두려워하지 마라.",
  "작은 성공들이 모여 큰 성공을 이룬다.",
  "세상에서 가장 큰 자산은 바로 시간이다.",
  "세상의 변화는 내가 먼저 시작할 때 일어난다.",
  "가장 중요한 것은 끝까지 포기하지 않는 것이다.",
  "오늘의 작은 발걸음이 내일의 큰 성공을 만든다.",
  "어제의 실패가 오늘의 성공을 만든다.",
  "길을 잃었다고 생각될 때, 그때가 새로운 길이 열린 때다.",
  "진정한 성공은 다른 사람의 삶을 변화시키는 데 있다.",
  "어떤 일이든 마음을 다해 해라. 그 결과는 따를 것이다.",
  "당신의 꿈은 아직 이루어지지 않았다면, 포기하지 마라.",
  "어둠 속에서 더욱 빛나는 별처럼, 나도 그 길을 걸어갈 것이다.",
  "자신에게 부여한 한계를 넘어서라.",
  "내일은 오늘의 연장선이 아니다. 오늘이 내일을 만든다.",
  "내가 할 수 있다고 믿는 순간, 그 길은 열린다.",
  "어떤 문제도 결국 지나가게 된다. 중요한 건 그때의 자세다.",
  "이 순간을 최선을 다해 살아라. 내일의 후회가 없도록.",
  "진정한 용기는 두려움 속에서도 한 걸음 나아가는 것이다.",
  "최고의 성과는 자신을 믿고 도전하는 데서 온다.",
  "사소한 변화가 삶을 크게 변화시킬 수 있다.",
  "고민이 많다면, 그 고민을 행동으로 바꾸어라.",
  "인생은 한 번뿐이다. 그 한 번의 기회를 놓치지 말자.",
  "한 번의 실패로 끝내지 말고, 계속해서 도전하라.",
  "진정한 성장은 외부의 환경이 아니라, 내면의 변화에서 온다.",
  "어려움이 클수록 그 끝은 더욱 아름답다.",
  "결코 포기하지 않는 자만이 길을 찾는다.",
  "시간은 되돌릴 수 없기에, 지금 이 순간을 소중히 하라.",
  "성공은 남들이 아닌, 나 자신을 위한 것임을 잊지 말라.",
  "진정한 자신감을 가지면, 세상도 당신을 믿게 된다.",
  "가장 어려운 일일수록, 그 끝에 더 큰 보상이 있다.",
  "세상에서 가장 큰 기회는 바로 오늘이다.",
  "무엇이든 할 수 있다는 믿음이 성공을 만든다.",
  "성공을 향한 첫걸음은 두려움을 넘어서는 것이다.",
  "지금의 실패는 내일의 성공을 위한 디딤돌이다.",
  "내일의 성공을 위해 오늘을 준비하라.",
  "누구나 성공할 수 있다. 중요한 건 그것을 믿는 것이다.",
  "이 순간을 즐기며, 더 나은 내일을 꿈꾸자.",
  "성공은 단순히 목표를 이루는 것이 아니라, 그 과정에서 얻은 교훈이다.",
  "고민을 멈추고, 행동으로 옮기자.",
  "어떤 길이든, 그 길을 믿고 끝까지 걸어가라.",
  "어려움 속에서도 희망을 잃지 말자.",
  "내일의 나를 위해 오늘을 투자하라.",
  "어떤 일이든 처음 시작할 때가 가장 중요한 순간이다.",
  "자신의 가치를 믿고 나아가라.",
  "하루하루가 쌓여 큰 변화를 이룬다.",
  "어떤 일이든, 끝까지 포기하지 않으면 결과는 반드시 온다.",
  "작은 발걸음이 큰 변화를 만든다.",
  "힘든 순간일수록 내일을 위한 씨앗을 심는 시간이다.",
  "끝까지 가면, 결국 그 길이 나만의 길이 된다.",
  "나를 믿고, 끊임없이 도전하라.",
  "어떤 일이든, 항상 긍정적인 마음으로 시작하라.",
  "성공을 향한 길은 항상 쉽지 않다. 하지만 그 길은 보람 있다.",
  "오늘의 고통이 내일의 성장을 만든다.",
  "새로운 기회는 항상 나를 기다리고 있다.",
  "가장 어두운 곳에서 별은 더욱 밝게 빛난다.",
  "힘들 때일수록 더 강해지며, 더 큰 성장이 있다.",
  "어떤 일이든 시작이 중요하다. 그 시작이 큰 변화를 만든다.",
  "하루를 잘 보내면, 그 하루가 미래를 만든다.",
  "세상에서 가장 중요한 것은 지금 이 순간이다.",
  "고민을 멈추고, 결단을 내리자.",
  "이 순간을 잘 살아라. 내일은 오늘의 결과다.",
  "지금의 고통은 곧 나의 성장을 위한 밑거름이 된다.",
  "어떤 일이든 꾸준히 해라. 그 꾸준함이 결과를 만든다.",
  "세상은 당신이 도전할 준비가 되었을 때 반응한다.",
  "내일은 더 나은 나를 만들기 위한 과정이다.",
  "매일 조금씩 나아가다 보면, 어느새 성공에 다가가 있다.",
  "힘든 순간에도 웃을 수 있는 마음이 진정한 강함이다.",
  "어떤 일도 포기하지 않고 도전하는 자에게는 기회가 온다.",
  "이 순간이 나의 삶에서 가장 중요한 순간이다.",
  "더 나은 내일을 위한 준비는 오늘부터 시작된다.",
  "누구나 어려운 길을 걷는다. 그 길을 걸어갈 용기가 중요하다.",
  "변화는 두려워할 것이 아니라, 받아들여야 할 것이다.",
  "한 걸음씩 나아가다 보면, 어느새 원하는 곳에 도달한다.",
  "불가능한 것은 없다. 그저 그것을 이루기 위한 시간이 필요할 뿐이다.",
  "매일 조금씩 성장하는 것이 진정한 성공이다.",
  "세상에서 가장 중요한 것은 당신의 믿음이다.",
  "하루를 시작할 때, 내일을 생각하며 준비하라.",
  "내일을 위해 오늘을 최선을 다해 살아라.",
  "작은 일에도 최선을 다하라. 그 작은 일이 결국 큰 변화를 일으킨다.",
  "성공을 향한 길은 항상 혼자 걷는 것이 아니다. 함께 가는 사람들이 있다.",
  "오늘의 노력이 내일의 성과로 이어진다.",
  "하루를 잘 살아야, 미래도 잘 살아갈 수 있다.",
  "지금 시작하는 것이 가장 중요한 일이다.",
  "가장 어려운 일일수록, 그 끝은 더 큰 보상을 가져온다.",
  "지금 이 순간을 즐기며, 내일을 준비하라.",
  "성공은 내가 어떤 사람인가를 결정짓는 과정이다.",
  "어떤 일이든, 나 자신을 믿고 나아가면 결국 이루어진다.",
  "세상에서 가장 중요한 순간은 바로 지금이다.",
  "성공을 이루려면 끊임없는 도전과 포기하지 않는 정신이 필요하다.",
  "세상은 나의 준비된 자세를 기다리고 있다.",
  "지금의 어려움이 나를 더욱 강하게 만든다.",
  "하루하루가 내일의 나를 만들고 있다.",
  "최고의 성공은 자신이 아닌 다른 사람을 위해 이룬 것이다.",
  "시간은 우리가 쏟는 노력만큼 빠르게 흘러간다.",
  "내일을 위해 오늘을 놓치지 말자.",
]

// DOM 요소들
const quoteText = document.getElementById("quoteText")
const nextQuoteBtn = document.getElementById("nextQuoteBtn")
const loadingOverlay = document.getElementById("loadingOverlay")
const quoteTransition = document.getElementById("quoteTransition")

// 현재 명언 인덱스
let currentQuoteIndex = 0

// 사용된 명언들을 추적하는 배열
let usedQuotes = []

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", () => {
  // 초기 명언 설정
  displayRandomQuote()

  // 버튼 이벤트 리스너
  nextQuoteBtn.addEventListener("click", handleNextQuote)

  // 키보드 이벤트 리스너 (스페이스바로 다음 명언)
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault()
      handleNextQuote()
    }
  })

  // 터치 이벤트 (모바일에서 명언 영역 터치로 다음 명언)
  const quoteContainer = document.querySelector(".quote-container")
  quoteContainer.addEventListener("click", (event) => {
    if (event.target.closest(".next-quote-btn")) return
    handleNextQuote()
  })

  // 페이지 가시성 변경 시 애니메이션 재시작
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      restartAnimations()
    }
  })

  // 윈도우 리사이즈 시 레이아웃 조정
  window.addEventListener("resize", debounce(adjustLayout, 250))

  // 초기 레이아웃 조정
  adjustLayout()
})

// 무작위 명언 표시 함수
function displayRandomQuote() {
  // 모든 명언을 사용했다면 배열 초기화
  if (usedQuotes.length >= quotes.length) {
    usedQuotes = []
  }

  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * quotes.length)
  } while (usedQuotes.includes(randomIndex) && usedQuotes.length < quotes.length)

  usedQuotes.push(randomIndex)
  currentQuoteIndex = randomIndex

  // 명언 텍스트 업데이트
  quoteText.textContent = quotes[currentQuoteIndex]

  // 타이핑 효과 적용
  applyTypingEffect()
}

// 타이핑 효과 함수
function applyTypingEffect() {
  const text = quotes[currentQuoteIndex]
  quoteText.textContent = ""

  let index = 0
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      quoteText.textContent += text.charAt(index)
      index++
    } else {
      clearInterval(typingInterval)
      // 타이핑 완료 후 강조 효과
      quoteText.style.transform = "scale(1.02)"
      setTimeout(() => {
        quoteText.style.transform = "scale(1)"
      }, 300)
    }
  }, 50)
}

// 다음 명언 처리 함수
function handleNextQuote() {
  // 버튼 비활성화
  nextQuoteBtn.disabled = true

  // 로딩 오버레이 표시
  showLoadingOverlay()

  // 명언 전환 애니메이션
  showQuoteTransition()

  // 현재 명언 페이드 아웃
  quoteText.classList.add("quote-fade-out")

  setTimeout(() => {
    // 새로운 명언 표시
    displayRandomQuote()

    // 페이드 인 효과
    quoteText.classList.remove("quote-fade-out")
    quoteText.classList.add("quote-fade-in")

    setTimeout(() => {
      quoteText.classList.remove("quote-fade-in")

      // 로딩 오버레이 숨기기
      hideLoadingOverlay()

      // 전환 애니메이션 숨기기
      hideQuoteTransition()

      // 버튼 활성화
      nextQuoteBtn.disabled = false

      // 버튼 성공 효과
      addButtonSuccessEffect()
    }, 400)
  }, 400)
}

// 로딩 오버레이 표시
function showLoadingOverlay() {
  loadingOverlay.classList.add("active")
}

// 로딩 오버레이 숨기기
function hideLoadingOverlay() {
  setTimeout(() => {
    loadingOverlay.classList.remove("active")
  }, 800)
}

// 명언 전환 애니메이션 표시
function showQuoteTransition() {
  quoteTransition.classList.add("active")
}

// 명언 전환 애니메이션 숨기기
function hideQuoteTransition() {
  setTimeout(() => {
    quoteTransition.classList.remove("active")
  }, 600)
}

// 버튼 성공 효과
function addButtonSuccessEffect() {
  nextQuoteBtn.style.transform = "scale(0.95)"
  nextQuoteBtn.style.boxShadow = "0 4px 15px rgba(139, 69, 19, 0.4)"

  setTimeout(() => {
    nextQuoteBtn.style.transform = ""
    nextQuoteBtn.style.boxShadow = ""
  }, 150)
}

// 애니메이션 재시작 함수
function restartAnimations() {
  const particles = document.querySelectorAll(".particle")
  particles.forEach((particle, index) => {
    particle.style.animation = "none"
    setTimeout(() => {
      particle.style.animation = ""
    }, index * 100)
  })
}

// 레이아웃 조정 함수
function adjustLayout() {
  const mainContainer = document.querySelector(".main-container")
  const windowHeight = window.innerHeight
  const containerHeight = mainContainer.scrollHeight

  if (containerHeight > windowHeight) {
    mainContainer.style.minHeight = "auto"
    mainContainer.style.paddingTop = "40px"
    mainContainer.style.paddingBottom = "40px"
  } else {
    mainContainer.style.minHeight = "100vh"
    mainContainer.style.paddingTop = "60px"
    mainContainer.style.paddingBottom = "60px"
  }
}

// 디바운스 함수
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// 명언 공유 기능 (향후 확장 가능)
function shareQuote() {
  const currentQuote = quotes[currentQuoteIndex]
  if (navigator.share) {
    navigator.share({
      title: "오늘의 명언",
      text: `"${currentQuote}" - 오늘의 명언에서`,
      url: window.location.href,
    })
  } else {
    // 클립보드에 복사
    navigator.clipboard.writeText(`"${currentQuote}" - 오늘의 명언`).then(() => {
      showNotification("명언이 클립보드에 복사되었습니다!")
    })
  }
}

// 알림 표시 함수
function showNotification(message) {
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(139, 69, 19, 0.9);
        color: #F5DEB3;
        padding: 15px 20px;
        border-radius: 10px;
        font-family: 'Noto Serif KR', serif;
        font-size: 0.9rem;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.4s ease;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.opacity = "1"
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.opacity = "0"
    notification.style.transform = "translateX(100px)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 400)
  }, 3000)
}

// 명언 즐겨찾기 기능 (로컬 스토리지 활용)
function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]")

  const index = favorites.indexOf(currentQuote)
  if (index > -1) {
    favorites.splice(index, 1)
    showNotification("즐겨찾기에서 제거되었습니다.")
  } else {
    favorites.push(currentQuote)
    showNotification("즐겨찾기에 추가되었습니다.")
  }

  localStorage.setItem("favoriteQuotes", JSON.stringify(favorites))
}

// 페이지 언로드 시 정리
window.addEventListener("beforeunload", () => {
  // 진행 중인 애니메이션 정리
  const intervals = window.setInterval(() => {}, 1000)
  for (let i = 1; i < intervals; i++) {
    window.clearInterval(i)
  }
})

// 에러 처리
window.addEventListener("error", (event) => {
  console.error("오류 발생:", event.error)
  showNotification("일시적인 오류가 발생했습니다. 페이지를 새로고침해주세요.")
})

// 성능 최적화를 위한 Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// 관찰할 요소들 등록
document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = document.querySelectorAll(".quote-container, .button-section, .footer-section")
  elementsToObserve.forEach((el) => observer.observe(el))
})

// 다크 모드 감지 및 대응
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark-mode")
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (event.matches) {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
})

// 접근성 향상을 위한 키보드 네비게이션
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      if (document.activeElement === nextQuoteBtn) {
        handleNextQuote()
      }
      break
    case "Escape":
      if (loadingOverlay.classList.contains("active")) {
        hideLoadingOverlay()
        hideQuoteTransition()
        nextQuoteBtn.disabled = false
      }
      break
    case "F":
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        toggleFavorite()
      }
      break
    case "S":
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        shareQuote()
      }
      break
  }
})

// 터치 제스처 지원 (모바일)
let touchStartX = 0
let touchStartY = 0

document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX
  touchStartY = event.touches[0].clientY
})

document.addEventListener("touchend", (event) => {
  if (!touchStartX || !touchStartY) return

  const touchEndX = event.changedTouches[0].clientX
  const touchEndY = event.changedTouches[0].clientY

  const diffX = touchStartX - touchEndX
  const diffY = touchStartY - touchEndY

  // 수평 스와이프가 수직 스와이프보다 클 때
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (Math.abs(diffX) > 50) {
      // 최소 스와이프 거리
      if (diffX > 0) {
        // 왼쪽 스와이프 - 다음 명언
        handleNextQuote()
      } else {
        // 오른쪽 스와이프 - 이전 명언 (구현 시)
        // handlePreviousQuote();
      }
    }
  }

  touchStartX = 0
  touchStartY = 0
})

// 명언 통계 추적
const quoteStats = JSON.parse(localStorage.getItem("quoteStats") || "{}")

function updateQuoteStats() {
  const today = new Date().toDateString()

  if (!quoteStats[today]) {
    quoteStats[today] = {
      quotesViewed: 0,
      timeSpent: 0,
      startTime: Date.now(),
    }
  }

  quoteStats[today].quotesViewed++
  quoteStats[today].timeSpent = Date.now() - quoteStats[today].startTime

  localStorage.setItem("quoteStats", JSON.stringify(quoteStats))
}

// 명언 변경 시 통계 업데이트
const originalHandleNextQuote = handleNextQuote
handleNextQuote = () => {
  updateQuoteStats()
  originalHandleNextQuote()
}

// 페이지 로드 시 세션 시작 시간 기록
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toDateString()
  if (!quoteStats[today]) {
    quoteStats[today] = {
      quotesViewed: 0,
      timeSpent: 0,
      startTime: Date.now(),
    }
  } else {
    quoteStats[today].startTime = Date.now()
  }
  localStorage.setItem("quoteStats", JSON.stringify(quoteStats))
})

// 브라우저 탭 포커스 관리
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // 탭이 비활성화될 때 애니메이션 일시정지
    document.body.style.animationPlayState = "paused"
  } else {
    // 탭이 활성화될 때 애니메이션 재개
    document.body.style.animationPlayState = "running"
    restartAnimations()
  }
})

// 명언 검색 기능 (향후 확장)
function searchQuotes(keyword) {
  const results = quotes.filter((quote) => quote.toLowerCase().includes(keyword.toLowerCase()))
  return results
}

// 명언 카테고리 분류 (향후 확장)
const quoteCategories = {
  motivation: ["성공", "도전", "노력", "목표"],
  wisdom: ["지혜", "경험", "배움", "성장"],
  life: ["인생", "삶", "시간", "순간"],
  hope: ["희망", "꿈", "미래", "가능성"],
}

function categorizeQuote(quote) {
  for (const [category, keywords] of Object.entries(quoteCategories)) {
    if (keywords.some((keyword) => quote.includes(keyword))) {
      return category
    }
  }
  return "general"
}

// 명언 음성 읽기 기능 (Web Speech API)
function speakQuote() {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(quotes[currentQuoteIndex])
    utterance.lang = "ko-KR"
    utterance.rate = 0.8
    utterance.pitch = 1
    utterance.volume = 0.8

    speechSynthesis.speak(utterance)

    showNotification("명언을 음성으로 읽어드립니다.")
  } else {
    showNotification("음성 기능을 지원하지 않는 브라우저입니다.")
  }
}

// 명언 저장 및 내보내기 기능
function exportFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]")
  if (favorites.length === 0) {
    showNotification("저장된 즐겨찾기가 없습니다.")
    return
  }

  const dataStr = JSON.stringify(favorites, null, 2)
  const dataBlob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(dataBlob)

  const link = document.createElement("a")
  link.href = url
  link.download = "favorite-quotes.json"
  link.click()

  URL.revokeObjectURL(url)
  showNotification("즐겨찾기가 다운로드되었습니다.")
}

// 명언 가져오기 기능
function importFavorites(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const importedQuotes = JSON.parse(e.target.result)
      if (Array.isArray(importedQuotes)) {
        localStorage.setItem("favoriteQuotes", JSON.stringify(importedQuotes))
        showNotification("즐겨찾기를 성공적으로 가져왔습니다.")
      } else {
        showNotification("올바르지 않은 파일 형식입니다.")
      }
    } catch (error) {
      showNotification("파일을 읽는 중 오류가 발생했습니다.")
    }
  }
  reader.readAsText(file)
}

// 명언 히스토리 관리
let quoteHistory = JSON.parse(localStorage.getItem("quoteHistory") || "[]")

function addToHistory(quoteIndex) {
  const historyItem = {
    quote: quotes[quoteIndex],
    timestamp: new Date().toISOString(),
    index: quoteIndex,
  }

  quoteHistory.unshift(historyItem)

  // 히스토리는 최대 50개까지만 저장
  if (quoteHistory.length > 50) {
    quoteHistory = quoteHistory.slice(0, 50)
  }

  localStorage.setItem("quoteHistory", JSON.stringify(quoteHistory))
}

// 명언 변경 시 히스토리에 추가
const originalDisplayRandomQuote = displayRandomQuote
displayRandomQuote = () => {
  originalDisplayRandomQuote()
  addToHistory(currentQuoteIndex)
}

// 사용자 설정 관리
const userSettings = JSON.parse(localStorage.getItem("userSettings") || "{}")

function updateUserSettings(key, value) {
  userSettings[key] = value
  localStorage.setItem("userSettings", JSON.stringify(userSettings))
}

function getUserSetting(key, defaultValue = null) {
  return userSettings[key] !== undefined ? userSettings[key] : defaultValue
}

// 자동 명언 변경 기능
let autoChangeInterval = null

function startAutoChange(intervalMinutes = 5) {
  if (autoChangeInterval) {
    clearInterval(autoChangeInterval)
  }

  autoChangeInterval = setInterval(
    () => {
      if (!document.hidden) {
        handleNextQuote()
      }
    },
    intervalMinutes * 60 * 1000,
  )

  updateUserSettings("autoChange", true)
  updateUserSettings("autoChangeInterval", intervalMinutes)
  showNotification(`${intervalMinutes}분마다 자동으로 명언이 변경됩니다.`)
}

function stopAutoChange() {
  if (autoChangeInterval) {
    clearInterval(autoChangeInterval)
    autoChangeInterval = null
  }

  updateUserSettings("autoChange", false)
  showNotification("자동 명언 변경이 중지되었습니다.")
}

// 사용자 설정 복원
document.addEventListener("DOMContentLoaded", () => {
  if (getUserSetting("autoChange", false)) {
    const interval = getUserSetting("autoChangeInterval", 5)
    startAutoChange(interval)
  }
})

// 명언 필터링 기능
function filterQuotesByLength(minLength = 0, maxLength = Number.POSITIVE_INFINITY) {
  return quotes.filter((quote) => quote.length >= minLength && quote.length <= maxLength)
}

function getRandomQuoteByLength(minLength, maxLength) {
  const filteredQuotes = filterQuotesByLength(minLength, maxLength)
  if (filteredQuotes.length === 0) return null

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length)
  return filteredQuotes[randomIndex]
}

// 명언 감정 분석 (간단한 키워드 기반)
const emotionKeywords = {
  positive: ["성공", "희망", "기회", "성장", "발전", "행복", "기쁨", "사랑"],
  motivational: ["도전", "노력", "목표", "꿈", "의지", "용기", "결심"],
  reflective: ["인생", "시간", "순간", "경험", "지혜", "배움", "깨달음"],
  encouraging: ["포기", "극복", "강함", "믿음", "자신감", "가능성"],
}

function analyzeQuoteEmotion(quote) {
  const emotions = []

  for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
    if (keywords.some((keyword) => quote.includes(keyword))) {
      emotions.push(emotion)
    }
  }

  return emotions.length > 0 ? emotions : ["neutral"]
}

// 명언 추천 시스템
function getRecommendedQuote() {
  const currentHour = new Date().getHours()
  let recommendedEmotion

  if (currentHour >= 6 && currentHour < 12) {
    recommendedEmotion = "motivational" // 아침: 동기부여
  } else if (currentHour >= 12 && currentHour < 18) {
    recommendedEmotion = "positive" // 오후: 긍정적
  } else if (currentHour >= 18 && currentHour < 22) {
    recommendedEmotion = "reflective" // 저녁: 성찰적
  } else {
    recommendedEmotion = "encouraging" // 밤: 격려
  }

  const suitableQuotes = quotes.filter((quote) => {
    const emotions = analyzeQuoteEmotion(quote)
    return emotions.includes(recommendedEmotion)
  })

  if (suitableQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * suitableQuotes.length)
    return suitableQuotes[randomIndex]
  }

  return quotes[Math.floor(Math.random() * quotes.length)]
}

// 명언 공유 URL 생성
function generateShareableURL(quoteIndex) {
  const baseURL = window.location.origin + window.location.pathname
  return `${baseURL}?quote=${encodeURIComponent(quotes[quoteIndex])}`
}

// URL 파라미터에서 명언 로드
function loadQuoteFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  const sharedQuote = urlParams.get("quote")

  if (sharedQuote) {
    const decodedQuote = decodeURIComponent(sharedQuote)
    const quoteIndex = quotes.indexOf(decodedQuote)

    if (quoteIndex !== -1) {
      currentQuoteIndex = quoteIndex
      quoteText.textContent = quotes[currentQuoteIndex]
      showNotification("공유된 명언을 불러왔습니다.")
    }
  }
}

// 페이지 로드 시 URL에서 명언 확인
document.addEventListener("DOMContentLoaded", () => {
  loadQuoteFromURL()
})

// 명언 즐겨찾기 상태 확인
function isFavorite(quote) {
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes") || "[]")
  return favorites.includes(quote)
}

// 성능 모니터링
const performanceMetrics = {
  quoteChangeTime: [],
  animationFrameRate: 0,
  memoryUsage: 0,
}

function measureQuoteChangePerformance() {
  const startTime = performance.now()

  return () => {
    const endTime = performance.now()
    const duration = endTime - startTime
    performanceMetrics.quoteChangeTime.push(duration)

    // 최근 10개 측정값만 유지
    if (performanceMetrics.quoteChangeTime.length > 10) {
      performanceMetrics.quoteChangeTime.shift()
    }
  }
}

// 메모리 사용량 모니터링 (Chrome에서만 지원)
function checkMemoryUsage() {
  if ("memory" in performance) {
    performanceMetrics.memoryUsage = performance.memory.usedJSHeapSize
  }
}

// 주기적으로 성능 체크
setInterval(checkMemoryUsage, 30000) // 30초마다

// 명언 앱 초기화 완료 로그
console.log("🌟 오늘의 명언 앱이 성공적으로 로드되었습니다!")
console.log(`📚 총 ${quotes.length}개의 명언이 준비되어 있습니다.`)
console.log("⌨️ 키보드 단축키: 스페이스바(다음 명언), Ctrl+F(즐겨찾기), Ctrl+S(공유)")

// 개발자 도구에서 사용할 수 있는 유틸리티 함수들
window.QuoteApp = {
  getCurrentQuote: () => quotes[currentQuoteIndex],
  getAllQuotes: () => quotes,
  getQuoteStats: () => quoteStats,
  getFavorites: () => JSON.parse(localStorage.getItem("favoriteQuotes") || "[]"),
  getHistory: () => quoteHistory,
  searchQuotes: searchQuotes,
  categorizeQuote: categorizeQuote,
  analyzeEmotion: analyzeQuoteEmotion,
  exportData: () => ({
    favorites: JSON.parse(localStorage.getItem("favoriteQuotes") || "[]"),
    history: quoteHistory,
    stats: quoteStats,
    settings: userSettings,
  }),
}
