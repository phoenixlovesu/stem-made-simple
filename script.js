
/* ========SCREENS AND NAVIGATION LINKS =========== */

const homeScreen = document.querySelector("#home-screen");
const lessonScreen = document.querySelector("#lesson");
const quizScreen = document.querySelector("#quiz-screen");
const completionScreen = document.querySelector("#completion-screen");
const progressScreen  = document.querySelector("#progress-screen")

const topicLinks = document.querySelectorAll(".topic-link");

const homeLinks = document.querySelectorAll(
  'a[href="#home"], a[data-screen="home"]'
);

const learnLink = document.querySelector(
  '.main-nav a[href="#topics"]'
);

const tryQuizButton = document.querySelector("#try-quiz");

const quizForm = document.querySelector("#quiz-form");
const quizQuestion = document.querySelector("#quiz-question");
const answerOptions = document.querySelector(".answer-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const checkAnswerButton = document.querySelector("#check-answer");
const questionCount = document.querySelector("#question-count");
const progressBar = document.querySelector("#quiz-progress-bar");
const progressFill = document.querySelector("#quiz-progress-fill");

const quizCard = document.querySelector(".quiz-card");
const quizHeading = document.querySelector(".quiz-heading");

const finalScore = document.querySelector("#final-score");
const totalQuestions = document.querySelector("#total-questions");
const completionMessage = document.querySelector("#completion-message");

const completionPercentage = document.querySelector("#completion-percentage");
const completionProgressBar = document.querySelector("#completion-progress-bar");
const completionProgressFill = document.querySelector("#completion-progress-fill");
const completionTitle = document.querySelector("#completion-title")
const completionDescription = document.querySelector("#completion-description");

const exploreAnotherTopicButton = document.querySelector("#explore-another-topic");

const reviewLessonButton = document.querySelector("#review-lesson");

const lessonEyebrow = document.querySelector("#lesson-eyebrow");
const lessonTitle = document.querySelector("#lesson-title");
const lessonIntro = document.querySelector("#lesson-intro");
const lessonGrid = document.querySelector("#lesson-grid");
const lessonTipHeading = document.querySelector("#lesson-tip-heading");
const lessonTipText = document.querySelector("#lesson-tip-text");
const lessonSourceList = document.querySelector("#lesson-source-list");

const lessonBreadcrumbSubject = document.querySelector("#lesson-breadcrumb-subject");
const lessonBreadcrumbTitle = document.querySelector("#lesson-breadcrumb-title");
const quizBreadcrumbSubject = document.querySelector("#quiz-breadcrumb-subject");
const quizBreadcrumbTitle = document.querySelector("#quiz-breadcrumb-title");



/* ================= QUIZ QUESTIONS AND ANSWERS ============== */


const lessons = {
  coding: {
    subject: "Coding",
    title: "Loops & conditionals",
    eyebrow: "CODING FUNDAMENTALS",
    intro: "Programs can repeat actions and make decisions based on what happens.",
    tipHeading: "Think about it this way",
    tipText: "A loop is like replaying your favorite song. A conditional is like taking an umbrella if it rains.",
    concepts: [
      {
        title: "Loops",
        text: "A loop repeats instructions. For example, a robot can move forward five times without you writing the same command five times."
      },
      {
        title: "Conditionals",
        text: "A conditional helps a program make a decision. For example, a game character might turn right only if it reaches a wall."
      }
    ],
    sources: [
        {
            label: "Code.org - Maze: Loops",
            url: "https://studio.code.org/courses/k5-unplugged/units/1"
        },
        {
            label: "Code.org - Conditionals with Cards",
            url: "https://studio.code.org/courses/k5-unplugged/units/1/lessons/18"
        }
    ],
    questions: [
      {
        question: "A robot needs to move forward five times. Which instruction would be best?",
        options: [
          { value: "A", text: "Write the move-forward command five times." },
          { value: "B", text: "Use a loop that repeats five times." },
          { value: "C", text: "Use a conditional without checking a condition." }
        ],
        correctAnswer: "B",
        correctFeedback: "Correct! A loop repeats instructions, so you don't have to write the same command five times.",
        incorrectFeedback: "Not quite. Think about which programming concept repeats the same instructions for you."
      },
      {
        question: "A game character should turn right only when it reaches a wall. Which instruction fits best?",
        options: [
          { value: "A", text: "Repeat the turn-right command five times." },
          { value: "B", text: "Check whether a wall is ahead, then turn right." },
          { value: "C", text: "Move forward repeatedly without checking anything." }
        ],
        correctAnswer: "B",
        correctFeedback: "Correct! A conditional lets a program make a decision based on whether something is true.",
        incorrectFeedback: "Not quite. The character needs to check whether a particular condition is true before turning."
      },
      {
        question: "What is the main purpose of a loop in a program?",
        options: [
          { value: "A", text: "Make a decision based on a condition." },
          { value: "B", text: "Repeat instructions." },
          { value: "C", text: "Give every variable a new name." }
        ],
        correctAnswer: "B",
        correctFeedback: "Correct! Loops repeat instructions, making repeated tasks easier and reducing duplicated code.",
        incorrectFeedback: "Remember the robot example: which concept helps it perform the same action multiple times?"
      }
    ]
  },

  electricity: {
    subject: "Science",
    title: "Understanding electricity",
    eyebrow: "SCIENCE FUNDAMENTALS",
    intro: "Learn how a simple electric circuit works and why electricity needs a complete path.",
    tipHeading: "Think about it this way",
    tipText: "Imagine a circular path. If the path is broken, you can't travel all the way around it. A simple electric circuit also needs a complete path.",
    concepts: [
      {
        title: "What is a circuit?",
        text: "A circuit is a path through which electric current can flow. A simple circuit can include a battery, wires, and a light bulb."
      },
      {
        title: "Why does the path matter?",
        text: "In a simple battery-and-bulb circuit, the conducting path must be complete for the bulb to light. A break in the path interrupts the current."
      }
    ],
    sources: [
        {
            label: "Khan Academy - Electric Current",
            url: "https://www.khanacademy.org/science/physics/circuits-topic/circuit-basics/a/electric-current"
        },
        {
            label: "Khan Academy - Electricity",
            url: "https://www.khanacademy.org/science/physics/electricity"
        }
    ],
    questions: [
      {
        question: "What does a simple circuit need for current to flow continuously?",
        options: [
          { value: "A", text: "A complete conducting path" },
          { value: "B", text: "A broken wire" },
          { value: "C", text: "A gap in the path" }
        ],
        correctAnswer: "A",
        correctFeedback: "Correct! A complete conducting path allows current to flow.",
        incorrectFeedback: "A simple circuit needs a complete conducting path."
      },
      {
        question: "What is the role of a battery in a simple circuit?",
        options: [
          { value: "A", text: "It removes all the wires" },
          { value: "B", text: "It provides energy to drive current through the circuit" },
          { value: "C", text: "It repairs every broken wire automatically" }
        ],
        correctAnswer: "B",
        correctFeedback: "That's right! The battery provides energy to drive current.",
        incorrectFeedback: "The battery provides energy to drive current through the circuit."
      },
      {
        question: "What happens if the wire path in a simple circuit is broken?",
        options: [
          { value: "A", text: "The bulb always gets brighter" },
          { value: "B", text: "The battery becomes a wire" },
          { value: "C", text: "Current stops flowing through that path" }
        ],
        correctAnswer: "C",
        correctFeedback: "Correct! A break interrupts the path, so current stops flowing.",
        incorrectFeedback: "A broken path interrupts the current in a simple circuit."
      }
    ]
  },

  math: {
    subject: "Math",
    title: "Understanding fractions",
    eyebrow: "MATH FUNDAMENTALS",
    intro: "Fractions describe parts of a whole. The numerator tells you how many parts you have, and the denominator tells you how many equal parts make up the whole.",
    tipHeading: "Think about it this way",
    tipText: "Imagine cutting a pizza into four equal slices. If you eat one slice, you ate one-fourth of the pizza.",
    concepts: [
      {
        title: "Numerator",
        text: "The numerator is the top number in a fraction. It tells you how many parts you are talking about."
      },
      {
        title: "Denominator",
        text: "The denominator is the bottom number. It tells you how many equal parts the whole is divided into."
      }
    ],
    sources: [
      { label: "Khan Academy - Math", url: "https://www.khanacademy.org/math" }
    ],
    questions: [
      {
        question: "In the fraction 3/4, what does the 4 represent?",
        options: [
          { value: "A", text: "The number of parts being counted" },
          { value: "B", text: "The number of equal parts in the whole" },
          { value: "C", text: "The number of whole pizzas" }
        ],
        correctAnswer: "B",
        correctFeedback: "Correct! The denominator tells you the number of equal parts in the whole.",
        incorrectFeedback: "The bottom number, 4, is the denominator. It tells you the number of equal parts."
      },
      {
        question: "Which fraction represents one half?",
        options: [
          { value: "A", text: "1/2" },
          { value: "B", text: "1/3" },
          { value: "C", text: "2/5" }
        ],
        correctAnswer: "A",
        correctFeedback: "Exactly! One half is written as 1/2.",
        incorrectFeedback: "One half means one out of two equal parts, written as 1/2."
      },
      {
        question: "A pizza is cut into eight equal slices. You eat three. What fraction did you eat?",
        options: [
          { value: "A", text: "8/3" },
          { value: "B", text: "3/5" },
          { value: "C", text: "3/8" }
        ],
        correctAnswer: "C",
        correctFeedback: "Right! You ate three of the eight equal slices, so you ate 3/8.",
        incorrectFeedback: "You ate three slices out of eight equal slices, so the fraction is 3/8."
      }
    ]
  }
};

let currentTopic = "coding";

/* ============ UPDATES LESSON CONTENT ============== */

function renderLesson() {
  const lesson = lessons[currentTopic];

  // update the lesson heading and introduction
  lessonEyebrow.textContent = lesson.eyebrow;
  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = lesson.intro;

  // update the lesson tip
  lessonTipHeading.textContent = lesson.tipHeading;
  lessonTipText.textContent = lesson.tipText;

  // update both sets of breadcrumbs
  lessonBreadcrumbSubject.textContent = lesson.subject;
  lessonBreadcrumbTitle.textContent = lesson.title;
  quizBreadcrumbSubject.textContent = lesson.subject;
  quizBreadcrumbTitle.textContent = lesson.title;

  // build the lesson concept cards
  lessonGrid.replaceChildren();

  lesson.concepts.forEach(function (concept) {
    const card = document.createElement("article");
    card.className = "lesson-card";

    const heading = document.createElement("h2");
    heading.textContent = concept.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = concept.text;

    card.append(heading, paragraph);
    lessonGrid.appendChild(card);
  });

  // display the sources for this lesson
  lessonSourceList.replaceChildren();

  lesson.sources.forEach(function (source) {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = source.url;
    link.textContent = source.label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    item.appendChild(link);
    lessonSourceList.appendChild(item);
  });
}

/* ============= SWITCH BETWEEN SCREENS ============= */

function showScreen(screenName) {
  // only the selected screen should be visible
  homeScreen.hidden = screenName !== "home";
  lessonScreen.hidden = screenName !== "lesson";
  quizScreen.hidden = screenName !== "quiz";
  completionScreen.hidden = screenName !== "completion";
  progressScreen.hidden = screenName !== "progress";

  // start each screen at the top
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
}

/* ============= PROGRESS DASHBOARD ============= */

function renderProgress() {
  let progress = {};

  try {
    progress = JSON.parse(
      localStorage.getItem("stemMadeSimpleProgress")
    ) || {};
  } catch (error) {
    progress = {};
  }

  const topics = ["coding", "electricity", "math"];
  let completedCount = 0;
  let totalPercentage = 0;

  topics.forEach(function (topic) {
    const result = progress[topic];
    const scoreElement = document.querySelector(
      `#${topic}-progress-score`
    );
    const statusElement = document.querySelector(
      `#${topic}-progress-status`
    );

    if (result && result.completed) {
      completedCount++;
      totalPercentage += result.percentage;

      scoreElement.textContent =
        `${result.score}/${result.total} · ${result.percentage}%`;

      statusElement.textContent =
        result.score === result.total
          ? "Perfect score!"
          : "Quiz completed";
    } else {
      scoreElement.textContent = "—";
      statusElement.textContent = "Not attempted yet";
    }
  });

  document.querySelector("#topics-completed").textContent =
    `${completedCount} of ${topics.length}`;

  document.querySelector("#average-score").textContent =
    completedCount > 0
      ? `${Math.round(totalPercentage / completedCount)}%`
      : "—";
}

/* ============= MY PROGRESS NAVIGATION ============= */

document.querySelector('a[href="#progress"]').addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    renderProgress();
    showScreen("progress");
  }
);

