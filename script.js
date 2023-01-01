const oblicz = document.querySelector(".oblicz");
const row__labels = document.querySelectorAll(".row__labels span");
const row__solutions = document.querySelectorAll(".row__solutions span");

function select(nr) {
  row__labels.forEach((el) => el.classList.remove("selected"));
  row__solutions.forEach((el) => el.classList.remove("selected"));
  row__labels[nr - 1].classList.add("selected");
  row__solutions[nr - 1].classList.add("selected");
}

function zaokrl(a) {
  return Math.round(a * 100) / 100;
}

function wyswietl(cenaZaKm, cenaWjednaStrone, CenaWdwieStrony, iloscKm) {
  row__labels[0].textContent = `Cena za 1 km`;
  row__labels[1].textContent = `Cena za ${iloscKm} km`;
  row__labels[2].textContent = `Cena za ${iloscKm * 2} km`;

  row__solutions[0].textContent = `${zaokrl(cenaZaKm)} PLN`;
  row__solutions[1].textContent = `${zaokrl(cenaWjednaStrone)} PLN`;
  row__solutions[2].textContent = `${zaokrl(CenaWdwieStrony)} PLN`;
}

function licz() {
  const cenaZaLitr = document.querySelector("#cena").value;
  const spalanieNa100 = document.querySelector("#spalanie").value;
  const dwiestrony = document.querySelector("#dwiestrony").checked;
  const iloscKm = document.querySelector("#km").value;

  dwiestrony ? select(3) : select(2);

  let litryNaKm = spalanieNa100 / 100;
  let cenaZaKm = litryNaKm * cenaZaLitr;
  let cenaWjednaStrone = cenaZaKm * iloscKm;
  let CenaWdwieStrony = 2 * cenaZaKm * iloscKm;

  wyswietl(cenaZaKm, cenaWjednaStrone, CenaWdwieStrony, iloscKm);

  // console.log("cena: " + cena);
  // console.log("spalanie: " + spalanie);
  // console.log("dwiestrony " + dwiestrony);
  // console.log("km: " + km);
}

oblicz.addEventListener("click", licz);
