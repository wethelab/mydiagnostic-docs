# Documentation plan

Writing contract for the twenty-four pages of the site. One entry per page: the objective, the
questions the page has to answer, and the screenshots it needs.

This file lives at the repository root, outside `docs/`, so it is not published.

The entries were built by reading the app source in `/Users/david/Documents/myDiagnostic-backup`:
the admin routes under `app/routes/`, the editor panels under `app/components/`,
`app/utils/planLimits.ts` for the plan grid, `app/utils/systemStrings.ts` for the wording catalogue,
`app/utils/locales.ts` for the language list, and `prisma/schema.prisma` for what is actually stored.
Every question below maps to a control that exists. Features still in flight in the working tree of
the app repository, and not committed there, are deliberately absent.

Rules for using this file:

- Read the entry before writing the page.
- If the page ends up covering something else, update the entry in the same commit.
- Screenshot counts are a target, not a ceiling. Fewer is better than padding.
- Style rules are in `CONTRIBUTING.md`. This file says what to write, not how.

## Admin structure the pages describe

Left navigation of the app: the quiz list (home), **Settings**, **Plans & Billing**.

Inside a quiz, six tabs: **Questions**, **Scenarios**, **Design**, **Analytics**, **Responses**,
**Settings**.

A quiz is **Draft** or **Active**. Page types in the quiz sidebar: **Welcome**, **Question**,
**Content page**, **Email gate**, **Results**.

---

## 1. Introduction

`docs/introduction.mdx`, sidebar position 1.

**Objective.** Tell a merchant what myDiagnostic does, what a finished quiz looks like to their
customer, and where to start.

**Questions to answer.**

- What does the app produce: a guided quiz that ends on a personalised product recommendation.
- What does the customer actually see, screen by screen: welcome, questions, optional email gate,
  result with a product trio.
- Where does the quiz live: inside a section of the online store, through an app block.
- What does the merchant need before starting: products in the store, and a theme.
- What is not required: no code, no theme edit beyond placing the block.
- Where do I go next, depending on whether I am installing or already installed.

**Screenshots: 2.**

1. A finished quiz question on a storefront, in the demonstration store.
2. The result screen of the same quiz, showing the three recommended products.

---

## 2. Install the app

`docs/getting-started/installation.mdx`, sidebar position 1 in Getting started.

**Objective.** Get the app installed from the Shopify App Store and explain the permissions it asks
for.

**Questions to answer.**

- How do I install the app from the Shopify App Store.
- Which permissions does the app request, and why does it need to read products.
- What do I see immediately after installing: the quiz list, empty.
- Which plan am I on after installing, and what does the Free plan allow: one quiz,
  50 responses per month, the myDiagnostic badge shown on the quiz.
- Where do I find the app again later in the Shopify admin.
- How do I uninstall, and what happens to my data when I do.

**Screenshots: 2.**

1. The app listing install screen with the permission list.
2. The empty quiz list right after installation.

---

## 3. Add the theme block

`docs/getting-started/theme-block.mdx`, sidebar position 2 in Getting started.

**Objective.** Place the quiz on a page of the online store through the theme editor, and confirm the
step in the app.

**Questions to answer.**

- Where do I find the **Quiz ID**, and how do I copy it: quiz **Settings**, card
  **Install on your storefront**, **Copy** button.
- How do I open the theme editor from the app, with the **myDiagnostic Quiz** block ready to place.
- How do I move the block to the section I want.
- Where do I paste the **Quiz ID** in the block settings.
- What happens if I leave the **Quiz ID** empty: the block serves the shop's published quiz when
  exactly one quiz is published, and nothing when several are.
- Why does the app not detect the block by itself: it has no permission to read the theme, so the
  **Block added** badge records my own confirmation and nothing more.
- Why do I still see nothing on the storefront: the quiz is still **Draft**, or the theme was not
  saved.
- Can I place the same quiz on several pages, and can two quizzes coexist on one page.

**Screenshots: 3.**

1. The **Install on your storefront** card, with the **Quiz ID** field and the **Copy** button.
2. The theme editor with the **myDiagnostic Quiz** block selected and its settings panel open.
3. The **Block added** badge in the app after confirming the step.

---

## 4. Create your first quiz

`docs/getting-started/first-quiz.mdx`, sidebar position 3 in Getting started.

