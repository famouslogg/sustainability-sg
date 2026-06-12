# sustainability.sg

Singapore's sustainability resource site with an AI-powered advisor.

## Site structure

```
/
├── index.html          Homepage
├── advisor.html        AI Advisor (full chatbot)
├── resources.html      Curated resources by category
├── api/
│   └── chat.js         Vercel serverless function (secure API proxy)
└── vercel.json         Vercel routing config
```

## Deploy to Vercel (step by step)

### 1. Create a GitHub repository

1. Go to github.com and sign in (create a free account if needed)
2. Click the + icon, then "New repository"
3. Name it `sustainability-sg`, set to Public, click "Create repository"
4. Upload all these files by dragging them into the GitHub interface

### 2. Deploy on Vercel

1. Go to vercel.com and sign in with your GitHub account
2. Click "Add New Project"
3. Select your `sustainability-sg` repository
4. Click "Deploy" — Vercel will auto-detect the settings

### 3. Add your Anthropic API key

1. In Vercel, go to your project > Settings > Environment Variables
2. Add a new variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key from console.anthropic.com
3. Click Save, then go to Deployments and click "Redeploy"

### 4. Connect sustainability.sg

1. In Vercel, go to your project > Settings > Domains
2. Click "Add Domain"
3. Type `sustainability.sg` and click Add
4. Vercel will show you DNS records to add
5. Log in to your domain registrar (where you bought sustainability.sg)
6. Add the DNS records Vercel provides (usually an A record and CNAME)
7. Wait 10–30 minutes for DNS to propagate

Your site will be live at https://sustainability.sg with SSL automatically.

## Managing API costs

The `/api/chat.js` function limits conversation history to the last 10 messages to control token usage. At modest traffic (100 conversations/day, ~500 tokens each), expect roughly USD 2–5/month in API costs.

To add rate limiting, set a limit in Vercel's Edge Config or use Vercel's built-in rate limiting on the API route.

## Updating content

- Edit `index.html` to change the homepage
- Edit `resources.html` to add or update resource cards
- Edit the `SYSTEM_PROMPT` in `advisor.html` to update what the AI knows

Every time you push a change to GitHub, Vercel rebuilds and redeploys automatically.
