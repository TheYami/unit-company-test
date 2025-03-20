document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const telInput = document.querySelector('input[type="tel"]');
    const validPhoneNumber = '0943135555';


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneNumber = telInput.value.trim();

        if (!phoneNumber) {
            alert('กรุณากรอกหมายเลขโทรศัพท์');
            return;
        }

        if (phoneNumber !== validPhoneNumber) {
            alert('เข้าสู่ระบบไม่สำเร็จ หมายเลขโทรศัพท์ไม่ถูกต้อง');
            return;
        }

        if (phoneNumber.length !== 10) {
            alert('หมายเลขโทรศัพท์ต้องมี 10 หลัก');
            return;
        }

        window.location.href = 'pin.html';
    });
});