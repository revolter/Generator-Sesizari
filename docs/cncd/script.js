// Form utilities
function getFormValues() {
    return {
        nume: document.getElementById("nume").value.trim(),
        adresa: document.getElementById("adresa").value.trim(),
        reprezentant: document.getElementById("reprezentant").value.trim(),
        data_eveniment: document.getElementById("data_eveniment").value,
        nume_reclamat: document.getElementById("nume_reclamat").value.trim(),
        adresa_reclamat: document.getElementById("adresa_reclamat").value.trim(),
        descriere: document.getElementById("descriere").value.trim(),
        dovezi: document.getElementById("dovezi").value.trim(),
        articole: document.getElementById("articole").value.trim()
    };
}

// Form validation
function validateForm() {
    const values = getFormValues();
    const errors = [];

    // Required field validation
    if (!values.nume) {
        errors.push('Numele complet este obligatoriu');
        highlightField('nume', true);
    } else if (values.nume.length < 2) {
        errors.push('Numele trebuie să aibă cel puțin 2 caractere');
        highlightField('nume', true);
    } else {
        highlightField('nume', false);
    }

    if (!values.adresa) {
        errors.push('Adresa de corespondență este obligatorie');
        highlightField('adresa', true);
    } else if (values.adresa.length < 10) {
        errors.push('Adresa trebuie să fie mai detaliată (cel puțin 10 caractere)');
        highlightField('adresa', true);
    } else {
        highlightField('adresa', false);
    }

    if (!values.data_eveniment) {
        errors.push('Data evenimentului este obligatorie');
        highlightField('data_eveniment', true);
    } else if (values.data_eveniment.length < 3) {
        errors.push('Data evenimentului trebuie să aibă cel puțin 3 caractere');
        highlightField('data_eveniment', true);
    } else {
        highlightField('data_eveniment', false);
    }

    if (!values.nume_reclamat) {
        errors.push('Numele persoanei/instituției reclamate este obligatoriu');
        highlightField('nume_reclamat', true);
    } else if (values.nume_reclamat.length < 2) {
        errors.push('Numele persoanei/instituției reclamate trebuie să aibă cel puțin 2 caractere');
        highlightField('nume_reclamat', true);
    } else {
        highlightField('nume_reclamat', false);
    }

    if (!values.adresa_reclamat) {
        errors.push('Adresa instituției/persoanei reclamate este obligatorie');
        highlightField('adresa_reclamat', true);
    } else if (values.adresa_reclamat.length < 10) {
        errors.push('Adresa instituției/persoanei reclamate trebuie să fie mai detaliată (cel puțin 10 caractere)');
        highlightField('adresa_reclamat', true);
    } else {
        highlightField('adresa_reclamat', false);
    }

    if (!values.descriere) {
        errors.push('Descrierea detaliată a faptei este obligatorie');
        highlightField('descriere', true);
    } else if (values.descriere.length < 50) {
        errors.push('Descrierea trebuie să fie mai detaliată (cel puțin 50 de caractere)');
        highlightField('descriere', true);
    } else {
        highlightField('descriere', false);
    }

    if (!values.dovezi) {
        errors.push('Dovezile sunt obligatorii');
        highlightField('dovezi', true);
    } else if (values.dovezi.length < 50) {
        errors.push('Dovezile trebuie să fie mai detaliate (cel puțin 50 de caractere)');
        highlightField('dovezi', true);
    } else {
        highlightField('dovezi', false);
    }

    // Signature validation
    const signatureDataUrl = getSignatureDataUrl();
    if (!signatureDataUrl) {
        errors.push('Semnătura este obligatorie');
        highlightCanvas(true);
    } else {
        highlightCanvas(false);
    }

    return { isValid: errors.length === 0, errors };
}

// Field highlighting with accessibility
function highlightField(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    const helpElement = document.getElementById(`${fieldId}-help`);

    if (hasError) {
        field.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        field.classList.remove('border-gray-300', 'focus:ring-blue-500', 'focus:border-blue-500');
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', `${fieldId}-help`);

        // Update help text to show error
        if (helpElement) {
            helpElement.classList.add('text-red-600');
            helpElement.classList.remove('text-gray-600');
            helpElement.textContent = `Eroare: ${getErrorMessage(fieldId)}`;
        }
    } else {
        field.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        field.classList.add('border-gray-300', 'focus:ring-blue-500', 'focus:border-blue-500');
        field.setAttribute('aria-invalid', 'false');

        // Restore original help text
        if (helpElement) {
            helpElement.classList.remove('text-red-600');
            helpElement.classList.add('text-gray-600');
            restoreHelpText(fieldId);
        }
    }
}

