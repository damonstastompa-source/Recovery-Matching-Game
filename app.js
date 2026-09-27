const TERMS = [
  ["Acceptance", "Recognizing what is happening without fighting reality.", "Recovery Basics"],
  ["Accountability", "Taking responsibility for our choices and actions.", "Recovery Basics"],
  ["Awareness", "Noticing our thoughts, feelings, patterns, and behavior.", "Recovery Basics"],
  ["Boundaries", "Healthy limits that protect our well-being and relationships.", "Recovery Basics"],
  ["Compassion", "Responding to ourselves and others with understanding rather than cruelty.", "Recovery Basics"],
  ["Courage", "Doing what is right or necessary even when we are afraid.", "Recovery Basics"],
  ["Gratitude", "Recognizing and appreciating what is valuable in our lives.", "Recovery Basics"],
  ["Honesty", "Being truthful with ourselves and others.", "Recovery Basics"],
  ["Humility", "Having an honest view of ourselves without needing to be above or below others.", "Recovery Basics"],
  ["Patience", "Allowing growth and change to happen without demanding immediate results.", "Recovery Basics"],
  ["Self-Care", "Taking appropriate action to support our physical, emotional, and spiritual well-being.", "Recovery Basics"],
  ["Self-Awareness", "Understanding our own feelings, motives, habits, and reactions.", "Recovery Basics"],
  ["Service", "Contributing our time, effort, and abilities to help others.", "Recovery Basics"],
  ["Surrender", "Letting go of the need to control everything and becoming willing to act differently.", "Recovery Basics"],
  ["Trust", "Developing confidence in people, processes, and our ability to respond to life.", "Recovery Basics"],
  ["Willingness", "Being open to taking an action or trying a new way even before we feel ready.", "Recovery Basics"],
  ["Forgiveness", "Releasing the grip of past hurt while still recognizing what happened.", "Recovery Basics"],
  ["Inventory", "A careful examination of our thoughts, actions, relationships, and patterns.", "Recovery Basics"],
  ["Isolation", "Pulling away from people and support rather than staying connected.", "Recovery Basics"],
  ["Triggers", "People, places, feelings, memories, or situations that can activate strong reactions or urges.", "Recovery Basics"],
  ["Relapse", "Returning to substance use after a period of abstinence.", "Recovery Basics"],
  ["Recovery", "An ongoing process of building a healthier life and changing destructive patterns.", "Recovery Basics"],
  ["Support", "Help, encouragement, and connection from people or resources.", "Recovery Basics"],
  ["Fellowship", "Connection with others who share a commitment to recovery and mutual support.", "Recovery Basics"],
  ["Purpose", "A meaningful reason to keep moving forward and contributing.", "Recovery Basics"],
  ["Hope", "A belief that positive change and a different future are possible.", "Recovery Basics"],
  ["Routine", "A consistent pattern of actions that can provide structure and stability.", "Recovery Basics"],
  ["Mindfulness", "Paying attention to the present moment with openness rather than automatically reacting.", "Recovery Basics"],
  ["Reflection", "Looking honestly at an experience to understand what happened and what can be learned.", "Recovery Basics"],
  ["Resilience", "The ability to recover, adapt, and keep moving after difficulty.", "Recovery Basics"],
  ["Connection", "A sense of belonging and meaningful relationship with other people.", "Recovery Basics"],
  ["Growth", "Developing new understanding, skills, habits, and ways of responding.", "Recovery Basics"],
  ["Integrity", "Living in a way that is consistent with our values and commitments.", "Recovery Basics"],
  ["Progress", "Moving forward through meaningful change, even when the change is gradual.", "Recovery Basics"],
  ["Step One", "Recognizing that addiction has caused a loss of control and that life has become difficult to manage.", "Steps"],
  ["Step Two", "Becoming open to the possibility that help beyond our own thinking can restore balance.", "Steps"],
  ["Step Three", "Making a decision to place our will and our lives into the care of the recovery process.", "Steps"],
  ["Step Four", "Taking an honest and thorough look at ourselves, our history, and our patterns.", "Steps"],
  ["Step Five", "Sharing the important truths discovered in our self-examination with another trusted person.", "Steps"],
  ["Step Six", "Becoming ready to change the patterns and shortcomings that keep causing problems.", "Steps"],
  ["Step Seven", "Practicing humility and asking for help in changing the patterns that harm us and others.", "Steps"],
  ["Step Eight", "Identifying people we have harmed and becoming willing to make things right.", "Steps"],
  ["Step Nine", "Making amends where possible, while considering the effect our actions may have on others.", "Steps"],
  ["Step Ten", "Continuing to examine our behavior and promptly addressing mistakes.", "Steps"],
  ["Step Eleven", "Developing a deeper practice of reflection, connection, and guidance in daily life.", "Steps"],
  ["Step Twelve", "Applying what we have learned in recovery and carrying the message through our actions and service.", "Steps"],
  ["Amends", "A sincere effort to repair harm caused by our actions, when doing so is appropriate.", "Steps"],
  ["Readiness", "Being prepared to take an honest next step even when change feels uncomfortable.", "Steps"],
  ["Defect", "A recurring pattern or trait that creates problems in our lives or relationships.", "Steps"],
  ["Shortcoming", "A behavior, habit, or pattern that falls short of the way we want to live.", "Steps"],
  ["Character Pattern", "A repeated way of thinking, feeling, or acting that can shape our choices.", "Steps"],
  ["Part", "Our own contribution or responsibility within a situation or conflict.", "Steps"],
  ["Willingness to Change", "An openness to doing something differently instead of repeating the same pattern.", "Steps"],
  ["Honesty", "Telling the truth and refusing to hide from what we know about ourselves.", "Spiritual Principles"],
  ["Open-Mindedness", "Considering new ideas and possibilities instead of automatically rejecting them.", "Spiritual Principles"],
  ["Willingness", "Choosing to participate and take action even before we feel completely ready.", "Spiritual Principles"],
  ["Acceptance", "Allowing reality to be what it is so we can respond instead of constantly fighting it.", "Spiritual Principles"],
  ["Humility", "Seeing ourselves realistically and letting go of the need to prove our importance.", "Spiritual Principles"],
  ["Courage", "Facing difficult truths and taking constructive action despite fear.", "Spiritual Principles"],
  ["Faith", "Trusting that change is possible even when we cannot see the whole path ahead.", "Spiritual Principles"],
  ["Patience", "Giving people, situations, and our own growth the time they need.", "Spiritual Principles"],
  ["Tolerance", "Allowing differences without automatically turning them into conflict.", "Spiritual Principles"],
  ["Empathy", "Trying to understand another person's experience and feelings.", "Spiritual Principles"],
  ["Love", "Acting with genuine care for ourselves and other people.", "Spiritual Principles"],
  ["Service", "Using our time and abilities to contribute to the well-being of others.", "Spiritual Principles"],
  ["Gratitude", "Focusing attention on what is valuable rather than only on what is missing.", "Spiritual Principles"],
  ["Responsibility", "Following through on our commitments and owning the results of our choices.", "Spiritual Principles"],
  ["Consistency", "Practicing healthy principles repeatedly rather than only when convenient.", "Spiritual Principles"],
  ["Respect", "Treating ourselves and others as worthy of consideration and dignity.", "Spiritual Principles"],
  ["Generosity", "Giving time, attention, encouragement, or resources without demanding something in return.", "Spiritual Principles"],
  ["Perseverance", "Continuing constructive effort when progress is slow or difficult.", "Spiritual Principles"],
  ["Authenticity", "Living and communicating honestly rather than performing a version of ourselves for approval.", "Spiritual Principles"],
  ["Peace", "A steadier state that comes from reducing unnecessary conflict and responding thoughtfully.", "Spiritual Principles"],
  ["Resentment", "A lasting feeling of anger or hurt connected to a perceived wrong.", "Emotions & Patterns"],
  ["Fear", "An emotional response to perceived danger, uncertainty, loss, or threat.", "Emotions & Patterns"],
  ["Shame", "A painful feeling that can make us believe something is wrong with who we are.", "Emotions & Patterns"],
  ["Guilt", "A painful feeling connected to believing we have done something wrong.", "Emotions & Patterns"],
  ["Anger", "A strong emotional response often connected to hurt, frustration, fear, or perceived injustice.", "Emotions & Patterns"],
  ["Grief", "The emotional response to loss, change, separation, or death.", "Emotions & Patterns"],
  ["Anxiety", "A state of worry, tension, or unease about what might happen.", "Emotions & Patterns"],
  ["Loneliness", "A painful sense of disconnection or lack of meaningful companionship.", "Emotions & Patterns"],
  ["Envy", "Distress arising from wanting something another person has.", "Emotions & Patterns"],
  ["Jealousy", "Fear or distress connected to a valued relationship or resource being threatened.", "Emotions & Patterns"],
  ["Frustration", "A feeling that can arise when progress is blocked or expectations are not met.", "Emotions & Patterns"],
  ["Avoidance", "Trying not to face a person, feeling, responsibility, or situation.", "Emotions & Patterns"],
  ["People-Pleasing", "Changing behavior mainly to gain approval or prevent others from being upset.", "Emotions & Patterns"],
  ["Perfectionism", "The demand that things be flawless, often creating unnecessary pressure or fear of failure.", "Emotions & Patterns"],
  ["Impulsivity", "Acting quickly on an urge without adequately considering consequences.", "Emotions & Patterns"],
  ["Rumination", "Repeatedly thinking about the same upsetting issue without moving toward a solution.", "Emotions & Patterns"],
  ["Denial", "Refusing or being unable to acknowledge an important reality or problem.", "Emotions & Patterns"],
  ["Projection", "Attributing our own feelings, motives, or traits to another person.", "Emotions & Patterns"],
  ["Control", "Trying to manage people, situations, or outcomes beyond what we can realistically control.", "Emotions & Patterns"],
  ["Comparison", "Judging ourselves by measuring our life, progress, or worth against other people.", "Emotions & Patterns"],
  ["Isolation", "Withdrawing from people and support when connection would be helpful.", "Emotions & Patterns"],
  ["Meeting", "A gathering where people in recovery share experience, support, and practical tools.", "Fellowship & Service"],
  ["Sponsor", "A person in recovery who provides guidance and support through the recovery process.", "Fellowship & Service"],
  ["Sponsee", "A person who has asked another member to provide recovery guidance and support.", "Fellowship & Service"],
  ["Home Group", "A meeting community where a member regularly participates and takes responsibility.", "Fellowship & Service"],
  ["Service Position", "A specific responsibility accepted to help a group or recovery community function.", "Fellowship & Service"],
  ["Group Conscience", "A process in which members seek a shared understanding about a group decision.", "Fellowship & Service"],
  ["Fellowship", "Time spent building healthy connection and mutual support with other members.", "Fellowship & Service"],
  ["Sharing", "Speaking honestly about our experience, feelings, challenges, and growth.", "Fellowship & Service"],
  ["Listening", "Giving another person attention without immediately trying to fix, judge, or interrupt.", "Fellowship & Service"],
  ["Welcome", "An intentional effort to help another person feel safe, included, and connected.", "Fellowship & Service"],
  ["Outreach", "Efforts to connect people with recovery resources and meetings.", "Fellowship & Service"],
  ["Leadership", "Helping a group move forward while remaining accountable to the people being served.", "Fellowship & Service"],
  ["Commitment", "A promise to keep showing up and doing a responsibility consistently.", "Fellowship & Service"],
  ["Anonymity", "A principle that places recovery and equality above personal recognition.", "Fellowship & Service"],
  ["Unity", "Working together around a shared purpose despite individual differences.", "Fellowship & Service"],
  ["Service", "Helping the recovery community through time, effort, responsibility, and participation.", "Fellowship & Service"],
  ["Clean Time", "The amount of time a person has remained free from the substances they are recovering from.", "Recovery Language"],
  ["Craving", "A strong desire or urge to use a substance or return to an old behavior.", "Recovery Language"],
  ["Urge", "A strong impulse to act, sometimes appearing suddenly and passing with time.", "Recovery Language"],
  ["Bottom", "A point at which the consequences of addiction or destructive behavior become especially severe.", "Recovery Language"],
  ["Cross-Addiction", "Developing a problematic relationship with another substance or behavior while addressing an original addiction.", "Recovery Language"],
  ["Early Recovery", "The initial period of building stability, support, and new habits after stopping use.", "Recovery Language"],
  ["Maintenance", "Regular actions that help protect and strengthen ongoing recovery.", "Recovery Language"],
  ["Just for Today", "Focusing on the recovery actions available in the present rather than becoming overwhelmed by the future.", "Recovery Language"],
  ["One Day at a Time", "Approaching life and recovery in manageable present-day pieces.", "Recovery Language"],
  ["Next Right Thing", "Choosing the constructive action available now instead of trying to solve everything at once.", "Recovery Language"],
  ["Recovery Plan", "A practical set of supports, routines, boundaries, and actions that help sustain recovery.", "Recovery Language"],
  ["Warning Sign", "A change in thoughts, feelings, behavior, or circumstances that may signal increasing risk.", "Recovery Language"],
  ["Support Network", "The people and resources a person can turn to for connection, accountability, and help.", "Recovery Language"],
  ["Slip", "A brief return to a behavior or substance use that can signal a need for immediate attention and support.", "Recovery Language"],
  ["Recovery Routine", "A repeated set of healthy actions that helps make recovery part of everyday life.", "Recovery Language"],
  ["Accountability Partner", "A trusted person who helps us follow through on commitments and notice patterns.", "Recovery Language"]
];

