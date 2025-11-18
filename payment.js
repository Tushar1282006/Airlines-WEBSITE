const STORAGE_KEY = 'aerovista-selected-flight';

// Popular Cities Data (copied from home page)
const popularCities = [
    // India
    { name: 'Mumbai', code: 'BOM', country: 'India' },
    { name: 'Delhi', code: 'DEL', country: 'India' },
    { name: 'Bangalore', code: 'BLR', country: 'India' },
    { name: 'Chennai', code: 'MAA', country: 'India' },
    { name: 'Kolkata', code: 'CCU', country: 'India' },
    { name: 'Hyderabad', code: 'HYD', country: 'India' },
    { name: 'Pune', code: 'PNQ', country: 'India' },
    { name: 'Goa', code: 'GOI', country: 'India' },
    { name: 'Kochi', code: 'COK', country: 'India' },
    { name: 'Jaipur', code: 'JAI', country: 'India' },
    { name: 'Ahmedabad', code: 'AMD', country: 'India' },
    { name: 'Lucknow', code: 'LKO', country: 'India' },
    
    // USA
    { name: 'New York', code: 'JFK', country: 'United States' },
    { name: 'Los Angeles', code: 'LAX', country: 'United States' },
    { name: 'Chicago', code: 'ORD', country: 'United States' },
    { name: 'San Francisco', code: 'SFO', country: 'United States' },
    { name: 'Miami', code: 'MIA', country: 'United States' },
    { name: 'Las Vegas', code: 'LAS', country: 'United States' },
    { name: 'Seattle', code: 'SEA', country: 'United States' },
    { name: 'Boston', code: 'BOS', country: 'United States' },
    { name: 'Washington', code: 'DCA', country: 'United States' },
    { name: 'Atlanta', code: 'ATL', country: 'United States' },
    
    // UK
    { name: 'London', code: 'LHR', country: 'United Kingdom' },
    { name: 'Manchester', code: 'MAN', country: 'United Kingdom' },
    { name: 'Edinburgh', code: 'EDI', country: 'United Kingdom' },
    
    // Europe
    { name: 'Paris', code: 'CDG', country: 'France' },
    { name: 'Rome', code: 'FCO', country: 'Italy' },
    { name: 'Barcelona', code: 'BCN', country: 'Spain' },
    { name: 'Madrid', code: 'MAD', country: 'Spain' },
    { name: 'Amsterdam', code: 'AMS', country: 'Netherlands' },
    { name: 'Berlin', code: 'BER', country: 'Germany' },
    { name: 'Munich', code: 'MUC', country: 'Germany' },
    { name: 'Zurich', code: 'ZRH', country: 'Switzerland' },
    { name: 'Vienna', code: 'VIE', country: 'Austria' },
    { name: 'Prague', code: 'PRG', country: 'Czech Republic' },
    
    // Asia
    { name: 'Singapore', code: 'SIN', country: 'Singapore' },
    { name: 'Bangkok', code: 'BKK', country: 'Thailand' },
    { name: 'Tokyo', code: 'NRT', country: 'Japan' },
    { name: 'Seoul', code: 'ICN', country: 'South Korea' },
    { name: 'Hong Kong', code: 'HKG', country: 'Hong Kong' },
    { name: 'Dubai', code: 'DXB', country: 'UAE' },
    { name: 'Abu Dhabi', code: 'AUH', country: 'UAE' },
    { name: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia' },
    { name: 'Jakarta', code: 'CGK', country: 'Indonesia' },
    { name: 'Manila', code: 'MNL', country: 'Philippines' },
    { name: 'Ho Chi Minh City', code: 'SGN', country: 'Vietnam' },
    { name: 'Hanoi', code: 'HAN', country: 'Vietnam' },
    { name: 'Shanghai', code: 'PVG', country: 'China' },
    { name: 'Beijing', code: 'PEK', country: 'China' },
    
    // Australia
    { name: 'Sydney', code: 'SYD', country: 'Australia' },
    { name: 'Melbourne', code: 'MEL', country: 'Australia' },
    { name: 'Brisbane', code: 'BNE', country: 'Australia' },
    
    // Canada
    { name: 'Toronto', code: 'YYZ', country: 'Canada' },
    { name: 'Vancouver', code: 'YVR', country: 'Canada' },
    { name: 'Montreal', code: 'YUL', country: 'Canada' }
];

document.addEventListener('DOMContentLoaded', () => {
    const flightData = loadSelectedFlight();
    const summaryContainer = document.getElementById('flightSummary');
    const payableAmountEl = document.getElementById('payableAmount');
    const paymentForm = document.getElementById('paymentForm');
    const formMessage = document.getElementById('formMessage');
    const paymentCard = document.getElementById('paymentContainer');
    const successPanel = document.getElementById('successPanel');
    const viewReceiptBtn = document.getElementById('viewReceiptBtn');
    const payNowBtn = document.getElementById('payNowBtn');

    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiry');
    const phoneInput = document.getElementById('phone');

    if (!flightData) {
        summaryContainer.innerHTML = `
            <p class="empty-summary">
                No flight selected. <a href="index.html#home">Return to select a flight.</a>
            </p>
        `;
        paymentForm?.setAttribute('hidden', 'hidden');
        return;
    }

    renderSummary(summaryContainer, flightData);
    if (payableAmountEl) {
        payableAmountEl.textContent = formatCurrency(flightData.price || 0);
    }

    // Initialize city suggestions for payment page
    initializePaymentCitySuggestions(flightData);

    cardNumberInput?.addEventListener('input', (event) => {
        event.target.value = formatCardNumber(event.target.value);
    });

    expiryInput?.addEventListener('input', (event) => {
        event.target.value = formatExpiry(event.target.value);
    });

    phoneInput?.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\d+\s-]/g, '');
    });

    paymentForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        clearMessage(formMessage);

        const formData = new FormData(paymentForm);
        const validationError = validatePaymentForm(formData);
        if (validationError) {
            showMessage(formMessage, validationError, 'error');
            return;
        }

        payNowBtn.setAttribute('disabled', 'disabled');
        payNowBtn.querySelector('.btn-label').textContent = 'Processing...';

        setTimeout(() => {
            showMessage(formMessage, 'Payment authorized successfully. Generating itinerary...', 'success');
            clearSelectedFlight();
            paymentCard.setAttribute('hidden', 'hidden');
            successPanel.hidden = false;
        }, 1400);
    });

    viewReceiptBtn?.addEventListener('click', () => {
        window.print();
    });
});

