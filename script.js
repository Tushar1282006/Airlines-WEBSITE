// Popular Cities Data - Comprehensive List
const popularCities = [
    // India
    { name: 'Mumbai', code: 'BOM', country: 'India' },
    { name: 'Delhi', code: 'DEL', country: 'India' },
    { name: 'Bangalore', code: 'BLR', country: 'India' },
    { name: 'Chennai', code: 'MAA', country: 'India' },
    { name: 'Kolkata', code: 'CCU', country: 'India' },
    { name: 'Hyderabad', code: 'HYD', country: 'India' },
    { name: 'Pune', code: 'PNQ', country: 'India' },
    { name: 'Ahmedabad', code: 'AMD', country: 'India' },
    { name: 'Jaipur', code: 'JAI', country: 'India' },
    { name: 'Goa', code: 'GOI', country: 'India' },
    { name: 'Kochi', code: 'COK', country: 'India' },
    { name: 'Lucknow', code: 'LKO', country: 'India' },
    
    // USA
    { name: 'New York', code: 'NYC', country: 'USA' },
    { name: 'Los Angeles', code: 'LAX', country: 'USA' },
    { name: 'Chicago', code: 'ORD', country: 'USA' },
    { name: 'Miami', code: 'MIA', country: 'USA' },
    { name: 'San Francisco', code: 'SFO', country: 'USA' },
    { name: 'Las Vegas', code: 'LAS', country: 'USA' },
    { name: 'Boston', code: 'BOS', country: 'USA' },
    { name: 'Seattle', code: 'SEA', country: 'USA' },
    { name: 'Washington DC', code: 'DCA', country: 'USA' },
    { name: 'Houston', code: 'IAH', country: 'USA' },
    
    // UK
    { name: 'London', code: 'LON', country: 'UK' },
    { name: 'Manchester', code: 'MAN', country: 'UK' },
    { name: 'Edinburgh', code: 'EDI', country: 'UK' },
    { name: 'Birmingham', code: 'BHX', country: 'UK' },
    { name: 'Glasgow', code: 'GLA', country: 'UK' },
    
    // France
    { name: 'Paris', code: 'PAR', country: 'France' },
    { name: 'Nice', code: 'NCE', country: 'France' },
    { name: 'Lyon', code: 'LYS', country: 'France' },
    { name: 'Marseille', code: 'MRS', country: 'France' },
    
    // Germany
    { name: 'Berlin', code: 'BER', country: 'Germany' },
    { name: 'Munich', code: 'MUC', country: 'Germany' },
    { name: 'Frankfurt', code: 'FRA', country: 'Germany' },
    { name: 'Hamburg', code: 'HAM', country: 'Germany' },
    
    // Italy
    { name: 'Rome', code: 'ROM', country: 'Italy' },
    { name: 'Milan', code: 'MIL', country: 'Italy' },
    { name: 'Venice', code: 'VCE', country: 'Italy' },
    { name: 'Florence', code: 'FLR', country: 'Italy' },
    { name: 'Naples', code: 'NAP', country: 'Italy' },
    
    // Spain
    { name: 'Barcelona', code: 'BCN', country: 'Spain' },
    { name: 'Madrid', code: 'MAD', country: 'Spain' },
    { name: 'Seville', code: 'SVQ', country: 'Spain' },
    { name: 'Valencia', code: 'VLC', country: 'Spain' },
    
    // Netherlands
    { name: 'Amsterdam', code: 'AMS', country: 'Netherlands' },
    { name: 'Rotterdam', code: 'RTM', country: 'Netherlands' },
    
    // Switzerland
    { name: 'Zurich', code: 'ZRH', country: 'Switzerland' },
    { name: 'Geneva', code: 'GVA', country: 'Switzerland' },
    
    // Japan
    { name: 'Tokyo', code: 'TYO', country: 'Japan' },
    { name: 'Osaka', code: 'OSA', country: 'Japan' },
    { name: 'Kyoto', code: 'UKY', country: 'Japan' },
    { name: 'Sapporo', code: 'SPK', country: 'Japan' },
    
    // China
    { name: 'Beijing', code: 'PEK', country: 'China' },
    { name: 'Shanghai', code: 'PVG', country: 'China' },
    { name: 'Hong Kong', code: 'HKG', country: 'China' },
    { name: 'Guangzhou', code: 'CAN', country: 'China' },
    { name: 'Shenzhen', code: 'SZX', country: 'China' },
    
    // UAE
    { name: 'Dubai', code: 'DXB', country: 'UAE' },
    { name: 'Abu Dhabi', code: 'AUH', country: 'UAE' },
    { name: 'Sharjah', code: 'SHJ', country: 'UAE' },
    
    // Singapore
    { name: 'Singapore', code: 'SIN', country: 'Singapore' },
    
    // Thailand
    { name: 'Bangkok', code: 'BKK', country: 'Thailand' },
    { name: 'Phuket', code: 'HKT', country: 'Thailand' },
    { name: 'Chiang Mai', code: 'CNX', country: 'Thailand' },
    
    // Malaysia
    { name: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia' },
    { name: 'Penang', code: 'PEN', country: 'Malaysia' },
    
    // Indonesia
    { name: 'Jakarta', code: 'CGK', country: 'Indonesia' },
    { name: 'Bali', code: 'DPS', country: 'Indonesia' },
    { name: 'Surabaya', code: 'SUB', country: 'Indonesia' },
    
    // Philippines
    { name: 'Manila', code: 'MNL', country: 'Philippines' },
    { name: 'Cebu', code: 'CEB', country: 'Philippines' },
    
    // Vietnam
    { name: 'Ho Chi Minh City', code: 'SGN', country: 'Vietnam' },
    { name: 'Hanoi', code: 'HAN', country: 'Vietnam' },
    
    // South Korea
    { name: 'Seoul', code: 'ICN', country: 'South Korea' },
    { name: 'Busan', code: 'PUS', country: 'South Korea' },
    
    // Australia
    { name: 'Sydney', code: 'SYD', country: 'Australia' },
    { name: 'Melbourne', code: 'MEL', country: 'Australia' },
    { name: 'Brisbane', code: 'BNE', country: 'Australia' },
    { name: 'Perth', code: 'PER', country: 'Australia' },
    { name: 'Adelaide', code: 'ADL', country: 'Australia' },
    
    // New Zealand
    { name: 'Auckland', code: 'AKL', country: 'New Zealand' },
    { name: 'Wellington', code: 'WLG', country: 'New Zealand' },
    
    // Canada
    { name: 'Toronto', code: 'YYZ', country: 'Canada' },
    { name: 'Vancouver', code: 'YVR', country: 'Canada' },
    { name: 'Montreal', code: 'YUL', country: 'Canada' },
    { name: 'Calgary', code: 'YYC', country: 'Canada' },
    
    // Mexico
    { name: 'Mexico City', code: 'MEX', country: 'Mexico' },
    { name: 'Cancun', code: 'CUN', country: 'Mexico' },
    { name: 'Guadalajara', code: 'GDL', country: 'Mexico' },
    
    // Brazil
    { name: 'São Paulo', code: 'GRU', country: 'Brazil' },
    { name: 'Rio de Janeiro', code: 'GIG', country: 'Brazil' },
    { name: 'Brasília', code: 'BSB', country: 'Brazil' },
    
    // Argentina
    { name: 'Buenos Aires', code: 'EZE', country: 'Argentina' },
    
    // Chile
    { name: 'Santiago', code: 'SCL', country: 'Chile' },
    
    // South Africa
    { name: 'Cape Town', code: 'CPT', country: 'South Africa' },
    { name: 'Johannesburg', code: 'JNB', country: 'South Africa' },
    
    // Egypt
    { name: 'Cairo', code: 'CAI', country: 'Egypt' },
    { name: 'Luxor', code: 'LXR', country: 'Egypt' },
    
    // Morocco
    { name: 'Casablanca', code: 'CMN', country: 'Morocco' },
    { name: 'Marrakech', code: 'RAK', country: 'Morocco' },
    
    // Turkey
    { name: 'Istanbul', code: 'IST', country: 'Turkey' },
    { name: 'Ankara', code: 'ESB', country: 'Turkey' },
    
    // Greece
    { name: 'Athens', code: 'ATH', country: 'Greece' },
    { name: 'Santorini', code: 'JTR', country: 'Greece' },
    { name: 'Mykonos', code: 'JMK', country: 'Greece' },
    
    // Portugal
    { name: 'Lisbon', code: 'LIS', country: 'Portugal' },
    { name: 'Porto', code: 'OPO', country: 'Portugal' },
    
    // Russia
    { name: 'Moscow', code: 'SVO', country: 'Russia' },
    { name: 'Saint Petersburg', code: 'LED', country: 'Russia' },
    
    // Poland
    { name: 'Warsaw', code: 'WAW', country: 'Poland' },
    { name: 'Krakow', code: 'KRK', country: 'Poland' },
    
    // Czech Republic
    { name: 'Prague', code: 'PRG', country: 'Czech Republic' },
    
    // Austria
    { name: 'Vienna', code: 'VIE', country: 'Austria' },
    
    // Belgium
    { name: 'Brussels', code: 'BRU', country: 'Belgium' },
    
    // Denmark
    { name: 'Copenhagen', code: 'CPH', country: 'Denmark' },
    
    // Sweden
    { name: 'Stockholm', code: 'ARN', country: 'Sweden' },
    
    // Norway
    { name: 'Oslo', code: 'OSL', country: 'Norway' },
    
    // Finland
    { name: 'Helsinki', code: 'HEL', country: 'Finland' },
    
    // Ireland
    { name: 'Dublin', code: 'DUB', country: 'Ireland' },
    
    // Iceland
    { name: 'Reykjavik', code: 'KEF', country: 'Iceland' },
    
    // Israel
    { name: 'Tel Aviv', code: 'TLV', country: 'Israel' },
    { name: 'Jerusalem', code: 'JRS', country: 'Israel' },
    
    // Saudi Arabia
    { name: 'Riyadh', code: 'RUH', country: 'Saudi Arabia' },
    { name: 'Jeddah', code: 'JED', country: 'Saudi Arabia' },
    
    // Qatar
    { name: 'Doha', code: 'DOH', country: 'Qatar' },
    
    // Kuwait
    { name: 'Kuwait City', code: 'KWI', country: 'Kuwait' },
    
    // Bahrain
    { name: 'Manama', code: 'BAH', country: 'Bahrain' },
    
    // Oman
    { name: 'Muscat', code: 'MCT', country: 'Oman' },
    
    // Jordan
    { name: 'Amman', code: 'AMM', country: 'Jordan' },
    
    // Lebanon
    { name: 'Beirut', code: 'BEY', country: 'Lebanon' },
    
    // Pakistan
    { name: 'Karachi', code: 'KHI', country: 'Pakistan' },
    { name: 'Lahore', code: 'LHE', country: 'Pakistan' },
    { name: 'Islamabad', code: 'ISB', country: 'Pakistan' },
    
    // Bangladesh
    { name: 'Dhaka', code: 'DAC', country: 'Bangladesh' },
    
    // Sri Lanka
    { name: 'Colombo', code: 'CMB', country: 'Sri Lanka' },
    
    // Nepal
    { name: 'Kathmandu', code: 'KTM', country: 'Nepal' },
    
    // Myanmar
    { name: 'Yangon', code: 'RGN', country: 'Myanmar' },
    
    // Cambodia
    { name: 'Phnom Penh', code: 'PNH', country: 'Cambodia' },
    { name: 'Siem Reap', code: 'REP', country: 'Cambodia' },
    
    // Laos
    { name: 'Vientiane', code: 'VTE', country: 'Laos' },
    
    // Taiwan
    { name: 'Taipei', code: 'TPE', country: 'Taiwan' },
    
    // Macau
    { name: 'Macau', code: 'MFM', country: 'Macau' },
    
    // Mongolia
    { name: 'Ulaanbaatar', code: 'ULN', country: 'Mongolia' },
    
    // Kazakhstan
    { name: 'Almaty', code: 'ALA', country: 'Kazakhstan' },
    { name: 'Nur-Sultan', code: 'NQZ', country: 'Kazakhstan' },
    
    // Uzbekistan
    { name: 'Tashkent', code: 'TAS', country: 'Uzbekistan' },
    
    // Azerbaijan
    { name: 'Baku', code: 'GYD', country: 'Azerbaijan' },
    
    // Georgia
    { name: 'Tbilisi', code: 'TBS', country: 'Georgia' },
    
    // Armenia
    { name: 'Yerevan', code: 'EVN', country: 'Armenia' }
];

// Popular Destinations Data
const destinations = [
    {
        name: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        price: '₹16000',
        description: 'The City of Light'
    },
    {
        name: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        price: '₹20000',
        description: 'Modern meets traditional'
    },
    {
        name: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        price: '₹45000',
        description: 'Luxury and innovation'
    },
    {
        name: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        price: '₹60000',
        description: 'The Big Apple'
    },
    {
        name: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        price: '₹25600',
        description: 'Tropical paradise'
    },
    {
        name: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        price: '₹56000',
        description: 'Stunning sunsets'
    }
];

// Special Deals Data
const deals = [
    {
        title: 'Summer Escape to Europe',
        description: 'Book now and save up to 30% on European destinations',
        price: 'From ₹24000',
        badge: '30% OFF',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800'
    },
    {
        title: 'Asia Adventure Package',
        description: 'Explore multiple Asian cities with our special package',
        price: 'From ₹48000',
        badge: 'HOT DEAL',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
    },
    {
        title: 'Business Class Upgrade',
        description: 'Upgrade to business class at economy prices',
        price: 'From ₹16000',
        badge: 'LIMITED',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
    },
    {
        title: 'Caribbean Island Hopper',
        description: 'Visit three stunning islands with inclusive resort stays',
        price: 'From ₹38000',
        badge: 'BUNDLE',
        image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800'
    },
    {
        title: 'Transatlantic Saver',
        description: 'Round-trip fares to New York and London with flexible dates',
        price: 'From ₹29999',
        badge: 'FLASH SALE',
        image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800'
    },
    {
        title: 'Mountain Escape Retreat',
        description: 'Experience the Swiss Alps with curated ski and spa packages',
        price: 'From ₹52000',
        badge: 'NEW',
        image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?w=800&auto=format&fit=crop'
    }
];

// Airlines Data
const airlines = ['AeroVista', 'Global Air', 'Pacific Airlines', 'Atlantic Express', 'Star Airways'];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const tabButtons = document.querySelectorAll('.tab-btn');
const searchForm = document.getElementById('searchForm');
const fromCityInput = document.getElementById('fromCity');
const toCityInput = document.getElementById('toCity');
const fromSuggestions = document.getElementById('fromSuggestions');
const toSuggestions = document.getElementById('toSuggestions');
const swapBtn = document.getElementById('swapBtn');
const passengerBtn = document.getElementById('passengerBtn');
const passengerDropdown = document.getElementById('passengerDropdown');
const counterButtons = document.querySelectorAll('.counter-btn');
const adultCount = document.getElementById('adultCount');
const childCount = document.getElementById('childCount');
const infantCount = document.getElementById('infantCount');
const passengerCount = document.getElementById('passengerCount');
const returnDateGroup = document.getElementById('returnDateGroup');
const returnDateInput = document.getElementById('returnDate');
const resultsModal = document.getElementById('resultsModal');
const closeModal = document.getElementById('closeModal');
const resultsContainer = document.getElementById('resultsContainer');
const resultsMeta = document.getElementById('resultsMeta');
const resultsBadges = document.getElementById('resultsBadges');
const brandModal = document.getElementById('brandModal');
const closeBrandModal = document.getElementById('closeBrandModal');
const primaryLogo = document.querySelector('.navbar .logo');
const destinationsGrid = document.getElementById('destinationsGrid');
const dealsGrid = document.getElementById('dealsGrid');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtn = document.getElementById('lightModeBtn');

// Passenger counts
let passengers = {
    adult: 1,
    child: 0,
    infant: 0
};

let currentSearchContext = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSearchTabs();
    initializeCitySuggestions();
    initializePassengerSelector();
    initializeDateInputs();
    loadDestinations();
    loadDeals();
    initializeForms();
    initializeSmoothScroll();
    initializeBrandModal();
    initializeTheme();
});

