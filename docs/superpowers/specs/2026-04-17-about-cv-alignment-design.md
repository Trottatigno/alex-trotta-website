# Design Spec: About Page Alignment With Current CV

## Context

The website content must be updated in English to match the latest CV, with a priority on making `/about` accurate, coherent, and professionally positioned.

The target positioning is:

- Full-Stack Software Engineer with a security specialization
- Balanced tone (include selected impact metrics, avoid metric overload)
- Strong consistency between `/about` and homepage positioning text

## Scope

In scope:

- Update `/about` content structure and wording
- Align timeline, roles, and achievements with CV facts
- Strengthen cyber/security emphasis without changing core full-stack identity
- Update homepage positioning texts (`role`, `headline`, `subline`) to match

Out of scope:

- Visual redesign of components/layout
- New sections/routes/components
- Changes to blog/work project entries unrelated to personal profile positioning

## Source of Truth

Primary source of truth:

- `public/CV/CV-ALEXANDRE-TROTTA.pdf`

Content implementation source:

- `src/app/resources/content.js`

Rendering entry points:

- `src/app/about/page.tsx`
- `src/app/page.tsx` (via `home` and `person` data)

## Content Architecture

### About Introduction

The introduction must:

- Open with full-stack identity and security specialization
- Highlight secure and scalable architecture as a core strength
- Mention end-to-end ownership from design to deployment
- Keep language concise and recruiter-friendly

### Work Experience Timeline

The timeline must be chronologically coherent and CV-aligned:

1. Onlyne — Nov 2024 to Present — Tech Lead - Full-Stack Developer
2. Independent Consultant — Jun 2022 to Oct 2024 — Full-Stack & Cybersecurity Consultant
3. Timber Tailor — Mar 2020 to Jun 2022 — Full-Stack Web Developer
4. Freelance / Student Entrepreneur — Feb 2017 to Mar 2020 — Full-Stack Developer

Each entry includes:

- Role scope
- Technical/system impact
- Security contributions when relevant
- Optional balanced metrics (selected only where high-value and already present in CV)

### Technical Skills

Skills are reorganized for clarity into four blocks:

1. Frontend & Mobile
2. Backend & APIs
3. Data & Cloud
4. Security & DevOps

The Security & DevOps block explicitly surfaces:

- Secure API and architecture practices
- RBAC and data protection mindset
- Security tooling (e.g. SonarQube, Snyk, Burp Suite, Nmap)
- Delivery and ops tooling (Docker, CI/CD, GitHub Actions, Kubernetes, Linux)

## Homepage Alignment

The following fields must align with the new positioning:

- `person.role`
- `home.headline`
- `home.subline`

Expected narrative:

- Full-stack first
- Security specialization as differentiator
- Product delivery and architecture ownership

## Writing Style Rules

- English only
- Professional and direct
- No inflated claims
- No contradiction with CV dates, job titles, or achievements
- Balanced evidence: a few strong metrics, not a dense metric list

## Data Flow and System Behavior

- Content updates are made in `src/app/resources/content.js`
- Existing rendering logic in `/about` and homepage consumes updated values
- No schema or component refactor required
- No API, backend, or database impact

## Risks and Mitigations

1. Timeline inconsistency risk
   - Mitigation: normalize date format and ordering against CV
2. Over-indexing on cybersecurity
   - Mitigation: keep full-stack identity primary and security as specialization
3. Home/About narrative drift
   - Mitigation: update `person` + `home` + `about` in same change set
4. Skill section readability degradation
   - Mitigation: group skills by functional domain

## Acceptance Criteria

1. `/about` is fully in English and coherent with CV facts.
2. Work timeline has no date/title contradictions.
3. Security specialization is visible without replacing full-stack positioning.
4. Homepage role/headline/subline match the same positioning narrative.
5. Content reads naturally and professionally for recruiting/client contexts.
6. No structural rendering regressions in existing About/Home components.

## Implementation Boundaries

- Keep updates limited to profile content objects and values.
- Avoid unrelated refactors.
- Preserve existing component contracts consumed by pages.

## Validation Plan

1. Manual content validation against CV line-by-line for jobs, dates, and security claims.
2. Local run sanity check (`/` and `/about`) for rendering integrity.
3. Final editorial pass for grammar, coherence, and tone consistency.

## Decision Log

- Chosen approach: Narrative balanced positioning (Approach A)
- Positioning: Full-Stack Engineer first, security specialization second
- Scope: `/about` and homepage positioning text
- Style preference: balanced metrics (selected, not exhaustive)
