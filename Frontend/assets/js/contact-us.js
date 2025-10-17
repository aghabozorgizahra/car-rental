// contact us
  const textarea = document.getElementById("message");
  const wordCount = document.getElementById("wordCount");

  textarea.addEventListener("input", () => {
    let words = textarea.value.trim().split(/\s+/);
    if (words[0] === "") words = []; 

    if (words.length > 20) {
      textarea.value = words.slice(0, 20).join(" ");
      words = words.slice(0, 20);
    }

    wordCount.textContent = `${words.length} / 20 کلمه`;
  });