document.querySelector("#progress-learn-button").addEventListener(
  "click",
  function () {
    showScreen("home");
  }
);

/* ============= OPEN A LESSON FROM A TOPIC CARD ============= */

topicLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    currentTopic = link.dataset.topic;

    renderLesson();
    showScreen("lesson");
  });
});

/* ============ TRACK THE LEARNER'S PROGRESS ============== */

let currentQuestionIndex = 0;
let score = 0;
let answerSubmitted = false;
let summaryElement = null;

/* ================ RETURN TO THE HOMEPAGE =============== */

homeLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    showScreen("home");
  });
});


/* =============== MAKE THE LEARN NAVIGATION WORK =============== */

learnLink.addEventListener("click", function (event) {
  event.preventDefault();

  showScreen("home");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelector("#topics").scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
});


/* ========== OPEN AND RESET THE QUIZ ============ */

tryQuizButton.addEventListener("click", function () {
  resetQuiz();
  showScreen("quiz");
});

function resetQuiz() {
  // reset the score and return to the first question
  currentQuestionIndex = 0;
  score = 0;
  answerSubmitted = false;

  // remove the previous results summary, if one exists
  if (summaryElement) {
    summaryElement.remove();
    summaryElement = null;
  }

  // how the quiz form again
  quizForm.hidden = false;

  // restore the original quiz heading
  quizHeading.querySelector("h1").textContent =
    "Let's see what you've learned.";

  document.querySelector("#quiz-instructions").textContent =
    "Choose the best answer below.";

  renderQuestion();
}


