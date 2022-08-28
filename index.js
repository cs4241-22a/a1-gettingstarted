let homeMenuAnchors = null;
let hoveredElement = null;
let sword = null;
let appContainer = null;
let backArrow = null;
let contentPageTitle = null;
let contentPageSubtitle = null;
let contentPageParagraph = null;
let cutSound = null;
let PTV = null;
let KORN = null;
let Metallica = null;
let TheHumanAbstract = null;
let SystemOfADown = null;
let ProtestTheHero = null;
let Megadeth = null;
let TOOL = null;
let selectedBand = null;
let menuTones = ["a", "b", "c", "d"];
const allBands = ["pierce-the-veil", "korn", "metallica", "the-human-abstract", "system-of-a-down", "protest-the-hero", "megadeth", "tool"];
let keyChangeNeeded = false;

// Define page data
const pages = [
    {
        title: "Who's Joe?",
        subtitle: "Some basic information about me:",
        paragraphs:  [
            "Hi! My name is Joe, and I'm a junior at WPI studying computer science with a concentration in cybersecurity.",
            "Outside of school I spend my time rock climbing, making music (mostly guitar and piano), playing video games, cooking, and writing code.",
            "I'm also interested in a bunch of other random stuff. I'm always on a quest to have the coolest apartment possible— I've been filling the place with plants, my roommate and I have two large fishtanks in the living room, and we have a whole spread of coffee equipment in the kitchen!",
        ],
    },
    {
        title: "Joe at WPI",
        subtitle: "A summary of my studies at WPI:",
        paragraphs:  [
            "I'm currently a junior studying CS with a concentration in cybersecurity. On top of that, I'd like to earn my masters in computer security.",
            "I've taken several CS classes at WPI: 1102, 2103, 2223, 2303, 2011, 3733 (Soft. Eng), and 4043 (Social Imps.).",
            "I've completed my practicum with a depth in music.",
        ],
    },
    {
        title: "Experience",
        subtitle: "My past programming and work experience:",
        paragraphs: [
            "I have a lot of unit testing experience. I spent a summer as a test automation engineer for an online furniture vendor, and I've done a lot of software development on my own and in teams (inside and outside of WPI coursework).",
            "I spent this past summer teaching myself web development while working as a software engineer intern at Sentaca, a company that had just been acquired by IBM.",
            "Languages I have a lot of experience with include: HTML, CSS, and JavaScript from my web development work, Java from my WPI classes, and C# from my test automation work.",
            "Languages I'm somewhat familiar with include: Python, Racket, C, C++, and SQL. I find that I dislike using Python, so I haven't used it on my own for any projects. I used to teach programming to kids grades 2-8, though, which required me to learn some.",
            "I have no experience programming in Ruby.",
        ],
    },
    {
        title: "Contact",
        subtitle: "Here's how you can get in touch with me:",
        paragraphs: [
            "Email: joedobbelaar@gmail.com",
            "Phone: (781) 879-9058",
        ],
    }
];

/** Chromium disallows autoplay so we start music when the page is interacted with */
let musicPlaying = false;
function startMusic() {
    if (!musicPlaying) {
        const randomBandIndex = Math.floor(Math.random() * 8);
        selectedBand = document.getElementById(allBands[randomBandIndex]);
        playSelectedBand();
        musicPlaying = true;
        document.getElementById("music-hint").innerHTML = "click to change music";
        const musicButton = document.getElementById("music-button");
        musicButton.classList.add("playing");
        musicButton.addEventListener("mousedown", () => {        
            document.getElementById("app").classList.add("panned-far");
            clearContentPage();
        })
    }
    setUpMusicPage();
}

/**
 * Play audio from the currently selected band and update other bands to stop playing
 */
function playSelectedBand() {
    for (const band of allBands) {
        const bandAudio = document.getElementById(band);
        if (bandAudio) {
            bandAudio.pause();
            bandAudio.currentTime = 0;
            const bandButton = document.getElementById(band + "-button");
            console.log(band)
            bandButton.classList.remove("playing");
        }
    }
    selectedBand.play();
    const selectedBandButton = document.getElementById(selectedBand.id + "-button");
    selectedBandButton.classList.add("playing");
    loadSelectedBand();
}

