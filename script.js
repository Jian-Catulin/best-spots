
const guideName = "Jian's Top Spots in Makati and Manila";
const currentYear = 2026;


let runningCount = 0;

// 3. A small calculation (computing total places reviewed)
const spiritualSites = 1;
const natureSpots = 1;
const lifestyleHubs = 1;
const totalPlaces = spiritualSites + natureSpots + lifestyleHubs;


runningCount = runningCount + 1;


console.log('Guide Name:', guideName);
console.log('Current Year:', currentYear);
console.log('Total Places Computed:', totalPlaces);
console.log('Running Count:', runningCount);


const titleElement = document.getElementById('page-heading');
if (titleElement) {
    titleElement.textContent = guideName;
}

const footerElement = document.getElementById('footer-copyright');
if (footerElement) {
    footerElement.textContent = "© " + currentYear + " " + guideName;
}

const statsElement = document.getElementById('computed-stats');
if (statsElement) {
    statsElement.textContent = "Total places currently reviewed: " + totalPlaces;
}