**Objective.** Walk a merchant from an empty quiz list to a published quiz that returns a
recommendation.

**Questions to answer.**

- How do I create a quiz, and what do I set at creation: **Quiz name** and **Default language**.
- What is the quiz name used for: the admin only, customers never see it.
- What does a new quiz contain: no pages at creation. The **Email gate** and **Results** rows appear
  the first time the quiz is opened in the editor; the welcome page and every question are added by
  the merchant.
- How do I add a question and write its answers.
- How do I attach products to an answer so the answers count towards a recommendation.
- How do I check the result before publishing, with the preview.
- How do I publish: the **Publish** button, and how the badge moves from **Draft** to **Active**.
- Why can I not publish a second quiz on the Free plan: one published quiz per shop, unpublish one
  to publish another. Drafts do not count against that limit.
- What is the minimum viable quiz: at least one question, and enough products attached to answers to
  fill a trio of three.

**Screenshots: 4.**

1. The new quiz form, with **Quiz name** and **Default language**.
2. The quiz editor on the **Questions** tab, sidebar on the left, one question selected.
3. The product weighting controls on an answer.
4. The quiz list with the quiz badged **Active**.

---

## 5. Questions and answers

`docs/building-quizzes/questions-and-answers.mdx`, sidebar position 1 in Building quizzes.

**Objective.** Build the question sequence: adding questions, writing their answers, attaching the
products each answer votes for, and the order the customer goes through.

**Questions to answer.**

- How do I add, write and delete a question, and what does a new question arrive with.
- What is the difference between a single choice and a multiple choice question, and what does
  **Max selections** do once the customer reaches it.
- How do the answers display: **Grid (pills, 2-3 columns)** against **Stacked (full-width list)**.
- How do I add answers, why do they carry no image of their own, and why can they not be reordered.
- How do I attach products to an answer, what do the **+1**, **+2** and **+3** weights do, and how
  are the three winning products worked out.
- What does **This answer excludes products** do, and why does a quiz whose product-bearing answers
  all exclude refuse to publish.
- How do I filter one question's answers from a previous question's answers, and why does the match
  depend on the two labels being written identically, in every language.
- How do I reorder the pages, and why does moving the welcome screen change nothing for the customer.
- What are the capture fields of the welcome screen, and what does **Duplicate storage mapping** warn
  about.
- What is written on **Save** and what is written immediately, and why does **Discard** leave an
  added page in the quiz.

**Screenshots: 6.**

1. The sidebar with the **Add page** menu open on **Question** and **Welcome**.
2. The question settings panel: **Text**, **Type** on **Multiple choice** with **Max selections**,
   and **Display mode**.
3. The answer settings panel with **Product votes**, two products and their weight buttons.
4. The same panel with **This answer excludes products** on, titled **Excluded products**, weights
   gone.
5. The sidebar with a welcome page, three questions and their answers, **Email gate** and
   **Results** pinned at the bottom.
6. The **Capture fields** section of the welcome screen with its rows, its reorder arrows, the quick
   add buttons and **Add custom field**.

**Not covered here.**

- Question images, desktop and mobile, and their focal point. Out of the scope the page was written
  to, still to be placed.
- **Auto-advance on answer** and its delay. They live in the **Settings** and **Design** tabs, not on
  the **Questions** tab, so they belong to the pages that document those tabs.
- Content pages. Hidden in v1: the storefront widget does not render them, so they are offered
  neither in the add menu nor in the sidebar. Document them when the widget supports them.
- The effect of reordering questions on responses already collected. Not verified, so not written.

---

## 6. Product matching

`docs/building-quizzes/product-matching.mdx`, sidebar position 2 in Building quizzes.

**Objective.** Explain the scoring model so a merchant can predict which products a set of answers
returns.

**Questions to answer.**

- How does an answer contribute to a product: it casts a weighted vote for each product attached to
  it.
- What do the weight values mean relative to each other, and when should I leave the default.
- What does excluding products on an answer do: the products are removed from the running whatever
  their score, and the exclusion always beats the votes.
- In which order does the quiz decide: exclusions first, then the three highest scoring products.
- What happens on a tie, and what happens when fewer than three products survive.
- How do I attach the same product to several answers, and does that double its chances.
- How does the result of the scoring meet the scenarios: the trio is matched against the scenario
  trios, see [Result scenarios](/docs/building-quizzes/scenarios).
