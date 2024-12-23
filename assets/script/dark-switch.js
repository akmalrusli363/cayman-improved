let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
let element = document.body;
let iconToggler = document.querySelector(".night-toggle i");

function toggleDarkMode(dark) {
    if (dark == null) {
        dark = !element.classList.contains("dark");
    }

    if (dark == true) {
        element.classList.add("dark");
        iconToggler.classList.remove("fa-sun-o");
        iconToggler.classList.add("fa-moon-o");
    } else {
        element.classList.remove("dark");
        iconToggler.classList.add("fa-sun-o");
        iconToggler.classList.remove("fa-moon-o");
    }
    toggleCodeTheme(dark);
    localStorage.setItem("nightMode", dark);
}

function toggleCodeTheme(dark) {
    let rootCss = document.documentElement;
    let baseBackgroundCode = dark ? "--base00" : "--base07"
    let baseBorderCode = dark ? "--base02" : "--base05"

    rootCss.style.setProperty("--background", `var(${baseBackgroundCode})`);
    rootCss.style.setProperty("--border", `var(${baseBorderCode})`);
    if (dark) {
        // resetProcessed().then(loadMermaid('dark')).catch(console.error)
        const event = new Event('dark-theme-set');
        document.body.dispatchEvent(event);
    } else {
        // resetProcessed().then(loadMermaid('default')).catch(console.error)
        const event = new Event('light-theme-set');
        document.body.dispatchEvent(event);
    }
}

if (matched && localStorage.getItem("nightMode") != 'false') {
    toggleDarkMode(true);
} else if (!matched && localStorage.getItem("nightMode") == 'true') {
    toggleDarkMode(true);
}
toggleCodeTheme(localStorage.getItem("nightMode") == 'true');
