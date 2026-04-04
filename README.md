# 🧬 GenoFlow — Interactive NGS Bioinformatics Course

> Master the complete Next-Generation Sequencing pipeline — from raw reads to clinical reports — through hands-on, interactive learning.

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🎯 Why GenoFlow?

Bioinformatics is complex. Traditional learning resources are either too theoretical or too fragmented. **GenoFlow** bridges that gap with a structured, visually rich, and interactive curriculum designed for students, clinicians, and researchers entering the world of genomic data analysis.

No prior bioinformatics experience required — just curiosity.

---

## 🗺️ Curriculum

Nine carefully designed modules that mirror the real-world NGS workflow:

| Module | Title | What You'll Learn |
|:------:|-------|-------------------|
| 01 | 🔬 **Introduction to NGS** | Sequencing chemistry, platforms (Illumina, ONT, PacBio), and when to use each |
| 02 | 📊 **Raw Data & Quality Control** | FASTQ format, Phred scores, FastQC, adapter trimming |
| 03 | 🧭 **Read Alignment** | Reference genomes, BWA-MEM, SAM/BAM formats, alignment metrics |
| 04 | 🔧 **Post-Alignment Processing** | Duplicate marking, base quality score recalibration (BQSR) |
| 05 | 🎯 **Variant Calling** | SNVs, indels, GATK HaplotypeCaller, genotype likelihoods |
| 06 | 📝 **Variant Annotation** | Functional impact prediction, ClinVar, gnomAD, VEP |
| 07 | 🔍 **Filtering & Prioritization** | Hard filters, population frequency, pathogenicity scoring |
| 08 | 🏥 **Clinical Interpretation** | ACMG/AMP guidelines, variant classification, reporting & ethics |
| 09 | 🏆 **Final Assessment** | Comprehensive evaluation & certificate of completion |

---

## ✨ Key Features

- **🗺️ Pipeline Mini-Map** — A persistent visual tracker showing exactly where you are in the NGS workflow
- **💡 Glossary Chips** — Hover over highlighted terms to instantly learn key concepts in context
- **🧪 Interactive Quizzes** — Test your understanding at the end of each module with immediate feedback
- **⚡ XP & Progress System** — Earn experience points as you explore sections and complete modules
- **🔀 Technical Toggle** — Switch between beginner-friendly and advanced explanations on the fly
- **📜 Certificate** — Generate a personalized certificate upon completing all nine modules

---

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Home%20Page.png)

### Module Content
![Sample Types](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Sample%20Types.png)
![Annotation](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Annotation.png)

### Key Concepts
![Sequencing by Synthesis Demo](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Sequencing%20by%20senthesis%20Demo.png)
![Sequencing Platforms Comparison](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Sequencing%20Longs%20vs%20Short%20Read.png)
![The Sequencing Revolution](https://github.com/nour0810/ngs-platform/raw/main/screenshots/THe%20Sequencing%20Revolution.png)
![Variants](https://github.com/nour0810/ngs-platform/raw/main/screenshots/Variants.png)

### Certificate
![Certificate](https://github.com/nour0810/ngs-platform/raw/main/screenshots/NGS_Certificate_User.png)

> 📁 All screenshots are stored in the [`screenshots/`](https://github.com/nour0810/ngs-platform/tree/main/screenshots) folder.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ngs-platform-main

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI (GlossaryChip, MiniQuiz, PipelineMiniMap, …)
│   └── ui/          # shadcn/ui component library
├── context/         # Global app state (progress, XP, module navigation)
├── data/            # Course content & quiz data
├── hooks/           # Custom React hooks
├── pages/
│   ├── Landing.tsx  # Welcome screen
│   ├── Index.tsx    # Home page
│   ├── Module01–09  # Top-level module routers
│   └── modules/     # Individual page content per module (m01–m09)
├── assets/          # Images and static assets
└── index.css        # Design system tokens & global styles
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) | Component library |
| [Framer Motion](https://framer.com/motion) | Animations |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [React Hook Form](https://react-hook-form.com) | Form handling |
| [Zod](https://zod.dev) | Schema validation |
| [Recharts](https://recharts.org) | Data visualization |
| [jsPDF](https://github.com/parallax/jsPDF) | Certificate PDF export |
| [html2canvas](https://html2canvas.hertzen.com) | Certificate image generation |
| [Vitest](https://vitest.dev) | Unit testing |
| [Playwright](https://playwright.dev) | E2E testing |

---

## 📚 Based On

This interactive course is built upon the open educational resource **NGS Analysis Toolkit**, an e-book authored by [zemZemTrainingOrg](https://github.com/zemZemTrainingOrg):

- **GitHub Repository:** [zemZemTrainingOrg/NGS-Analysis-Toolkit](https://github.com/zemZemTrainingOrg/NGS-Analysis-Toolkit)
- **Online E-book:** [NGS Analysis Toolkit — Introduction & Home Page](https://zemzemtrainingorg.github.io/NGS-Analysis-Toolkit/00-Introduction/00-HomePage.html)

We gratefully acknowledge this foundational resource, which provided the scientific framework and curriculum structure upon which the GenoFlow NGS Learning Laboratory was designed.

---

## 📄 License

This project is intended for educational purposes.

---

<p align="center">
  <em>Built with 💙 for the genomics community</em>
</p>
