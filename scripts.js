
const content = {
    ancient: {
        title: "Ancient History",
        paragraphs: [
            "Ancient history covers all continents inhabited by humans in the 3,000 years before the middle ages.",
            "Key events include the rise of the Egyptian civilization, the Greek and Roman empires, and the beginnings of Chinese dynasties."
        ],
        bulletPoints: [
            "3000 BC - Sumerian civilization in Mesopotamia",
            "2500 BC - Old Kingdom of Egypt",
            "1200 BC - Trojan War",
            "800 BC - Greek city-states",
            "753 BC - Founding of Rome"
        ],
        images: [
            "images/ancient1.jpg",
            "images/ancient2.jpg"
        ]
    },
    medieval: {
        title: "Medieval History",
        paragraphs: [
            "The medieval period, or the Middle Ages, lasted from the 5th to the late 15th century.",
            "It began with the fall of the Western Roman Empire and transitioned into the Renaissance and the Age of Discovery."
        ],
        bulletPoints: [
            "476 AD - Fall of the Western Roman Empire",
            "800 AD - Charlemagne crowned Emperor",
            "1066 AD - Norman conquest of England",
            "1096-1099 AD - First Crusade",
            "1347-1351 AD - Black Death"
        ],
        images: [
            "images/medieval1.jpg",
            "images/medieval2.jpg"
        ]
    },
    modern: {
        title: "Modern History",
        paragraphs: [
            "Modern history includes the events from the late 15th century to the present day.",
            "It encompasses the Age of Exploration, the Industrial Revolution, and contemporary history."
        ],
        bulletPoints: [
            "1492 AD - Christopher Columbus discovers America",
            "1776 AD - American Declaration of Independence",
            "1914-1918 AD - World War I",
            "1939-1945 AD - World War II",
            "1969 AD - Apollo 11 Moon Landing"
        ],
        images: [
            "images/modern1.jpg",
            "images/modern2.jpg"
        ]
    }
};

function showCategory(category) {
    const mainContent = document.getElementById('content');
    if (category && content[category]) {
        mainContent.innerHTML = `
            <h2>${content[category].title}</h2>
            ${content[category].paragraphs.map(p => `<p>${p}</p>`).join('')}
            <ul>
                ${content[category].bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
            </ul>
            ${content[category].images.map(img => `<img src="${img}" alt="${category}" style="width:100%; max-width:400px; margin:10px 0;">`).join('')}
        `;
    } else {
        mainContent.innerHTML = '<p>Please select a period from the dropdown menu above.</p>';
    }
}