async function startKeyChange(newTones, delay) {
    if (keyChangeNeeded) {
        setTimeout(() => {
            menuTones = newTones;
            console.log("Key change!!!");
        }, delay);
    }
}

function loadSelectedBand() {
    keyChangeNeeded = false;
    switch (selectedBand.id) {
        case "pierce-the-veil":
            menuTones = ["gb", "g", "a", "b"];
            break;
        case "korn":
            menuTones = ["d", "f", "g", "a"];
            break;
        case "metallica":
            menuTones = ["db", "e", "gb", "a"];
            keyChangeNeeded = true;
            startKeyChange(["e", "g", "a", "b"], 50000);
            break;
        case "the-human-abstract":
            menuTones = ["c", "eb", "f", "g"];
            keyChangeNeeded = true;
            startKeyChange(["c", "c", "c", "c"], 67000);
            startKeyChange(["db", "f", "g", "ab"], 86000);
            startKeyChange(["c", "eb", "f", "g"], 113000);
            break;
        case "system-of-a-down":
            menuTones = ["db", "e", "gb", "ab"];
            break;
        case "protest-the-hero":
            menuTones = ["db", "e", "gb", "ab"];
            break;
        case "megadeth":
            menuTones = ["e", "g", "a", "b"];
            break;
        case "tool":
            menuTones = ["d", "f", "g", "a"];
            break;
        default:
            menuTones = [0, 0, 0, 0];
            break;
    }
}

/**
 * Hides everything on the content page for panning to music
 */
function clearContentPage() {
    contentPageTitle.innerHTML = "";
    contentPageSubtitle.innerHTML = "";
    contentPageParagraph.innerHTML = "";
    backArrow.classList.add("hidden");
}

/** Init stuff on music page. This wasn't used as much as I thought it would be */
function setUpMusicPage() {
    
    // Make anchors play tones
    document.getElementById("introduction-menu-item").addEventListener("mouseenter", () => {
        playTone(0);
    })
    document.getElementById("wpi-menu-item").addEventListener("mouseenter", () => {
        playTone(1);
    })
    document.getElementById("experience-menu-item").addEventListener("mouseenter", () => {
        playTone(2);
    })
    document.getElementById("contact-menu-item").addEventListener("mouseenter", () => {
        playTone(3);
    })

    document.getElementById("music-back-arrow").addEventListener("mousedown", () => {
        document.getElementById("app").classList.remove("panned-far");
    })
    for (const band of allBands) {
        const bandButton = document.getElementById(band + "-button");
        if (bandButton) {
            bandButton.addEventListener("mousedown", () => {
                selectedBand = document.getElementById(band);
                playSelectedBand();
            })
        }
    }
}

/**
 * Set elements on load and add event listeners to home menu
 * Also disable sideways scroll so that the user can't just skip the menu
 */
window.onload = () => {

    sword = document.getElementById("menu-sword");
    appContainer = document.getElementById("app");
    contentPageTitle = document.getElementById("content-page-title");
    contentPageSubtitle = document.getElementById("content-page-subtitle");
    contentPageParagraph = document.getElementById("content-page-paragraph");
    cutSound = document.getElementById("cut-sound");
    homeMenuAnchors = [
        document.getElementById("anchor-introduction"),
        document.getElementById("anchor-wpi"),
        document.getElementById("anchor-experience"),
        document.getElementById("anchor-contact")
    ];
    hoveredElement = homeMenuAnchors[0];
    // Add event listeners to all anchor elements for cutting animation
    for (const anchorElement of homeMenuAnchors) {
        anchorElement.addEventListener("mouseenter", () => {
            setHoveredElement(anchorElement);
        })
        anchorElement.addEventListener("mousedown", () => {
            cutElementHoveredElement();
        })
    }
    // Add back arrow function
    backArrow = document.getElementById("back-arrow");
    backArrow.addEventListener("mousedown", () => {
        panAppContainer();
    })
    PTV = document.getElementById("pierce-the-veil");
    PTV.volume = .5;
    KORN = document.getElementById("korn");
    KORN.volume = .25;
    Metallica = document.getElementById("metallica");
    TheHumanAbstract = document.getElementById("the-human-abstract");
    SystemOfADown = document.getElementById("system-of-a-down");
    SystemOfADown.volume = .5;
    ProtestTheHero = document.getElementById("protest-the-hero");
    Megadeth = document.getElementById("megadeth");
    TOOL = document.getElementById("tool");
    const musicButton = document.getElementById("music-button");
    musicButton.addEventListener("mousedown", () => {
        startMusic();
    })
}