function loadSelectedFlight() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (error) {
        console.warn('[AeroVista] Unable to parse stored flight data', error);
        return null;
    }
}

function clearSelectedFlight() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.warn('[AeroVista] Failed to clear stored flight data', error);
    }
}

function renderSummary(container, data) {
    if (!container) return;
    const {
        airline,
        price,
        route = {},
        duration,
        stops,
        departureTime,
        arrivalTime,
        cabinClass,
        passengers = {}
    } = data;

    const passengerChips = buildPassengerChips(passengers);
    const departureLabel = formatDate(route.departureDate);
    const returnLabel = formatDate(route.returnDate);

    container.innerHTML = `
        <article class="summary-section">
            <span class="summary-label">Route</span>
            <div class="route-display">
                <div class="route-city">
                    <span id="summaryFromCity">${formatCity(route.from)}</span>
                    <span class="route-code" id="summaryFromCode" style="display: ${route.fromCode ? 'inline' : 'none'};">${route.fromCode || ''}</span>
                </div>
                <i class="fas fa-arrow-right"></i>
                <div class="route-city">
                    <span id="summaryToCity">${formatCity(route.to)}</span>
                    <span class="route-code" id="summaryToCode" style="display: ${route.toCode ? 'inline' : 'none'};">${route.toCode || ''}</span>
                </div>
            </div>
            <div class="route-inputs" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
                <div class="form-group" style="position: relative;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; margin-bottom: 0.4rem;">
                        <i class="fas fa-plane-departure" style="color: #3b82f6;"></i> From
                    </label>
                    <input type="text" id="paymentFromCity" placeholder="Departure city" 
                           value="${route.from && route.from !== 'Selected City' ? route.from : ''}" 
                           style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1px solid rgba(148, 163, 184, 0.3); background: rgba(15, 23, 42, 0.5); color: rgba(248, 250, 252, 0.95); font-size: 0.9rem;">
                    <div class="suggestions" id="paymentFromSuggestions" style="position: absolute; top: 100%; left: 0; right: 0; z-index: 1000;"></div>
                </div>
                <div class="form-group" style="position: relative;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; margin-bottom: 0.4rem;">
                        <i class="fas fa-plane-arrival" style="color: #3b82f6;"></i> To
                    </label>
                    <input type="text" id="paymentToCity" placeholder="Destination city" 
                           value="${route.to && route.to !== 'Destination' ? route.to : ''}" 
                           style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1px solid rgba(148, 163, 184, 0.3); background: rgba(15, 23, 42, 0.5); color: rgba(248, 250, 252, 0.95); font-size: 0.9rem;">
                    <div class="suggestions" id="paymentToSuggestions" style="position: absolute; top: 100%; left: 0; right: 0; z-index: 1000;"></div>
                </div>
            </div>
        </article>
        <article class="summary-section">
            <span class="summary-label">Schedule</span>
            <div class="summary-meta">
                <div class="meta-card">
                    <span class="meta-title">Departure</span>
                    <span class="meta-value">${departureTime || '--'}${departureLabel ? `<br><small>${departureLabel}</small>` : ''}</span>
                </div>
                <div class="meta-card">
                    <span class="meta-title">Arrival</span>
                    <span class="meta-value">${arrivalTime || '--'}${returnLabel ? `<br><small>${returnLabel}</small>` : ''}</span>
                </div>
                <div class="meta-card">
                    <span class="meta-title">Duration</span>
                    <span class="meta-value">${duration || '--'}</span>
                </div>
                <div class="meta-card">
                    <span class="meta-title">Stops</span>
                    <span class="meta-value">${stops || 'Non-stop'}</span>
                </div>
            </div>
        </article>
        <article class="summary-section">
            <span class="summary-label">Flight details</span>
            <div class="summary-meta">
                <div class="meta-card">
                    <span class="meta-title">Airline</span>
                    <span class="meta-value">${airline || 'Selected flight'}</span>
                </div>
                <div class="meta-card">
                    <span class="meta-title">Cabin class</span>
                    <span class="meta-value">${formatCabin(cabinClass)}</span>
                </div>
            </div>
            <div class="passenger-list">
                ${passengerChips}
            </div>
        </article>
        <article class="summary-section">
            <span class="summary-label">Total payable</span>
            <div class="total-amount">
                <span>Grand total</span>
                <span>${formatCurrency(price || 0)}</span>
            </div>
        </article>
    `;
}