/* ========= DISPLAY THE CURRENT QUESTION ========= */

function renderQuestion() {
  const questions = lessons[currentTopic].questions;
  const question = questions[currentQuestionIndex];

  // display the question text
  quizQuestion.textContent = question.question;

  // update the question counter
  questionCount.textContent =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  // update the progress bar
  const progress = (
    (currentQuestionIndex + 1) / questions.length
  ) * 100;

  progressFill.style.width = `${progress}%`;

  progressBar.setAttribute(
    "aria-valuenow",
    String(currentQuestionIndex + 1)
  );

  // create the answer choices for this question
  answerOptions.innerHTML = "";

  question.options.forEach(function (option) {
    const label = document.createElement("label");
    label.className = "answer-option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz-answer";
    radio.value = option.value;

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = option.value;

    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = option.text;

    label.append(radio, letter, text);
    answerOptions.appendChild(label);
  });

  // hide old feedback and allow a new answer
  quizFeedback.hidden = true;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  answerSubmitted = false;

  checkAnswerButton.disabled = false;
  checkAnswerButton.innerHTML =
    'Check answer <span aria-hidden="true">→</span>';
}


/* ========= CHECK THE ANSWER AND MOVE FORWARD ========== */

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const questions = lessons[currentTopic].questions; 

  // if the learner already submitted this answer,
  // the button moves to the next question or results
  if (answerSubmitted) {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showQuizSummary();
    }

    return;
  }

  // find the selected radio button
  const selectedAnswer = quizForm.querySelector(
    'input[name="quiz-answer"]:checked'
  );

  // don't continue until an answer has been selected
  if (!selectedAnswer) {
    quizFeedback.hidden = false;
    quizFeedback.className = "quiz-feedback";
    quizFeedback.textContent =
      "Please select an answer before continuing.";
    return;
  }

  const question = questions[currentQuestionIndex];
  const isCorrect =
    selectedAnswer.value === question.correctAnswer;

  // award a point only for a correct answer
  if (isCorrect) {
    score++;
  }

  // display the appropriate feedback
  quizFeedback.hidden = false;
  quizFeedback.className = isCorrect
    ? "quiz-feedback correct"
    : "quiz-feedback incorrect";

  quizFeedback.textContent = isCorrect
    ? question.correctFeedback
    : question.incorrectFeedback;

  // prevent changing the answer after checking it
  const radioButtons = quizForm.querySelectorAll(
    'input[name="quiz-answer"]'
  );

  radioButtons.forEach(function (radio) {
    radio.disabled = true;
  });

  // mark this question as submitted
  answerSubmitted = true;

  // change the button label
  if (currentQuestionIndex < questions.length - 1) {
    checkAnswerButton.innerHTML =
      'Next question <span aria-hidden="true">→</span>';
  } else {
    checkAnswerButton.innerHTML =
      'Finish quiz <span aria-hidden="true">→</span>';
  }
});

