(function() {
    // Mock data แทนระบบฐานข้อมูล
    const mockUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'admin', password: 'admin' },
    ];

    function initLogin() {
        const clientId = document.getElementById('g_id_onload').getAttribute('data-client_id');
        const autoPrompt = document.getElementById('g_id_onload').getAttribute('data-auto_prompt') === 'true';

        if (autoPrompt) {
            performLogin(clientId);
        }
    }

    function performLogin(clientId) {
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");

        // ตรวจสอบข้อมูลกับ Mock Data
        const user = mockUsers.find(user => user.username === username && user.password === password);

        if (user) {
            // Login สำเร็จ
            if (typeof window.OnSuccess === 'function') {
                window.OnSuccess();
            }
        } else {
            // Login ล้มเหลว
            alert('Login failed: Invalid username or password');
        }
    }

    document.addEventListener("DOMContentLoaded", initLogin);
})();
