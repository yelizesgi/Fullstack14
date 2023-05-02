// * Javascript Kodu*/

// console.log("Localde bulunan script çalıştı");

// alert("Bu bir alert dir");
// //* Alert uygulamayı Bloklar (Blocking Code)*/

// karar = confirm("Emin misiniz E/H");

// console.log(karar);

// console.warn("Bu bir uyarıdır");

// console.error("Eyvah hata olustu...");

//* CONS ve LET, ECMASCRİPT ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır

//?====================CONST=============
console.log("APP JS RUNNİNG");

const pi = 3.14;
console.log(pi);
console.log(typeof sayi1);

//! caught SyntaxError:Missing initializer in const declaration(at app.js:27:7)
// const deneme
// console.log(deneme)

//! Uncaught TypeError: Assignment to constant variable.
// const number1 = 5;
// number1 = 7; //? const ile tanimlanan degiskene sonradan atama yapilamaz

const varMİ = true;
const isOpen = false;
console.log(isOpen, typeof isOpen);

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let language = "Java";
console.log(language, typeof language);

language = "Javascript";
console.log(language);

language = true;
console.log(language);

language = 3.14;
console.log(language);

let adet; //?Js bir degiskenin türünü atanan degere göre belirler. Eger atama olmadıysa tutu undifined  olarak belirlemiş olur.
console.log(adet); //?undifend

adet = "23"; //? atama
console.log(typeof adet);

// Bir block icerisinde degissken olusturduk
{
  let localDegisken = 5;
  localDegisken = localDegisken + 1;
  console.log(localDegisken);
}

//! Uncaught ReferanceError: localDegisken is not defined
console.log(localDegisken);