// Navigation
function initializeNavigation() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Search Tabs
function initializeSearchTabs() {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tabType = btn.getAttribute('data-tab');
            if (tabType === 'one-way') {
                returnDateGroup.style.display = 'none';
                returnDateInput.removeAttribute('required');
            } else {
                returnDateGroup.style.display = 'block';
                returnDateInput.setAttribute('required', 'required');
            }
        });
    });
}

// City Suggestions
function initializeCitySuggestions() {
    // Verify elements exist
    if (!fromCityInput || !toCityInput || !fromSuggestions || !toSuggestions) {
        console.error('City input elements not found');
        return;
    }

    [fromCityInput, toCityInput].forEach((input, index) => {
        const suggestionsDiv = index === 0 ? fromSuggestions : toSuggestions;
        const counterpartInput = index === 0 ? toCityInput : fromCityInput;
        
        if (!input || !suggestionsDiv) return;
        
        input.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase().trim();
            if (value.length > 0) {
                const filtered = popularCities.filter(city => 
                    city.name.toLowerCase().includes(value) || 
                    city.code.toLowerCase().includes(value) ||
                    city.country.toLowerCase().includes(value)
                );
                showSuggestions(filtered, suggestionsDiv, input, counterpartInput);
            } else {
                // Show all cities when input is cleared
                showSuggestions(popularCities, suggestionsDiv, input, counterpartInput);
            }
        });

        input.addEventListener('focus', (e) => {
            e.stopPropagation();
            const value = input.value.toLowerCase().trim();
            if (value.length > 0) {
                const filtered = popularCities.filter(city => 
                    city.name.toLowerCase().includes(value) || 
                    city.code.toLowerCase().includes(value) ||
                    city.country.toLowerCase().includes(value)
                );
                showSuggestions(filtered, suggestionsDiv, input, counterpartInput);
            } else {
                // Show all cities when input is focused and empty
                showSuggestions(popularCities, suggestionsDiv, input, counterpartInput);
            }
        });

        let suggestionHideTimeout;

        const hideSuggestions = () => {
            suggestionsDiv.classList.remove('show');
            suggestionsDiv.style.display = 'none';
            suggestionsDiv.style.visibility = 'hidden';
            suggestionsDiv.style.opacity = '0';
        };

        const scheduleSuggestionsHide = () => {
            clearTimeout(suggestionHideTimeout);
            suggestionHideTimeout = setTimeout(() => {
                if (!input.matches(':hover') && !suggestionsDiv.matches(':hover')) {
                    hideSuggestions();
                }
            }, 400);
        };

        input.addEventListener('blur', scheduleSuggestionsHide);
        input.addEventListener('pointerleave', scheduleSuggestionsHide);
        suggestionsDiv.addEventListener('pointerleave', scheduleSuggestionsHide);
        input.addEventListener('pointerenter', () => clearTimeout(suggestionHideTimeout));
        suggestionsDiv.addEventListener('pointerenter', () => clearTimeout(suggestionHideTimeout));
    });

    const scheduleHideIfOutside = (inputEl, dropdownEl, target) => {
        if (!inputEl.contains(target) && !dropdownEl.contains(target)) {
            dropdownEl.dataset.hideTimeout && clearTimeout(parseInt(dropdownEl.dataset.hideTimeout, 10));
            const timeoutId = setTimeout(() => {
                if (!inputEl.matches(':hover') && !dropdownEl.matches(':hover')) {
                    dropdownEl.classList.remove('show');
                    dropdownEl.style.display = 'none';
                    dropdownEl.style.visibility = 'hidden';
                    dropdownEl.style.opacity = '0';
                }
            }, 400);
            dropdownEl.dataset.hideTimeout = timeoutId;
        }
    };

    // Close suggestions when clicking outside (single event listener)
    document.addEventListener('click', (e) => {
        scheduleHideIfOutside(fromCityInput, fromSuggestions, e.target);
        scheduleHideIfOutside(toCityInput, toSuggestions, e.target);
    });

    document.addEventListener('pointermove', (e) => {
        if (fromSuggestions.classList.contains('show')) {
            scheduleHideIfOutside(fromCityInput, fromSuggestions, e.target);
        }
        if (toSuggestions.classList.contains('show')) {
            scheduleHideIfOutside(toCityInput, toSuggestions, e.target);
        }
    });
}

