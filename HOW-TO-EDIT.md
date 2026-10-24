# How to update the portfolio

Everything shown on the website comes from one file, **`content.js`**. You don't need to touch `index.html` to add work.

You can edit straight on GitHub, with no software to install:

1. Open the repository on github.com and click **`content.js`**
2. Click the **pencil icon** (Edit this file)
3. Make your change, then click **Commit changes…** → **Commit changes**
4. Wait about a minute and refresh the live site

> **Golden rules:** keep text inside "double quotes", keep the comma after each `}` or `]` when another item follows, and use `’` or `\"` if your text needs an apostrophe or quote inside a quote. If the page goes blank after an edit, a comma or quote is missing. Open the file's history and compare with the previous version.

---

## Add work experience

In `content.js`, find `experience: [` and paste this inside the brackets. Put the newest role first.

```js
{
  when: "Jul 2025 – present",
  role: "Graduate Powertrain Engineer",
  org: "Company name",
  location: "Oxford, UK",
  summary: "One sentence on the team and what you were there to deliver.",
  points: [
    "Built a GT-Power model of … to …, cutting calibration time by …%.",
    "Ran … tests on … and correlated the model to within …%."
  ],
  tags: ["GT-Power", "MATLAB", "ATLAS"]
},
```

Once the first entry exists, the "To be added" placeholder disappears automatically.

## Add a course or certification

Find `courses: [` and paste:

```js
{ when: "Mar 2026", title: "GT-SUITE Combustion Training", provider: "Gamma Technologies",
  summary: "What you learned or built.", link: "https://link-to-certificate" },
```

Leave `link: ""` if you don't have a public certificate.

## Add a project (work, course or personal)

1. **Add the images.** On GitHub: **Add file → Upload files**. Upload into a new folder by typing its path in the file name box, e.g. `projects/10-turbo-transient-control/images/main.png`. PNG or JPG, ideally under 1 MB each.
2. **Optional write-up.** Upload a `README.md` into `projects/10-turbo-transient-control/`. Copy any existing project README as a starting point. The site's case-study pop-up links to this folder.
3. **Add the card.** In `content.js`, copy the **PROJECT TEMPLATE** from the bottom of the file into the `projects: [` list and fill it in:

| Field | What it does |
|---|---|
| `id` | short unique name, no spaces (also gives the project its own link: `…github.io/#id`) |
| `n` | the number shown on the card, e.g. `"10"` (cards are sorted by it) |
| `cat` | filter button: `"combustion"`, `"airpath"`, `"vehicle"`, `"electric"`, `"structures"` or `"work"` |
| `dir` | the folder name under `projects/` holding the images |
| `featured: true` | makes it the large card at the top (keep only one) |
| `kicker`, `title`, `summary` | small label, card title, two-line card description |
| `metric` | `["label", "value"]` headline number on the card |
| `img`, `imgAlt` | card image path inside `dir`, and a description of it |
| `meta`, `kpis`, `problem`, `approach`, `results`, `figs`, `limits` | content of the case-study pop-up |

For industry work covered by confidentiality, describe the problem, method and impact in general terms, and use only figures your employer has approved for public use.

## Add a new filter category

Add a line to `categories:`, e.g. `["nvh", "NVH"],`, then use `cat: "nvh"` on a project. A button only appears once at least one project uses it.

## Update contact details or add your CV

In `config:` fill in `email` and `linkedin`. For a CV, upload the PDF to `assets/Ranjan-Pattnaik-CV.pdf` and set `cv: "assets/Ranjan-Pattnaik-CV.pdf"`. A **Download CV** button appears in the hero.

## Change the headline, profile text or skills

These are fixed text in `index.html`. Edit it the same way (pencil icon). Search the file for the sentence you want to change.

## Ask Claude

You can also attach new reports or describe a role in the "Career Timeline" project and ask Claude to add it. Claude will update `content.js` and the project folder and push the change.