function playTone(toneIndex) {
    const currentTone = menuTones[toneIndex];
    const toneAudio = new Audio("./assets/notes/" + currentTone + ".mp3");
    if (toneAudio) {
        toneAudio.playbackRate = 1.5;
        toneAudio.volume = .2;
        toneAudio.play();
    }
}

/**
 * Add "panned" class to app container
 */
function panAppContainer() {
    backArrow.classList.remove("hidden");
    appContainer.classList.toggle("panned");
}

/**
 * Cut the most recently mouse-hovered element
 * Remove "cut" class from all other elements
 * Add "cut" class to sword
 * After cutting, add "hidden" class to sword
 */
function cutElementHoveredElement() {
    loadContentPage();
    cutSound.play();
    for (const anchorElement of homeMenuAnchors) {
        anchorElement.classList.remove("cut");
    }
    hoveredElement.classList.add("cut");
    sword.classList.add("cut");
    sword.classList.add("hidden");
    // Pan the app 
    panAppContainer();
    // Then clear the classes just in case we come back
    setTimeout(() => {
        sword.classList.remove("hidden");
        sword.classList.remove("cut");
        for (const anchorElement of homeMenuAnchors) {
            anchorElement.classList.remove("cut");
        }
    }, 1000);
}

/**
 * Set the most recently mouse-hovered element for cutting
 * @param {Element} el HTML element under pointer
 */
function setHoveredElement(el) {
    hoveredElement = el;
    moveSword();
}

/**
 * Return which class should be added to the sword so that it's pointed at the right element
 * @returns {String} string representing the position of the hovered element
 */
function getHoveredElementPosition() {
    switch (hoveredElement.id) {
        case "anchor-introduction":
            return "pos0";
        case "anchor-wpi":
            return "pos1";
        case "anchor-experience":
            return "pos2";
        case "anchor-contact":
            return "pos3";
        default:
            return "pos0";
    }
}

/**
 * Probably the worst way to move the sword, but I guess it works...
 */
function moveSword() {
    const allPositions = ["pos0", "pos1", "pos2", "pos3"]
    if (sword) {
        for (const possiblePosition of allPositions) {
            sword.classList.remove(possiblePosition);
        }
        sword.classList.add(getHoveredElementPosition());
    }
}

/**
 * Load the correct information on content page based on currently hovered element
 */
function loadContentPage() {

    function getParagraphContent(i) {
        var retVal = "";
        for (const paragraph of pages[i].paragraphs) {
            retVal = retVal + "<div class='p-divider'>&emsp;&emsp;" + paragraph + "</div>"; 
        }
        return retVal;
    }

    function loadPageByIndex(i) {
        contentPageTitle.innerHTML = pages[i].title;
        contentPageSubtitle.innerHTML = pages[i].subtitle;
        contentPageParagraph.innerHTML = getParagraphContent(i);
    }

    switch (hoveredElement.id) {
        case "anchor-introduction":
            loadPageByIndex(0);
            break;
        case "anchor-wpi":
            loadPageByIndex(1);
            break;
        case "anchor-experience":
            loadPageByIndex(2);
            break;
        case "anchor-contact":
            loadPageByIndex(3);
            break;
        default:
            loadPageByIndex(0);
            break;
    }
}

// I've decided to add music!
// We're going to have a page with band logos that can be clicked to select which one is active.
// Band's tracks are grabbed from audio tags in the window.onload.
