/*Tugas WEEKLY PROJECT - Simple JavaScript App:
Pilihan Tema: Quiz
Ini adalah App kuis javascript sederhana pertama saya, 
ini saya buat untuk memenuhi tugas WEEKLY PROJECT II - Simple JavaScript App.

App JS ini adalah Quiz untuk menentukan Peran yang sesuai dengan pemain, 
yang dilandaskan pada pengetahuan pemain mengenai beberapa hal dari 3(tiga) Peran, yaitu:
Kesatria
Tabib
Penyihir
Setelah Quiz terisi semua maka JS akan melakukan perhitungan dari jawaban yang diberikan 
sebagai apa Peran yang pantas dimainkan oleh pemain.
*/

/*
=============== pseudocode Bg1===============
SHOW "alert NOTE"
READ and SAVE "Nama"
IF "Nama" = "" SAVE "Nama" = Tanpa Nama
SAVE "newNama" = "SPLIT Nama ("")"
SAVE "NewI" = "SPLIT nama (" ")" and UNSHIFT("Lord")
SAVE "NewId" = JOIN(" ")
SHOW "LENGTH Nama and newNama and NewId"
SHOW "alert mulai"

=============== Catatan: =====================
Kondisional (if-else)
Tipe Data Array
*/

alert("Note: Quiz ini akan membantu kamu memilih peran apa yang cocok dengan pengetahuan kamu dari sisi Sejarah, dan Kepribadian, jadi isilah setiap kolom dengan seluruh kemampuan yang kamu miliki")

var nama = prompt("Isikan NAMA Kamu");
alert("Terima kasih sudah memberitahu kami nama kamu \nJika kamu tidak mengisi nama dikolom isian sebelumnya, maka nama kamu akan kami sebut sebagai (Tanpa Nama)")
if(nama==""){
  var nama = 'Tanpa Nama';
}
else{
  
}
var newNama = nama.split("")
var newI = nama.split(" "); newI.unshift("Lord");
var newId = newI.join(" ")
alert("Nama kamu terdiri dari "+nama.length+" Karakter, betul? yang jika di eja karakternya menjadi: "+newNama+" Untuk menghormati kamu, kami akan menambahkan nama kamu dengan gelar Lord didepan, sehingga menjadi "+newId);
alert("Tanpa banyak basa, basi kita akan mulai saja.")