function showSuggestions(cities, container, input, counterpartInput) {
    if (!container) {
        console.error('Container not found');
        return;
    }
    
    console.log('showSuggestions called with', cities ? cities.length : 0, 'cities');
    console.log('Container element:', container);
    console.log('Container parent:', container.parentElement);
    
    const counterpartKey = counterpartInput ? normalizeLocation(counterpartInput.value) : '';
    const filteredCities = Array.isArray(cities)
        ? cities.filter(city => {
            if (!counterpartKey) return true;
            return normalizeCityObject(city) !== counterpartKey;
        })
        : [];

    // Clear previous content
    container.innerHTML = '';
    const innerWrapper = document.createElement('div');
    innerWrapper.className = 'suggestions-inner';
    container.appendChild(innerWrapper);
    
    if (filteredCities.length === 0) {
        container.classList.remove('show');
        container.style.display = 'none';
        container.style.visibility = 'hidden';
        container.style.opacity = '0';
        return;
    }
    
    // Show more cities since we have a comprehensive list
    const citiesToShow = filteredCities.length > 15 ? filteredCities.slice(0, 15) : filteredCities;
    
    console.log('Showing', citiesToShow.length, 'cities');
    console.log('First few cities:', citiesToShow.slice(0, 3));
    
    citiesToShow.forEach((city, index) => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        
        const strong = document.createElement('strong');
        strong.textContent = `${city.name} (${city.code})`;
        strong.className = 'suggestion-city';
        
        const small = document.createElement('small');
        small.textContent = city.country;
        small.className = 'suggestion-country';
        
        item.appendChild(strong);
        item.appendChild(small);
        
        item.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            input.value = `${city.name} (${city.code})`;
            container.classList.remove('show');
            container.style.display = 'none';
            container.style.visibility = 'hidden';
            container.style.opacity = '0';
            input.focus();
        });
        
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        
        innerWrapper.appendChild(item);
        console.log('Added city item:', city.name);
    });
    
    // Show the suggestions - force display as block for vertical layout
    container.style.display = 'block';
    container.style.visibility = 'visible';
    container.style.opacity = '1';
    container.style.backgroundColor = 'white';
    container.classList.add('show');
    
    console.log('Container innerHTML length:', container.innerHTML.length);
    console.log('Container children:', container.children.length);
    console.log('Container display:', window.getComputedStyle(container).display);
    console.log('Container visibility:', window.getComputedStyle(container).visibility);
    console.log('Container opacity:', window.getComputedStyle(container).opacity);
}

