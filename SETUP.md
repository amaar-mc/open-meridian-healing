# Open Meridian Healing — Backend Setup Guide

Everything the website needs to go live. Do these in order.

---

## 1. Contact Form — Web3Forms (Free)

Web3Forms is free, unlimited submissions, sends to Gmail, client gets auto-confirmation.

**Steps:**

1. Go to [web3forms.com](https://web3forms.com)
2. Enter `openmeridianhealing@gmail.com` → click **Create Access Key**
3. Check Gmail inbox → copy the access key (looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. Open `app/contact/page.tsx` line 8:
   ```
   const WEB3FORMS_KEY = "REPLACE_WITH_ACCESS_KEY";
   ```
   Replace `REPLACE_WITH_ACCESS_KEY` with the key from step 3.
5. Done. Form submissions → Gmail. Submitter gets auto-confirmation. All free.

No dashboard login needed after setup. Submissions arrive directly in Gmail.

---

## 2. Booking Scheduler — Calendly

**Cost:** Free plan = 1 event type only. She needs 7+. **Must upgrade to Calendly Standard = $10/month.** No way around this with Calendly.

**Alternative:** Cal.com (open source) — free tier has unlimited event types. Use if $10/mo is a problem.

**Setup requires her Gmail** — Calendly needs Google OAuth to sync with Google Calendar for availability. She needs to either set it up herself or give you access to `openmeridianhealing@gmail.com`.

**Steps (once logged in):**

### A. Create Event Types

Create these 6 event types in Calendly:

| Name | Duration | Price |
|---|---|---|
| Discovery Call | 15 min | Free |
| In-Person Reiki — 50 min | 50 min | $100 |
| In-Person Reiki — 75 min | 75 min | $140 |
| In-Person Reiki — 90 min | 90 min | $175 |
| Rainbow Chakra Mat — 30 min | 30 min | $40 |
| Rainbow Chakra Mat — 60 min | 60 min | $70 |
| Distance Reiki | 75 min | $110 |

### B. Add Custom Questions to Discovery Call

In the Discovery Call event type → **Questions** tab → add:

1. **Phone number** (required)
2. **Preferred contact method** — dropdown: Phone / Zoom
3. **What service are you interested in?** — dropdown with all services
4. **Do you have a henna design?** — conditional on henna selection
5. **What feels present for you right now?** (optional text)
6. **Acknowledgment checkbox:**
   > "I understand this Discovery Call is a consultation, not a healing session. Services are complementary wellness practices, not medical treatment."

### C. Add Consent Checkbox to Reiki/Mat/Distance Events

Each booking event type → **Questions** → add:
> "I understand services offered by Open Meridian Healing are complementary wellness practices and not medical treatment. I consent to receive services and may decline touch or equipment use at any time."

### D. Get Embed Codes

For each event type:
- Click event type → **Share** → **Add to website** → **Inline embed**
- Copy the embed code

Then tell me and I'll drop them into the site in the right spots.

---

## 3. Embed Calendly Into the Website

Once you have embed codes, I'll replace the placeholder boxes in:
- `/app/book/page.tsx` — Discovery Call section + 3 returning client scheduler boxes

Calendly React embed (`@calendly/react-calendly`) is the cleanest approach.
Install: `npm install react-calendly`

I'll handle the code once event types are set up.

---

## 4. Services Page Images

Two services currently have no image (In-Person Reiki, In-Home Reiki sections were simplified to text-only layouts — this is fine). 

The About page uses `hands-healing.jpg` which exists. If she wants better images, generate with this prompt guidance:

**For In-Person Reiki:** Soft natural light, massage table with white linens, warm neutral tones, cozy room — no people required. Not photorealistic.

**For In-Home Reiki:** Someone resting in a home environment, soft lighting, plants — calm domestic setting.

---

## 5. What's Left After Setup

| Item | Status |
|---|---|
| Contact form → Formspree | Ready — just needs form ID (step 1) |
| Booking scheduler embed | Ready — needs Calendly event types + embed codes (step 2-3) |
| Services images | Optional — current layout works without them |
| Domain / Hosting | Deploy to Vercel: `vercel deploy` |

---

## 6. Deployment (Vercel)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Or connect GitHub repo to vercel.com for automatic deploys on push.

Set domain in Vercel → Add `openmeridianhealing.com` (or whatever domain she has).
