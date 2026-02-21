# CDPL Next-Gen Strategic Platform

## Project Overview
This repository contains the Next.js implementation of the **CDPL (Continental Defense & Product Lines)** institutional platform. The project has been modernized from a legacy static framework into a high-performance, scalable React-based application designed for the defense and aerospace sector. 

The platform serves as the digital gateway for CDPL’s three core divisions:
*   **MAS (Major Aerospace Systems)**
*   **MGS (Major Ground Systems)**
*   **MMS (Major Marine Systems)**

## Key Technical Features

### 1. Technical HUD (Heads-Up Display) Navigation
Implemented a specialized mobile navigation interface leveraging a "Military-Grade HUD" aesthetic. 
- **Dynamic Session Tracking**: Generates unique session IDs on-the-fly for a secure, technical feel.
- **System Status Indicators**: Integrated pulsing micro-animations (`CSS3`) to signal active encrypted links.
- **Monospace Typography**: Optimized for legibility and technical professionality.

### 2. Adaptive Desktop Mega-Menu
A high-fidelity desktop navigation system that categorizes product lines across three distinct pillars. 
- **Isolated Component Architecture**: Separated mobile and desktop logic to ensure 100% layout stability across all viewports.
- **Visual Grid Dividers**: Utilizes subtle border-saturation techniques for a clean, organized data presentation.

### 3. Cyber-Scramble (HackerLink) Effect
Integrated a custom JavaScript-based text randomization component. This effect scrambles characters upon user interaction, reinforcing the brand's focus on secure communications and high-tech intelligence.

## Technology Stack
*   **Framework**: [Next.js 16.1.16](https://nextjs.org/) (App Router Architecture)
*   **Core Library**: React 19.2.3
*   **Language**: TypeScript / JavaScript (Hybrid for flexibility)
*   **Styling**: Vanilla CSS3 + Styled-JSX (Scoped Component Styling)
*   **Deployment**: Optimized for Vercel / Edge Runtime

## Directory Structure
```text
/app         -> Core routing logic and page layouts.
/components  -> Atomic UI elements (HUD Navbar, Footer, Platform Panels).
/public      -> High-resolution divisional assets and branding icons.
/styles      -> Design tokens, CSS variables, and global tech-animations.
```

## Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/v3nom-95/cdpl.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

## Deployment
This project is configured for seamless deployment on the **Vercel Platform**. 
- **Continuous Integration**: Pushing to the `main` branch automatically triggers a production build.
- **Environment Handling**: Optimized `.gitignore` ensures that sensitive configuration remain localized while allowing for seamless cloud integration.


21/02 - seo