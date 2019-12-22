var dodajDoKoszyka = function (object) {
    if (document.getElementById('obszar_zakupu').children.length < 8) {
        var value = object.previousElementSibling.innerHTML;
        var name = object.parentElement.previousElementSibling.innerHTML;

        var szablon = '<div class="karta_dodana_do_koszyka">';
        szablon += '<div class="obszar_zakupu_nazwaproduktu_usuń">';
        szablon += '<div class="nazwaproduktu_koszyk">' + name + '</div>';
        szablon += '<button class="nazwaproduktu_usuń" onclick="usunZKoszyka(this)">Usuń</button>';
        szablon += '</div>';
        szablon += '<div class="cena_w_koszyku">' + value + '</div>';
        szablon += '</div>';

        var koszyk = document.getElementById('obszar_zakupu');
        koszyk.innerHTML += szablon;

        /*
            window.alert("Dodano do koszyka " + name + " " + value + "zł");
        */
        var wartosc_koszyka = document.getElementById("cena_koszyka_wartosc");
        wartosc_koszyka.innerHTML = (parseFloat(wartosc_koszyka.innerHTML) + parseFloat(value)).toFixed(2);
    } else {
        window.alert("Przekroczona ilość produktów: maksymalnie 8")
    }
};

var usunZKoszyka = function (object) {
    var value = object.parentElement.nextElementSibling.innerHTML;
    var wartosc_koszyka = document.getElementById("cena_koszyka_wartosc");

    wartosc_koszyka.innerHTML = (parseFloat(wartosc_koszyka.innerHTML) - parseFloat(value)).toFixed(2);

    object.parentElement.parentElement.remove();
};

var usunWszystko = function () {
    var koszyk = document.getElementById('obszar_zakupu');
    document.getElementById('cena_koszyka_wartosc').innerHTML = '0.00';
    koszyk.innerHTML= "";
};

var kupKoszyk = function () {
    if (parseFloat(document.getElementById("cena_koszyka_wartosc").innerHTML) > 0) {
        window.alert("Udany zakup o wartości: " + document.getElementById('cena_koszyka_wartosc').innerHTML + "zł");
        usunWszystko();
    } else {
        window.alert("Musisz dodać produkty do koszyka, aby dokonać zakupu.")
    }
};