// Swap Cities
swapBtn.addEventListener('click', () => {
    const fromValue = fromCityInput.value;
    const toValue = toCityInput.value;
    fromCityInput.value = toValue;
    toCityInput.value = fromValue;
});

// Passenger Selector
function initializePassengerSelector() {
    const setPassengerDropdown = (visible) => {
        if (visible) {
            passengerDropdown.classList.add('show');
            passengerDropdown.style.display = 'block';
            passengerDropdown.style.visibility = 'visible';
            passengerDropdown.style.opacity = '1';
            passengerDropdown.style.backgroundColor = 'white';
        } else {
            passengerDropdown.classList.remove('show');
            passengerDropdown.style.display = 'none';
            passengerDropdown.style.visibility = 'hidden';
            passengerDropdown.style.opacity = '0';
        }
    };

    let passengerHideTimeout;

    const schedulePassengerHide = () => {
        clearTimeout(passengerHideTimeout);
        passengerHideTimeout = setTimeout(() => {
            if (!passengerBtn.matches(':hover') && !passengerDropdown.matches(':hover')) {
                setPassengerDropdown(false);
            }
        }, 400);
    };

    passengerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const shouldShow = !passengerDropdown.classList.contains('show');
        setPassengerDropdown(shouldShow);
    });

    passengerBtn.addEventListener('pointerenter', () => {
        clearTimeout(passengerHideTimeout);
    });

    passengerDropdown.addEventListener('pointerenter', () => {
        clearTimeout(passengerHideTimeout);
    });

    passengerBtn.addEventListener('pointerleave', schedulePassengerHide);
    passengerDropdown.addEventListener('pointerleave', schedulePassengerHide);

    document.addEventListener('click', (e) => {
        if (!passengerBtn.contains(e.target) && !passengerDropdown.contains(e.target)) {
            setPassengerDropdown(false);
        }
    });

    counterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-type');
            const action = btn.getAttribute('data-action');
            
            if (action === 'increase') {
                if (type === 'adult' || passengers.adult > 0) {
                    passengers[type]++;
                }
            } else if (action === 'decrease') {
                if (passengers[type] > 0) {
                    passengers[type]--;
                    if (type === 'adult' && passengers.adult === 0) {
                        passengers.child = 0;
                        passengers.infant = 0;
                    }
                }
            }
            
            updatePassengerCounts();
        });
    });
}