/* ============ SAVE QUIZ PROGRESS ============ */

function saveQuizProgress() {
  // load previously saved progress, or start with an empty object
  let progress = {};

  try {
    progress = JSON.parse(
      localStorage.getItem("stemMadeSimpleProgress")
    ) || {};
  } catch (error) {
    progress = {};
  }

  // save this topic's most recent quiz score
  progress[currentTopic] = {
    score: score,
    total: lessons[currentTopic].questions.length,
    percentage: Math.round(
      (score / lessons[currentTopic].questions.length) * 100
    ),
    completed: true
  };

  try {
    localStorage.setItem(
      "stemMadeSimpleProgress",
      JSON.stringify(progress)
    );
  } catch (error) {
    // the completion screen can still work if storage is unavailable
  }
}

/* ============ SHOW THE COMPLETION SCREEN ============ */

function showQuizSummary() {
  // get the lesson and its questions
  const lesson = lessons[currentTopic];
  const questions = lesson.questions;

  // display the final quiz score
  document.querySelector("#final-score").textContent = score;
  document.querySelector("#total-questions").textContent =
  questions.length;

  // save the score for this topic
  saveQuizProgress();

  // calculate the percentage of correct answers
  const percentage = Math.round(
    (score / questions.length) * 100
  );

  // update the completion title and description
  completionTitle.textContent = `${lesson.title} complete!`;

  completionDescription.textContent =
    `You completed the lesson on ${lesson.title}.`;

    if (score === questions.length) {
    completionTitle.textContent = `${lesson.title} complete!`;
    completionDescription.textContent =
        "Excellent work! You answered every question correctly.";

    completionMessage.textContent =
        "You've got this! Keep building on what you've learned.";
    } else if (score > 0) {
    completionTitle.textContent = `Keep going with ${lesson.title}`;
    completionDescription.textContent =
        "You've made a start. A little more practice can help.";

    completionMessage.textContent =
        "Review the lesson concepts you found challenging, then try again.";
    } else {
    completionTitle.textContent = `Your next step: ${lesson.title}`;
    completionDescription.textContent =
        "You've finished the quiz! It's okay to need more practice.";

    completionMessage.textContent =
        `Review the lesson on ${lesson.title.toLowerCase()}, then try the quiz again.`;
    }

  // update the progress percentage
  completionPercentage.textContent = `${percentage}%`;

  // update the visual progress bar
  completionProgressFill.style.width = `${percentage}%`;

  // update the progress bar for screen readers
  completionProgressBar.setAttribute(
    "aria-valuenow",
    String(percentage)
  );

  // display the completion screen
  showScreen("completion");
}