// Canvas highlighting with accessibility
function highlightCanvas(hasError) {
    const canvas = document.getElementById('signature-canvas');
    if (hasError) {
        canvas.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        canvas.classList.remove('border-gray-300', 'focus:ring-blue-500', 'focus:border-blue-500');
        canvas.setAttribute('aria-invalid', 'true');
        canvas.setAttribute('aria-describedby', 'signature-error');
    } else {
        canvas.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
        canvas.classList.add('border-gray-300', 'focus:ring-blue-500', 'focus:border-blue-500');
        canvas.setAttribute('aria-invalid', 'false');
        canvas.removeAttribute('aria-describedby');
    }
}

// Get error message for specific field
function getErrorMessage(fieldId) {
    const errorMessages = {
        'nume': 'Numele trebuie să aibă cel puțin 2 caractere',
        'adresa': 'Adresa trebuie să fie mai detaliată (cel puțin 10 caractere)',
        'data_eveniment': 'Data evenimentului trebuie să aibă cel puțin 3 caractere',
        'nume_reclamat': 'Numele persoanei/instituției reclamate trebuie să aibă cel puțin 2 caractere',
        'adresa_reclamat': 'Adresa instituției/persoanei reclamate trebuie să fie mai detaliată (cel puțin 10 caractere)',
        'descriere': 'Descrierea trebuie să fie mai detaliată (cel puțin 50 de caractere)',
        'dovezi': 'Dovezile trebuie să fie mai detaliate (cel puțin 50 de caractere)'
    };
    return errorMessages[fieldId] || 'Câmp obligatoriu';
}

// Restore original help text
function restoreHelpText(fieldId) {
    const helpElement = document.getElementById(`${fieldId}-help`);
    if (helpElement) {
        // Get the original help text from the data-original-text attribute
        // If not set, use the current text content as fallback
        const originalText = helpElement.getAttribute('data-original-text') || helpElement.textContent;
        helpElement.textContent = originalText;
    }
}

// Screen reader announcement
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Signature canvas functionality with accessibility
const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');

// Set high resolution canvas (2x the visual size for crisp drawing)
const scale = 2;
canvas.width = 400 * scale;
canvas.height = 120 * scale;

// Scale the context to match the visual size
ctx.scale(scale, scale);

let drawing = false;
let wasOutside = false;
let lastX = 0, lastY = 0;

// Get canvas coordinates from mouse/touch event
function getCanvasCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / (rect.width * scale);
    const scaleY = canvas.height / (rect.height * scale);

    let clientX, clientY;

    if (e.touches && e.touches.length > 0) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
    }

    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

// Global mouse events to handle mouse release outside canvas
document.addEventListener('mouseup', () => {
    drawing = false;
    wasOutside = false;
});

document.addEventListener('mouseleave', () => {
    drawing = false;
    wasOutside = false;
});

// Mouse events
canvas.addEventListener('mousedown', e => {
    e.preventDefault();
    drawing = true;
    const coords = getCanvasCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
    // Clear error state when user starts drawing
    highlightCanvas(false);
    announceToScreenReader('Semnătura a început');
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    announceToScreenReader('Semnătura a fost finalizată');
});

canvas.addEventListener('mouseout', () => wasOutside = true);
canvas.addEventListener('mousemove', draw);

// Touch events for mobile
canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    drawing = true;
    const coords = getCanvasCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
    // Clear error state when user starts drawing
    highlightCanvas(false);
    announceToScreenReader('Semnătura a început');
});

canvas.addEventListener('touchend', e => {
    e.preventDefault();
    drawing = false;
    announceToScreenReader('Semnătura a fost finalizată');
});

canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const coords = getCanvasCoordinates(e);
    draw({ clientX: coords.x, clientY: coords.y });
});

// Keyboard events for accessibility
canvas.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        announceToScreenReader('Pentru a desena semnătura, folosiți mouse-ul sau degetul pe dispozitive touch');
    }
});

