
const guideName = "Jian's Top Spots in Makati and Manila";
const currentYear = 2026;


let runningCount = 0;


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

const placeRating = 4.5;
let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingDisplay = document.getElementById('circuit-rating');
if (ratingDisplay) {
    ratingDisplay.textContent = placeRating + " Stars - " + ratingLabel;
}


const priceLevel = 2; // Let's say 1-2 is budget-friendly, 3+ is expensive
const isOpen = true;


const isGoodOption = (isOpen === true && priceLevel <= 2);
const statusNote = isGoodOption ? "Good option right now" : "Maybe another time";

const budgetDisplay = document.getElementById('circuit-budget');
if (budgetDisplay) {
    budgetDisplay.textContent = statusNote;
}


const isNearby = false;

const distanceNote = (isNearby === true) ? "Walking distance" : "Better to commute";

const distanceDisplay = document.getElementById('circuit-distance');
if (distanceDisplay) {
    distanceDisplay.textContent = distanceNote;
}