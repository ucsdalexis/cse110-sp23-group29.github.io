function getAnswer() {
    const question = document.getElementById("question").value;
    if (question) {
      const answers = [
        "Yes",
        "No",
        "Maybe",
        "Outlook not so good",
        "It is certain",
        "Without a doubt",
        "Don't count on it",
        "Most likely",
        "Cannot predict now",
        "Ask again later"
      ];
      const randomIndex = Math.floor(Math.random() * answers.length);
      const answer = answers[randomIndex];
      document.getElementById("answer").innerText = answer;
    }
  }
  