- What happens when a matched product is out of stock or deleted from the store.

**Screenshots: 2.**

1. The answer panel with its attached products and their weights.
2. The exclusion control on an answer.

---

## 7. Result scenarios (Basic plan and above)

`docs/building-quizzes/scenarios.mdx`, sidebar position 3 in Building quizzes.

**Objective.** Explain the editorial layer of the result: a scenario is what turns three matched
products into advice.

**Questions to answer.**

- What is a scenario: a title, a description, images, tips, and the trio of three products it
  describes.
- How does a scenario get selected: the quiz scores the answers, keeps the top three products, and
  looks for the scenario whose trio is exactly those three.
- What happens when no scenario matches the trio: the visitor sees the quiz's generic result header
  and their products, with no editorial content.
- How many scenarios do I need to cover my catalogue, and how do I decide which trios are worth
  writing.
- How do I build a trio: choose three products, order them, and give each one a label.
- What is a tip, how many can a scenario carry, and where do tips appear on the result.
- Which images does a scenario take, desktop and mobile, and where do they show.
- Why do I need the Basic plan or above to use scenarios at all.
- How do I check which scenario a real customer landed on: the **Analytics** tab, scenario
  distribution, see [Analytics](/docs/building-quizzes/analytics).

**Screenshots: 4.**

1. The **Scenarios** tab with several scenarios listed in the sidebar.
2. The scenario editor showing title, description and tips.
3. The trio picker with three products selected and labelled.
4. The storefront result screen produced by that scenario.

---

## 8. Welcome screen

`docs/building-quizzes/welcome-screen.mdx`, sidebar position 4 in Building quizzes.

**Objective.** Configure the opening screen: its copy, its background, its layout, and the fields
captured before the first question.

**Questions to answer.**

- What does the welcome screen do, and can I remove it.
- How do I write its title and subtitle, and how do I change the **Start** button label.
- How do I set the background: an image, or a gradient, and how do desktop and mobile images differ.
- How do I place the content block over the background, and how do the placement controls behave on
  mobile.
- What is a capture field, which ones can I add from the quick add list, and how do I add one of my
  own.
- Which capture field values can I reuse later: the customer's name in the result title, through the
  `{name}` placeholder.
- Are capture fields required or optional, and what does the customer see when a required field is
  empty.
- Where do captured values end up: the **Responses** tab, and the CSV export.
- What must I not collect here, given the privacy commitments described in
  [Data and privacy](/docs/account/data-and-privacy).

**Screenshots: 3.**

1. The welcome page settings panel with the background controls.
2. The capture fields list with the quick add options open.
3. The welcome screen on a storefront, desktop and mobile side by side.

---

## 9. Email gate

`docs/building-quizzes/email-gate.mdx`, sidebar position 5 in Building quizzes.

**Objective.** Configure the screen that asks for an email address before the result, and explain
what happens once it is submitted.

**Questions to answer.**

- What is the email gate, where does it sit in the sequence, and how do I turn it off.
- How do I write its title, subtitle and button label, and what happens when I leave them empty: the
  app wording catalogue supplies the text, see [App wording](/docs/customising/app-wording).
- What does the customer see when the address is invalid.
- What is the marketing consent sentence, and why does it matter that the customer reads it.
- Does submitting the address send the result by email: only if email sending is configured, see
  [Result email](/docs/customising/result-email).
- Can the customer reach the result without giving an address.
- Where do collected addresses go: the **Responses** tab, the CSV export, and the connected email
  platform when Klaviyo or Mailchimp is set up, see
  [Klaviyo and Mailchimp](/docs/distribution/integrations).
- What is the **Contact tag** used for on the addresses pushed to an email platform.
- How do I measure the gate: **Emails collected** and its share of responses, on the **Analytics**
  tab.

**Screenshots: 3.**

1. The email gate settings in the quiz editor.
2. The gate as the customer sees it, with the consent sentence.
3. The **Analytics** tab showing **Total responses** and **Emails collected**.

---

## 10. Result screen

`docs/building-quizzes/result-screen.mdx`, sidebar position 6 in Building quizzes.

**Objective.** Describe what the visitor sees at the end of the quiz and every control behind it:
the product cards, the add to cart modes, the discount, the sold out handling, the editorial
placement, and the personalised copy.

