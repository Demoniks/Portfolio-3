// copyBuildToDocs.js
const fs = require("fs-extra");

(async () => {
  try {
    await fs.remove("docs");               // Delete docs/ if it exists
    await fs.copy("build", "docs");        // Copy contents of build/ into docs/
    console.log("✅ Build copied to docs/");
  } catch (err) {
    console.error("❌ Failed to copy build to docs/:", err);
    process.exit(1);
  }
})();