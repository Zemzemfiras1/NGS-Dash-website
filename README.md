# Interactive NGS Bioinformatics Course

---

Master the complete Next-Generation Sequencing pipeline from raw reads to clinical reports, through hands-on, interactive learning.

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---
- This course was developed by [GenoFlow](https://www.linkedin.com/company/genoflowhub/posts/?feedView=all) to transform complex bioinformatics concepts into an accessible, interactive learning experience. 
- Building on the [NGS-Toolkit-e-book](https://github.com/zemZemTrainingOrg/NGS-Toolkit-e-book) authored by [zemZemTrainingOrg](https://github.com/zemZemTrainingOrg), we added visual explanations, hands-on exercises, and a streamlined interface tailored for learners new to genomic data analysis.

---
> Online Version is available on [THIS LINK](https://zemzemtrainingorg.github.io/NGS-Dash-website/)

![Home Page](./screenshots/Home%20Page.png)

 
## Curriculum

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

## Contributors

### Core Development Team

- [Nour El Houda Mathlouthi](https://github.com/nour0810) : Course website design, content adaptation, and interactive module development

### Acknowledgments

Special thanks go to:
- [Firas Zemzem](https://github.com/Zemzemfiras1) : Course design, technical review and validation
- [Salma Maalaoui](https://github.com/MAASALMA)  : Review and validation
- [Kimberly Christine Coetzer](https://github.com/Kimmiecc19) : Review and validation

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone git@github.com:zemZemTrainingOrg/NGS-Dash-website.git
cd NGS-Dash-website

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun run dev
```

Then the app will be available at : 

> http://localhost:8080/NGS-Dash-website/

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

## Tech Stack

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

## Disclaimer

In developing this course, AI tools were used to:

- Improving readability, structure, and technical accuracy of explanations.
- Streamlining code snippets, improving consistency, and adding intuitive comments to make the coding experience more fluid and learner‑friendly.

> All AI‑assisted outputs were reviewed, tested, and adapted by the course authors to ensure scientific integrity and educational value. The AI served as a co‑piloting tool , not a replacement for human expertise.

## 📄 License

This project is intended for educational purposes.

---

<p align="center">
  <em>Built with 💙 for the genomics community</em>
</p>
