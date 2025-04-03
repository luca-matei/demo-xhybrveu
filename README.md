# wewantwaste

This is the redesign of the Business Skip Hire page.

Identified issues:
- there was too much white space
- not enough content to justify the use of so many bulky components
- there were duplicate labels for skip size (title + pill)
- blue text was hard to read and it didn't blend well overall
- the steps bar barely fit any screen size
- the footer that appears after you select a skip size was faulty
- images are repetitive, take up too much space and are not relevant
- the buttons in the footer didn't follow the same color transition (one was lighting up, the other was darkening)

My approach:
- promotes healthy use of white space
- uses a more consistent colour palette; matches the brand mission (#wewantwaste -> green)
- discards the images as they're not relevant and hard to procure
- shortens the steps bar to fit all screen sizes
- uses a skeleton loader to improve UX while the page loads; users want to know that something is happening and what to expect
- discards "per week" as the pricing is actually per period (I went to checkout)
- specifies that the price is excluding VAT; also fixes the footer
- is responsive to all screen sizes
- sometimes, only on mobile, the table needs to be scrolled horizontally, this is a common issue with tables, but it's intuitive to use and much better than having to scroll vertically through a long list of cards

You can find a live demo of the page here: https://wewantwaste.lucamatei.dev

Notes:
- this demo uses Next.js due to the fact that it has a built-in server and is easy to deploy on my VPS (see Github workflow)