function buildPassengerChips(passengers) {
    const chips = [];
    if (passengers.adult) {
        chips.push(`<span class="passenger-chip">${passengers.adult} Adult${passengers.adult > 1 ? 's' : ''}</span>`);
    }
    if (passengers.child) {
        chips.push(`<span class="passenger-chip">${passengers.child} Child${passengers.child > 1 ? 'ren' : ''}</span>`);
    }
    if (passengers.infant) {
        chips.push(`<span class="passenger-chip">${passengers.infant} Infant${passengers.infant > 1 ? 's' : ''}</span>`);
    }
    if (chips.length === 0) {
        chips.push('<span class="passenger-chip">1 Adult</span>');
    }
    return chips.join('');
}

function validatePaymentForm(formData) {
    const requiredFields = ['fullName', 'email', 'phone', 'cardNumber', 'expiry', 'cvv'];
    for (const field of requiredFields) {
        if (!String(formData.get(field) || '').trim()) {
            return 'Please fill in all required payment details.';
        }
    }

    const cardNumber = String(formData.get('cardNumber')).replace(/\s+/g, '');
    if (!/^\d{13,19}$/.test(cardNumber)) {
        return 'Enter a valid card number.';
    }

    const expiry = String(formData.get('expiry')).trim();
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        return 'Use the MM/YY format for the card expiry date.';
    }
    if (isExpired(expiry)) {
        return 'This card appears to be expired.';
    }

    const cvv = String(formData.get('cvv')).trim();
    if (!/^\d{3,4}$/.test(cvv)) {
        return 'Enter a valid CVV.';
    }

    return '';
}

function isExpired(expiry) {
    const [month, year] = expiry.split('/');
    const expMonth = Number(month);
    const expYear = Number(`20${year}`);
    if (Number.isNaN(expMonth) || Number.isNaN(expYear)) {
        return true;
    }
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    return expYear < currentYear || (expYear === currentYear && expMonth < currentMonth);
}

function showMessage(element, text, state) {
    if (!element) return;
    element.textContent = text;
    element.dataset.state = state;
    element.style.display = 'block';
}

function clearMessage(element) {
    if (!element) return;
    element.textContent = '';
    element.dataset.state = '';
    element.style.display = 'none';
}

function formatCurrency(amount) {
    return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

function formatCity(value) {
    if (!value) return '--';
    const stripped = value.replace(/\s*\([^)]+\)/, '').trim();
    return stripped || '--';
}

function formatCabin(cabin) {
    if (!cabin) return 'Economy';
    const mapping = {
        economy: 'Economy',
        premium: 'Premium Economy',
        business: 'Business',
        first: 'First Class'
    };
    return mapping[cabin.toLowerCase()] || capitalize(cabin);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatCardNumber(value) {
    return value.replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
}

function formatExpiry(value) {
    const cleaned = value.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length <= 2) {
        return cleaned;
    }
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
}