/*
=============== pseudocode Bg2===============
SAVE "Per1"
SAVE "Per2"
SAVE "Per3"
SAVE "Per4"
SAVE "Per5"
SAVE "Per6"
SAVE "Per7"
SAVE "Per8"
SAVE "Per9"
SAVE "Per10"

SAVE "tabib = 0"
SAVE "penyihir = 0"
SAVE "ksatria = 0"

IF per1=="A" SAVE COMPUTE "tabib = + 1"
IF per2=="C" SAVE COMPUTE "penyihir = + 1"
IF per3=="B" SAVE COMPUTE "ksatria = + 1"
IF per4=="B" SAVE COMPUTE "penyihir = + 1"
IF per4=="C" SAVE COMPUTE "tabib = + 1"
IF per5=="A" SAVE COMPUTE "ksatria = + 1"
IF per5=="B" SAVE COMPUTE "penyihir = + 1"
IF per6=="B" SAVE COMPUTE "ksatria = + 1"
IF per6=="C" SAVE COMPUTE "tabib = + 1"
IF per7=="A" SAVE COMPUTE "ksatria = + 1"
IF per7=="C" SAVE COMPUTE "penyihir = + 1"
IF per8=="B" SAVE COMPUTE "tabib = + 1"
IF per8=="C" SAVE COMPUTE "ksatria = + 1"
IF per9=="A" SAVE COMPUTE "tabib = + 1"
IF per9=="B" SAVE COMPUTE "penyihir = + 1"
IF per10=="A" SAVE COMPUTE "penyihir = + 1"
IF per10=="B" SAVE COMPUTE "tabib = + 1"

=============== Catatan: =====================
Kondisional (if-else)
*/
var per1 = prompt("Siapakah Sigmund Freud? \nA) Psikolog \nB) Penjelajah \nC) Ahli Metafisika \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban A + 1 Tabib
var per2 = prompt("Siapakah Myrddin Wyllt? \nA) Kapten Kapal \nB) Dokter Bedah \nC) Penyihir \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban C + 1 Penyihir
var per3 = prompt("Siapakah Ragnar Lodbrok? \nA) Ksatria \nB) Penjelajah \nC) Raja Inggris \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban B + 1 Ksatria
var per4 = prompt("Pendulum adalah alat untuk? \nA) Mengaduk Cairan Kimia \nB) Media meramal \nC) Media komunikasi alam bawah sadar \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban B + 1 Penyihir C + 1 Tabib
var per5 = prompt("Kelebihan Pedang Excalibur adalah? \nA) Memiliki bilah yang sangat tajam \nB) Memiliki Daya Magis yang Kuat \nC) Logam-nya mengandung antiseptik \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban A + 1 Ksatria B + 1 Penyihir
var per6 = prompt("Ketika Perang selesai pilih-lah yang akan kamu lakukan pada korban perang yang sekarat? \nA) Meninggalkan mereka & Pulang \nB) Menusuk Jantung mereka satu persatu \nC) Membawa mereka kedalam Barak untuk pemulihan \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban B + 1 Ksatria C + 1 Tabib
var per7 = prompt("Seorang lawan yang terkenal sangat kuat berdiri didepanmu, kamu punya satu kesempatan untuk menebasnya, bagian mana yang akan kamu tebas? \nA) Bagian leher musuh \nB) Bagian perut musuh \nC) Merobek dada kiri musuh hingga jantungnya keluar \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban A + 1 Ksatria C + 1 Penyihir
var per8 = prompt("Kamu tersesat dihutan wilayah Skotlandia, untuk bertahan hidup apa yang akan kamu cari? \nA) Aliran sungai \nB) Tanaman Heath pea \nC) Berburu Binatang \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban B + 1 Tabib C + 1 Ksatria
var per9 = prompt("Untuk penyembuhan luka apa bahn utama yang akan kamu gunakan? \nA) DITTANY \nB) Pegagan \nC) Putri malu \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban A + 1 Tabib B + 1 Penyihir
var per10 = prompt("Bahan apa yang wajib ada di Lab kamu? \nA) Mata Naga \nB) Kodok \nC) Saya tidak memiliki Lab \n\nNOTE: Tulis pada kolom dibawah nomor pilihan kamu\nContoh: A")
//Catatan Jawaban A + 1 Penyihir B + 1 Tabib

var tabib = 0;
var penyihir = 0;
var ksatria = 0;

if(per1=="A"){tabib = tabib + 1;}
if(per2=="C"){penyihir = penyihir + 1;}
if(per3=="B"){ksatria = ksatria + 1;}
if(per4=="B"){penyihir = penyihir + 1;} 
if(per4=="C"){tabib = tabib + 1}
if(per5=="A"){ksatria = ksatria + 1;} 
if(per5=="B"){penyihir = penyihir + 1;}
if(per6=="B"){ksatria = ksatria + 1;} 
if(per6=="C"){tabib = tabib + 1;}
if(per7=="A"){ksatria = ksatria + 1;} 
if(per7=="C"){penyihir = penyihir + 1;}
if(per8=="B"){tabib = tabib + 1;} 
if(per8=="C"){ksatria = ksatria + 1;}
if(per9=="A"){tabib = tabib + 1;} 
if(per9=="B"){penyihir = penyihir + 1;}
if(per10=="A"){penyihir = penyihir + 1;}
if(per10=="B"){tabib = tabib + 1;}

console.log("Nilai sebagai Tabib dalah "+tabib)
console.log("Nilai sebagai Ksatria dalah "+ksatria)
console.log("Nilai sebagai Penyihir dalah "+penyihir)

/*
=============== pseudocode Bg3===============
SHOW "newId"
LOOPING "1 - 6" SAVE "i"
IF "i = 1" SAVE "i + Sangat Tidak Berbakat"
IF "i = 2" SAVE "i + Tidak Berbakat"
IF "i = 3" SAVE "i + Agak Berbakat"
IF "i = 4" SAVE "i + Berbakat"
IF "i = 5" SAVE "i + Sangat Berbakat"
IF "i = 6" SAVE "i + Kamu Sang Master"

SHOW "Untuk setiap peran kamu mendapat Score:" 
SHOW "CALCULATE SUM ksatria"
SHOW "CALCULATE SUM tabib"
SHOW "CALCULATE SUM penyihir"

FUNCTION {IF "ksatria > tabib dan ksatria > penyihir" RETURN "Ksatria"
          IF "tabib > ksatria dan tabib > penyihir" RETURN "Tabib"
		  IF "penyihir > ksatria dan penyihir > tabib" RETURN "Tabib"
		  ELSE "............. (Maaf ada Score yang sama, silahkan coba kembali)"
		  }
SHOW "hasil"

=============== Catatan: =====================
Looping (for)
Function  
*/

document.write("<p>Hallooo "+newId+"</p>")
document.write("<p>Dari setiap peran yang ada, setiap Score dapat diklasifikasikan sebagai berikut :<br//></p>")

for(i = 1; i <= 6; i++){
  
  if(i==1){
    document.write("Score "+i+": Sangat Tidak Berbakat<br//>")
  }
  if(i==2){
    document.write("Score "+i+": Tidak Berbakat<br//>")
  }
  if(i==3){
    document.write("Score "+i+": Agak Berbakat<br//>")
  }
  if(i==4){
    document.write("Score "+i+": Berbakat<br//>")
  }
  if(i==5){
    document.write("Score "+i+": Sangat Berbakat<br//>")
  }
  if(i==6){
    document.write("Score "+i+": Kamu sang Master<br//>")
  }
}

document.write("<p>Untuk setiap peran kamu mendapat Score:</p>")
document.write("Ksatria :"+ksatria+"<br//>")
document.write("Tabib :"+tabib+"<br//>")
document.write("Penyihir :"+penyihir+"<br//>")
document.write("<p>Dari hasil penilaian kami berdasarkan jawaban yang kamu berikan, kamu lebih cocok berperan sebagai: "+hasil()+"</p>")

function hasil(){
if(ksatria > tabib && ksatria > penyihir){
  return 'Ksatria'
}
else if(tabib > ksatria && tabib > penyihir){
  return 'Tabib'
}
else if(penyihir > ksatria && penyihir > tabib){
  return 'Penyihir'
}
else{
  return '....... (Maaf ada Score yang sama, silahkan coba kembali)'
}
};

