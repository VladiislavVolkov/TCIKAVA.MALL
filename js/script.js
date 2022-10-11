$("header").load("../pages/header.html", () => { console.log("header load for all") });
$("footer").load("../pages/footer.html", () => { console.log("footer load for all") });
$("header").load("pages/header.html", () => { console.log("header load for index.html") });
$("footer").load("pages/footer.html", () => { console.log("footer load for index.html") });