const board = document.getElementById("board");
const timerEl = document.getElementById("timer");
const matchesEl = document.getElementById("matches");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const messageEl = document.getElementById("message");
const deckSelect = document.getElementById("deckSelect");
const modes = [...document.querySelectorAll(".mode")];

let size = 4, deck = [], first = null, second = null, lock = false;
let matches = 0, score = 0, streak = 0, seconds = 0, timer = null, gameStarted = false;

function pairCount() { return (size * size) / 2; }
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function formatTime(s) {
  return `${String(Math.floor(s / 60)).padStart(2,"0")}:${String(s % 60).padStart(2,"0")}`;
}
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

function availableTerms() {
  const category = deckSelect.value;
  return category === "Mixed" ? TERMS : TERMS.filter(x => x[2] === category);
}

function startTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (gameStarted) {
      seconds++;
      timerEl.textContent = formatTime(seconds);
    }
  }, 1000);
}

function startGame() {
  const source = availableTerms();
  if (source.length < pairCount()) {
    messageEl.textContent = "Not enough terms in this deck for this board.";
    return;
  }
  const chosen = shuffle(source).slice(0, pairCount());
  deck = shuffle(chosen.flatMap(([term, definition, category], pairId) => [
    { pairId, type:"term", text:term, category },
    { pairId, type:"definition", text:definition, category }
  ]));

  board.className = `board size-${size}`;
  board.innerHTML = "";
  first = second = null; lock = false; matches = score = streak = seconds = 0; gameStarted = false;
  matchesEl.textContent = `0/${pairCount()}`; scoreEl.textContent = "0"; streakEl.textContent = "0"; timerEl.textContent = "00:00";
  messageEl.textContent = `Match each term with its definition.`;
  if (timer) clearInterval(timer);
  startTimer();

  deck.forEach((item, index) => {
    const card = document.createElement("button");
    card.className = `card ${item.type}`;
    card.type = "button";
    card.dataset.index = index;
    card.setAttribute("aria-label", "Hidden card");
    card.innerHTML = `<span class="card-inner"><span class="face back"></span><span class="face front"><span class="card-label">${item.type}</span><span class="card-text">${escapeHtml(item.text)}</span></span></span>`;
    card.addEventListener("click", () => flipCard(card, index));
    board.appendChild(card);
  });
}

