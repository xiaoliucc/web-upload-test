document.addEventListener("DOMContentLoaded", function () {
    var teams = document.querySelectorAll(".team");
    // teams.forEach(function())
    var headImgs = document.querySelectorAll(".head-img img");
    var roleNmaes = document.querySelectorAll(".role-name");
    var Elements = document.querySelectorAll(".element");
    var cvImgs = document.querySelectorAll(".cv-img");
    var paintings = document.querySelectorAll(".painting");
    var historys = document.querySelectorAll(".history");

    headImgs.forEach(function (img) {
        img.addEventListener("click", function () {
            var index = Array.from(headImgs).indexOf(img);
            switch (index) {
                case 0:
                    toggleContent(roleNmaes, index);
                    toggleContent(Elements, index);
                    toggleContent(cvImgs, index);
                    toggleContent(paintings, index);
                    toggleContent(historys, index);
                    break;
                case 1:
                    toggleContent(roleNmaes, index);
                    toggleContent(Elements, index);
                    toggleContent(cvImgs, index);
                    toggleContent(paintings, index);
                    toggleContent(historys, index);
                    break;
                case 2:
                    toggleContent(roleNmaes, index);
                    toggleContent(Elements, index);
                    toggleContent(cvImgs, index);
                    toggleContent(paintings, index);
                    toggleContent(historys, index);
                    break;
                case 3:
                    toggleContent(roleNmaes, index);
                    toggleContent(Elements, index);
                    toggleContent(cvImgs, index);
                    toggleContent(paintings, index);
                    toggleContent(historys, index);
                    break;
            }

        })
    });
    function toggleContent(elements, index) {
        elements.forEach(function (element) {
            if (Array.from(elements).indexOf(element) === index) {
                element.classList.add('transition-effect');
                element.style.display = "block";
            } else {
                element.classList.add('transition-effect');
                element.style.display = "none";
            }
        })
    }
})