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
    $(".btn-brew-toggle").on("click", function() {
        // Mengubah status kelas tombol aktif Bootstrap
        $(".btn-brew-toggle").removeClass("active");
        $(this).addClass("active");

      
        let metodePilihan = $(this).data("method");

       
        $("#brewTitle").text(dataSeduh[metodePilihan].title);
        $("#brewDesc").text(dataSeduh[metodePilihan].desc);
        $("#brewGrind").text(dataSeduh[metodePilihan].grind);
        
        
        $("#brewCardBox").hide().fadeIn(400);
    });

    $(".btn-kopi-detail").on("click", function() {

        let namaKopi = $(this).data("nama");
        let hargaKopi = $(this).data("harga");
        let rasaKopi = $(this).data("rasa");
        let asalKopi = $(this).data("asal");
        let prosesKopi = $(this).data("proses");
        let gambarKopi = $(this).data("gambar");

        $("#modalKopiNama").text(namaKopi);
        $("#modalKopiHarga").text(hargaKopi);
        $("#modalKopiRasa").text(rasaKopi);
        $("#modalKopiAsal").text(asalKopi);
        $("#modalKopiProses").text(prosesKopi);
        $("#modalKopiGambar").attr("src", gambarKopi);

        let modalElement = new bootstrap.Modal(document.getElementById('kopiDetailModal'));
        modalElement.show();
    });
   
    });