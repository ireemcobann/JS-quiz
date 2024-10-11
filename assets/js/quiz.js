//  Quiz ödevi

// Açıklama : 10 soru sorup soruların cevaplarına göre kaç doğru kaç yanlış
//  olduğunu söyleyin.
// Ek olarak yanlış cevapların doğrularını da göstermeye çalışın.

let soru1 = prompt("Türkiyenin başkenti neresidir? a) İstanbul   b) ankara");
let soru1Cevap = "b";
let soru2 = prompt(
  "İstanbul hangi kıtada yer alır? a)Amerika   b)Avrupa ve Asya"
);
let soru2Cevap = "b";
let soru3 = prompt("Dünya kaç gezegene sahiptir? a)8   b)6 ");
let soru3Cevap = "a";
let soru4 = prompt(
  "Python hangi tür programlama dilidir? a)yüksek seviyeli   b) düşük seviyeli"
);
let soru4Cevap = "a";
let soru5 = prompt(
  "JavaScriptin veri tipi undefined neyi ifade eder? a) tanımlı   b) tanımsız"
);
let soru5Cevap = "a";
let soru6 = prompt(
  "En büyük okyanus hangisidir? a)Atlas okyanusu   b)pasifik okyanusu "
);
let soru6Cevap = "b";
let soru7 = prompt("Hangi hayvan en hızlı koşar? a) Çita   b) Aslan");
let soru7Cevap = "a";
let soru8 = prompt("Bir yılda kaç ay vardır? a) 10   b) 12");
let soru8Cevap = "b";
let soru9 = prompt("Dünyanın uydusu nedir? a) Ay   b) Mars");
let soru9Cevap = "a";
let soru10 = prompt("En küçük asal sayı nedir? a) 1   b) 2");
let soru10Cevap = "b";

dogru = 0;
yanlis = 0;

if (soru1 == soru1Cevap) {
  dogru++;
} else if (soru1 != soru1Cevap) {
  yanlis++;
  console.log("1. sorunun cevabı B");
}

if (soru2 == soru2Cevap) {
  dogru++;
} else if (soru2 != soru2Cevap) {
  yanlis++;
  console.log("2. sorunun cevabı B");
}

if (soru3 == soru3Cevap) {
  dogru++;
} else if (soru3 != soru3Cevap) {
  yanlis++;
  console.log("3. sorunun cevabı A");
}
if (soru4 == soru4Cevap) {
  dogru++;
} else if (soru4 != soru4Cevap) {
  yanlis++;
  console.log("4. sorunun cevabı b");
}

if (soru5 == soru5Cevap) {
  dogru++;
} else if (soru5 != soru5Cevap) {
  yanlis++;
  console.log("5. sorunun cevabı A");
}
if (soru6 == soru6Cevap) {
  dogru++;
} else if (soru6 != soru6Cevap) {
  yanlis++;
  console.log("6. sorunun cevabı B");
}
if (soru7 == soru7Cevap) {
  dogru++;
} else if (soru7 != soru7Cevap) {
  yanlis++;
  console.log("7. sorunun cevabı A");
}
if (soru8 == soru8Cevap) {
  dogru++;
} else if (soru8 != soru8Cevap) {
  yanlis++;
  console.log("8. sorunun cevabı B");
}
if (soru9 == soru9Cevap) {
  dogru++;
} else if (soru9 != soru9Cevap) {
  yanlis++;
  console.log("9. sorunun cevabı A");
}
if (soru10 == soru10Cevap) {
  dogru++;
} else if (soru10 != soru10Cevap) {
  yanlis++;
  console.log("10. sorunun cevabı A");
}

console.log("doğru sayısı: " + dogru + " " + "Yanlış sayısı: " + yanlis);
