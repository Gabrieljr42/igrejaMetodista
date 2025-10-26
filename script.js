// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Calendar functionality
let currentDate = new Date();

function generateCalendar(year, month) {
    const calendarDays = document.getElementById('calendarDays');
    const calendarTitle = document.getElementById('calendarTitle');
    
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                       'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    calendarTitle.textContent = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayOfWeek = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();
    
    const today = new Date();
    
    let daysHTML = '';
    
    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        daysHTML += `<div class="calendar-day other-month">
            <div class="day-number">${prevLastDate - i}</div>
        </div>`;
    }
    
    // Current month days
    for (let day = 1; day <= lastDateOfMonth; day++) {
        const currentDateObj = new Date(year, month, day);
        const dayOfWeek = currentDateObj.getDay();
        
        let classes = 'calendar-day';
        if (dayOfWeek === 0) classes += ' sunday';
        if (today.getDate() === day && today.getMonth() === month && today.getFullYear() === year) {
            classes += ' today';
        }
        
        const events = getEventsForDate(currentDateObj, year, month, day);
        
        daysHTML += `<div class="${classes}">
            <div class="day-number">${day}</div>
            <div class="day-events">${events}</div>
        </div>`;
    }
    
    // Next month days to fill the grid
    const totalCells = Math.ceil((firstDayOfWeek + lastDateOfMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDayOfWeek + lastDateOfMonth);
    
    for (let i = 1; i <= remainingCells; i++) {
        daysHTML += `<div class="calendar-day other-month">
            <div class="day-number">${i}</div>
        </div>`;
    }
    
    calendarDays.innerHTML = daysHTML;
}

function getEventsForDate(date, year, month, day) {
    const dayOfWeek = date.getDay();
    
    // Calcular a semana do mês corretamente
    // Pega o primeiro dia do mês e calcula quantos dias desde o primeiro domingo
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    
    // Ajusta para considerar a semana começando no domingo
    const daysSinceFirstSunday = day + firstDayOfWeek - 1;
    const weekOfMonth = Math.floor(daysSinceFirstSunday / 7) + 1;
    
    let eventsHTML = '';
    
    // Domingo - Culto Dominical (19:00)
    if (dayOfWeek === 0) {
        eventsHTML += '<div class="event-dot">Culto 19h</div>';
    }
    
    // Segunda - Reunião de Intercessão (19:00)
    if (dayOfWeek === 1) {
        eventsHTML += '<div class="event-dot">Intercessão 19h</div>';
    }
    
    // Terça - Semana de Oração (segunda semana, 06:30)
    if (dayOfWeek === 2 && weekOfMonth === 2) {
        eventsHTML += '<div class="event-dot special-week">Oração 6:30</div>';
    }
    
    // Quarta - Culto de Oração (19:30) + Semana de Oração (segunda semana, 06:30)
    if (dayOfWeek === 3) {
        eventsHTML += '<div class="event-dot">Culto 19:30</div>';
        if (weekOfMonth === 2) {
            eventsHTML += '<div class="event-dot special-week">Oração 6:30</div>';
        }
    }
    
    // Quinta - Chá das Rosas (quinzenal, 19:00) + Semana de Oração (segunda semana, 06:30)
    if (dayOfWeek === 4) {
        // Chá das Rosas a cada 15 dias (semanas 2 e 4)
        if (weekOfMonth === 2 || weekOfMonth === 4) {
            eventsHTML += '<div class="event-dot biweekly">Chá 19h</div>';
        }
        if (weekOfMonth === 2) {
            eventsHTML += '<div class="event-dot special-week">Oração 6:30</div>';
        }
    }
    
    // Sexta - Café dos Homens (19:00) + Semana de Oração (segunda semana, 06:30)
    if (dayOfWeek === 5) {
        eventsHTML += '<div class="event-dot">Café 19h</div>';
        if (weekOfMonth === 2) {
            eventsHTML += '<div class="event-dot special-week">Oração 6:30</div>';
        }
    }
    
    // Sábado - Culto de Jovens (quinzenal, 19:30)
    if (dayOfWeek === 6) {
        // Culto de Jovens a cada 15 dias (semanas 1 e 3)
        if (weekOfMonth === 1 || weekOfMonth === 3) {
            eventsHTML += '<div class="event-dot biweekly">Jovens 19:30</div>';
        }
    }
    
    return eventsHTML;
}

// Calendar navigation
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Initialize calendar
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide form fields based on visit type
const visitType = document.getElementById('visitType');
const cultoOptions = document.getElementById('cultoOptions');
const horarioLivreOptions = document.getElementById('horarioLivreOptions');

visitType.addEventListener('change', function() {
    if (this.value === 'culto') {
        cultoOptions.style.display = 'block';
        horarioLivreOptions.style.display = 'none';
        document.getElementById('preferredEvent').required = true;
        document.getElementById('customTime').required = false;
    } else if (this.value === 'horario-livre') {
        cultoOptions.style.display = 'none';
        horarioLivreOptions.style.display = 'block';
        document.getElementById('preferredEvent').required = false;
        document.getElementById('customTime').required = true;
    } else {
        cultoOptions.style.display = 'none';
        horarioLivreOptions.style.display = 'none';
        document.getElementById('preferredEvent').required = false;
        document.getElementById('customTime').required = false;
    }
});

// Form Validation and WhatsApp Integration
const visitForm = document.getElementById('visitForm');

visitForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const visitTypeValue = document.getElementById('visitType').value;
    const preferredEvent = document.getElementById('preferredEvent').value;
    const customTime = document.getElementById('customTime').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    let isValid = true;
    
    if (!name) {
        showError('name', 'Por favor, informe seu nome completo');
        isValid = false;
    }
    
    if (!address) {
        showError('address', 'Por favor, informe seu endereço');
        isValid = false;
    }
    
    if (!visitTypeValue) {
        showError('visitType', 'Por favor, selecione o tipo de visita');
        isValid = false;
    }
    
    if (visitTypeValue === 'culto' && !preferredEvent) {
        showError('preferredEvent', 'Por favor, selecione um evento');
        isValid = false;
    }
    
    if (visitTypeValue === 'horario-livre' && !customTime) {
        showError('customTime', 'Por favor, informe seu horário disponível');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Determine the time info
    let timeInfo = '';
    if (visitTypeValue === 'culto') {
        timeInfo = preferredEvent;
    } else {
        timeInfo = customTime;
    }
    
    // Format WhatsApp message
    let whatsappMessage = `Olá! Gostaria de agendar uma visita à Igreja Metodista em Ouro Branco.\n\n`;
    whatsappMessage += `*Nome:* ${name}\n`;
    whatsappMessage += `*Endereço:* ${address}\n`;
    
    if (phone) {
        whatsappMessage += `*Telefone:* ${phone}\n`;
    }
    
    if (visitTypeValue === 'culto') {
        whatsappMessage += `*Tipo de Visita:* Participar de evento\n`;
        whatsappMessage += `*Evento:* ${timeInfo}\n`;
    } else {
        whatsappMessage += `*Tipo de Visita:* Horário livre para conversar\n`;
        whatsappMessage += `*Horário Disponível:* ${timeInfo}\n`;
    }
    
    if (message) {
        whatsappMessage += `*Mensagem:* ${message}\n`;
    }
    
    whatsappMessage += `\nAguardo retorno. Obrigado!`;
    
    // Generate WhatsApp URL
    const phoneNumber = '5531981016863';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    visitForm.reset();
    
    // Show success message
    alert('Redirecionando para o WhatsApp...');
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
    }
    field.focus();
}

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.info-card, .schedule-card, .ministry-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
