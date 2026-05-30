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