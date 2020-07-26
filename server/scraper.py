import requests
import json
naval_links = ["https://nav.al/matt-ridley-2", "https://nav.al/matt-ridley", "https://nav.al/angel-2", "https://nav.al/consensus", "https://nav.al/truth", "https://nav.al/silent", "https://nav.al/peace-motion", "https://nav.al/peace", "https://nav.al/unacceptable", "https://nav.al/addiction", "https://nav.al/least", "https://nav.al/inefficient", "https://nav.al/smart", "https://nav.al/desire", "https://nav.al/skill", "https://nav.al/material", "https://nav.al/philosopher", "https://nav.al/finding-time", "https://nav.al/rich", "https://nav.al/externalities", "https://nav.al/npv", "https://nav.al/surplus", "https://nav.al/price-discrimination", "https://nav.al/relationships", "https://nav.al/short", "https://nav.al/schelling-point", "https://nav.al/principal-agent", "https://nav.al/envy", "https://nav.al/ethics", "https://nav.al/working-ourselves", "https://nav.al/accountability", "https://nav.al/productize-yourself", "https://nav.al/rich-quick", "https://nav.al/finally-wealthy", "https://nav.al/eventually", "https://nav.al/stupid-games", "https://nav.al/competition-authenticity", "https://nav.al/redefining", "https://nav.al/meetings", "https://nav.al/work-hard", "https://nav.al/laborer-tech", "https://nav.al/accountability-leverage", "https://nav.al/skill-business", "https://nav.al/love-read", "https://nav.al/build-sell", "https://nav.al/creative-technical", "https://nav.al/specific-knowledge", "https://nav.al/rational-optimists", "https://nav.al/intelligence-energy-integrity", "https://nav.al/long-term", "https://nav.al/possible-careers", "https://nav.al/product-scale", "https://nav.al/renting-time", "https://nav.al/on-humility", "https://nav.al/on-meditation", "https://nav.al/there-is-no-angel-bubble-there-are-many-angel-bubbles", "https://nav.al/the-unbundling-of-the-venture-capital-industry", "https://nav.al/privacy-violations", "https://nav.al/interview-on-entrepreneurship-up-at-gigaom-tv", "https://nav.al/why-private-investors-are-herd-animals", "https://nav.al/who-has-time-for-meetings", "https://nav.al/self-promotion", "https://nav.al/the-ipad-is-important", "https://nav.al/y-combinator-vs-graduate-school", "https://nav.al/why-you-need-to-be-in-silicon-valley", "https://nav.al/live-appearance", "https://nav.al/how-to-pick-a-co-founder-at-venture-hacks", "https://nav.al/the-returns-to-entrepreneurship", "https://nav.al/extrapolating-computing", "https://nav.al/the-foundations-of-cooperation", "https://nav.al/mencken-on-politics", "https://nav.al/new-blog-and-feed-address", "https://nav.al/users-bring-you-traffic", "https://nav.al/we-get-these-questions-a-lot-from-the-enterprising-young-it8217s-a-very-intelligent-question-you-look-at-some-old-guy-who8217s-rich-and-you-ask-8216how-can-i-become-like-you-except-faster8217-spend-ea", "https://nav.al/if-you-love-wealth-more-than-liberty-the-tranquility-of-servitude-better-than-the-animating-contest-of-freedom-depart-from-us-in-peace-we-ask-not-your-counsel-nor-your-arms-crouch-down-and-lick-the-ha", "https://nav.al/there-is-no-subtler-surer-means-of-overturning-the-existing-basis-of-society-than-to-debauch-the-currency-the-process-engages-all-the-hidden-forces-of-economic-law-on-the-side-of-destruction-and-it-do", "https://nav.al/turns-out-that-yahoo-search-can8217t-find-the-pirate-bay-between-moves-like-this-and-forcing-page-inclusion-instead-of-crawling-i-as-a-user-have-moved-on-from-yahoo-the-other-day-i-needed-to-go-back-t", "https://nav.al/new-year-new-blog", "https://nav.al/perpetual-stimulation-machine", "https://nav.al/when-going-through-hell-keep-going", "https://nav.al/life-formulas-i", "https://nav.al/the-aging-entrepreneur", "https://nav.al/at-stirr-events-vcs-fly-business-class-but-entrepreneurs-fly-coach-i-have-a-similar-rule-whenever-i-go-to-coffee-lunch-dinner-for-business-the-person-who-has-raised-more-money-pays8230", "https://nav.al/venture-hacks-is-hiring-one-man-developer-army", "https://nav.al/two-more-hacks", "https://nav.al/introducing-venture-hacks", "https://nav.al/be-chaotic-neutral", "https://nav.al/why-we-may-think", "https://nav.al/bill-burnham-on-the-future-of-google-base", "https://nav.al/vastcom-launches-credit-card-search", "https://nav.al/web-20-web-20-web-30", "https://nav.al/craigslist-is-worth-more-than-ebay", "https://nav.al/dare-microsoft-kill-google-updated", "https://nav.al/craigslist-takes-on-sand-hill-road", "https://nav.al/fix-the-search-interface-first", "https://nav.al/isnt-it-obvious-what-web-20-is", "https://nav.al/yes-the-bubble-is-back", "https://nav.al/how-microsoft-can-obliterate-google", "https://nav.al/lawyers-or-insurance-salesmen", "https://nav.al/securitize-citizenship", "https://nav.al/unquantifiable-risk", "https://nav.al/do-animals-laugh", "https://nav.al/american-culture"]

naval_data = []
for link in naval_links:
 print(link)
 r = requests.get('https://api.diffbot.com/v3/article?token=45c36d3848a3d9a34119ba848d8f411e&url=' + link + '&paging=false')
 x = json.loads(r.text)
 naval_data.append({
  'title': x['objects'][0]['title'],
  'text': x['objects'][0]['text'],
  'sentiment': x['objects'][0].get('sentiment',None),
  'pageUrl': x['objects'][0]['pageUrl'],
  'date': x['objects'][0]['estimatedDate'],
  'person': 'naval_ravikant'
 })

dumped_data = json.dumps(naval_data)
with open('dumped_naval_blog_posts1.json', 'w') as file:
 file.write(dumped_data)