/* ============= COMPLETION SCREEN BUTTONS ============ */

// return to the topic cards on the homepage
exploreAnotherTopicButton.addEventListener("click", function () {
  showScreen("home");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelector("#topics").scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
});

// return to the lesson for review
reviewLessonButton.addEventListener("click", function () {
  showScreen("lesson");
});


/* ===== THEME TOGGLE ===== */
(() => {
    const themeToggle = document.getElementById("theme-toggle");

    // stop safely if the toggle isn't present
    if (!themeToggle) return;

    const root = document.documentElement;
    const icon = themeToggle.querySelector(".theme-toggle-icon");
    const label = themeToggle.querySelector(".theme-toggle-label");
    const storageKey = "stem-made-simple-theme";

    function applyTheme(theme) {
        const isDark = theme === "dark";

        // update the attribute that activates the CSS theme
        root.dataset.theme = isDark ? "dark" : "light";

        // keep the button's accessible state and label in sync
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to soft dark theme"
        );

        if (icon) {
            icon.textContent = isDark ? "☀" : "☾";
        }

        if (label) {
            label.textContent = isDark ? "Light mode" : "Dark mode";
        }
    }

    // restore the user's previous choice, defaulting to light mode
    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem(storageKey) || "light";
    } catch (error) {
        // the toggle still works if browser storage is unavailable
    }

    applyTheme(savedTheme === "dark" ? "dark" : "light");

    themeToggle.addEventListener("click", () => {
        const nextTheme =
            root.dataset.theme === "dark" ? "light" : "dark";

        applyTheme(nextTheme);

        try {
            localStorage.setItem(storageKey, nextTheme);
        } catch (error) {
            // theme changes still work for the current page session
        }
    });
})();