**Scope, fixed by audit** (see Verified 24 August 2026, item 9): product cards capped at 280px on
desktop, one or two per row on mobile depending on the setting; second image on hover, opt-in and
only when the product has two images; price opt-in; description pulled from a product metafield;
call to action in three modes, bundle, individual, or both; what happens after an add configurable
per mode; the discount code carried by the bundle only; sold out products shown with a badge and a
disabled button, and skipped by the bundle with a note; editorial content above or below the cards;
the scenario image; personalisation through `{name}`, `{age}` and `{custom.*}`. The widget
refreshes the theme's cart and its drawer but never opens the drawer itself.

**Screenshots: 3.** One only where the text cannot say it.

1. A full result screen on a storefront: labelled trio, prices, bundle button, editorial below.
2. The second image hover swap, resting and hovered states side by side.
3. A sold out card with its badge, next to the bundle note saying the bundle skips it.

**PlanBadge: none.** Every control on this screen is a quiz setting, available on every plan. The
only plan-driven element is the "Powered by" badge, shown on Free only, covered in
[Plans and quotas](/docs/account/plans-and-quotas).

---

## 11. Analytics

`docs/building-quizzes/analytics.mdx`, sidebar position 7 in Building quizzes.

**Objective.** Read the **Analytics** tab: total responses, emails collected and their rate, and
the scenario distribution, over a chosen period.

**Scope, fixed by audit** (see Verified 24 August 2026, item 10): the tab shows total responses,
emails collected, the email rate, and the distribution of responses per scenario including the
generic result row, filtered over the last 7 days, the last 30 days, or all time. The CSV export
lives on the **Responses** tab, not here; say so and link it.

**Screenshots: 1.**

1. The **Analytics** tab with the two KPI cards and the scenario distribution bars, including a
   **Generic result** row.

**PlanBadge: none.** The tab exists on every plan.

---

## 12. Design and tokens

`docs/customising/design-tokens.mdx`, sidebar position 1 in Customising.

**Objective.** Match the quiz to the storefront: colours, typography, spacing, corners, animations,
and per page overrides.

**Questions to answer.**

- Where do I style the quiz: the **Design** tab, and what does the live preview show me.
- Which colours can I set, and where does each one land on the customer's screen.
- Which controls accept a gradient rather than a solid colour, and how do I set its direction.
- Which fonts can I choose, and what does inheriting from the theme do.
- How do I set the corner style: **Square**, **Rounded** or **Pill**, and what it applies to.
- How do I control the height of the question screens: **Uniform (tallest question)** against
  **Fixed minimum**, and why uniform stops the page from jumping between questions.
- Which transition plays between screens: **Slide vertical**, **Slide horizontal**, **Fade** or
  **None**, and when to disable animations.
- What is the difference between a global setting and a per page override, and which one wins.
- How do I change a setting for mobile only, and why the mobile value is inherited from desktop when
  I leave it empty.
- What does **Custom CSS** allow, who it is for, and what breaks if it is wrong.
- How do I undo: what **Discard** does, and what is saved only when I press **Save**.

**Screenshots: 5.**

1. The **Design** tab with the token panel on the left and the live preview on the right.
2. The colour section, with a gradient control open.
3. The typography section.
4. The corner style options.
5. The **Quiz height** card, with its mobile controls visible.

---

## 13. App wording

`docs/customising/app-wording.mdx`, sidebar position 2 in Customising.

**Objective.** Rewrite the text the app itself supplies, as opposed to the content the merchant
writes on each page.

**Questions to answer.**

- What is app wording: the strings the app provides, such as button labels and error messages, as
  opposed to question text which is content.
- Where do I edit it: the app **Settings** page, **App wording** card.
- Which groups exist, and what is in each: **Welcome screen**, **Questions**, **Email capture**,
  **Result screen and cart**, **Errors shown to the visitor**, **Result email**.
- What does the placeholder in each field show me: the app default currently in use.
- What happens when I clear a field: the app default comes back.
- Which one wins when a quiz page carries its own text and the catalogue also has one: the text set
  on the page.
- Does an override apply to every quiz in my shop, or to one quiz.
- How does this interact with a second language: an override is edited per language, see
  [Secondary languages](/docs/distribution/secondary-languages).
- Which strings can I not change here, and where they live instead.

