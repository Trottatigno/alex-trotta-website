# About CV Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the English profile content so `/about` and homepage positioning are fully aligned with the current CV, including a coherent timeline and clearer cybersecurity specialization.

**Architecture:** Keep the existing rendering architecture unchanged and update only content objects consumed by current pages. All edits are centralized in `src/app/resources/content.js`, preserving current component contracts in `src/app/about/page.tsx` and homepage rendering. Validate with lint + manual page checks.

**Tech Stack:** Next.js 16, React 18, Once UI, JavaScript content config (`content.js`)

---

## File Structure

- Modify: `src/app/resources/content.js` (all profile copy and timeline updates)
- Read-only reference: `public/CV/CV-ALEXANDRE-TROTTA.pdf` (source of truth for facts)
- Verify rendering: `src/app/about/page.tsx`, `src/app/page.tsx` (no code changes expected)

## Task 1: Align global positioning on homepage and person profile

**Files:**
- Modify: `src/app/resources/content.js`
- Test: `npm run lint`

- [ ] **Step 1: Write the failing test (content expectation check)**

```bash
rg "Fullstack Software Developer|Fullstack Software Engineer" src/app/resources/content.js
```

Expected: old wording appears and confirms the file still uses pre-spec positioning.

- [ ] **Step 2: Run test to verify it fails against the spec**

Run:

```bash
rg "security specialization|security-focused" src/app/resources/content.js
```

Expected: no match or insufficient matches for the target positioning narrative.

- [ ] **Step 3: Write minimal implementation**

Update these values in `src/app/resources/content.js`:

```javascript
const person = {
  // ...
  role: "Full-Stack Software Engineer (Security Specialization)",
  // ...
};

const home = {
  // ...
  headline: <>Full-Stack Engineer, Security-Specialized</>,
  subline: (
    <>
      Hi, I’m Alex! I build scalable web and mobile products with a strong focus
      on secure architecture, data protection, and reliable delivery from design
      to deployment.
    </>
  ),
};
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg "Security Specialization|Security-Specialized|secure architecture" src/app/resources/content.js
```

Expected: 3+ matches in `person.role` and `home` content.

- [ ] **Step 5: Commit**

```bash
git add src/app/resources/content.js
git commit -m "feat: align homepage and profile positioning with security specialization"
```

---

## Task 2: Rewrite About introduction and normalize experience timeline

**Files:**
- Modify: `src/app/resources/content.js`
- Test: `npm run lint`

- [ ] **Step 1: Write the failing test**

```bash
rg "I am Belgium-based senior software engineer|2024 - Present|2017 - 2024" src/app/resources/content.js
```

Expected: old intro/date strings are present and do not follow CV-accurate timeline wording.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
rg "Nov 2024 - Present|Jun 2022 - Oct 2024|Mar 2020 - Jun 2022|Feb 2017 - Mar 2020" src/app/resources/content.js
```

Expected: missing one or more required date ranges.

- [ ] **Step 3: Write minimal implementation**

Replace `about.intro.description` and `about.work.experiences` with CV-aligned English content:

```javascript
intro: {
  display: true,
  title: "Introduction",
  description: (
    <>
      I am a Full-Stack Software Engineer with a security specialization, based
      in Belgium. Over 6+ years, I have delivered web and mobile products by
      combining scalable architecture, secure application design, and end-to-end
      ownership from product requirements to production deployment.
    </>
  ),
},
```

Use this timeline order and date format in `about.work.experiences`:

```javascript
[
  { company: "Onlyne", timeframe: "Nov 2024 - Present", role: "Tech Lead - Full-Stack Developer", /* ... */ },
  { company: "Independent Consultant", timeframe: "Jun 2022 - Oct 2024", role: "Full-Stack & Cybersecurity Consultant", /* ... */ },
  { company: "Timber Tailor", timeframe: "Mar 2020 - Jun 2022", role: "Full-Stack Web Developer", /* ... */ },
  { company: "Freelance / Student Entrepreneur", timeframe: "Feb 2017 - Mar 2020", role: "Full-Stack Developer", /* ... */ }
]
```

Include balanced metrics only where already present in CV context (e.g., mentoring velocity improvement, audited SMEs/vulnerability fixes), without turning each bullet into metric-heavy copy.

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg "Nov 2024 - Present|Jun 2022 - Oct 2024|Mar 2020 - Jun 2022|Feb 2017 - Mar 2020|Cybersecurity Consultant" src/app/resources/content.js
```

Expected: all required patterns found.

- [ ] **Step 5: Commit**