function initializePaymentCitySuggestions(flightData) {
    const fromInput = document.getElementById('paymentFromCity');
    const toInput = document.getElementById('paymentToCity');
    const fromSuggestions = document.getElementById('paymentFromSuggestions');
    const toSuggestions = document.getElementById('paymentToSuggestions');

    if (!fromInput || !toInput || !fromSuggestions || !toSuggestions) return;

    [fromInput, toInput].forEach((input, index) => {
        const suggestionsDiv = index === 0 ? fromSuggestions : toSuggestions;
        const counterpartInput = index === 0 ? toInput : fromInput;
        
        input.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            
            // Update route display in real-time
            if (input.id === 'paymentFromCity') {
                flightData.route.from = value;
                updatePaymentRouteDisplay(flightData);
            } else {
                flightData.route.to = value;
                updatePaymentRouteDisplay(flightData);
            }
            
            // Show suggestions
            const searchValue = value.toLowerCase();
            if (searchValue.length > 0) {
                const filtered = popularCities.filter(city => 
                    city.name.toLowerCase().includes(searchValue) || 
                    city.code.toLowerCase().includes(searchValue) ||
                    city.country.toLowerCase().includes(searchValue)
                );
                showPaymentSuggestions(filtered, suggestionsDiv, input, counterpartInput, flightData);
            } else {
                showPaymentSuggestions(popularCities, suggestionsDiv, input, counterpartInput, flightData);
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
                showPaymentSuggestions(filtered, suggestionsDiv, input, counterpartInput, flightData);
            } else {
                showPaymentSuggestions(popularCities, suggestionsDiv, input, counterpartInput, flightData);
            }
        });

        let suggestionHideTimeout;
        const hideSuggestions = () => {
            suggestionsDiv.classList.remove('show');
            suggestionsDiv.style.display = 'none';
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
        suggestionsDiv.addEventListener('pointerleave', scheduleSuggestionsHide);
    });

    document.addEventListener('click', (e) => {
        if (!fromInput.contains(e.target) && !fromSuggestions.contains(e.target)) {
            fromSuggestions.classList.remove('show');
            fromSuggestions.style.display = 'none';
        }
        if (!toInput.contains(e.target) && !toSuggestions.contains(e.target)) {
            toSuggestions.classList.remove('show');
            toSuggestions.style.display = 'none';
        }
    });
}

function showPaymentSuggestions(cities, container, input, counterpartInput, flightData) {
    if (!container) return;
    
    const counterpartKey = counterpartInput ? normalizeLocation(counterpartInput.value) : '';
    const filteredCities = cities.filter(city => {
        if (!counterpartKey) return true;
        return normalizeLocation(`${city.name} (${city.code})`) !== counterpartKey;
    });

    container.innerHTML = '';
    const innerWrapper = document.createElement('div');
    innerWrapper.className = 'suggestions-inner';
    container.appendChild(innerWrapper);
    
    if (filteredCities.length === 0) {
        container.classList.remove('show');
        container.style.display = 'none';
        return;
    }
    
    const citiesToShow = filteredCities.length > 15 ? filteredCities.slice(0, 15) : filteredCities;
    
    citiesToShow.forEach((city) => {
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
            const cityValue = `${city.name} (${city.code})`;
            input.value = cityValue;
            
            // Update flight data
            if (input.id === 'paymentFromCity') {
                flightData.route.from = cityValue;
                flightData.route.fromCode = city.code;
            } else {
                flightData.route.to = cityValue;
                flightData.route.toCode = city.code;
            }
            
            // Update summary display
            updatePaymentRouteDisplay(flightData);
            
            container.classList.remove('show');
            container.style.display = 'none';
            input.focus();
        });
        
        innerWrapper.appendChild(item);
    });
    
    container.style.display = 'block';
    container.classList.add('show');
}

function updatePaymentRouteDisplay(data) {
    const fromCityEl = document.getElementById('summaryFromCity');
    const toCityEl = document.getElementById('summaryToCity');
    const fromCodeEl = document.getElementById('summaryFromCode');
    const toCodeEl = document.getElementById('summaryToCode');

    if (fromCityEl && data.route?.from) {
        fromCityEl.textContent = formatCity(data.route.from);
    }
    if (toCityEl && data.route?.to) {
        toCityEl.textContent = formatCity(data.route.to);
    }
    if (fromCodeEl) {
        if (data.route?.fromCode) {
            fromCodeEl.textContent = data.route.fromCode;
            fromCodeEl.style.display = 'inline';
        } else {
            fromCodeEl.style.display = 'none';
        }
    }
    if (toCodeEl) {
        if (data.route?.toCode) {
            toCodeEl.textContent = data.route.toCode;
            toCodeEl.style.display = 'inline';
        } else {
            toCodeEl.style.display = 'none';
        }
    }
}

function normalizeLocation(value) {
    if (!value) return '';
    return value.toLowerCase().trim().replace(/\s+/g, ' ');
}

