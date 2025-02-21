document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", () => {
        var answer = question.nextElementSibling;
        var icon = question.querySelector(".icon");

        answer.style.display = answer.style.display === "block" ? "none" : "block";
        icon.innerHTML = icon.innerHTML === "+" ? "−" : "+";
    });
});
