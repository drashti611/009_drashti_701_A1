const fecth = require("node-fetch");

async function fetchGoogle() {
  try {
    const response = await fecth("https://www.google.com/");
    if (!response.ok) {
      throw new Error(`Http error! status... ${response.status}`);
    }
    const html = await response.text();
    console.log("Google page Html fecth successfully..\n");
    console.log(html.substring(0, 500));
  } catch (err) {
    console.log("failed to fecth:", err.message);
  }
}
fetchGoogle();
