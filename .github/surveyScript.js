const questions = [
  { text: "After a long week, what energizes you more?", options: [{ text: "Going out with friends", code: "E" }, { text: "Staying home alone", code: "I" }] },
  { text: "In conversations, do you tend to...", options: [{ text: "Speak your thoughts aloud", code: "E" }, { text: "Listen and reflect first", code: "I" }] },
  { text: "At social events, you usually...", options: [{ text: "Meet new people easily", code: "E" }, { text: "Stay with people you know", code: "I" }] },
  { text: "What kind of information do you prefer?", options: [{ text: "Facts and details", code: "S" }, { text: "Ideas and possibilities", code: "N" }] },
  { text: "When planning a trip, do you focus on...", options: [{ text: "Logistics and itinerary", code: "S" }, { text: "Experiences and vibes", code: "N" }] },
  { text: "You consider yourself to be more...", options: [{ text: "Practical and realistic", code: "S" }, { text: "Imaginative and visionary", code: "N" }] },
  { text: "When making a decision, you prioritize...", options: [{ text: "Logic and consistency", code: "T" }, { text: "Feelings and harmony", code: "F" }] },
  { text: "If a friend is sad, your instinct is to...", options: [{ text: "Offer solutions", code: "T" }, { text: "Offer empathy", code: "F" }] },
  { text: "You value...", options: [{ text: "Fairness and justice", code: "T" }, { text: "Compassion and mercy", code: "F" }] },
  { text: "How do you handle deadlines?", options: [{ text: "Plan ahead and finish early", code: "J" }, { text: "Work best under pressure", code: "P" }] },
  { text: "Your workspace is usually...", options: [{ text: "Organized and tidy", code: "J" }, { text: "Flexible and messy", code: "P" }] },
  { text: "You prefer a lifestyle that is...", options: [{ text: "Structured", code: "J" }, { text: "Spontaneous", code: "P" }] }
];

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

document.getElementById("start-btn").onclick = startSurvey;
document.getElementById("restart-btn").onclick = () => location.reload();

function startSurvey() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("survey").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIdx];

  document.getElementById("question-text").textContent = q.text;
  document.getElementById("current-question").textContent = currentIdx + 1;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt.text;

      btn.onclick = () => {
          scores[opt.code]++;
          currentIdx++;
          currentIdx < questions.length ? showQuestion() : showResult();
      };

      container.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("survey").style.display = "none";

  const type = [
      scores.E >= scores.I ? "E" : "I",
      scores.S >= scores.N ? "S" : "N",
      scores.T >= scores.F ? "T" : "F",
      scores.J >= scores.P ? "J" : "P"
  ].join("");

  const types = {
      "ISTJ": "The Inspector - Responsible and practical.",
      "ISFJ": "The Protector - Warm and dedicated.",
      "INFJ": "The Counselor - Insightful and principled.",
      "INTJ": "The Mastermind - Strategic and independent.",
      "ISTP": "The Craftsman - Bold and practical.",
      "ISFP": "The Composer - Flexible and charming.",
      "INFP": "The Healer - Poetic and kind.",
      "INTP": "The Architect - Innovative inventors.",
      "ESTP": "The Dynamo - Smart and energetic.",
      "ESFP": "The Performer - Spontaneous and enthusiastic.",
      "ENFP": "The Champion - Creative and sociable.",
      "ENTP": "The Visionary - Smart and curious.",
      "ESTJ": "The Supervisor - Excellent administrators.",
      "ESFJ": "The Provider - Caring and social.",
      "ENFJ": "The Teacher - Charismatic leaders.",
      "ENTJ": "The Commander - Bold and strong-willed."
  };

  document.getElementById("result").style.display = "block";
  document.getElementById("result-header").textContent = "Your MBTI Type: " + type;
  document.getElementById("result-text").textContent = types[type] || "A unique and complex individual.";
}
