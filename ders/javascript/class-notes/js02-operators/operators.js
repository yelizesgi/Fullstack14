//?Bazi hazır fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
// toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

//! ** (üs alma) operatörü

// const üs1 = 2;
// const üs2 = 3;
// console.log(üs1 ** üs2);

// // Dairenin alanı, pi çarpı yarıçapın karesidir (A = π r²).

// const pi = 3.14;
// const yariCap = 9;

// const alan = pi * yariCap ** 2;
// console.log(alan);

// //! 🔥🔥🔥              Artırma ve Eksiltme Operatörleri

// //? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

// // sonrası artırma ve eksiltme
// let number1 = 6;
// //  let artirNew = number1 // 6
// //  number1= number1 +1// 7
// let number1New = number1++; // önce atadı sonrasında number1 değişkenini bir number1dı
// console.log(number1New); // 6
// console.log(number1New); // 6
// console.log(number1); // 7
// console.log(number1New);

//! 🔥🔥🔥              Atama Operatörleri

let nums1 = 14;
let nums2 = 17;
//! += Ekle ve Sonucu Ata
// nums2 = nums2 + nums1;
//? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.
// nums2 += nums1;
// console.log(nums2); // 31

let num14 = 6;
let num15 = 3;

//! -= Çıkar ve Sonucu Ata
// num14 = num14 - num15;
// num14 -= num15;
// console.log(num14); // -5

//! *= Çarp ve Sonucu Ata
// num14 = num14 * num15;
// num14 *= num15;
// console.log(num14); // 750
//! /= Böl ve Sonucu Ata
// num14 = num14 / num15;
// num14 /= num15;
// console.log(num14);
//! /= Bölümden Kalanı Bul ve Ata
// num14 = num14 % num15;
// num14 %= num15;
// console.log(num14);

//! **= Üs Al ve Sonucu Ata
// num14 = num14 ** num15;
// num14 **= num15;
// console.log(num14);

const num16 = 27;

console.log(num16 == 27);
console.log(num16 == "27");

console.log(num16 === 27);
console.log(num16 === "27");

// const user1 = prompt("Lütfen bir sati giriniz");
// const user2 = prompt("Lütfen bir sati giriniz");
// console.log(user1);
// console.log(user2);
// const isSame = user1 == user2;
// console.log(isSame);
console.log(true == 1);
console.log(null == undefined);

console.log(true === 1);
console.log(null === undefined);

console.log(15 != "15");
console.log(15 !== "15");

//! 🔥🔥🔥              Karşılaştırma Operatörleri

// const num16 = 27;

// console.log(num16 == 27); //true
// console.log(num16 == "27"); // true
//? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.

// console.log(num16 === 27); // true
// console.log(num16 === "27"); // false
// //? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

// // const user1 = prompt("Lütfen bir sayı griniz: ");
// // const user2 = prompt("Lütfen bir sayı griniz: ");
// // console.log(user1);
// // console.log(user2);
// // const isSame = user1 == user2;
// // console.log(isSame);

// console.log(true == 1); //true
// console.log(null == undefined); // true
// // true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
// console.log(true === 1); // false
// console.log(null === undefined); // false

//? !=, !==

// console.log(15 != "15"); // false. çünkü değerleri eşit
// console.log(15 !== "15"); // true. çünkü typeları eşit değil

// //? >, < (Büyük mü?, Küçük mü?)
// console.log(15 > 5); // true
// console.log(15 < 5); // false

// console.log("15" > 5); // true

// console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
// console.log("a".charCodeAt()); // 97
// console.log("b".charCodeAt()); // 98
// //. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
// console.log("a" > "A");// true

// //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

// console.log(15 >= 15); //true
// console.log(15 <= 15); // true
// console.log(15 >= 16); // false
// // console.log(15 >== 16);// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
// console.log(15 >= "15"); // true
// console.log("14" <= "15"); // true

// //! 🔥🔥🔥              Mantıksal Operatörler

// // && and
// console.log(true && true); // true
// console.log(" " && true); // true

// console.log(5 && "Merhaba"); // "Merhaba"
// console.log(0 && "Dünya"); // 0
// // && operatoru ilk gördüğü falsy veya false değerini döner.
// console.log(5 && 0); // 0
// console.log(true && false); // false

// //! || or
// console.log(true || false); //true
// console.log(5 || 15); // 5
// console.log(5 || 0); // 5
// console.log("" || "Merhaba"); // "Merhaba"
// console.log("" || 0); // 0
// // || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.

// // ! not
// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!5); // false

// // falsy
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(0n)); // false
// console.log(Boolean("")); // false (boş string)
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// // truthy
// console.log(Boolean(true)); // true
// console.log(Boolean({})); // true (boş object)
// console.log(Boolean([])); // true (boş array)
// console.log(Boolean(5)); // true
// console.log(Boolean("0")); // true (dolu string)
// console.log(Boolean("false")); // true (dolu string)
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(new Date())); // true (tarih methodları)
// console.log(Boolean(function () {})); // true (boş fonksiyon)
// console.log(
//   Boolean(function () {
//     console.log("Hello World!");
//   })
// ); // true (boş fonksiyon)

// //! İşlem Önceliği sıralaması
// // 1. ! (not)
// // 2. && (and)
// // 3. || (or)
// const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0);
// console.log(karşilaştırma); // dünya

// //* kullanıcıdan vize ve final notunu prompt olarak alın. sabit bir canEgrisi(ortalama) belirleyiniz.
// //!Kullanıcının vize ve final ortalaması canEgrisine eşit veya büyükse Kullanıcıya "Geçtiniz" mesajı dönünüz. Eşit veya büyük değilse "Kaldınız" şeklinde mesaj dönününüz.
// //! Not: prompt tan gelen veriler string olarak geliyor o nedenle dönüştürme işlemi yapıyoruz.
// let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"));
// let final = Number(prompt("Lütfen final notunuzu giriniz ?"));
// let canEgrisi = 65;
// let sonuc =
//   (Math.round((vize + final) / 2) >= canEgrisi && "Geçtiniz!") || "Kaldınız!";
// console.log(sonuc);

// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

let sayi = +prompt("Bir sayi girinz:"); //? 100
console.log(typeof sayi);
let sayi2 = 10;
sayi = sayi + sayi2; //? concatination

console.log(++sayi);

console.log(Number("123")); //? 123
console.log(Number("12.3")); //? 12.3
console.log(Number("0")); //? 0
console.log(Number(" ")); //? 0
console.log(Number("")); //? 0
console.log(Number(null)); //? 0

const myNumber = "threezeroone"; //? string
let myNumber2 = Number(myNumber);
console.log(myNumber2); //? NaN
console.log(typeof myNumber2); //? number

const dolar = "1000";
const tl = "2000";

const totalMoney = Number(dolar) + +tl; //kısa yolla Number() + ile de yapılır fakat en iyi kullanımı ilki
console.log(totalMoney);

//* ALternatif olarak parseInt() ve parseFloat() da kullanilabilir.
const dolarInt = parseInt(dolar); //? tamsayiya cevirir
console.log(dolarInt);
const tlFloat = parseFloat(tl); //? virgüllü sayiya çevirir
console.log(tlFloat);

console.log(parseFloat(null)); //? NaN
console.log(parseFloat("")); //? NaN

//? String
const myNumber3 = 2000.5;
console.log(String(myNumber3));
