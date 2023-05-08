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

//? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

console.log(15 >= 15); //true
console.log(15 <= 15); // true
console.log(15 >= 16); // false
// console.log(15 >== 16);// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
console.log(15 >= "15"); // true
console.log("14" <= "15"); // true