**Screenshots: 3.**

1. The **App wording** card, with its language select and its override counter.
2. One group, showing its labels and their default placeholders.
3. A storefront capture showing a changed button label in place.

---

## 14. Result email

`docs/customising/result-email.mdx`, sidebar position 3 in Customising.

**Objective.** Send the recommendation by email, and control what that email says and looks like.

**Questions to answer.**

- What triggers the result email, and which address it goes to.
- How do I turn sending on for a quiz: **Send results by email** in the quiz **Settings**.
- What does the customer receive: the recommendation, and a permanent link back to the result.
- How do I send through my own server rather than the app's: see
  [Send with your own mail server](/docs/customising/email-sending).
- Which parts need the Pro plan or above: the branding and wording of the email (logo, colours,
  subject, intro, button label, footer). Sending itself is not gated by plan.
- How do I change the subject, the intro, the button label and the footer.
- How do I set the logo and the colours of the email, and which formatting controls exist.
- Why does the email look plainer than the quiz: email clients support far less than a browser, so
  the template is deliberately restricted.
- Which fields are available on every plan whatever the branding gate: the privacy policy link, the
  terms link, and the notification address, because a merchant must be able to point at their own
  legal pages.
- What are notifications, and who receives them.
- How do I test the email before a customer receives one.
- What happens when sending fails.

**Screenshots: 3.**

1. **Send results by email** in the quiz **Settings**.
2. The **Result email** card in the app **Settings**.
3. The received email, rendered in a mail client of the demonstration store.

---

## 15. Send with your own mail server (Pro plan and above)

`docs/customising/email-sending.mdx`, sidebar position 4 in Customising.

**Objective.** Configure the **Email sending** card in the app **Settings**: the sender identity on
every plan, and the merchant's own mail server on Pro and above, with its connection test.

**Facts, fixed by audit** (see Verified 24 August 2026, item 4): by default the result email goes
out through the app's own sending infrastructure, carrying the merchant's sender name and using the
merchant's address as Reply-To; both are configurable on every plan. On Pro and above the merchant
can route sending through their own mail server instead; that path is used only once the connection
test has passed and the configuration is enabled, and anything else falls back to the default path.
After a downgrade the configuration is kept but the app path takes over. Never name the app's
underlying email provider in the public documentation.

**Screenshots: 1.**

1. The **Email sending** card in its default state, badge on **Sending via: app default**, with the
   **Use your own SMTP server** section expanded on empty fields and no connection test.

**PlanBadge: Pro** on the own-server section. The sender name and Reply-To are available on every
plan and carry no badge.

---

## 16. Permalink

`docs/distribution/permalink.mdx`, sidebar position 1 in Distribution.

**Objective.** Explain the permanent result link: the address that lets a customer come back to their
recommendation at any time.

**Questions to answer.**

- What is the permalink: a permanent address for one customer's result, of the form
  `https://your-store.com/apps/mydiagnostic/result/<token>`.
- Who receives it: the customer, in the result email, and the merchant, from the **Responses** tab.
- What does the page show: the same recommendation, the same styling and the same language as the
  quiz produced.
- Can it be shared, and what does someone else see when they open it.
- Does it expire, and what happens to it when the response is deleted.
- Why does the permalink keep working when the shop is over its monthly response limit: the response
  was already recorded, so revisiting it costs no quota.
- Can I add products to the cart from the permalink.
- What is the permalink not: it is not a link to the quiz itself. The quiz is reached through the
  page of the online store carrying the app block, see
  [Add the theme block](/docs/getting-started/theme-block).

**Screenshots: 2.**

1. The **Responses** tab with the link to a single response result.
2. The result permalink page opened in a browser.

**Note for the writer.** The current stub description says the page is about sharing a link to the
quiz. That is not what the app implements. Correct the title area and the description when the page
is written.

---

## 17. Secondary languages (Premium plan and above)

`docs/distribution/secondary-languages.mdx`, sidebar position 2 in Distribution.

**Objective.** Serve the quiz in more than one language, and translate its content.

**Questions to answer.**

- What is the default language of a quiz, when is it set, and can it be changed afterwards.
- How do I add a second language: quiz **Settings**, **Languages** card, **Add a language**.
- Which languages are available, and why some languages are not offered yet: right to left languages
  are not served until the layout supports them.
