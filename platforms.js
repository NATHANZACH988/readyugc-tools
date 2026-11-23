/* Every platform this course names: the one place their facts, sign-up links and referral links live.
 *
 * Read by both buyer-facing views:
 *   starter.html    the brief directory (section 2, "Where to apply")
 *   platforms.html  the starting-point quiz and step-by-step guides
 * and by test/platforms.test.js in Node.
 *
 * Shared facts, written once per platform and shown in both views:
 *   who   who can join          pay   what the work pays
 *   paid  how and when paid     cost  fees and costs to the creator
 * Platforms with a step-by-step guide also have `guide` (and `eligibility` for the quiz).
 * Every fact names its source and the day it was read. Where a platform's own pages
 * disagree, both versions are kept and labelled; nothing is averaged away.
 *
 * REFERRAL LINKS
 * Every platform starts on its official sign-up link. A referral link is used only when
 * all of these are filled in: the url, approved: true, allowedInPaidCourse: true, the
 * date the programme terms were checked, and where those terms are. The recommendation
 * never reads this field, so a referral can never change which platform is suggested.
 */
(function (root) {
  'use strict';

  var CHECKED = 'November 11, 2026';
  var COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'OTHER', name: 'Somewhere else' }
  ];

  var GROUPS = {
    open: 'Open to beginners: no following or past work required',
    portfolio: 'Needs samples, a portfolio or a review first'
  };

  /* Shared scam warnings, shown on every guide. Taken from the Starter guide's red flags. */
  var SCAMS = [
    'Signing up is free on every platform here. If anyone asks you to pay to apply or to "unlock" jobs, leave.',
    'Keep messages and payment inside the platform. Do not move a brand to email, chat apps or another payment method.',
    'Real briefs are inside the platform\'s app or website. Do not open attachments or sign in through a link a "brand" sends you.',
    'Nobody from a platform needs your bank login or passwords.'
  ];

  var PLATFORMS = [
    {
      id: 'billo', name: 'Billo', tags: ['No followers needed', 'Start here'], group: 'open',
      signupUrl: 'https://billo.app/for-creators/', referral: null,
      what: 'Brands post product video jobs. You apply in the app, receive the product and upload the video.',
      who: '18 or older, living in the US, Canada or the UK. No experience or social media presence required. Billo\'s help centre says Australian creator accounts were suspended from October 12, 2026 because it is leaving that market.',
      pay: 'Rate shown on each job; Billo\'s help pages do not publish a range. A Billo marketing blog says $50 to $500+ per video but also still describes the old PayPal schedule, so do not rely on it. A Premium tier with higher-paying jobs opens after 14 completed videos with strong ratings.',
      paid: 'Through Stripe, which Billo asks you to set up after you are accepted for your first task. An approved video\'s pay reaches your Stripe balance within 3 days, and Stripe sends the balance to your bank every Monday. Billo\'s payment page says it covers the transfer fees. Setup needs a phone, bank details and ID. Older Billo pages still mention PayPal twice a month; the help centre says Stripe. No membership fee.',
      cost: 'Free. No membership.',
      apply: 'A 30-second video pitch, up to three extra example videos, and Stripe set up with a phone, bank details and ID.',
      jobs: 'Product review, unboxing and demonstration videos for ads.',
      src: 'help.billo.app (sign-up, video pitch, payment and "My Activity Was Limited" articles) and billo.app/for-creators',
      sources: ['https://help.billo.app/en/articles/5796480-for-creators-mastering-your-video-pitch', 'https://billo.app/for-creators/'],
      discrepancies: [],
      checked: CHECKED,
      eligibility: { countries: ['US', 'CA', 'UK'], minAge: 18, faceRequired: true, needsSamples: false, verified: true },
      guide: {
        quick: 'Free to join · Paid through Stripe · Pay is shown on each offer',
        oneLine: 'Fixed-price product videos. No experience or followers needed, but your pitch video is reviewed.',
        signupNote: 'Billo sign-up happens in the Billo Creator app. This page links to it.',
        prepare: [
          'Your 30-second video pitch, passing every line of the Rule card in your Starter guide (section 5)',
          'Face on camera and your own voice. Billo does not accept AI voices or avatars',
          'An Apple, Facebook or Google login to sign up with. Use the same one every time'
        ],
        steps: [
          'Download the Billo Creator app from the sign-up page and sign up with Apple, Facebook or Google.',
          'Record and upload your video pitch. Billo says it reviews pitches within 7 business days and may ask for a passport or ID card.',
          'Optional: add up to three example videos, 15 to 60 seconds, vertical, with no music, captions or watermarks.',
          'Once the pitch is approved, browse offers and apply to the ones that fit you.',
          'When you are accepted for your first task, set up Stripe under Payment Info. You do not need to do this before then.'
        ],
        portfolio: 'No portfolio needed. The 30-second video pitch is your audition.',
        findWork: 'Browse offers in the app after your pitch is approved. Billo\'s help pages say it takes around 30 applications on average to get a first task.',
        rejections: [
          'A pitch that misses any requirement: three scenes, ends with exactly "Hire me for your next video on Billo", English, your own voice, 9:16, exactly 30 seconds, no music, captions, logos or watermarks.',
          'After two rejections in a row there is a two-month wait before you can try again.'
        ],
        afterSubmit: 'Wait for Billo\'s pitch review (up to 7 business days). Meanwhile, film one practice product video for your portfolio.',
        afterApproved: 'Find one offer you qualify for, apply, and log it in your tracker.',
        afterDeclined: 'Read Billo\'s reason, fix that one thing, and check the Rule card before you submit again. Two rejections in a row means a two-month wait, so do not rush.'
      }
    },
    {
      id: 'joinbrands', name: 'JoinBrands', tags: ['No followers needed', 'Start here'], group: 'open',
      signupUrl: 'https://joinbrands.com/creator/', referral: null,
      what: 'High-volume marketplace for product videos, photos, Amazon review videos and TikTok Shop content.',
      who: '18 or older, living in the USA, UK, Germany, Australia or Canada. No follower minimum listed.',
      pay: 'The brand sets the job price. For a basic US video job the default is $60 and the lowest allowed is $50. JoinBrands keeps 20% of regular job earnings on a free creator account (15% on its paid Creator Pro plan, which a beginner does not need), so a $60 job pays $48. No fee on tips or product reimbursement.',
      paid: 'To a wallet once content is approved, with the fee already taken out. PayPal is the only payout option. On a free account you can withdraw once a week, and it can take up to 7 business days.',
      cost: 'Free to join. 20% of regular job earnings on a free account. An optional paid creator plan lowers this to 15%.',
      apply: 'Registration, a connected social media account, a free Video certification before you can apply to video jobs, a profile with sample content, and PayPal.',
      jobs: 'How-to, unboxing, product review, product demo, green screen and b-roll videos, Amazon review videos, TikTok Shop videos.',
      src: 'help.joinbrands.com (Creator Fees; Campaign pricing; Creators do\'s and don\'ts) and joinbrands.com/creator',
      sources: ['https://joinbrands.com/creator/', 'https://help.joinbrands.com/en/articles/6273015-creators-do-s-and-don-ts'],
      discrepancies: [],
      checked: CHECKED,
      eligibility: { countries: ['US', 'UK', 'DE', 'AU', 'CA'], minAge: 18, faceRequired: true, needsSamples: false, verified: true },
      guide: {
        quick: 'Free to join · Paid through PayPal · 20% fee on a free account',
        oneLine: 'High-volume job board at set prices. Get a free certification, then apply.',
        prepare: [
          'A PayPal account whose country, state and city match what you will put on your JoinBrands profile',
          'A social media account to connect',
          'A few sample photos or videos for your profile'
        ],
        steps: [
          'Register as a creator on the sign-up page and pick the marketplace for your country.',
          'Add your details, connect a social media account and complete your profile.',
          'Get the free Video certification. It covers how-to, unboxing, product review, product demo and custom videos.',
          'Link PayPal on the Payout method page.',
          'Browse jobs and apply to the ones you are certified for.'
        ],
        portfolio: 'A completed profile with sample content, plus a certification for each type of content before you can apply to it.',
        findWork: 'Browse the job board after certification. The price shown is before the 20% fee.',
        rejections: [
          'You cannot apply to a job type you are not certified for.',
          'JoinBrands lists "show yourself" as a do, and does not allow AI-generated creator content.'
        ],
        afterSubmit: 'Finish the free Video certification. You cannot apply to video jobs until it is done.',
        afterApproved: 'Find one job you are certified for, apply, and log it in your tracker.',
        afterDeclined: 'Read JoinBrands\' message, fix what it names, and retake the certification if it asks you to.'
      }
    },
    {
      id: 'clip', name: 'Clip', tags: ['Portfolio reviewed', 'About 7% approved', 'Keep the product'], group: 'portfolio',
      signupUrl: 'https://useclip.com/creators', referral: null,
      what: 'Brands post product-video campaigns with the pay shown. You apply, a brand picks you, and you keep the product.',
      who: '18 or older (Clip\'s terms). Clip works with brands in the US, UK and Australia and pays in their currencies; its pages do not state a separate country rule for creators, so this course only suggests it to people living there.',
      pay: 'Check each campaign. Clip\'s creator page says $20 to $100 per video; its creator FAQ says $25 to $250.',
      paid: 'By PayPal after the brand approves the video, and you keep the product. Clip\'s FAQ says 7 to 14 business days after approval; its terms say within 30 days.',
      cost: 'Clip\'s FAQ says joining is free and creators pay no fees.',
      apply: 'A portfolio and an intro video, reviewed before approval. Clip\'s FAQ says it approves about 7% of applicants.',
      jobs: 'Product videos for brand campaigns.',
      src: 'useclip.com/creators, useclip.com/faq/creators and useclip.com/terms (updated September 15, 2026)',
      sources: ['https://useclip.com/creators', 'https://useclip.com/faq/creators', 'https://useclip.com/terms'],
      discrepancies: [
        'Pay: Clip\'s creator page says $20 to $100 per video; its creator FAQ says $25 to $250. Trust the amount on each campaign.',
        'Payout timing: the FAQ says 7 to 14 business days after approval; the terms say within 30 days.'
      ],
      checked: CHECKED,
      eligibility: { countries: ['US', 'UK', 'AU'], minAge: 18, faceRequired: false, needsSamples: true, verified: true },
      guide: {
        quick: 'Free to join · Paid through PayPal · Check the fee on each campaign',
        oneLine: 'Paid product videos, and you keep the product. Selective: about 7 in 100 applicants are approved.',
        prepare: [
          'A portfolio of sample videos. Clip\'s FAQ says it approves about 7% of applicants, so show your best work',
          'An intro video',
          'A PayPal account in your own name'
        ],
        steps: [
          'Create a free account on the sign-up page.',
          'Pitch your talent: add your portfolio and intro video.',
          'Once approved, browse brand campaigns and apply to the ones that fit you. Check the pay on each campaign.',
          'If a brand picks you, the product comes to you. Film it the way the brief asks.',
          'Get paid to PayPal after the brand approves the video. You keep the product.'
        ],
        portfolio: 'Portfolio and intro video, reviewed before approval.',
        findWork: 'Browse campaigns after approval. Each campaign shows its pay.',
        rejections: [
          'Clip does not publish rejection reasons. Its FAQ says about 7% of applicants are approved, so a thin portfolio is the most likely problem.'
        ],
        afterSubmit: 'Approval is selective. While you wait, apply on one other platform you qualify for so you are not waiting on one answer.',
        afterApproved: 'Find one campaign you qualify for, apply, and log it in your tracker.',
        afterDeclined: 'Add stronger samples, such as the three portfolio projects, before you try Clip again. Meanwhile, use a platform that does not need a portfolio.'
      }
    },
    {
      id: 'influee', name: 'Influee', tags: ['No followers needed', 'Samples reviewed'], group: 'portfolio',
      signupUrl: 'https://influee.co/for-creators', referral: null,
      appLinks: [
        { label: 'App Store', url: 'https://apps.apple.com/app/influee/id1359672098' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=co.influee.InflueeApp' }
      ],
      what: 'App where brands post paid campaigns. You add a few samples and your rates, get approved, then apply.',
      who: 'You must be of legal age to use the app (Influee\'s terms). Influee lists creators in 30+ countries, including the US, UK, Canada, Australia and Germany. No follower count required.',
      pay: 'You set your rates on your profile.',
      paid: 'Through Influee once the brand approves your content. Its creator page says within 5 to 10 days with no invoicing; its terms say by SEPA bank transfer on the last day of each month.',
      cost: 'Free to apply. Influee\'s brand pricing page puts its marketplace fee on the brand; its terms say your fee is paid "less any applicable Marketplace Fees". Check in the app what reaches you.',
      apply: 'The free app, a profile with a few samples and your rates, approved by Influee. A smartphone is enough.',
      jobs: 'UGC videos for brand campaigns.',
      src: 'influee.co/for-creators, influee.co/terms (updated September 2025), influee.co/pricing/ugc-creation and influee.co/ugc-creator/countries',
      sources: ['https://influee.co/for-creators', 'https://influee.co/terms', 'https://influee.co/pricing/ugc-creation', 'https://influee.co/ugc-creator/countries'],
      discrepancies: [
        'Payout timing: the creator page says payment arrives within 5 to 10 days with no invoicing; the terms say payouts go by SEPA transfer on the last day of each month.',
        'Fees: the brand pricing page puts the marketplace fee on the brand; the terms say the creator\'s fee is paid less any applicable marketplace fees.'
      ],
      checked: CHECKED,
      eligibility: { countries: ['US', 'UK', 'CA', 'AU', 'DE'], minAge: 18, faceRequired: false, needsSamples: true, verified: true },
      guide: {
        quick: 'Free to apply · Paid through Influee · You set your rates',
        oneLine: 'No followers needed. Add a few samples, get approved, then apply to paid campaigns.',
        signupNote: 'Influee sign-up happens in its app. This is the creator page with the app links, not the brand form.',
        prepare: [
          'A few sample videos that show your style',
          'Your smartphone. Influee says that is enough',
          'The rates you will charge'
        ],
        steps: [
          'Download the Influee app (links below) and create your creator profile.',
          'Add a few content samples and set your rates.',
          'Wait for your profile to be approved.',
          'Browse brand campaigns and apply to the ones that fit your niche.',
          'Create the content following the brand\'s guidelines. You are paid once it is approved.'
        ],
        portfolio: 'A few content samples on your profile. Influee reviews and approves portfolios.',
        findWork: 'Browse campaigns in the app after approval.',
        rejections: [
          'Influee reviews portfolios before approving them, and its terms allow removal for consistently poor-quality content.'
        ],
        afterSubmit: 'Wait for profile approval. Meanwhile, film one more sample in a different style.',
        afterApproved: 'Find one campaign you qualify for, apply, and log it in your tracker.',
        afterDeclined: 'Add stronger or more varied samples before you try again. Meanwhile, use a platform that does not need a portfolio.'
      }
    },
    {
      id: 'vidovo', name: 'Vidovo', tags: ['Set your own price', '10 to 15% fee'], group: 'portfolio',
      signupUrl: 'https://www.vidovo.com/ugc-creator', referral: null,
      what: 'You list video packages at a price you choose, and brands order them.',
      who: '18 or older (or the age of majority where you live). You must be able to receive payments from the US through Stripe Connect in your country. Stripe Connect covers the US, UK, Canada, Australia and Germany.',
      pay: 'You set your own price per video or package.',
      paid: 'Through Stripe Connect, only from money Vidovo has collected from the brand. Vidovo does not publish how long payouts take.',
      cost: 'Free to join. Vidovo\'s terms: a 10 to 15% fee on all orders.',
      apply: 'A free profile with samples and at least one priced package. Vidovo\'s creator page describes no approval step.',
      jobs: 'Product demos and other UGC videos, ordered as packages.',
      src: 'vidovo.com/ugc-creator, vidovo.com/terms-of-service (November 10, 2026) and stripe.com/global',
      sources: ['https://www.vidovo.com/ugc-creator', 'https://www.vidovo.com/terms-of-service'],
      discrepancies: [
        'Payout timing is not stated on Vidovo\'s creator page or in its terms.'
      ],
      checked: CHECKED,
      eligibility: { countries: ['US', 'UK', 'CA', 'AU', 'DE'], minAge: 18, faceRequired: false, needsSamples: false, verified: true },
      guide: {
        quick: 'Free to join · Paid through Stripe Connect · 10 to 15% fee on each order',
        oneLine: 'Set your own price. List a package and brands order it. Vidovo takes 10 to 15%.',
        prepare: [
          'Your price for one video. Vidovo keeps up to 15%, so to keep $50, charge at least $59 (50 divided by 0.85)',
          'One package to list, such as one product demo video',
          'Your bank details for Stripe Connect'
        ],
        steps: [
          'Create a free profile on the sign-up page.',
          'Personalise your profile with samples and what you film.',
          'Add your packages with a fixed price each.',
          'When a brand orders, deliver the video through Vidovo.',
          'Get paid through Stripe once the brand has paid.'
        ],
        portfolio: 'Your profile and packages are what brands see. Vidovo\'s creator page does not describe an approval step.',
        findWork: 'Brands find and order your packages. Vidovo says no large following is needed.',
        rejections: [
          'Vidovo does not publish rejection reasons. Under-18s are removed without notice or pay.'
        ],
        afterSubmit: 'List one package with a clear price, and add your best sample to your profile.',
        afterApproved: 'Share your profile link in your applications elsewhere and log any order in your tracker.',
        afterDeclined: 'Check that Stripe Connect works in your country, then contact Vidovo through its site.'
      }
    },
    {
      id: 'twirl', name: 'Twirl', tags: ['No follower minimum listed', 'Portfolio reviewed'], group: 'portfolio',
      signupUrl: 'https://usetwirl.com/for-creators', referral: null,
      what: 'Curated platform. You apply with an intro video and portfolio and must be accepted before you can take jobs.',
      who: 'Mainly creators in the UK, US, Germany, France, Italy, Spain and the UAE. You need a smartphone and good-quality samples.',
      pay: 'Twirl\'s creator page gives two ranges: $90 to $300+ per project in one section and $130 to $300+ in its FAQ. Whitelisting is paid extra. Confirm the rate on each project.',
      paid: 'Through the platform. Confirm the schedule when you are accepted. Twirl says reviewing an application can take a few days to a few weeks.',
      cost: 'Free to join.',
      apply: 'An intro video and a UGC portfolio, reviewed before you are accepted.',
      jobs: 'UGC video ads and product videos.',
      src: 'usetwirl.com/for-creators (read November 11, 2026)',
      sources: ['https://usetwirl.com/for-creators'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'collabstr', name: 'Collabstr', tags: ['Set your own price'], group: 'portfolio',
      signupUrl: 'https://collabstr.com/creator', referral: null,
      what: 'You build a profile with priced packages. Brands order from you, or you apply to their posted campaigns.',
      who: 'Free to join. Works for UGC-only creators as well as creators with an audience.',
      pay: 'You set the price. Collabstr keeps 15% of each completed order.',
      paid: 'Released when the brand approves the work. Several payout methods, including PayPal.',
      cost: 'Free to join. 15% of each completed order.',
      apply: 'A profile with priced packages and examples of your work. Brands choose from profiles, so you need samples.',
      jobs: 'UGC videos, plus sponsored posts for creators with an audience.',
      src: 'collabstr.com/creator and collabstr.com/faq',
      sources: ['https://collabstr.com/creator'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'soona', name: 'soona UGC', tags: ['US only', 'Needs 3 to 6 samples', 'Slow payout'], group: 'portfolio',
      signupUrl: 'https://soona.co/collective', referral: null,
      what: 'A talent network run by soona, which is replacing its Trend app (Trend is supported only through the end of 2026). Brands post campaigns and creators apply.',
      who: 'Creators anywhere in the United States. No follower minimum is listed.',
      pay: 'Set per campaign. The creator guide does not say how rates are decided. Brands can ask for up to 2 revisions.',
      paid: 'By PayPal, in one payment at the end of the month after the work is done. Work finished in April is paid at the end of May.',
      cost: 'None listed.',
      apply: 'An application to the talent network with a profile photo, 3 to 6 video samples and a PayPal email.',
      jobs: 'UGC videos and photos for brand campaigns.',
      src: 'support.soona.co (creator guide, June 22, 2026; Trend FAQ, June 16, 2026)',
      sources: ['https://soona.co/collective'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'insense', name: 'Insense', tags: ['Bigger portfolio needed', 'Try after your first jobs'], group: 'portfolio',
      signupUrl: 'https://insense.pro/for-creators', referral: null,
      what: 'App where brands post campaigns and creators apply. Aimed at direct-to-consumer and app brands.',
      who: 'The standard application needs about 1,000 followers and 1,000 views plus a portfolio (Insense\'s own pages give slightly different numbers). If you are turned down because of your account numbers, not your content, Insense offers a UGC-only application: 6 to 12 videos across at least 2 product categories and 2 formats, including talking to camera and voiceover, with no filters or watermarks. If that is rejected you can reapply after 14 days. Open in 20+ countries.',
      pay: 'You negotiate with each brand. Insense suggests about 20 applications to be chosen for one.',
      paid: 'To your in-app wallet after the brand approves. The app is free.',
      cost: 'Free app.',
      apply: 'UGC-only route: 6 to 12 videos across 2 product categories and 2 formats, reviewed by a person.',
      jobs: 'UGC ad videos. Some campaigns send a product only, with no cash fee.',
      src: 'help-creators.insense.pro and insense.pro/for-creators',
      sources: ['https://insense.pro/for-creators'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'cohley', name: 'Cohley', tags: ['Portfolio reviewed', 'Pay depends on follower tier'], group: 'portfolio',
      signupUrl: 'https://www.cohley.com/creators', referral: null,
      what: 'Brands request photos, videos and reviews from a reviewed pool of creators.',
      who: '18 or older. A person reviews your portfolio and profiles before you are accepted (reported by an outside source). Because pay is tied to follower tier, this suits creators who also have an audience.',
      pay: 'Set by your follower tier and any rate you negotiate for the brief. Cohley says you receive 100% of the agreed amount, with no fee taken.',
      paid: 'By PayPal only. Your PayPal account must be verified, or the payment is returned.',
      cost: 'No fee. Cohley says creators receive 100% of the agreed amount.',
      apply: 'A portfolio and social profiles, reviewed by a person (outside source), and a verified PayPal account.',
      jobs: 'Photos, videos and written reviews.',
      src: 'cohley.freshdesk.com (payment help, modified August 13, 2026)',
      sources: ['https://www.cohley.com/creators'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'whop', name: 'Whop Content Rewards', tags: ['Pay per view', 'Newer'], group: 'performance',
      signupUrl: 'https://whop.com/', referral: null,
      what: 'Campaigns pay you for the views your posted clips earn. Often called "clipping". You post on your own accounts and submit the link.',
      who: 'No account-wide follower minimum. Each campaign sets its own country and platform rules. You must disclose the brand relationship in the clip.',
      pay: 'Each campaign sets a rate per 1,000 approved views, up to a cap per clip, until its budget runs out. Content Rewards\' own example is $1.75 per 1,000 views: 8,000 views would earn $14, or $12.60 after a 10% creator fee. A listed rate is not a promise of pay.',
      paid: 'To your Whop balance after views are verified, then you withdraw.',
      cost: 'Free to join. Content Rewards\' article describes a 10% creator fee (7% on some older campaigns), plus any fee your payment provider charges.',
      apply: 'Verified social accounts to post from.',
      jobs: 'Short clips posted on your own accounts.',
      src: 'contentrewards.com (Content Rewards\' own article, read November 10, 2026)',
      sources: ['https://whop.com/'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'tiktokshop', name: 'TikTok Shop affiliate', tags: ['Needs 1,000+ followers', 'Commission'], group: 'performance',
      signupUrl: 'https://seller-us.tiktok.com/university/essay?knowledge_id=6939143037667118&lang=en', referral: null,
      what: 'You tag products in your own TikTok videos and earn a commission on sales.',
      who: 'US only, 18 or older, at least 1,000 followers. TikTok may ask for identity documents after your first commission. Under 5,000 followers you are placed in a pilot for at least 30 days: up to 3 shoppable videos a day and 3 shoppable LIVEs a week, only higher-rated shops\' products, and no campaigns. The limits lift at 5,000 followers after 30 days.',
      pay: 'A commission set by each seller. Nothing is paid unless your video sells.',
      paid: 'Through TikTok Shop.',
      cost: 'No fee reported.',
      apply: 'A US TikTok account with at least 1,000 followers. Identity documents may be requested after your first commission.',
      jobs: 'Product videos and livestreams on your own account.',
      src: 'TikTok Shop US Creator Eligibility Policy (updated September 25, 2026; read November 11, 2026)',
      sources: ['https://seller-us.tiktok.com/university/essay?knowledge_id=6939143037667118&lang=en'], discrepancies: [], checked: CHECKED
    },
    {
      id: 'amazon', name: 'Amazon Influencer Program', tags: ['Commission'], group: 'performance',
      signupUrl: 'https://affiliate-program.amazon.com/influencers', referral: null,
      what: 'You upload product review videos that can appear on Amazon product pages and earn a commission on sales.',
      who: 'You apply with a YouTube, Instagram, Facebook or TikTok account. Amazon publishes no follower minimum. Sample videos are reviewed before you can earn on-site commissions.',
      pay: 'A small percentage of each sale that varies by category. Nothing is paid unless the video sells.',
      paid: 'Through Amazon Associates.',
      cost: 'No fee reported.',
      apply: 'A social account to apply with, then sample videos for review.',
      jobs: 'Product review videos shown on Amazon product pages.',
      src: 'outside sources only',
      sources: ['https://affiliate-program.amazon.com/influencers'], discrepancies: [], checked: CHECKED
    }
  ];

  /* The order the Starter directory lists them: paid assignments open to beginners, then those that review you, then views-or-sales. */
  var DIRECTORY_ORDER = ['billo', 'joinbrands', 'clip', 'influee', 'vidovo', 'twirl', 'collabstr', 'soona', 'insense', 'cohley', 'whop', 'tiktokshop', 'amazon'];
  var GUIDES = PLATFORMS.filter(function (p) { return !!p.guide; });

  var PREP = {
    adult: { title: 'Come back at 18', text: 'Every platform in this course requires you to be an adult. Use the time to practise: film the three portfolio videos with products you own, and keep them for when you can apply.', href: 'https://app.gumroad.com/library', cta: 'Practise filming' },
    camera: { title: 'Practise on camera first', text: 'Billo and JoinBrands require your face on camera, and most platforms ask for an intro video. Film the intro video for yourself only, watch it back, and try again tomorrow. Nobody sees it.', href: 'https://app.gumroad.com/library', cta: 'Open the intro video lesson' },
    samples: { title: 'Make two sample videos first', text: 'The platforms open to you review your portfolio before approving you. Film two short product videos with things you own, then come back.', href: 'https://app.gumroad.com/library', cta: 'Learn to film and edit' },
    country: { title: 'Check the full platform list', text: 'None of these five guides lists your country for sure. The full platform directory has more platforms and who each one accepts.', href: 'directory.html', cta: 'Open the full directory' }
  };

  function byId(id) { for (var i = 0; i < PLATFORMS.length; i++) if (PLATFORMS[i].id === id) return PLATFORMS[i]; return null; }

  /* ---------- The shared facts, as each view shows them ---------- */
  /* Starter directory card: the facts a beginner needs first, then the rest folded away. */
  function directoryRows(p) {
    var perf = p.group === 'performance';
    return {
      main: [['How you earn', perf ? 'Only on views or sales. No payment for making the video.' : 'A set amount per approved job.'], ['Who can join', p.who], ['Pay', p.pay], ['How you are paid', p.paid]],
      more: [['What you need to apply', p.apply], [perf ? 'Typical content' : 'Typical jobs', p.jobs], ['Cost to you', p.cost],
        ['Where its own pages disagree', p.discrepancies.join(' ')], ['Checked against', p.src], ['Last checked', p.checked]]
    };
  }
  /* Platform guide: who can join, and the payment block. */
  function guideRows(p) {
    return { who: p.who, source: p.src, payment: [['How you are paid', p.paid], ['Fees', p.cost], ['Pay', p.pay]] };
  }

  /* ---------- Starting-point quiz ---------- */
  /* Can this person apply, on facts we have verified? Never reads referral data. */
  function eligible(p, a) {
    var e = p.eligibility;
    if (!e || !e.verified || !a.adult || !a.country) return false;
    if (e.countries.indexOf(a.country) < 0) return false;
    if (e.faceRequired && a.camera === 'no') return false;
    return true;
  }

  /* answers: { country, adult: bool, samples: 'none'|'some', camera: 'yes'|'no', pay: 'fixed'|'own' }
     Returns { pick: platform id or null, prep: PREP key or null, why, others: [ids] }. */
  function recommend(a) {
    var ok = GUIDES.filter(function (p) { return eligible(p, a); }).map(function (p) { return p.id; });
    var has = function (id) { return ok.indexOf(id) >= 0; };
    /* "Also open to you" leaves out platforms that review a portfolio when the learner has no samples yet. */
    var ready = function (id) { return !(byId(id).eligibility.needsSamples && a.samples === 'none'); };
    var out = function (pick, why, prep) { return { pick: pick || null, prep: prep || null, why: why, others: ok.filter(function (id) { return id !== pick && ready(id); }) }; };
    if (!a.adult) return out(null, PREP.adult.text, 'adult');
    if (!ok.length) return out(null, PREP.country.text, 'country');

    if (a.pay === 'own' && has('vidovo')) return out('vidovo', 'You want to name your own price. On Vidovo you list packages at a price you choose, and it takes 10 to 15% of each order.');
    if (a.samples === 'none') {
      if (has('billo')) return out('billo', 'No samples needed: Billo judges a 30-second pitch video instead of a portfolio, and the jobs pay a fixed amount.');
      if (has('joinbrands')) return out('joinbrands', 'No samples needed to start: a free certification opens fixed-price jobs, and you build a portfolio as you go.');
      if (a.camera === 'no') return out(null, PREP.camera.text, 'camera');
      return out(null, PREP.samples.text, 'samples');
    }
    if (has('influee')) return out('influee', 'You have samples and no audience, which is what Influee asks for: no follower count, a few samples, then paid campaigns.');
    if (has('joinbrands')) return out('joinbrands', 'Your samples fill out a JoinBrands profile, and a free certification opens fixed-price jobs.');
    if (has('clip')) return out('clip', 'Your samples are your application. Clip is selective, so lead with your best video.');
    if (has('billo')) return out('billo', 'Billo judges a 30-second pitch video, and jobs pay a fixed amount.');
    if (a.camera === 'no') return out(null, PREP.camera.text, 'camera');
    return out(null, PREP.country.text, 'country');
  }

  /* ---------- Application status: one current value per platform ---------- */
  /* Saved as "pf:<id>:status:<state>@<time>". Progress from two devices is merged, so a stale key can sit
     beside a newer one; the latest time wins. "none" records a deliberate reset to Not started. */
  var STATUS_RE = /^pf:([a-z0-9-]+):status:([a-z]+)(?:@(\d+))?$/;
  function statusKeys(keys, id) { return keys.filter(function (k) { var m = STATUS_RE.exec(k); return m && m[1] === id; }); }
  function latestKey(keys, id) {
    var best = null, bt = -1;
    statusKeys(keys, id).forEach(function (k) { var t = Number(STATUS_RE.exec(k)[3] || 0); if (t >= bt) { bt = t; best = k; } });
    return best;
  }
  function currentStatus(keys, id) {
    var k = latestKey(keys, id), s = k ? STATUS_RE.exec(k)[2] : '';
    return s === 'none' ? '' : s;
  }
  /* The changes that set a new status: drop every older status key, add the new one. */
  function statusChanges(keys, id, state, now) {
    var ch = {};
    statusKeys(keys, id).forEach(function (k) { ch[k] = false; });
    ch['pf:' + id + ':status:' + (state || 'none') + '@' + now] = true;
    return ch;
  }
  /* Older status keys left by a merge, to delete. Empty when there is nothing stale. */
  function staleStatusKeys(keys, id) { var keep = latestKey(keys, id); return statusKeys(keys, id).filter(function (k) { return k !== keep; }); }

  /* The link a button should open: official, unless a referral is fully approved. */
  function signupLink(p) {
    var r = p.referral;
    var https = function (u) { return typeof u === 'string' && /^https:\/\//.test(u) ? u : ''; };
    if (r && r.approved === true && r.allowedInPaidCourse === true && r.termsCheckedOn && r.termsUrl && https(r.url)) {
      return { url: r.url, referral: true, disclosure: 'Paid referral: we may earn a commission or bonus if you sign up through this link. It costs you nothing, and it did not affect which platform we suggested.' };
    }
    return { url: https(p.signupUrl), referral: false, disclosure: '' };
  }

  var api = { PLATFORMS: PLATFORMS, GUIDES: GUIDES, DIRECTORY_ORDER: DIRECTORY_ORDER, GROUPS: GROUPS, COUNTRIES: COUNTRIES, PREP: PREP, SCAMS: SCAMS, CHECKED: CHECKED,
    recommend: recommend, eligible: eligible, signupLink: signupLink, byId: byId, directoryRows: directoryRows, guideRows: guideRows,
    currentStatus: currentStatus, statusChanges: statusChanges, staleStatusKeys: staleStatusKeys };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.UGC_PLATFORMS = api;
})(this);