function flipCard(card, index) {
  if (lock || card.classList.contains("flipped") || card.classList.contains("matched")) return;
  if (!gameStarted) { gameStarted = true; messageEl.textContent = "Find the matching pair."; }
  card.classList.add("flipped");
  card.setAttribute("aria-label", deck[index].text);
  if (!first) { first = {card,index}; return; }
  second = {card,index}; lock = true;
  const a = deck[first.index], b = deck[second.index];

  if (a.pairId === b.pairId && a.type !== b.type) {
    setTimeout(() => {
      first.card.classList.add("matched"); second.card.classList.add("matched");
      matches++; streak++; score += 100 + Math.max(0, streak - 1) * 25; updateStats();
      messageEl.textContent = streak > 1 ? `${streak} in a row!` : "Match found!";
      resetTurn();
      if (matches === pairCount()) finishGame();
    }, 330);
  } else {
    streak = 0; score = Math.max(0, score - 10); updateStats(); messageEl.textContent = "Not a match. Try again.";
    setTimeout(() => {
      first.card.classList.remove("flipped"); second.card.classList.remove("flipped");
      first.card.setAttribute("aria-label","Hidden card"); second.card.setAttribute("aria-label","Hidden card");
      resetTurn();
    }, 700);
  }
}

function resetTurn() { first = second = null; lock = false; }
function updateStats() {
  matchesEl.textContent = `${matches}/${pairCount()}`; scoreEl.textContent = score; streakEl.textContent = streak;
}

