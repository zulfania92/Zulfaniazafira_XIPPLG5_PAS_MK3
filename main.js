// main.js

// Array untuk menyimpan item-item yang ada di keranjang belanja
var cart = [];

// Fungsi untuk menambahkan item ke keranjang belanja
function addToCart(namaRoti, hargaRoti) {
    // Menambahkan item ke array cart
    cart.push({
        name: namaRoti,
        price: hargaRoti
    });

    // Ambil elemen daftar belanja dari DOM
    var cartItems = document.getElementById("cart-items");

    // Buat elemen baru untuk item belanja
    var listItem = document.createElement("li");
    listItem.textContent = namaRoti + " - Rp " + hargaRoti;

    // Tambahkan elemen item belanja ke daftar belanja
    cartItems.appendChild(listItem);

    // Hitung dan update total belanja
    updateTotal(hargaRoti);
}

// Fungsi untuk menghitung dan memperbarui total belanja
function updateTotal(harga) {
    // Ambil elemen total dari DOM
    var totalElement = document.getElementById("total");

    // Ambil nilai total sebelumnya, hapus "Rp " dan ubah menjadi angka
    var total = parseInt(totalElement.textContent.replace("Rp ", ""));

    // Tambahkan harga baru ke total
    total += harga;

    // Perbarui elemen total dengan format mata uang
    totalElement.textContent = "Rp " + total;
}

// Fungsi untuk menampilkan detail transaksi pada struk/nota
function showReceipt() {
    // Ambil elemen struk/nota dari DOM
    var receiptItems = document.getElementById("receipt-items");
    receiptItems.innerHTML = '';

    // Menambahkan item ke struk/nota
    cart.forEach(item => {
        var li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        receiptItems.appendChild(li);
    });

    // Ambil total belanja dari elemen total
    var totalBelanja = parseInt(document.getElementById("total").textContent.replace("Rp ", ""));

    // Ambil uang bayar dari input
    var uangBayar = parseInt(document.getElementById("uangBayar").value);

    // Hitung kembalian
    var kembalian = uangBayar - totalBelanja;

    // Tampilkan detail transaksi pada struk/nota
    document.getElementById("total-receipt").textContent = "Rp " + totalBelanja;
    document.getElementById("bayar-receipt").textContent = "Rp " + uangBayar;
    document.getElementById("kembali-receipt").textContent = "Rp " + kembalian;

    // Tampilkan struk/nota
    document.getElementById("receipt").style.display = "block";
}

// Fungsi untuk menghitung kembalian dan menampilkan struk/nota
function hitungKembalian() {
    // Panggil fungsi showReceipt untuk menampilkan struk/nota
    showReceipt();
}