function draw(e) {
    if (!drawing) return;

    const coords = getCanvasCoordinates(e);
    const x = coords.x;
    const y = coords.y;

    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#222';
    ctx.beginPath();

    if (wasOutside) {
        wasOutside = false;
    } else {
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    [lastX, lastY] = [x, y];
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
    announceToScreenReader('Semnătura a fost ștearsă');
}

function getSignatureDataUrl() {
    // Returns image only if something is drawn
    const blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    if (canvas.toDataURL() === blank.toDataURL()) return null;
    return canvas.toDataURL('image/png');
}

// Permalink generation with enhanced URL handling and accessibility
function generatePermalink() {
    const values = getFormValues();
    const params = new URLSearchParams();

    // Add form values to URL parameters with proper encoding
    Object.keys(values).forEach(key => {
        if (values[key] && values[key].trim()) {
            // Properly encode the value to handle special characters
            const encodedValue = encodeURIComponent(values[key].trim());
            params.set(key, encodedValue);
        }
    });

    // Check if we have any parameters
    if (params.toString().length === 0) {
        announceToScreenReader('Nu există date pentru a genera un link permanent');
        return;
    }

    // Create the permalink URL
    const baseUrl = window.location.origin + window.location.pathname;
    const queryString = params.toString();
    let fullUrl = baseUrl + '?' + queryString;

    // Check URL length (browsers typically have a limit around 2000-8000 characters)
    const maxUrlLength = 2000; // Conservative limit for compatibility
    if (fullUrl.length > maxUrlLength) {
        fullUrl = truncateLongUrl(baseUrl, params, maxUrlLength);
    }

    // Create the permalink URL and redirect to it
    announceToScreenReader('Link permanent generat. Redirecționare...');
    window.location.href = fullUrl;
}

// Handle URLs that exceed the maximum length
function truncateLongUrl(baseUrl, params, maxUrlLength) {
    // Try to truncate the longest field first
    const fieldLengths = {};
    params.forEach((value, key) => {
        fieldLengths[key] = value.length;
    });

    // Sort fields by length (longest first)
    const sortedFields = Object.keys(fieldLengths).sort((a, b) => fieldLengths[b] - fieldLengths[a]);

    // Try to create a shorter URL by truncating the longest field
    const shortenedParams = new URLSearchParams();
    let currentLength = baseUrl.length + 1; // +1 for the '?' character

    for (const field of sortedFields) {
        const value = params.get(field);
        const encodedField = encodeURIComponent(field);
        const encodedValue = value;

        // Calculate length if we add this field
        const fieldLength = encodedField.length + encodedValue.length + 2; // +2 for '=' and '&'

        if (currentLength + fieldLength <= maxUrlLength) {
            shortenedParams.set(field, value);
            currentLength += fieldLength;
        } else {
            // Try to truncate this field
            const maxValueLength = maxUrlLength - currentLength - encodedField.length - 2;
            if (maxValueLength > 10) { // Ensure we have at least 10 characters
                const truncatedValue = value.substring(0, maxValueLength - 3) + '...';
                shortenedParams.set(field, truncatedValue);
                break;
            }
        }
    }

    const shortenedUrl = baseUrl + '?' + shortenedParams.toString();

    return shortenedUrl;
}

// PDF generation with enhanced error handling and accessibility
async function generatePDF(event) {
    event.preventDefault();

    // Validate form first
    const validation = validateForm();
    if (!validation.isValid) {
        // Show first error in a toast-like notification
        if (validation.errors.length > 0) {
            announceToScreenReader(`Eroare: ${validation.errors[0]}`);
        }

        // Scroll to the first field with an error
        const firstErrorField = document.querySelector('input[aria-invalid="true"], textarea[aria-invalid="true"], canvas[aria-invalid="true"]');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        return;
    }

    const values = getFormValues();
    const signatureDataUrl = getSignatureDataUrl();

    // Show loading state
    const submitButton = document.getElementById('submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Se generează PDF...';
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');

    try {
        // Load Markdown template with error handling
        const templateResponse = await fetch('template.md');
        if (!templateResponse.ok) {
            throw new Error(`Eroare la încărcarea template-ului: ${templateResponse.status} ${templateResponse.statusText}`);
        }

        let template = await templateResponse.text();
        if (!template) {
            throw new Error('Template-ul este gol sau nu a putut fi încărcat');
        }

        // Replace variables with form values
        const replacements = {
            '{NUME}': values.nume,
            '{ADRESA}': values.adresa,
            '{REPREZENTANT}': values.reprezentant || '',
            '{DATA_EVENIMENT}': values.data_eveniment || '',
            '{NUME_RECLAMAT}': values.nume_reclamat,
            '{ADRESA_RECLAMAT}': values.adresa_reclamat,
            '{DESCRIERE}': values.descriere,
            '{DOVEZI}': values.dovezi || '',
            '{ARTICOLE}': values.articole || '....................',
            '{DATA}': new Date().toLocaleDateString('ro-RO'),
            '{SEMNATURA}': '' // Will be added as image
        };

        Object.keys(replacements).forEach(key => {
            template = template.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacements[key]);
        });

        const htmlContent = marked.parse(template);

        const preview = document.getElementById('preview');
        preview.innerHTML = htmlContent;
        preview.classList.remove('hidden');
        preview.classList.add('block');
        preview.setAttribute('aria-hidden', 'false');

        // Add signature in the right place
        const signatureImg = document.createElement('img');
        signatureImg.src = signatureDataUrl;
        signatureImg.className = 'max-w-xs h-auto border border-gray-300 rounded';
        signatureImg.alt = 'Semnătura digitală';

        // Replace underline placeholder for signature with image
        const signatureNode = preview.querySelector('#semnatura');
        if (signatureNode) {
            signatureNode.appendChild(signatureImg);
        }

        // Create PDF document with error handling
        await html2pdf()
            .from(preview)
            .set({
                pagebreak: { mode: ['avoid-all'] },
                margin: 1,
                filename: `Sesizare_CNCD_${values.nume_reclamat.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            })
            .save();

        preview.classList.add('hidden');
        preview.classList.remove('block');
        preview.setAttribute('aria-hidden', 'true');

        // Set and display email links
        const nume = encodeURIComponent(values.nume);
        const subject = encodeURIComponent(`Sesizare discriminare - ${values.nume}`);
        const body = encodeURIComponent(
            `Bună ziua,\n\nVă transmit, atașat, sesizarea completată și semnată privind o posibilă faptă de discriminare.\n\nVă rog să confirmați primirea și să-mi comunicați numărul de înregistrare.\n\nCu stimă,\n${values.nume}`
        );

        document.getElementById('gmail-link').href = `https://mail.google.com/mail/?view=cm&fs=1&to=support@cncd.ro&su=${subject}&body=${body}`;
        document.getElementById('mailto-link').href = `mailto:support@cncd.ro?subject=${subject}&body=${body}`;

        const emailLinks = document.getElementById('email-links');
        emailLinks.classList.remove('hidden');
        emailLinks.classList.add('block');
        emailLinks.setAttribute('aria-hidden', 'false');

        announceToScreenReader('PDF generat cu succes. Link-urile pentru email sunt disponibile.');

        emailLinks.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    } catch (error) {
        console.error('Error generating PDF:', error);
        announceToScreenReader(`Eroare la generarea PDF-ului: ${error.message}`);
    } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.setAttribute('aria-busy', 'false');
    }
}

// Initialize form with URL parameters
function initializeForm() {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
        const el = document.getElementById(key);
        if (el) {
            el.value = decodeURIComponent(value);
        }
    });
}