- How many additional languages does my plan serve: none below Premium, one on Premium, unlimited on
  Unlimited.
- What has to be translated: questions, answers, scenarios, tips, page copy, and the app wording
  overrides.
- What happens to a string I have not translated: the default language version is served.
- How does the app decide which language a customer gets: the language of the online store, resolved
  against the languages the quiz serves, falling back to the quiz default.
- Are regional variants handled, such as a store in `fr-CA` on a quiz serving `fr`.
- Does the result email follow the same language as the quiz.
- What happens to my translations if I downgrade below Premium: the translations are kept, the
  languages above the new plan's allowance stop being served to visitors, and a notice in the admin
  names the quizzes and languages concerned.

**Screenshots: 3.**

1. The **Languages** card with a second language added.
2. The translation tabs on a question, default language and second language.
3. The same question on a storefront in each language.

---

## 18. Klaviyo and Mailchimp (Pro plan and above)

`docs/distribution/integrations.mdx`, sidebar position 3 in Distribution.

**Objective.** Push consenting quiz respondents to a Klaviyo or Mailchimp list, per quiz, with a
contact tag; connect, test, and understand exactly when a respondent is synced.

**Facts, fixed by audit** (see Verified 24 August 2026, item 3): both integrations exist, on Pro
and above. They are configured per quiz, in the quiz **Settings**, with a connection test per
service. A respondent is synced only when they gave the explicit marketing opt-in on the email
gate; the transactional result email is not conditioned on that consent. Below the plan, the saved
configuration is kept but the synchronisation is skipped, and it resumes on upgrade.

**Screenshots: 1.**

1. The integrations card in the quiz **Settings** before connection, both services visible with
   their fields empty, including the **Contact tag** field.

**PlanBadge: Pro.**

---

## 19. Plans and quotas

`docs/account/plans-and-quotas.mdx`, sidebar position 1 in Account.

**Objective.** Explain what the plan controls month to month, and what happens at the limits.

**Questions to answer.**

- Where do I see my plan and my usage: **Plans & Billing**.
- What counts as a response, and when does the counter reset.
- What is my monthly response limit: 50 on Free, 750 on Basic, 3,000 on Pro, 10,000 on Premium,
  unlimited on Unlimited.
- What happens when I reach it: visitors see a temporarily unavailable message instead of the quiz,
  until the next month or until I upgrade.
- What warns me before that: a banner at 80% of the limit, then a critical banner at the limit.
- How many quizzes can I keep published at once: 1 on Free, 3 on Basic, 10 on Pro, 25 on Premium,
  unlimited on Unlimited. Only **Active** quizzes count; drafts do not, and are unlimited.
- What happens at the quiz cap: publishing another quiz is refused, and creating a new quiz is
  refused too, but duplicating an existing quiz stays possible because the copy is created as a
  draft.
- What is the myDiagnostic badge on the quiz, and which plan removes it: any paid plan.
- How do I upgrade or downgrade, and when does the change take effect.
- What happens to quizzes above the limit of the plan I downgrade to: the most recently created
  ones are unpublished back to draft, and a banner in the app names them.
- Where is the full feature grid: [Plan comparison](/docs/reference/plan-comparison).

**Screenshots: 3.**

1. The **Plans & Billing** page with the current plan marked.
2. The usage figure for the current month.
3. The banner shown when the limit is reached.

---

## 20. Data and privacy

`docs/account/data-and-privacy.mdx`, sidebar position 2 in Account.

**Objective.** State what the app stores about customers, where it goes, and how to remove it.

**Questions to answer.**

- What is stored for each response: the answers, the capture field values, the email address when the
  gate collected one, the recommended products, and the result token.
- What is not stored.
- Where can I see and export it: the **Responses** tab, the CSV export, and the single response
  export.
- How do I delete one response, and what happens to its permalink afterwards.
- How does the app answer a customer data request coming from Shopify.
- How does the app answer a customer deletion request coming from Shopify.
- What happens to all shop data when the app is uninstalled.
- How long is a response kept, and what happens at the end of that period: after 24 months the app
  anonymises it automatically, every day, without anything to switch on. What that clears (name,
  email address, age, language, capture field values, detailed answers) and what it keeps (the
  response itself, its quiz, its scenario, its recommended products), so the figures on
  **Analytics** stay intact.
