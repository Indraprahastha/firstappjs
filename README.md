<h1>Hallooo...</h1>
<p>Ini adalah App kuis javascript sederhana pertama saya, ini saya buat untuk memenuhi tugas WEEKLY PROJECT II - Simple JavaScript App.</p>
<p>App JS ini adalah Quiz untuk menentukan Peran yang sesuai dengan pemain, yang dilandaskan pada pengetahuan pemain mengenai beberapa hal dari 3(tiga) Peran, yaitu:
<ul>
<li>Kesatria</li>
<li>Tabib</li>
<li>Penyihir</li>
</ul>
Setelah Quiz terisi semua maka JS akan melakukan perhitungan dari jawaban yang diberikan sebagai apa Peran yang pantas dimainkan oleh pemain. Jika kamu berminat mencobanya silahkan klik link berikut <a href="http://jsbin.com/huremiv/1">LINK</a></p>
<p>Akhir kata saya ucapkan terima kasih</p>

<h1>Pseudocode</h1>
<p>Catatan: Pseudocode pada Script JS dipisah menjadi 3(tiga) bagian agar saya tidak bingung</p>
SHOW "alert NOTE"
READ and SAVE "Nama"
IF "Nama" = "" SAVE "Nama" = Tanpa Nama
SAVE "newNama" = "SPLIT Nama ("")"
SAVE "NewI" = "SPLIT nama (" ")" and UNSHIFT("Lord")
SAVE "NewId" = JOIN(" ")
SHOW "LENGTH Nama and newNama and NewId"
SHOW "alert mulai"

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

<p>Akhir kata saya ucapkan terima kasih, semoga berkenan</p>