// Add real-time validation with accessibility
function addRealTimeValidation() {
    const formFields = ['nume', 'adresa', 'data_eveniment', 'nume_reclamat', 'adresa_reclamat', 'descriere', 'dovezi'];

    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => {
                const values = getFormValues();
                const fieldValue = values[fieldId];

                if (fieldValue) {
                    // Basic validation on blur
                    let isValid = true;

                    switch (fieldId) {
                        case 'nume':
                            isValid = fieldValue.length >= 2;
                            break;
                        case 'adresa':
                            isValid = fieldValue.length >= 10;
                            break;
                        case 'data_eveniment':
                            isValid = fieldValue.length >= 3;
                            break;
                        case 'nume_reclamat':
                            isValid = fieldValue.length >= 2;
                            break;
                        case 'adresa_reclamat':
                            isValid = fieldValue.length >= 10;
                            break;
                        case 'descriere':
                            isValid = fieldValue.length >= 50;
                            break;
                        case 'dovezi':
                            isValid = fieldValue.length >= 50;
                            break;
                        default:
                            isValid = fieldValue.length > 0;
                    }

                    highlightField(fieldId, !isValid);
                }
            });
        }
    });
}

// Add keyboard navigation support
function addKeyboardNavigation() {
    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#form-heading';
    skipLink.className = 'absolute top-[-40px] left-6 bg-blue-500 text-white px-2 py-1 rounded text-sm no-underline z-50 focus:top-6';
    skipLink.textContent = 'Sari la formular';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            const submitButton = document.getElementById('submit-button');
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }

        // Escape to clear signature
        if (e.key === 'Escape') {
            const canvas = document.getElementById('signature-canvas');
            if (document.activeElement === canvas) {
                clearSignature();
            }
        }
    });
}

// Initialize help text by storing original text in data attributes
function initializeHelpText() {
    const helpElements = document.querySelectorAll('[id$="-help"]');
    helpElements.forEach(element => {
        // Store the original text content if not already stored
        if (!element.getAttribute('data-original-text')) {
            element.setAttribute('data-original-text', element.textContent);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeHelpText();
    initializeForm();
    addRealTimeValidation();
    addKeyboardNavigation();

    // Announce page load to screen readers
    announceToScreenReader('Formular de sesizare CNCD încărcat. Completează câmpurile pentru a genera o sesizare.');
});
