let destination = '';

function openModal(type) {
    destination = type === 'student' ? 'student-dashboard.html' : 'instructor-dashboard.html';

    document.getElementById('modalIcon').textContent     = type === 'student' ? '🎓' : '🏛️';
    document.getElementById('modalTitle').textContent    = type === 'student' ? 'Student Login' : 'Instructor Login';
    document.getElementById('modalSubtitle').textContent = type === 'student' ? 'Sign in to access your academic dashboard.' : 'Admin access for course management.';
    document.getElementById('modalSubmit').className     = 'modal-submit ' + type;
    document.getElementById('modalIcon').className       = 'modal-icon ' + type;

    document.getElementById('loginModal').classList.add('active');
}

function closeModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function handleLogin() {
    window.location.href = destination;
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('loginModal')) closeModal();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter') handleLogin();
});
