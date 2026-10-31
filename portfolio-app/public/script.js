const $ = (selector) => document.querySelector(selector);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- load data from the backend ----------
async function loadPortfolio() {
  try {
    const response = await fetch("/api/portfolio");
    const result = await response.json();
    if (!result.status) throw new Error(result.message);
    renderPortfolio(result.data);
  } catch (error) {
    console.log(error);
    $("#projects-grid").innerHTML = '<p class="muted">Could not load portfolio data. Please make sure the server is running.</p>';
  }
}

function renderPortfolio(data) {
  const { profile, stats, journey, skills, projects, experience, education, certifications } = data;

  // hero
  const names = profile.name.split(" ");
  $("#last-name").textContent = names.pop();
  $("#first-name").textContent = names.join(" ");
  $("#hero-intro").textContent = profile.intro;
  $("#socials").innerHTML = `
    <a href="${profile.github}" target="_blank" rel="noopener">[ github ]</a>
    <a href="${profile.linkedin}" target="_blank" rel="noopener">[ linkedin ]</a>
    <a href="mailto:${profile.email}">[ email ]</a>`;
  rotateRoles(profile.roles);
  typeCode(profile);

  // about
  $("#about-text").innerHTML = profile.about.map((text) => `<p>${text}</p>`).join("");
  $("#stats").innerHTML = stats.map((s) => `<div class="stat"><b data-value="${s.value}">0</b><span>${s.label}</span></div>`).join("");
  $("#journey").innerHTML = journey
    .map((j) => `<div class="j-item"><span class="j-date">${j.date}</span><h4>${j.title}</h4><p>${j.text}</p></div>`)
    .join("");

  // skills
  $("#skills-grid").innerHTML = skills
    .map((g) => `<div class="card skill-group reveal"><h3 class="mono">${g.group}</h3><div class="tags">${g.items.map((i) => `<span>${i}</span>`).join("")}</div></div>`)
    .join("");

  // projects
  $("#projects-grid").innerHTML = projects
    .map(
      (p, index) => `
      <article class="card project reveal">
        <div class="top"><b>project_0${index + 1}</b><span>${p.date}</span></div>
        <h3>${p.title}</h3>
        <p class="sub">${p.subtitle}</p>
        <p class="desc">${p.description}</p>
        <div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <a class="go" href="${p.link}" target="_blank" rel="noopener">view_project →</a>
      </article>`
    )
    .join("");

  // experience, education, certifications
  $("#experience-list").innerHTML = experience
    .map((e) => `<div class="entry"><h4>${e.title}</h4><div class="where">${e.place}</div><div class="when">${e.date}</div><p>${e.text}</p></div>`)
    .join("");
  $("#education-list").innerHTML = education
    .map((e) => `<div class="entry"><h4>${e.title}</h4><div class="where">${e.place}</div><div class="when">${e.date}</div></div>`)
    .join("");
  $("#cert-list").innerHTML = certifications
    .map((c) => `<div class="entry"><h4>${c.title}</h4><div class="where">${c.place}</div>${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">view_credential →</a>` : ""}</div>`)
    .join("");

  // contact
  $("#contact-info").innerHTML = `
    <a class="info" href="mailto:${profile.email}"><span class="ic">@</span><div><small>Email</small><b>${profile.email}</b></div></a>
    <a class="info" href="tel:${profile.phone}"><span class="ic">#</span><div><small>Phone</small><b>${profile.phone}</b></div></a>
    <div class="info"><span class="ic">~</span><div><small>Location</small><b>${profile.location}</b></div></div>
    <a class="info" href="${profile.linkedin}" target="_blank" rel="noopener"><span class="ic">in</span><div><small>LinkedIn</small><b>md-moin-rehan</b></div></a>`;

  $("#year").textContent = new Date().getFullYear();
  setupReveal();
}

// ---------- hero: rotating role ----------
function rotateRoles(roles) {
  const target = $("#role-text");
  if (reduceMotion) {
    target.textContent = roles[0];
    return;
  }
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = word.slice(0, charIndex);
    let delay = deleting ? 35 : 80;
    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1600;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  };
  tick();
}

// ---------- hero: code typing animation ----------
function typeCode(profile) {
  const code = $("#code");
  const html =
    `<span class="c">// portfolio.js</span>\n` +
    `<span class="k">const</span> <span class="v">developer</span> <span class="b">=</span> {\n` +
    `  <span class="p">name</span>: <span class="s">"${profile.name}"</span>,\n` +
    `  <span class="p">role</span>: <span class="s">"Full-Stack Developer"</span>,\n` +
    `  <span class="p">stack</span>: [<span class="s">"MongoDB"</span>, <span class="s">"Express"</span>, <span class="s">"React"</span>, <span class="s">"Node"</span>],\n` +
    `  <span class="p">also</span>: [<span class="s">"WordPress"</span>, <span class="s">"UI/UX Design"</span>],\n` +
    `  <span class="p">location</span>: <span class="s">"Kolkata, India"</span>,\n` +
    `  <span class="p">openToWork</span>: <span class="k">true</span>,\n` +
    `};\n\n` +
    `<span class="v">developer</span>.<span class="p">build</span>(<span class="s">"secure and scalable apps"</span>);\n` +
    `<span class="c">// let's build something great</span>`;

  $("#gutter").textContent = Array.from({ length: 15 }, (_, i) => i + 1).join("\n");

  if (reduceMotion) {
    code.innerHTML = html;
    $("#status").classList.add("done");
    return;
  }

  let position = 0;
  const step = () => {
    // skip full html tags at once so we only "type" visible characters
    while (html[position] === "<") position = html.indexOf(">", position) + 1;
    position++;
    while (html[position] === "<" && html[position + 1] === "/") position = html.indexOf(">", position) + 1;

    const finished = position >= html.length;
    code.innerHTML = html.slice(0, position) + (finished ? "" : '<span class="cursor"></span>');

    if (finished) {
      code.innerHTML += '<span class="cursor"></span>';
      $("#status").classList.add("done");
      return;
    }
    setTimeout(step, html[position - 1] === "\n" ? 140 : 28);
  };
  setTimeout(step, 600);
}

// ---------- scroll reveal and counters ----------
function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        entry.target.querySelectorAll("[data-value]").forEach(countUp);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((item, index) => {
    item.style.transitionDelay = (index % 3) * 90 + "ms";
    observer.observe(item);
  });
}

function countUp(element) {
  const value = element.dataset.value;
  const target = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  if (reduceMotion) {
    element.textContent = value;
    return;
  }
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(target, current + Math.ceil(target / 30));
    element.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 40);
}

// ---------- nav: progress bar, active link, mobile menu ----------
window.addEventListener("scroll", () => {
  const page = document.documentElement;
  $("#progress").style.width = (page.scrollTop / (page.scrollHeight - page.clientHeight)) * 100 + "%";
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll("#menu a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section").forEach((section) => sectionObserver.observe(section));

$("#burger").addEventListener("click", () => $("#menu").classList.toggle("open"));
$("#menu").addEventListener("click", () => $("#menu").classList.remove("open"));

// ---------- contact form (POST /api/contact) ----------
$("#contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const message = $("#form-msg");
  const button = $("#send-btn");

  const body = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  button.disabled = true;
  message.className = "form-msg mono";
  message.textContent = "sending...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    message.textContent = result.message;
    message.classList.add(result.status ? "ok" : "err");
    if (result.status) form.reset();
  } catch (error) {
    console.log(error);
    message.textContent = "Could not send the message. Please try again.";
    message.classList.add("err");
  }
  button.disabled = false;
});

loadPortfolio();
