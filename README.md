# Advance-Doc

Advance-Doc is a modern, collaborative documentation platform inspired by Notion. It offers seamless real-time collaboration, AI-powered features, document sharing, and enhanced performance with Cloudflare Workers.

## Features

- **Real-Time Collaboration**  
  - **Live Cursors**: See team members’ edits in real time.  
  - **Live Rich Text Editing**: Effortless simultaneous collaboration.  
  - **Document Sharing**: Share and work on documents together in real time.

- **AI-Powered Enhancements**  
  - **Multi-Language Translation**: Instantly translate documents to any language using AI.  
  - **AI Chat Integration**: Chat with AI (via OpenAPI) to get insights, summaries, or assistance on documents.

- **Rich Text and Block-Based Editing**  
  - Create structured documents with block-based editing powered by **Blocknote**.  
  - Markdown support via **react-markdown**.

- **Modern Styling and Animations**  
  - Sleek design with **TailwindCSS** and **ShadCN-UI**.  
  - Smooth interactions with **Framer Motion**.

- **Performance and Scalability**  
  - Optimized backend operations and API integrations using **Cloudflare Workers** for enhanced performance.

- **Secure Authentication and Notifications**  
  - Login and user management with **Clerk Authentication**.  
  - Elegant notifications using **Sonner**.

- **Real-Time Backend**  
  - Powered by **Firestore Database** and **Liveblocks** for real-time collaboration.

## Tech Stack

- **Frontend**:  
  - [Next.js 15](https://nextjs.org/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [React](https://reactjs.org/)  
  - [TailwindCSS](https://tailwindcss.com/)  
  - [ShadCN-UI](https://shadcn.dev/)

- **Backend**:  
  - [Firestore Database](https://firebase.google.com/products/firestore)  
  - [Liveblocks](https://liveblocks.io/)  
  - [Cloudflare Workers](https://workers.cloudflare.com/)  
  - [OpenAPI Integration](https://openai.com/api)

- **Additional Libraries**:  
  - [react-markdown](https://github.com/remarkjs/react-markdown)  
  - [Blocknote](https://blocknote.dev/)  
  - [Framer Motion](https://www.framer.com/motion/)  
  - [Lucide Icons](https://lucide.dev/)  
  - [Sonner](https://sonner.dev/)  
  - [Clerk Authentication](https://clerk.dev/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/advance-doc.git
   cd advance-doc
2. Run Project:
   - setup .env.local for client
   ```bash
   cd client
   npm run dev
