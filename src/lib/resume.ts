export const summary =
  "Backend-focused software engineer building scalable APIs, real-time systems, AI-powered workflows, and developer-facing infrastructure. Strong experience across Python, TypeScript, FastAPI, React, PostgreSQL, Docker, and distributed systems. Founded and scaled products serving millions of users and thousands of organizations; shipped payment systems, OCR services, and inference pipelines with production-grade reliability.";

export const work = [
  {
    company: "MegaLLM",
    logo: "megallm.png",
    position: "Backend Engineering Intern",
    duration: "December 2025 - February 2026",
    type: "Full-Time",
    location: "Remote (BLR, India)",
    description:
      "Unified api for 10+ providers and 300+ LLM models with a single API key and a single endpoint.",
    achievements: [
      "Designed and implemented an image inference API gateway from scratch, handling request routing, model orchestration, and deployment for scalable multi-model inference workloads.",
      "Extended an open-source platform with PDF processing and document operations support, improving its ability to handle unstructured enterprise content.",
      "Built an end-to-end LoRA fine-tuning pipeline for large language models, reducing adaptation cost versus full fine-tuning by 70-90% while enabling faster experimentation on large datasets.",
    ],
    status: "completed",
  },
  {
    company: "Tryzent Technologies",
    logo: "Tryzent.png",
    position: "AI/ML Engineer",
    duration: "July 2025 - December 2025",
    type: "Full-Time",
    location: "Remote (Delhi, India)",
    description:
      "Leading AI/ML initiatives with cutting-edge technologies to build intelligent solutions.",
    achievements: [
      "Built a document extraction pipeline using LlamaIndex to parse invoices and bank statements for GST filing workflows, reducing manual data entry by 60-80%.",
      "Developed an ATS-style resume ranking system with LangGraph and LlamaCloud that analyzed bulk resumes against job descriptions and automated candidate scoring.",
      "Engineered a real-time face recognition attendance system with FastAPI, InsightFace, and YOLOv11, automating classroom roll calls with 92.3% recognition accuracy.",
      "Developed an AI-powered multilingual audio processing pipeline using Python, PyTorch, and state-of-the-art models (Whisper, IndicConformer, MMS-LID, PyAnnote) that transcribes and translates multi-speaker conversations in English, Hindi, and Punjabi, improving processing accuracy through intelligent speaker diarization and language detection.",
      "Shipped a desktop meeting translator with Electron and Azure Speech SDK that enabled live transcription overlays for multilingual participation in meetings.",
    ],
    status: "completed",
  },
  {
    company: "Mysty",
    logo: "Mysty.png",
    position: "Founder",
    duration: "February 2025 - June 2025",
    type: "Startup",
    location: "Remote",
    description:
      "Founded and led a high-performance platform serving millions of users with scalable architecture.",
    achievements: [
      "Served a small user base (1M+ users, 100+ orgs) with scalable, high-performance architecture.",
      "Tech stack used: discord.py, PostgreSQL, websockets, Tortoise-ORM, Redis, Docker & more.",
      "Implemented Discord OAuth2 authentication with FastAPI, JWT, and PostgreSQL to support secure dashboard access and account linking.",
      "Integrated Stripe, OxaPay, and PayPal, and built webhook-driven payment flows to automate transaction handling and service activation.",
      "Developed a real-time dashboard with Next.js, FastAPI, WebSockets, and PostgreSQL for operational visibility and payment event handling.",
      "Containerized and deployed core services with Docker to support scalable releases and simplified operations.",
    ],
    status: "discontinued",
    note: "Discontinued due to financial constraints and lack of sustained funding",
  },
  {
    company: "Quotient",
    logo: "Quotient.png",
    position: "Co-Founder",
    duration: "September 2020 - April 2025",
    type: "Startup",
    location: "Remote",
    description:
      "Co-founded and scaled a platform to serve millions of users with cutting-edge technology stack.",
    achievements: [
      "Served a large user base (10M+ users, 15k+ orgs) with scalable, high-performance architecture.",
      "Tech stack used: discord.py, React, FastAPI, PostgreSQL, websockets, Tortoise-ORM & more.",
      "Implemented Discord OAuth2 login with FastAPI, JWT, and PostgreSQL to streamline dashboard authentication and account management",
      "Integrated PayU Money payment processing to support monetization and subscription workflows.",
      "Built an OCR and image hashing microservice using PyTesseract, ImageHash, and PIL that handled 100K+ requests/month for image analysis and duplicate detection.",
      "Project discontinued in April 2025 due to the untimely passing of a core team member.",
    ],
    status: "discontinued",
    note: "Operations discontinued in April 2025 due to the untimely passing of a core team member",
  },
  {
    company: "Flantic",
    logo: "Flantic.png",
    position: "Founder",
    duration: "March 2021 - March 2023",
    type: "Startup",
    location: "Remote",
    description:
      "Founded and scaled a massive platform serving tens of millions of users worldwide.",
    achievements: [
      "Served a large user base (55M+ users, 200k+ orgs) with scalable, high-performance architecture.",
      "Tech stack used: discord.py, PostgreSQL, websockets, Tortoise-ORM & more.",
      "Integrated Razorpay to support payment processing and monetization.",
      "Horizontally scaled infrastructure to support deployment across 200K servers, using PM2 and production scaling practices to maintain service availability.",
      "Led the product through acquisition by Green Bot Development in 2023.",
    ],
    status: "acquired",
    note: "Acquired by Green Bot Development in March 2023",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Libraries & frameworks",
    resumeTitle: "Library/Frameworks",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Express",
      "Tortoise ORM",
      "WebSockets",
      "discord.py",
      "Electron",
    ],
  },
  {
    title: "AI / LLM",
    resumeTitle: "AI/LLM Frameworks",
    items: [
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "Hugging Face",
      "OpenAI API",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps",
    items: [
      "Sentry",
      "Prometheus",
      "Grafana",
      "Loki",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    title: "Infrastructure & data",
    resumeTitle: "Others",
    items: [
      "Redis",
      "Nginx",
      "Caddy",
      "Traefik",
      "Kafka",
      "Amazon S3",
      "Cloudflare R2",
    ],
  },
];