function updatePassengerCounts() {
    adultCount.textContent = passengers.adult;
    childCount.textContent = passengers.child;
    infantCount.textContent = passengers.infant;
    
    const total = passengers.adult + passengers.child + passengers.infant;
    let text = `${passengers.adult} Adult`;
    if (passengers.child > 0) text += `, ${passengers.child} Child`;
    if (passengers.infant > 0) text += `, ${passengers.infant} Infant`;
    
    passengerCount.textContent = text;
}

// Date Inputs
function initializeDateInputs() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');
    
    departureDate.min = today.toISOString().split('T')[0];
    returnDate.min = tomorrow.toISOString().split('T')[0];
    
    departureDate.addEventListener('change', () => {
        const selectedDate = new Date(departureDate.value);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        returnDate.min = nextDay.toISOString().split('T')[0];
    });
}

// Search Form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchFlights();
});

function searchFlights() {
    const from = fromCityInput.value.trim();
    const to = toCityInput.value.trim();
    const departure = document.getElementById('departureDate').value;
    const returnDate = returnDateInput.value;
    const cabinClass = document.getElementById('cabinClass').value;
    
    if (!from || !to || !departure) {
        alert('Please fill in all required fields');
        return;
    }

    if (areSameLocation(from, to)) {
        alert('Departure city and destination city must be different.');
        return;
    }

    currentSearchContext = {
        from,
        to,
        departure,
        returnDate,
        cabinClass,
        passengers: { ...passengers }
    };

    if (resultsMeta) {
        const fromCity = extractCityName(from) || 'Origin';
        const toCity = extractCityName(to) || 'Destination';
        resultsMeta.textContent = `Searching flights from ${fromCity} to ${toCity}...`;
    }

    updateResultsBadges();
    if (resultsContainer) {
        resultsContainer.innerHTML = buildLoadingState();
    }
    resultsModal.classList.add('show');
    
    // Simulate API call
    setTimeout(() => {
        const flights = generateFlightResults(from, to, departure, returnDate, cabinClass);
        displayFlightResults(flights);
    }, 1500);
}