- How long the app keeps its own record of a data request or a deletion request: 12 months.
- Which third parties receive data, and only when I connect them: Klaviyo, Mailchimp, and the mail
  server I configure.
- Which privacy policy and terms links appear to my customers, and where I set them.
- What I am responsible for: the consent sentence on the email gate, and the capture fields I choose
  to add.

**Screenshots: 2.** Unchanged. Automatic retention has no admin screen: it runs on a schedule and
exposes no control, so it is written, not shown.

1. The **Responses** tab with the export action.
2. The compliance fields where the privacy policy and terms links are set.

---

## 21. Glossary

`docs/reference/glossary.mdx`, sidebar position 1 in Reference.

**Objective.** Define every term the documentation uses, once, so no page has to define it again.

**Terms to define.** Answer, app block, app embed, capture field, content page, default language,
design token, email gate, exclusion, generic result, permalink, plan, product trio, quiz, quiz ID,
question, response, result screen, scenario, scenario tip, secondary language, theme editor, weight,
app wording.

**Questions to answer.**

- What does this word mean in myDiagnostic, in one or two sentences.
- Which page covers it in full.
- When two words are close, which is which: scenario against result screen, weight against exclusion,
  app wording against page content, quiz ID against slug.

**Screenshots: 0.** A glossary is read, not looked at.

---

## 22. Plan comparison

`docs/reference/plan-comparison.mdx`, sidebar position 2 in Reference.

**Objective.** Give the complete plan grid in one place, so no other page has to repeat it.

**Questions to answer.**

- What does each plan cost per month: Free at 0, Basic at 29, Pro at 79, Premium at 159, Unlimited at
  249, in US dollars.
- How many quizzes: 1, 3, 10, 25, unlimited.
- How many responses per month: 50, 750, 3,000, 10,000, unlimited.
- How many additional languages: 0, 0, 0, 1, unlimited.
- Which plan removes the myDiagnostic badge: every paid plan.
- Which plan unlocks scenarios: Basic and above.
- Which plans unlock custom CSS, the Klaviyo and Mailchimp integrations, sending through my own mail
  server, and the branding and copy of the result email: Pro and above.
- Which plan unlocks a second storefront language: Premium and above.
- Which email fields are never gated: the privacy policy link, the terms link and the notification
  address.

**Content rule.** This page is a comparison table. It is the one place a table is the right shape.
Prices, limits and feature gates must match the plan grid in the app exactly. Verify before
publishing, and update in the same commit as any change to that grid.

**Screenshots: 0.** The table is the content.

---

## 23. Troubleshooting

`docs/troubleshooting.mdx`, sidebar position 8.

**Objective.** Take the merchant from a symptom to the cause and the fix, without a support ticket.

**Symptoms to cover, each as its own level 2 section.**

- The quiz does not appear on my storefront: the quiz is **Draft**, the block is not placed, the
  **Quiz ID** is missing or wrong, the theme was not saved, or several quizzes are published while
  the block has no ID.
- Visitors see a message saying the quiz is unavailable: the monthly response limit is reached.
- The quiz shows the wrong products: the weights, the exclusions, or products missing from answers.
- The result always shows the same scenario: no trio matches, so every visitor sees the quiz's
  generic result header and their products, with no editorial content.
- The colours or fonts do not follow my settings: a per page override is set, a mobile value is
  empty, or custom CSS is fighting the setting.
- The quiz looks right on desktop and wrong on mobile: the mobile overrides.
- No email arrives: sending is off for the quiz, the mail server settings are wrong, the plan does not
  cover the feature, or the message went to the spam folder.
- The email arrives with a broken layout.
- A product shows as sold out or is missing from the result.
- My second language is not served to visitors.
- I cannot publish another quiz, or create a new one: the plan limit counts published quizzes.
  Unpublish one, duplicate instead (a duplicate is a draft), or upgrade.
- I cannot save: the unsaved changes bar, and what **Discard** does.

**Question format.** Each section states the symptom, then a short ordered list of checks, most
likely cause first, each check ending in a concrete action.

**Screenshots: 2.**

1. The unavailable message as a visitor sees it.
2. The unsaved changes bar with **Save** and **Discard**.

---

## 24. Frequently asked questions

`docs/faq.mdx`, sidebar position 9.

**Objective.** Answer in a paragraph the questions merchants ask before committing, each pointing at
the page that covers it in full.