```bash
git add src/app/resources/content.js
git commit -m "feat: align about introduction and work timeline with latest CV"
```

---

## Task 3: Restructure Technical Skills into clearer capability blocks

**Files:**
- Modify: `src/app/resources/content.js`
- Test: `npm run lint`

- [ ] **Step 1: Write the failing test**

```bash
rg "JavaScript|Python|ReactJs|NextJs|NodeJs & ExpressJs|Django & FastAPI" src/app/resources/content.js
```

Expected: old skill-by-tool structure exists instead of grouped capability blocks.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
rg "Frontend & Mobile|Backend & APIs|Data & Cloud|Security & DevOps" src/app/resources/content.js
```

Expected: grouped block titles are missing.

- [ ] **Step 3: Write minimal implementation**

Replace `about.technical.skills` with these grouped entries:

```javascript
skills: [
  {
    title: "Frontend & Mobile",
    description: <>TypeScript, React, Next.js, and React Native for responsive, maintainable product interfaces.</>,
    images: [],
  },
  {
    title: "Backend & APIs",
    description: <>Node.js, Express, Python, FastAPI, and Django for secure, scalable backend services.</>,
    images: [],
  },
  {
    title: "Data & Cloud",
    description: <>PostgreSQL, Supabase, SQLite, MongoDB, and cloud services including AWS S3 and Azure.</>,
    images: [],
  },
  {
    title: "Security & DevOps",
    description: <>RBAC, secure API design, OWASP-oriented hardening, SonarQube, Snyk, Burp Suite, Nmap, Docker, Linux, CI/CD, GitHub Actions, and Kubernetes.</>,
    images: [],
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg "Frontend & Mobile|Backend & APIs|Data & Cloud|Security & DevOps|OWASP" src/app/resources/content.js
```

Expected: all grouped skill labels plus security wording are found.

- [ ] **Step 5: Commit**

```bash
git add src/app/resources/content.js
git commit -m "refactor: reorganize technical skills into capability-based groups"
```

---

## Task 4: Verify rendering quality and content coherence end-to-end

**Files:**
- Modify: none expected
- Verify: `src/app/resources/content.js`, `/`, `/about`

- [ ] **Step 1: Write the failing test**

Run:

```bash
npm run lint
```

Expected: if lint errors appear, the implementation is not ready.

- [ ] **Step 2: Run test to verify it fails (if needed)**

Run:

```bash
npm run dev
```

Expected: start local server and inspect pages manually; if copy overflows or timeline order looks wrong, treat as failing verification.

- [ ] **Step 3: Write minimal implementation**

If issues are found during verification:
- adjust phrasing length in `about.work.experiences[].achievements`
- keep each bullet concise enough for readable rendering
- fix any grammar mismatch directly in `src/app/resources/content.js`

Example adjustment pattern:

```javascript
achievements: [
  <>Led technical strategy and architecture for a document-focused ERP platform.</>,
  <>Implemented secure file workflows with granular permissions and real-time collaboration.</>,
]
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
npm run lint
```

Expected: lint passes with zero errors.

Then verify in browser:
- `/` role/headline/subline match new positioning
- `/about` intro, timeline order, and cyber emphasis match the validated spec

- [ ] **Step 5: Commit**

```bash
git add src/app/resources/content.js
git commit -m "chore: polish about and home copy after visual and lint verification"
```

---

## Final Integration Task: Consolidate and ship branch cleanly

**Files:**
- Modify: none expected

- [ ] **Step 1: Validate final diff scope**

```bash
git status --short
git diff -- src/app/resources/content.js
```

Expected: only intended profile-content changes are present.

- [ ] **Step 2: Validate commit history clarity**

```bash
git log --oneline -n 5
```

Expected: commits are atomic and narrate implementation progression.

- [ ] **Step 3: Optional squash policy decision**

If team policy requires fewer commits, squash at PR stage; do not rewrite shared history unless explicitly required.

- [ ] **Step 4: Prepare PR description**

Include:
- CV alignment summary
- timeline normalization summary
- security specialization improvements
- verification evidence (`npm run lint`, manual checks)

- [ ] **Step 5: Push and open PR**

```bash
git push -u origin HEAD
gh pr create --title "Align about and homepage content with current CV" --body "$(cat <<'EOF'
## Summary
- align `/about` content with latest CV timeline and role scope
- strengthen security specialization while keeping full-stack-first positioning
- update homepage role/headline/subline for narrative consistency

## Test plan
- [x] npm run lint
- [x] Manual check of `/`
- [x] Manual check of `/about`
EOF
)"
```

Expected: PR created successfully with clear scope and validation notes.
