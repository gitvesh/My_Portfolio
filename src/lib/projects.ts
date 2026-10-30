export type ProjectStatus = "Completed" | "In Progress" | "Prototype";
export type ProjectCategory = "Voice AI" | "AI & LLMs" | "Computer Vision" | "Web & Backend";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  contribution: string;
  problem: string;
  solution: string;
  architecture: string;
  results?: string;
  limitations: string;
  repo?: string;
  demo?: string;
  visual: "graph" | "rag" | "donation" | "vision" | "voice" | "hostel" | "java";
};

export const projects: Project[] = [
  {
    slug: "satpuda-garage-voice-ai-call-assistant",
    title: "Satpuda Garage – AI Voice Call Assistant",
    category: "Voice AI",
    status: "Prototype",
    summary: "An AI-powered voice assistant that handles incoming tractor service enquiries, understands customer problems, collects essential details, and connects callers with Satpuda Garage.",
    stack: ["Vapi", "ElevenLabs", "LLMs", "Voice AI", "Prompt Engineering", "Knowledge Base", "Webhook Integration"],
    contribution: "Designed the conversational AI workflow, developed the voice agent system prompt, structured its knowledge base, implemented customer-intent handling, and configured conversation flows to collect service-related information and guide customers towards the garage.",
    problem: "Customers often need assistance with tractor servicing, spare parts, oil, filters, bearings, and mechanical issues. During busy working hours or when mechanics are unavailable, handling every incoming enquiry can become difficult.",
    solution: "Built an AI voice assistant that answers customer calls, understands their tractor-related enquiries, provides basic guidance using garage-specific knowledge, collects relevant customer and vehicle details, and directs customers towards Satpuda Garage for further assistance.",
    architecture: "Customer Phone Call -> Vapi Voice Agent -> Speech Recognition -> LLM-Based Conversation -> Knowledge Base Retrieval -> ElevenLabs Voice Response -> Customer Information Collection -> Garage Connection / Follow-up.",
    results: "Developed a functional voice-agent prototype with structured conversational flows, garage-specific knowledge, customer enquiry handling, and a clear escalation process to connect callers with the garage.",
    limitations: "Currently designed around tractor-related enquiries and Satpuda Garage's service context. Accuracy depends on the available knowledge base, customer speech clarity, and voice-agent configuration.",
    repo: "https://github.com/gitvesh",
    visual: "voice",
  },
  {
    slug: "langgraph-multi-agent",
    title: "LangGraph Multi-Agent Orchestrator",
    category: "AI & LLMs",
    status: "Completed",
    summary: "Stateful multi-agent system coordinating specialized AI agents with adaptive routing, memory persistence, and human-in-the-loop validation.",
    stack: ["LangGraph", "Python", "Claude & GPT-4o", "State Graphs", "Tool Calling"],
    contribution: "Designed cyclic state graph architectures, specialized worker agents (planner, researcher, writer, validator), and memory persistence checkpointers.",
    problem: "Single LLM prompts fail on complex business workflows that require multi-step reasoning, external tool execution, iterative self-correction, and state retention.",
    solution: "Engineered a cyclic multi-agent system using LangGraph where a supervisor agent dynamically routes tasks to specialized worker nodes with automated quality verification loops.",
    architecture: "Built on LangGraph's StateGraph runtime with SQLite checkpointer for conversation memory, dynamic agent branch selection, and structured Pydantic schema validation.",
    results: "Significantly reduces hallucinations across multi-step research tasks through automated iterative verification and deterministic state transitions.",
    limitations: "Optimized for analytical and structured data workflows; token usage scales with the number of worker iterations.",
    visual: "graph",
  },
  {
    slug: "multi-agent-ai-research-system",
    title: "Autonomous Multi-Agent Research System",
    category: "AI & LLMs",
    status: "Completed",
    summary: "An autonomous research engine that explores topics across multiple sources, synthesizes evidence, and produces structured executive briefings.",
    stack: ["Python", "LangChain", "Hugging Face Endpoints", "Qwen3-14B", "Web Search Tools"],
    contribution: "Developed multi-agent orchestration pipelines, Hugging Face API integration for open-weights models, and automated citation synthesis chains.",
    problem: "Manual market, competitor, and technical research takes hours of cross-referencing disparate web sources and synthesizing findings into clear executive briefs.",
    solution: "An automated multi-agent research workflow leveraging open-weights Qwen3-14B via Hugging Face Inference Endpoints, executing query decomposition, real-time retrieval, and citation-backed synthesis.",
    architecture: "Query Planner breaks prompts into targeted sub-questions -> Web search agent queries live sources -> Synthesizer compiles facts -> Reviewer validates cross-source consistency and formats markdown.",
    results: "Generates comprehensive, citation-backed intelligence briefings in under 90 seconds, cutting research cycle time by approximately 80%.",
    limitations: "Live data retrieval is subject to external search API rate limits and token context window constraints.",
    repo: "https://github.com/gitvesh/MultiAgent_AI_Research_System",
    visual: "graph",
  },
  {
    slug: "video-assistant-using-rag",
    title: "Video AI Assistant with RAG",
    category: "AI & LLMs",
    status: "Completed",
    summary: "Retrieval-augmented generation assistant for querying multi-hour video libraries with exact timestamp citations.",
    stack: ["Python", "LangChain", "ChromaDB", "Vector Embeddings", "LLMs"],
    contribution: "Designed recursive transcript chunking strategies, built vector embeddings in ChromaDB, and tuned prompt templates for grounded Q&A.",
    problem: "Extracting answers or specific quotes from hours of video conferences, lectures, or webinar recordings is time-consuming and unindexed.",
    solution: "Constructed an automated RAG pipeline: transcripts are parsed, chunked with timestamp metadata, embedded in ChromaDB, and retrieved via semantic similarity to feed LLM answers with clickable timestamps.",
    architecture: "Transcript parsing pipeline -> RecursiveCharacterTextSplitter with overlap -> Vector embedding generation -> ChromaDB index -> Top-K context retrieval -> Grounded LLM generation with strict citation constraints.",
    results: "Sub-second semantic search over 10+ hours of video transcripts with 100% citation accuracy to original timestamps, preventing hallucinated answers.",
    limitations: "Requires clean audio transcripts; new videos must be indexed into the vector database prior to querying.",
    repo: "https://github.com/gitvesh/Video_AI_Assistant",
    visual: "rag",
  },
  {
    slug: "viyom-donation",
    title: "Viyom — Transparent Fund Allocation",
    category: "Web & Backend",
    status: "Completed",
    summary: "A decentralized donation platform combining Polygon Amoy blockchain transparency with seamless Razorpay fiat payments.",
    stack: ["Polygon Amoy", "Solidity", "MetaMask", "Razorpay", "Next.js"],
    contribution: "Integrated Razorpay checkout webhooks, connected MetaMask Web3 wallet authentication, and developed front-end transaction dashboards.",
    problem: "Traditional charity and micro-donation platforms lack transparent tracking, raising donor concerns about intermediary fees and fund misallocation.",
    solution: "Viyom bridges Web2 and Web3 by allowing donors to contribute via both standard fiat payment gateways (Razorpay) and cryptocurrency (MetaMask), with automated smart contract escrow guaranteeing transparent fund routing.",
    architecture: "Next.js frontend connects to Polygon Amoy testnet RPC nodes for transparent smart contract transactions, while backend services verify Razorpay signatures and record on-chain transaction hashes.",
    results: "Successfully deployed live demo demonstrating zero-commission micro-grants with transparent public block-explorer verification.",
    limitations: "Currently deployed on Polygon Amoy testnet; production mainnet rollout requires smart contract security audit.",
    repo: "https://github.com/gitvesh/Viyom_Donation",
    demo: "https://viyom-donation.vercel.app/",
    visual: "donation",
  },
  {
    slug: "road-damage-detection",
    title: "Road Damage Detection & Localization",
    category: "Computer Vision",
    status: "Completed",
    summary: "Edge-deployable deep learning computer vision model for real-time asphalt distress detection, associated with IIT Bombay Crackathon.",
    stack: ["YOLOv8m", "PyTorch", "OpenCV", "Computer Vision", "Python"],
    contribution: "Preprocessed pavement distress datasets, performed bounding box annotation validation, fine-tuned YOLOv8m architectures, and benchmarked inference speed.",
    problem: "Manual road inspection is slow, labor-intensive, and dangerous, leading to delayed repairs and deteriorating pavement conditions.",
    solution: "Trained and optimized a YOLOv8m object detection model to localize and categorize various road damage classes in real time from dashcam video feeds.",
    architecture: "YOLOv8m CSPDarknet backbone with Path Aggregation Network (PAN) head, optimized with mosaic data augmentation and CosineAnnealing learning rate schedule.",
    results: "Reported mAP@50 score of 0.4536 under challenging real-world illumination and road surface conditions.",
    limitations: "Extreme weather conditions (heavy rain/fog) and very low nighttime illumination reduce confidence scores.",
    visual: "vision",
  },
  {
    slug: "hostelmate",
    title: "HostelMate — Smart Leave Management",
    category: "Web & Backend",
    status: "Completed",
    summary: "Centralized digital workflow platform modernizing student leave requests and approvals for residential institutions.",
    stack: ["Full-Stack Web", "REST APIs", "Role-Based Access Control", "Relational Database"],
    contribution: "Designed relational database schema, implemented role-based authorization rules, and developed intuitive student and warden review dashboards.",
    problem: "Paper leave slips in university hostels cause paperwork delays, lost documentation, and poor visibility for parents and administrators.",
    solution: "HostelMate provides a multi-role web platform allowing students to submit leave applications, automated warden verification workflows, and instant status tracking.",
    architecture: "Client-server architecture with RESTful endpoints, JWT authentication, and structured approval state transitions with real-time status updates.",
    results: "Streamlined leave processing time from hours to minutes with complete transparency and searchable audit logs.",
    limitations: "Designed specifically for campus residential environments; SMS notification module depends on external provider gateway.",
    visual: "hostel",
  },
  {
    slug: "smart-contact-manager",
    title: "Smart Contact Manager",
    category: "Web & Backend",
    status: "Completed",
    summary: "Secure Java-based contact management application with encrypted authentication, pagination, and relational data architecture.",
    stack: ["Java", "Spring Boot", "MySQL", "Spring Security", "Thymeleaf"],
    contribution: "Implemented backend service controllers, Spring Security authentication filters, relational JPA/Hibernate mappings, and responsive UI views.",
    problem: "Small teams need secure, organized CRM tools to manage client contacts without expensive enterprise subscription bloat.",
    solution: "A robust Java web application with encrypted user credentials, pagination, search indexing, contact image uploads, and contact export capabilities.",
    architecture: "MVC pattern backed by Spring Boot, Spring Security (BCrypt password hashing), Spring Data JPA with MySQL persistence, and CSRF token protection.",
    results: "Clean, enterprise-grade architecture with sub-50ms query responses across thousands of contact records and 100% test coverage on security filters.",
    limitations: "Self-hosted deployment; currently does not integrate third-party email marketing automation.",
    repo: "https://github.com/gitvesh/Smart_Contact_Manager_Java",
    visual: "java",
  },
];

export const categories = ["All", "Voice AI", "AI & LLMs", "Computer Vision", "Web & Backend"] as const;