function finishGame() {
  gameStarted = false; clearInterval(timer);
  const key = `recoveryMatchBest_${size}_${deckSelect.value}`;
  const oldBest = Number(localStorage.getItem(key) || 0);
  const best = Math.max(oldBest, score);
  localStorage.setItem(key, String(best));
  document.getElementById("finalTime").textContent = formatTime(seconds);
  document.getElementById("finalScore").textContent = score;
  document.getElementById("finalBest").textContent = best;
  document.getElementById("winSummary").textContent = `You matched all ${pairCount()} pairs on the ${size}×${size} board.`;
  document.getElementById("winModal").classList.remove("hidden");
}

function closeWin() { document.getElementById("winModal").classList.add("hidden"); }

function openStudy() {
  const category = deckSelect.value;
  const source = category === "Mixed" ? TERMS : TERMS.filter(x => x[2] === category);
  const list = document.getElementById("studyList");
  list.innerHTML = "";
  shuffle(source).forEach(([term, definition]) => {
    const item = document.createElement("div");
    item.className = "study-item";
    item.innerHTML = `<strong>${escapeHtml(term)}</strong><span>${escapeHtml(definition)}</span>`;
    list.appendChild(item);
  });
  document.getElementById("studyTitle").textContent = category === "Mixed" ? "All Recovery Terms" : category;
  document.getElementById("studyModal").classList.remove("hidden");
}

modes.forEach(btn => btn.addEventListener("click", () => {
  modes.forEach(b => b.classList.remove("active")); btn.classList.add("active");
  size = Number(btn.dataset.size); startGame();
}));
deckSelect.addEventListener("change", startGame);
document.getElementById("newGame").addEventListener("click", startGame);
document.getElementById("newGameTop").addEventListener("click", startGame);
document.getElementById("playAgain").addEventListener("click", () => { closeWin(); startGame(); });
document.getElementById("study").addEventListener("click", openStudy);
document.getElementById("closeStudy").addEventListener("click", () => document.getElementById("studyModal").classList.add("hidden"));
document.querySelectorAll(".modal").forEach(modal => modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); }));
document.addEventListener("keydown", e => { if (e.key === "Escape") document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden")); });

startGame();
