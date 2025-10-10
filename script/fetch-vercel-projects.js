import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import puppeteer from "puppeteer";

// CONFIG
const VERCEL_TOKEN = "xSXlcIvZ2Vmoe1dzJTMK4qRI"; 
const OUTPUT_FILE = "./src/data/project.json";
const IMAGE_DIR = "./public/project-images";
const CONCURRENCY = 10; 

// FUNCTION: Take Screenshot
async function takeScreenshot(browser, projectName, url) {
  const imagePath = path.join(IMAGE_DIR, `${projectName}.png`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
    await page.screenshot({ path: imagePath });
    console.log(`✅ Screenshot saved for ${projectName}`);
  } catch (err) {
    console.log(`⚠️ Failed to screenshot ${projectName}: ${err.message}`);
  } finally {
    await page.close();
  }

  return `/project-images/${projectName}.png`;
}

// FUNCTION: Fetch Projects
async function fetchProjects() {
  try {
    const res = await fetch("https://api.vercel.com/v9/projects", {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    const data = await res.json();
    fs.mkdirSync(IMAGE_DIR, { recursive: true });

    const browser = await puppeteer.launch({ headless: "new" });

    const projects = [];
    const projectQueue = [...data.projects];

    // Worker function
    async function worker() {
      while (true) {
        const p = projectQueue.shift();
        if (!p) break;

        const url = `https://${p.name}.vercel.app`;
        const image = await takeScreenshot(browser, p.name, url);

        projects.push({
          name: p.name,
          link: url,
          framework: p.framework || "Unknown",
          createdAt: new Date(p.createdAt).toLocaleDateString(),
          image,
        });
      }
    }

    // Start concurrent workers
    const workers = Array.from({ length: CONCURRENCY }, () => worker());
    await Promise.all(workers);

    await browser.close();

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
    console.log(`✅ Saved ${projects.length} projects to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("❌ Failed to fetch Vercel projects:", err);
  }
}

fetchProjects();