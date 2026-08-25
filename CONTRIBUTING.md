# Writing guide

This file is the style contract for the myDiagnostic documentation site. Read it before writing or
editing any page. Anything not covered here is decided by the closest precedent already on the site.

## Who you are writing for

The reader is a Shopify merchant, not a developer. They know the Shopify admin and the theme editor.
They do not know JSON, CSS, or the vocabulary of our codebase. Never ask them to read code, and never
name an internal field, a database column, or a CSS custom property unless the app itself shows that
name on screen.

## Voice

- Write in the second person. Address the reader as "you".
- Write in the present tense. The app does things now, not "will do" them.
- Use the imperative for actions the reader performs: "Open the theme editor", "Select a product".
- Keep sentences short. One idea per sentence, one idea per paragraph.
- State facts. Describe what the app does and what happens next, nothing more.
- Say what a setting changes for the shopper, not only what it is called.

## Spelling

The site is written in British English: "customise", "personalised", "colour", "behaviour".

One exception, and it is absolute: an interface label is quoted exactly as the product spells it.
Shopify and myDiagnostic both ship American spelling in their interfaces, so **Behavior**,
**Customize theme** and **Color** stay as they are inside a label, even in a British sentence.

## Vocabulary

Use the official Shopify term, always the same one, never a synonym of our own:

- online store
- theme editor
- app block
- app embed
- section
- product
- collection
- variant
- product metafield
- discount code

Do not write "shop front", "theme customiser", "widget block", "item", or "product page module".
When the app itself uses a different word from Shopify, the app's word wins inside the description of
the app's own screen, and the Shopify word is used everywhere else.

## Interface elements

Every element the reader clicks, reads, or fills in is written in bold, at its exact English label as
the app displays it, with the app's own capitalisation:

- Select **Add a language**.
- Paste it into the **Quiz ID** field.
- The badge reads **Block added**.

Never translate a label, never paraphrase it, never fix its capitalisation. If a label is wrong or
unclear in the app, report it rather than correcting it in the documentation.

When a label in the app contains an emoji, quote it without its emoji. The no-emoji rule wins over
quoting a label exactly. For example, the tip icon selector is written **General**, **Morning**,
**Evening**.

Use the exact plan names when a limit is involved: Free, Basic, Pro, Premium, Unlimited.

## Forbidden

- The em dash and the en dash. Use a colon for an explanation, a comma for a weaker link,
  parentheses for an aside, or a full stop for two separate statements.
- Emojis, anywhere, including headings.
- Exclamation marks.
- Promotional wording: "powerful", "seamless", "beautiful", "in seconds", "the best way to".
- Minimising words: "simply", "just", "easy", "obviously", "of course", "all you need to do".
- First person plural in instructions. "We recommend" is acceptable once per page at most, when the
  reader genuinely has to choose and one option is safer.
- Screenshots of a real merchant's data, a real customer, or a real email address.

## Each page stands alone

A reader arrives from search, on one page, with no memory of any other. So:

- Never write "as seen above", "as explained earlier", or "in the previous section" across pages.
- Restate the one fact the reader needs rather than sending them away for it.
- Send them away only for a genuinely separate task, and always with an explicit link that names
  its destination: "Set your colours first, see [Design and tokens](/docs/customising/design-tokens)".
- Never write "click here" or "see this page" as the link text.

## Screenshots

Capture rules, all of them mandatory:

- Browser window 1440px wide, browser zoom at 100%.
- Shopify admin in light theme.
- Demonstration store only. Never a real merchant's store, and never real data.
- The store name may stay visible. Customer names, email addresses, order numbers and any personal
  data must not appear, including in a browser tab title or a notification.
- Crop to the area under discussion plus enough surrounding interface to locate it.
- No annotations drawn on the image. If something needs pointing at, say it in the text.

File rules:

- PNG format.
- File name in kebab-case.
- Stored in `static/img/<section>/<page>-<n>.png`, where `<section>` is the folder of the page,
  `<page>` is the page file name, and `<n>` is the position of the image on the page, starting at 1.
  Example: `static/img/getting-started/theme-block-1.png`.
- Every image carries alternative text describing what the image shows, written as a sentence and
  useful to someone who cannot see it. Never "screenshot" or "image of the settings".

Insert screenshots with the `Screenshot` component, which is available on every page without an
import:

```mdx
<Screenshot
  src="/img/getting-started/theme-block-1.png"
  alt="The theme editor with the myDiagnostic Quiz block selected in the left sidebar."
  caption="The block appears in the section you added it to."
/>
```

`caption` is optional. Use it to state what the reader should notice, never to repeat the alt text.

## Plan badges

A feature that requires a paid plan carries a plan badge next to its heading. The badge names the
lowest plan that unlocks the feature, and it is available on every page without an import:

```mdx
## Custom CSS <PlanBadge plan="pro" />
```

Accepted values: `free`, `basic`, `pro`, `premium`, `unlimited`. The source of truth for which plan
unlocks what is the plan grid in the app. Check it before adding a badge, and update the badge in the
same commit as any change to that grid.

## Page template

Every page follows this structure. No page deviates from it.

```mdx
---
sidebar_position: 2
title: Add the theme block
description: Place the myDiagnostic app block in your theme so the quiz renders on your online store.
---

# Add the theme block

Two sentences at most, answering one question: what is this page for. Say what the reader will have
accomplished by the end of it.

## Before you start

- A published quiz.
- Access to the theme editor of your online store.

## First task

1. Open the theme editor.
2. Select **Add block**.
3. Save the theme.

## Second task

1. Do the next concrete thing.

## Next steps

- [Create your first quiz](/docs/getting-started/first-quiz)
- [Design and tokens](/docs/customising/design-tokens)
```

Rules that go with the template:

- The front matter always carries `sidebar_position`, `title` and `description`. The description is
  one sentence, it ends with a full stop, and it is written for someone reading a search result.
- The H1 repeats the `title` exactly, and is the only H1 on the page.
- The introduction is one paragraph, two sentences at most.
- Include the prerequisites block only when there are prerequisites. A page with none omits the
  heading entirely.
- The body is organised in level 2 headings. Level 3 is allowed for a variant inside a task.
- Every procedure is an ordered list of concrete actions, one action per item, each starting with a
  verb. A list item that describes rather than acts belongs in a paragraph.
- The page ends with a **Next steps** section holding one to three internal links.
- No empty section, no heading followed by another heading with nothing in between.

## Before you commit

Run the build and the type check. The build fails on a broken internal link, which is the most
common mistake when moving a page:

```bash
npm run build
npx tsc --noEmit
```

`DOC-PLAN.md` at the repository root holds the per page contract: objective, questions to answer, and
planned screenshots. Read the entry for your page before writing it, and update the entry in the same
commit if the page ends up covering something else.
