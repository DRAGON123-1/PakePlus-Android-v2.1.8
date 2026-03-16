(function () {
  const resize = () => {
    let html = document.querySelector("html");
    let cWidth = document.body.clientWidth || window.innerWidth;
    if (!cWidth) return;
    const BASE_W = 1920;
    if (cWidth > BASE_W) {
      html.style.fontSize = "100px";
    } else {
      html.style.fontSize = 100 * (cWidth / BASE_W) + "px";
    }
  };
  resize();
  window.onresize = resize;
})();
