// Load header and footer
function loadHTML(selector, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then((data) => {
      const target = document.querySelector(selector);
      if (target) {
        target.innerHTML = data;
      } else {
        console.warn(`Selector ${selector} not found in the document.`);
      }
    })
    .catch((error) => console.error(`Error loading HTML into ${selector}:`, error));
}

loadHTML("header", "/header.html");
loadHTML("footer", "/footer.html");