function generateFlightResults(from, to, departure, returnDate, cabinClass) {
    const flights = [];
    const basePrice = {
        economy: 25000,
        premium: 42000,
        business: 67000,
        first: 100000
    };
    
    for (let i = 0; i < 5; i++) {
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const price = basePrice[cabinClass] + Math.floor(Math.random() * 17000);
        const departureHour = 6 + Math.floor(Math.random() * 12);
        const departureMin = Math.floor(Math.random() * 60);
        const duration = 2 + Math.floor(Math.random() * 8);
        
        const depTime = `${departureHour.toString().padStart(2, '0')}:${departureMin.toString().padStart(2, '0')}`;
        const arrHour = departureHour + duration;
        const arrMin = departureMin + Math.floor(Math.random() * 30);
        const arrTime = `${arrHour.toString().padStart(2, '0')}:${arrMin.toString().padStart(2, '0')}`;
        
        flights.push({
            airline,
            price,
            departureTime: depTime,
            arrivalTime: arrTime,
            duration: `${duration}h ${Math.floor(Math.random() * 60)}m`,
            stops: Math.random() > 0.5 ? 'Non-stop' : '1 stop'
        });
    }
    
    return flights.sort((a, b) => a.price - b.price);
}

function displayFlightResults(flights) {
    if (!resultsContainer) return;

    updateResultsBadges();

    const context = currentSearchContext || {};
    const cabinLabel = capitalize(context.cabinClass || 'Economy');
    const departureLabel = formatDate(context.departure) || '';
    const arrivalLabel = context.returnDate ? formatDate(context.returnDate) : departureLabel;
    const fromCode = extractAirportCode(context.from);
    const toCode = extractAirportCode(context.to);

    if (!Array.isArray(flights) || flights.length === 0) {
        updateResultsMeta(0);
        resultsContainer.innerHTML = `
            <div class="results-empty">
                No flights found. Try different dates or adjust your destinations.
            </div>
        `;
        return;
    }
    
    const passengerCounts = context.passengers || { adult: 1, child: 0, infant: 0 };
    const cards = flights.map((flight, index) => `
        <div class="flight-result" data-airline="${flight.airline}" data-price="${flight.price}" data-index="${index}">
            <div class="flight-header">
                <div>
                    <div class="airline-chip">
                        <span class="airline-icon"><i class="fas fa-plane-departure"></i></span>
                        <span class="airline-name">${flight.airline}</span>
                    </div>
                    <div class="flight-meta">
                        <span class="meta-badge">${flight.stops}</span>
                        <span class="meta-badge">${cabinLabel}</span>
                    </div>
                </div>
                <div class="flight-price-block">
                    <span class="flight-price">₹${flight.price.toLocaleString('en-IN')}</span>
                    <span class="price-hint">Includes taxes & fees</span>
                </div>
            </div>
            <div class="flight-details">
                <div class="flight-time">
                    <div class="time">${flight.departureTime}</div>
                    ${departureLabel ? `<div class="date">${departureLabel}</div>` : ''}
                    ${fromCode ? `<div class="airport-code">${fromCode}</div>` : ''}
                </div>
                <div class="flight-route">
                    <div class="route-line"></div>
                    <div class="duration">${flight.duration}<small>${flight.stops}</small></div>
                </div>
                <div class="flight-time">
                    <div class="time">${flight.arrivalTime}</div>
                    ${arrivalLabel ? `<div class="date">${arrivalLabel}</div>` : ''}
                    ${toCode ? `<div class="airport-code">${toCode}</div>` : ''}
                </div>
            </div>
            <div class="flight-footer">
                <span class="fare-tag"><i class="fas fa-shield-alt"></i> Flexible fare</span>
                <span class="select-cta">Select flight <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = `<div class="results-grid">${cards}</div>`;
    const cardElements = resultsContainer.querySelectorAll('.flight-result');
    cardElements.forEach(card => {
        card.addEventListener('click', () => {
            const index = Number(card.getAttribute('data-index'));
            const selectedFlight = flights[index];
            if (!selectedFlight) return;

            const itinerary = {
                airline: selectedFlight.airline,
                price: selectedFlight.price,
                departureTime: selectedFlight.departureTime,
                arrivalTime: selectedFlight.arrivalTime,
                duration: selectedFlight.duration,
                stops: selectedFlight.stops,
                cabinClass: context.cabinClass || 'economy',
                passengers: passengerCounts,
                route: {
                    from: context.from,
                    to: context.to,
                    fromCode,
                    toCode,
                    departureDate: context.departure,
                    returnDate: context.returnDate
                }
            };

            selectFlight(itinerary);
        });
    });

    updateResultsMeta(flights.length);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function buildLoadingState() {
    return `
        <div class="loading-state">
            <div class="loading-illustration">
                <span class="loading-plane">✈</span>
            </div>
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p class="loading-text">Searching flights...</p>
        </div>
    `;
}

function updateResultsBadges() {
    if (!resultsBadges) return;
    if (!currentSearchContext) {
        resultsBadges.innerHTML = '';
        return;
    }

    const badges = [];
    const passengerSummary = formatPassengerSummary(currentSearchContext.passengers);
    if (passengerSummary) {
        badges.push(passengerSummary);
    }

    if (currentSearchContext.cabinClass) {
        badges.push(`${capitalize(currentSearchContext.cabinClass)} class`);
    }

    if (currentSearchContext.returnDate) {
        badges.push('Round trip');
    }

    resultsBadges.innerHTML = badges
        .map(text => `<span class="result-chip">${text}</span>`)
        .join('');
}

function updateResultsMeta(count) {
    if (!resultsMeta) return;
    if (!currentSearchContext) {
        resultsMeta.textContent = count > 0
            ? `Showing ${count} flight ${count === 1 ? 'option' : 'options'}`
            : 'No flights found for the selected search.';
        return;
    }

    const { from, to, departure, returnDate, cabinClass } = currentSearchContext;
    const route = `${extractCityName(from) || 'Origin'} → ${extractCityName(to) || 'Destination'}`;
    const departLabel = formatDate(departure);
    const returnLabel = formatDate(returnDate);
    const cabinLabel = capitalize(cabinClass || '');

    if (count === 0) {
        resultsMeta.textContent = `No flights found for ${route}. Try adjusting your search.`;
        return;
    }

    let meta = `Showing ${count} ${count === 1 ? 'option' : 'options'} • ${route}`;
    if (departLabel) {
        meta += ` • ${departLabel}`;
        if (returnLabel) {
            meta += ` → ${returnLabel}`;
        }
    }
    if (cabinLabel) {
        meta += ` • ${cabinLabel} class`;
    }
    resultsMeta.textContent = meta;
}

function extractCityName(value) {
    if (!value) return '';
    return value.replace(/\s*\([^)]+\)/, '').trim();
}

function normalizeLocation(value) {
    if (!value) return '';
    const city = extractCityName(value);
    const code = extractAirportCode(value);
    return `${city}`.toLowerCase().trim() + `|${code}`.toLowerCase().trim();
}

function normalizeCityObject(city) {
    if (!city) return '';
    const name = (city.name || '').toLowerCase().trim();
    const code = (city.code || '').toLowerCase().trim();
    return `${name}|${code}`;
}

function areSameLocation(fromValue, toValue) {
    if (!fromValue || !toValue) return false;
    return normalizeLocation(fromValue) === normalizeLocation(toValue);
}

function extractAirportCode(value) {
    if (!value) return '';
    const codeMatch = value.match(/\(([^)]+)\)/);
    if (codeMatch && codeMatch[1]) {
        return codeMatch[1].trim().toUpperCase();
    }
    const parts = value.trim().split(/\s+/);
    const last = parts[parts.length - 1] || '';
    return last.slice(0, 3).toUpperCase();
}

function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatPassengerSummary(pax = {}) {
    const segments = [];
    if (pax.adult) segments.push(`${pax.adult} Adult${pax.adult > 1 ? 's' : ''}`);
    if (pax.child) segments.push(`${pax.child} Child${pax.child > 1 ? 'ren' : ''}`);
    if (pax.infant) segments.push(`${pax.infant} Infant${pax.infant > 1 ? 's' : ''}`);
    return segments.length > 0 ? segments.join(', ') : '1 Adult';
}

function selectFlight(itinerary) {
    try {
        localStorage.setItem('aerovista-selected-flight', JSON.stringify({
            ...itinerary,
            bookedAt: new Date().toISOString()
        }));
    } catch (error) {
        console.error('[AeroVista] Failed to store selected flight', error);
    }
    window.location.href = 'payment.html';
}

// Close Modal
closeModal.addEventListener('click', () => {
    resultsModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === resultsModal) {
        resultsModal.classList.remove('show');
    }
    if (e.target === brandModal) {
        hideBrandModal();
    }
});

// Load Destinations
function loadDestinations() {
    destinationsGrid.innerHTML = destinations.map(dest => `
        <div class="destination-card" onclick="selectDestination('${dest.name}')">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image" onerror="this.src='https://via.placeholder.com/400x400?text=${dest.name}'">
            <div class="destination-overlay">
                <div class="destination-name">${dest.name}</div>
                <p>${dest.description}</p>
                <div class="destination-info">
                    <span>Starting from</span>
                    <span class="destination-price">${dest.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function selectDestination(name) {
    const city = name.split(',')[0];
    toCityInput.value = name;
    document.getElementById('flights').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        toCityInput.focus();
    }, 500);
}

// Load Deals
function loadDeals() {
    dealsGrid.innerHTML = deals.map(deal => `
        <div class="deal-card">
            <img src="${deal.image}" alt="${deal.title}" class="deal-image" onerror="this.src='https://via.placeholder.com/400x200?text=${deal.title}'">
            <div class="deal-content">
                <span class="deal-badge">${deal.badge}</span>
                <h3 class="deal-title">${deal.title}</h3>
                <p class="deal-description">${deal.description}</p>
                <div class="deal-footer">
                    <div class="deal-price">${deal.price}</div>
                    <button class="btn-book" onclick="bookDeal('${deal.title}')">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function bookDeal(title) {
    // Store the deal information in localStorage for the payment page
    try {
        localStorage.setItem('aerovista-selected-deal', JSON.stringify({
            title: title,
            timestamp: new Date().toISOString()
        }));
    } catch (error) {
        console.error('[AeroVista] Failed to store deal information', error);
    }
    
    // Navigate to payment page
    window.location.href = 'payment.html';
}

// Forms
function initializeForms() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

function initializeBrandModal() {
    if (!primaryLogo || !brandModal) return;

    primaryLogo.addEventListener('click', (e) => {
        e.preventDefault();
        showBrandModal();
    });

    closeBrandModal?.addEventListener('click', hideBrandModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && brandModal.classList.contains('show')) {
            hideBrandModal();
        }
    });
}

function showBrandModal() {
    brandModal.classList.add('show');
    brandModal.setAttribute('aria-hidden', 'false');
}

function hideBrandModal() {
    brandModal.classList.remove('show');
    brandModal.setAttribute('aria-hidden', 'true');
}

function initializeTheme() {
    const storedTheme = localStorage.getItem('aerovista-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = storedTheme || (prefersLight ? 'light' : 'dark');

    applyTheme(initialTheme);

    darkModeBtn?.addEventListener('click', () => {
        applyTheme('dark');
        localStorage.setItem('aerovista-theme', 'dark');
    });

    lightModeBtn?.addEventListener('click', () => {
        applyTheme('light');
        localStorage.setItem('aerovista-theme', 'light');
    });
}

function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);
    updateThemeToggle(isLight);
}

function updateThemeToggle(isLight) {
    if (darkModeBtn && lightModeBtn) {
        if (isLight) {
            darkModeBtn.classList.remove('active');
            lightModeBtn.classList.add('active');
        } else {
            darkModeBtn.classList.add('active');
            lightModeBtn.classList.remove('active');
        }
    }
}

