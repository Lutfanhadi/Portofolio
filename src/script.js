// Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const containerSidebar = document.getElementById("containerSidebar");
  const toggleMenu = document.getElementById("toggleMenu");
  const toggleClose = document.getElementById("toggleClose");

  toggleMenu.addEventListener("click", () => {
    containerSidebar.classList.toggle("translate-x-0");
  });

  toggleClose.addEventListener("click", () => {
    containerSidebar.classList.toggle("translate-x-0");
  });

  // Dark Mode
  const containerbody = document.getElementById("containerDarkMode");
  const toggleDarkMode = document.getElementById("toggleDarkMode");
  const buttonCv = document.getElementById("buttonCv");
  const containerSection = document.getElementsByClassName("containerSection");
  const card1 = document.getElementsByClassName("card1");
  const card2 = document.getElementsByClassName("card2");
  const text = document.getElementsByClassName("text");
  const textTitle = document.getElementsByClassName("textTitle");
  const bgTitle = document.getElementsByClassName("bgTitle");
  const hoverLinksText = document.querySelectorAll("ul li a");
  const hoverLinksBg = document.querySelectorAll("button");

  let darkMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9C16.8065 10.1935 16.136 11.8122 16.136 13.5C16.136 15.1878 16.8065 16.8065 18 18C19.1935 19.1935 20.8122 19.864 22.5 19.864C24.1878 19.864 25.8065 19.1935 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.364C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52784 16.22 9 18 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 9V13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 11H23" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

  let lightMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 8V10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 26V28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9299 10.93L12.3399 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.6599 23.66L25.0699 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 18H10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 18H28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.3399 23.66L10.9299 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.0699 10.93L23.6599 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

  if (localStorage.getItem("darkMode") === "enabled") {
    aktif();
  }

  toggleDarkMode.addEventListener("click", () => {
    if (containerbody.classList.contains("bg-dark")) {
      noneAktif();
    } else {
      aktif();
    }
  });

  function aktif() {
    containerbody.classList.add("bg-dark");
    toggleDarkMode.innerHTML = lightMode;
    buttonCv.style.background = "white";

    for (let valueText = 0; valueText < text.length; valueText++) {
      text[valueText].style.color = "white";
    }

    for (
      let valueTextTitle = 0;
      valueTextTitle < textTitle.length;
      valueTextTitle++
    ) {
      textTitle[valueTextTitle].style.color = "black";
    }

    for (
      let valueSection = 0;
      valueSection < containerSection.length;
      valueSection++
    ) {
      containerSection[valueSection].style.background = "#111827";
    }

    for (let valuecard1 = 0; valuecard1 < card1.length; valuecard1++) {
      card1[valuecard1].style.background = "#030712";
    }

    for (let valuecard2 = 0; valuecard2 < card2.length; valuecard2++) {
      card2[valuecard2].style.background = "#1F2937";
    }

    for (let valuebgTitle = 0; valuebgTitle < bgTitle.length; valuebgTitle++) {
      bgTitle[valuebgTitle].style.background = "#374151";
    }

    for (let i = 0; i < hoverLinksText.length; i++) {
      hoverLinksText[i].classList.add("dark:hover:text-white");
    }

    localStorage.setItem("darkMode", "enabled");
  }

  function noneAktif() {
    containerbody.classList.remove("bg-dark");
    toggleDarkMode.innerHTML = darkMode;
    buttonCv.style.background = "#111827";

    for (let valueText = 0; valueText < text.length; valueText++) {
      text[valueText].style.color = "black";
    }

    for (
      let valueTextTitle = 0;
      valueTextTitle < textTitle.length;
      valueTextTitle++
    ) {
      textTitle[valueTextTitle].style.color = "white";
    }

    for (
      let valueSection = 0;
      valueSection < containerSection.length;
      valueSection++
    ) {
      containerSection[valueSection].style.background = "#f9fafb";
    }

    for (let valuecard1 = 0; valuecard1 < card1.length; valuecard1++) {
      card1[valuecard1].style.background = "white";
    }

    for (let valuecard2 = 0; valuecard2 < card2.length; valuecard2++) {
      card2[valuecard2].style.background = "white";
    }

    for (let valuebgTitle = 0; valuebgTitle < bgTitle.length; valuebgTitle++) {
      bgTitle[valuebgTitle].style.background = "#E5E7EB";
    }

    for (let i = 0; i < hoverLinksText.length; i++) {
      hoverLinksText[i].classList.remove("dark:hover:text-white");
      hoverLinksText[i].classList.add("dark:hover:text-black");
    }

    localStorage.setItem("darkMode", "disabled");
  }
});

console.log(localStorage);
