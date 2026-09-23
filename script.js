function startJourney() {

    document.getElementById("regions").scrollIntoView({
        behavior: "smooth"
    });

}


function chooseRegion(region) {

    alert(
        "أهلًا بك في " +
        region +
        "\n\nاستكشاف هذه المنطقة سيتوفر في المرحلة القادمة."
    );

}


function checkAnswer(correct) {

    const result = document.getElementById("result");

    if (correct) {

        result.textContent =
            "إجابة صحيحة! حصلتِ على أول نقطة في رحلتك.";

    } else {

        result.textContent =
            "مو صحيح، حاولي مرة ثانية.";

    }

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}