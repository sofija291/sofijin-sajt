function promijeniJezik() {
  var languageButton = document.getElementById("languageButton");
  if (languageButton.innerHTML === "DE") {
    // Ovdje zamijenite sadržaj stranice sa sadržajem prevedenim na njemački jezik
    // Na primjer, možete zamijeniti cijeli sadržaj tijela stranice sa prevedenim HTML-om
    window.location.href = '/indexde.html';
  } else {
    window.location.href = '/index.html';
  }
}
function postaviPocetniJezik() {
  var languageButton = document.getElementById("languageButton");
  if (pocetniJezik === "DE") {
    languageButton.innerHTML = "DE";
  } else {
    languageButton.innerHTML = "SR";
  }
}

// Poziv funkcije za postavljanje početnog jezika

document.addEventListener("DOMContentLoaded", function() {
  const skrolSlike = document.querySelector(".skrol-slike");
  const strelicaPrev = document.querySelector(".strelica.prev");
  const strelicaNext = document.querySelector(".strelica.next");
  const slikaWidth = document.querySelector(".skrol-slike img").offsetWidth;
  const brojSlika = document.querySelectorAll(".skrol-slike img").length;

  let trenutnaSlika = 0;

  strelicaNext.addEventListener("click", function() {
    if (trenutnaSlika < brojSlika - 1) {
      trenutnaSlika++;
    } else {
      trenutnaSlika = 0; // Vraćanje na prvu sliku
    }
    skrolSlike.style.transform = `translateX(-${trenutnaSlika * slikaWidth}px)`;
  });

  strelicaPrev.addEventListener("click", function() {
    if (trenutnaSlika > 0) {
      trenutnaSlika--;
    } else {
      trenutnaSlika = brojSlika - 1; // Prebacivanje na poslednju sliku
    }
    skrolSlike.style.transform = `translateX(-${trenutnaSlika * slikaWidth}px)`;
  });
});