**Questions to answer.**

- Do I need a developer to install this.
- Will it slow down my online store.
- Can I put the quiz on more than one page, and can I run several quizzes at once.
- Does the app modify my theme files.
- Can I try it before paying, and what does the Free plan really allow.
- What happens to my quizzes if I downgrade or uninstall.
- Does the quiz work on mobile.
- Can I use my own fonts and colours.
- Does the app collect my customers' email addresses, and do I own that list.
- Can I send the collected addresses to my email platform.
- Can the recommendation apply a discount.
- How many products do I need for a quiz to be worth building.
- In which languages can the quiz run.
- Does the app support right to left languages: not yet.
- Where do I get help.

**Content rule.** One question per level 2 heading, phrased as the merchant would type it into
search. One paragraph of answer, then a link to the page that covers it. No question answered here
that is not answered in full somewhere else on the site.

**Screenshots: 0.**

---

## Totals

Twenty-four pages, 57 planned screenshots, spread across
`static/img/{getting-started,building-quizzes,customising,distribution,account}/`.
The Reference section and the FAQ carry none by design.

---

## Verified 24 August 2026

Facts established by a read-only audit of the app source
(`/Users/david/Documents/myDiagnostic-backup`) on 24 August 2026. Future page work starts from
these; do not re-derive them from memory, from older entries of this file, or from the resumption
document. Where an entry above and this list disagree, this list wins.

1. A new quiz contains no pages at creation. The email gate and result pages are bootstrapped the
   FIRST TIME the quiz is opened in the admin, not at creation. No welcome page and no first
   question exist until the merchant adds them.
2. The quiz cap counts ACTIVE (published) quizzes. Drafts do not count and are unlimited to keep.
   Nuance: at the cap, publishing is refused AND creating a new quiz is refused, but duplicating
   into a draft remains allowed.
3. Klaviyo and Mailchimp exist, Pro plan and above, configured per quiz in the quiz Settings, with
   a connection test. Synchronisation happens only with the visitor's explicit marketing opt-in.
   Below the plan, the configuration is kept but synchronisation is skipped.
4. Merchant mail server: exists, Pro plan and above, configured in the global Settings with a
   connection test. Used only when tested and enabled; otherwise the app's own infrastructure
   sends, with the merchant's sender name and their address as Reply-To. Never name the underlying
   email provider in the public documentation.
5. Result email template: personalisation is Pro and above; the compliance fields (legal links,
   notification address) are available on every plan, including Free.
6. Multi-language: Premium serves 1 secondary locale, Unlimited serves unlimited. After a
   downgrade, the excess locales stop being served and a notice naming them appears in the admin.
7. The "Powered by" branding badge appears on Free only.
8. Automatic response retention IS active in production and IS documentable, confirmed on
   24 August 2026: a scheduled Fly machine (`black-wave-5768`, image `curlimages/curl`) calls
   `/api/cron/gdpr_purge` once a day, last observed run 23 August 2026. The job anonymises every
   response older than the retention window, 24 months by default, and deletes the GDPR audit log
   rows older than 12 months. Anonymising is not deleting: the name, the email address, the age,
   the language and the capture field values are cleared, and so is the detailed answer history;
   the row itself stays, with the quiz, the scenario and the recommended products, so response
   counts and the scenario distribution keep their history. Both windows are operator settings,
   not merchant ones: state the durations, never present them as something the merchant can change
   in the app, and do not name the environment variables in the public pages. STILL DO NOT
   document: the paused status, any cart or order attribution, any conversion KPI.
9. Result screen, as implemented: product cards (280px max on desktop, 1 or 2 per row on mobile by
   setting), second image on hover (opt-in, only when the product has two images), price
   (opt-in), description from a product metafield, CTA in three modes (bundle / individual /
   both), after-add behaviour configurable per mode, discount carried by the bundle only, sold out
   products (badge, disabled button, skipped by the bundle with a note), editorial content above
   or below the cards, scenario image, personalisation via `{name}`, `{age}`, `{custom.*}`. The
   widget refreshes the theme's cart but never opens the drawer itself.
10. Analytics tab, as implemented: total responses, emails collected, email rate, scenario
    distribution including the generic result, filter over 7 days / 30 days / all time. The CSV
    export lives on the Responses page, not on Analytics.
