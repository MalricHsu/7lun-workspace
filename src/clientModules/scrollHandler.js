import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  let ticking = false;

  const updateNavbar = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      // 稍微增加一點滾動緩衝值 (例如 50)，避免在最頂端稍微動一下就一直跳動
      if (window.scrollY > 30) {
        navbar.classList.add("navbar--shrunk");
      } else {
        navbar.classList.remove("navbar--shrunk");
      }
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}
