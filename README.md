# CLOUDDESK(1) User Manual

## NAME
CloudDesk EDU — Enterprise-grade cloud desktop platform for educational institutions

## SYNOPSIS
npm run dev
npm run build
npm start (within server directory)

## DESCRIPTION
CloudDesk EDU is a modern, enterprise-ready Software as a Service (SaaS) platform designed to provide instantaneous access to fully-configured cloud desktops. It is specifically architected for educational institutions, such as Universitas Brawijaya (@ub.ac.id), and professionals who require high-performance computing resources with minimal hardware overhead.

The platform leverages advanced cloud orchestration to deploy virtual environments across 13 global regions, offering flexible resource allocation including CPU, RAM, and GPU capabilities.

## ARCHITECTURE
CloudDesk EDU is built on a decoupled architecture comprising a high-performance frontend and a robust backend service:

- Frontend: React 18 with Vite and TypeScript, styled using Tailwind CSS 3.4.
- Backend: Node.js/Express.js server with PostgreSQL for data persistence.
- Identity: Firebase Authentication with Google OAuth and WebAuthn (Passkeys).
- Provisioning: Google Cloud Platform (GCP) Compute Engine integration.

## CORE FEATURES

### Identity and Access Management
- Multi-factor Authentication (MFA) via Google OAuth and WebAuthn Passkeys.
- Biometric and security key support for passwordless authentication.
- Domain-restricted access validation (e.g., Universitas Brawijaya).
- State-managed session handling with JWT and secure cookies.

### Cloud Orchestration
- Instant provisioning of virtual desktop instances.
- Pre-configured environment presets: Development, Data Science, 3D Rendering, and General Purpose.
- Granular resource scaling: 2–32 cores, 4–128 GB RAM, and up to 2 TB storage.
- High-performance GPU support (NVIDIA T4 to NVIDIA H100).

### Analytics and Governance
- Real-time usage monitoring and cost tracking.
- Per-instance financial breakdown with projections in IDR (Indonesian Rupiah).
- Resource optimization insights and spending analytics.
- Automated backup and recovery services.

## SYSTEM REQUIREMENTS
- Node.js version 18 or higher.
- npm version 9 or higher.
- PostgreSQL database instance (Supabase or local).
- Firebase project with Google OAuth enabled.
- GCP Project with Compute Engine API (for production provisioning).

## INSTALLATION AND SETUP

### 1. Repository Initialization
Clone the source code:
```bash
git clone https://github.com/rofiperlungoding/CloudDesk.git
cd CloudDesk
```

### 2. Dependency Management
Install required packages for both frontend and backend:
```bash
npm install
cd server
npm install
cd ..
```

### 3. Environment Configuration
Configure the environment variables by duplicating the template files:
```bash
cp .env.example .env
cp server/.env.example server/.env
```
Ensure all required keys for Firebase, PostgreSQL, and GCP are correctly populated.

### 4. Database Migration
Initialize the database schema and seed initial data:
```bash
cd server
npm run migrate
```

### 5. Deployment
Start the application in development mode:
- Frontend: `npm run dev` (Default: localhost:5173)
- Backend: `cd server && npm start` (Default: localhost:3001)

## COMPLIANCE AND ACCESSIBILITY
CloudDesk EDU is designed to meet WCAG AA accessibility standards, ensuring compatibility with screen readers and keyboard-only navigation.

## SECURITY
The platform implements phishing-resistant WebAuthn protocols and follows industry-standard OWASP Top 10 security guidelines for session management and database interactions.

## LICENSE
Copyright (c) 2026 CloudDesk EDU. Distributed under the MIT License.
