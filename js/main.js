document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PASSWORD TOGGLE (GENERIC)
    ========================== */
    const toggles = document.querySelectorAll(".toggle-password");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {

            // Eğer data-target varsa onu kullan
            const targetId = this.getAttribute("data-target");

            // Yoksa input sibling'ını bul (login sayfası için)
            const input = targetId
                ? document.getElementById(targetId)
                : this.parentElement.querySelector("input");

            if (!input) return;

            const type = input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);

            // İkon değiştirme (isteğe bağlı)
            this.textContent = type === "password" ? "👁" : "🙈";
        });
    });


    /* =========================
       LOGIN FORM
    ========================== */
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value.trim();

            if (!email || !password) {
                alert("Lütfen tüm alanları doldurun.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Geçerli bir e-posta giriniz.");
                return;
            }

            alert("Giriş başarılı (demo)");
        });
    }


    /* =========================
       REGISTER FORM
    ========================== */
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("fullname")?.value.trim();
            const username = document.getElementById("username")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value.trim();
            const passwordConfirm = document.getElementById("passwordConfirm")?.value.trim();
            const country = document.getElementById("country")?.value;

            if (!fullname || !username || !email || !password || !passwordConfirm || !country) {
                alert("Lütfen tüm alanları doldurun.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Geçerli bir e-posta giriniz.");
                return;
            }

            if (password.length < 6) {
                alert("Şifre en az 6 karakter olmalıdır.");
                return;
            }

            if (password !== passwordConfirm) {
                alert("Şifreler uyuşmuyor!");
                return;
            }

            alert("Kayıt başarılı (demo)");
        });
    }

    /* =========================
       RESET PASSWORD FORM
    ========================== */
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    if (resetPasswordForm) {
        resetPasswordForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email")?.value.trim();

            if (!email) {
                alert("Lütfen e-posta adresinizi girin.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Geçerli bir e-posta giriniz.");
                return;
            }

            // Başarılı işlem simülasyonu
            alert("Şifre sıfırlama bağlantısı " + email + " adresine gönderildi.");
        });
    }

    


    /* =========================
       EMAIL VALIDATION
    ========================== */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

});