$(document).ready(function() {

    function hitungTotal() {
        let hargaPerKilo = parseInt($("#coffeeType").val());
        let jumlahKilo = parseInt($("#quantity").val());

        if (isNaN(jumlahKilo) || jumlahKilo < 1) {
            jumlahKilo = 1;
        }

        let total = hargaPerKilo * jumlahKilo;

        $("#totalDisplay").text("Rp " + total.toLocaleString('id-ID'));
    }

   
    $("#coffeeType, #quantity").on("input change", function() {
        hitungTotal();
    });

    const dataSeduh = {
        espresso: {
            title: "Espresso Machine",
            grind: "Fine (Sangat Halus)",
            desc: "Metode ekstraksi cepat bertekanan tinggi. Memerlukan tingkat gilingan yang sangat halus agar bodi kopi keluar dengan pekat dan menghasilkan krema optimal."
        },
        pourover: {
            title: "Pour Over (V60 Drip)",
            grind: "Medium-Fine (Sedikit Halus)",
            desc: "Metode penyaringan manual menggunakan kertas filter. Membutuhkan presisi aliran air panas guna memunculkan karakteristik notes rasa buah (*fruity*) dan tingkat kejernihan yang tinggi."
        },
        frenchpress: {
            title: "French Press (Plunger)",
            grind: "Coarse (Kasar)",
            desc: "Sistem perendaman penuh (*immersion*) tanpa kertas saring. Potongan buncis harus berukuran kasar agar tidak lolos dari jaring saringan metal, membuahkan tekstur rasa pekat yang tebal."
        }
    };