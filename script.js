// script.js
document.getElementById("attendance-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai dari input
    let name = document.getElementById("employee-name").value;
    let date = document.getElementById("attendance-date").value;
    let status = document.getElementById("attendance-status").value;

    // Cek apakah data sudah diisi dengan benar
    if (name && date && status) {
        // Buat baris tabel baru
        let table = document.getElementById("attendance-table").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow();

        // Masukkan data ke dalam sel-sel tabel
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.textContent = name;
        cell2.textContent = date;
        cell3.textContent = status;

        // Kosongkan form setelah data dimasukkan
        document.getElementById("employee-name").value = "";
        document.getElementById("attendance-date").value = "";
        document.getElementById("attendance-status").value = "Hadir";
    }
});
