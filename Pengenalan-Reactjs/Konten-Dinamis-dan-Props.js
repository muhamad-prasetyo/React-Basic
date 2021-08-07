// * Konten Dinamis dan Props

//* Pada materi sebelumnya, kita telah membuat 2 component yaitu MenuMakanan dan MenuMinumnan. Konsep component pada dasarnya adalah harus dapat digunakan berulang kali (reusable). Maksudnya adalah ketika kita membuat satu component kita bisa memakainya berulang kali di tempat-tempat yang berbeda.

//* Mari kita buka kembali project my-app kita yang sudah berisi menu makanan dan menu minuman. Sebelumnya, kita hanya membuat 1 menu makanan (ayam bakar) dan 1 menu minuman (jus melon). Sekarang kita akan menambahkan beberapa menu tambahan.

// *Jika proses server development masih berjalan, Anda bisa langsung ke tahap langkah no. 1, namun jika server development sudah berhenti (Ctrl + C), maka Anda perlu menjalankannya lagi dengan npm start atau yarn start.

// *  1.  Buka file App.js
// *  2.  Gandakan baris kode <MenuMakanan />, sehingga kode nya seperti berikut

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Cafe and Resto Codepolitan</h1>
          <h2>Menu Makanan</h2>
            <MenuMakanan />
            <MenuMakanan />
  
          <h2>Menu Minuman</h2>
            <MenuMinuman />
        </div>
      );
    }
  }

  

//*  3. Save file

// * 4. Buka browser dan akses http://localhost:3000/

// * 5. Terlihat tampilan seperti gambar berikut: liat dividio


// * Menu makanan sudah bertambah menjadi 2 menu makanan, namun isi / konten dari kedua box menu tersebut sama persis, yaitu ayam bakar dengan harga Rp. 25.000. Bagaimana jika kita ingin menambah menu dengan nama lain dengan harga yang berbeda pula? Apakah harus membuat component baru lagi?

// * Jawabnya tidak, kita dapat menggunakan component yang sama, namun menampilkan konten yang berbeda-beda. Di sinilah peran props. Props dapat membuat sebuah component bersifat dinamis. Props dapat dianalogikan sebagai data/variabel yang dikirimkan ke suatu component, agar component tersebut dapat memproses atau menampilkan data yang ia terima.

// * Mari kita mulai menggunakan props.
// * Menggunakan props pada component

//  *  1.  Buka file MenuMakanan.js, dan tambahkan props sebagai parameter fungsi
// tambahkan props sebagai parameter
var menuMakanan = (props) => {
    return (
        // JSX
    )
}
    // * 2. Selanjutnya, kita perhatikan format daftar menu dan tentukan bagian mana yang akan tetap, dan bagian mana yang dinamis/berubah-ubah. 
    // *Text yang berada di kotak hijau bersifat statis (tetap, tidak berubah-ubah), sedangkan text yang ditandai kotak merah adalah bagian yang kita inginkan untuk dapat berubah-ubah (dinamis).

    //* 3. Tentukan nama variabel yang digunakan untuk mengganti teks-teks dinamis. Sebagi contoh, disini akan dipakai variabel namaMenu, dan hargaMenu. Variabel ini akan di pasang ke dalam JSX. Ingat, bahwa untuk memasang variabel ke dalam JSX dapat menggunakan kurung kurawal.

    //* 4. Ubah kode JSX pada file MenuMakanan.js, menjadi seperti berikut:   
    var menuMakanan = (props) => {
        return (
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                <p>Nama Menu: { props.namaMenu }</p>
                <p>Harga: Rp. { props.hargaMenu } </p>
            </div>
        )
        }
        // Variabel namaMenu dan hargaMenu akan kita kirimkan melalui props. Maka kita gunakan props.namaMenu dan props.hargaMenu

        5. Buka file App.js. Sekarang kita akan mengirimkan data agar dapat digunakan oleh component MenuMakanan. Data dapat dikirimkan melalui attribut <MenuMakanan />. Ubah kode di App.js menjadi seperti berikut:
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000} />
        <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={22000} />
        Note : nama atribut harus sesuai dengan variabel yang digunakan pada comoponent.

        Save file App.js, dan buka browser Anda. Sekarang tampilan nya sudah berubah seperti berikut:  dividio 
    
  

        Sampai tahap ini, Anda telah berhasil menggunakan satu component yang sama untuk menampilkan konten yang berbeda dengan memanfaatkan props.

        Sekarang kita akan memodifikasi MenuMinuman agar dapat menampilkan dua menu yang berbeda dengan basis component yang sama, yaitu MenuMinuman

        
    1. Pada file App.js tambahkan attribut pada <MenuMinuman />.

    <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={15000}/>
    <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={20000}/>
    
       2. Save file App.js.
       3. Buka file MenuMinuman.js, dan modifikasi kode menjadi

       import React, { Component } from 'react'

       // nama class diawali huruf kapital (uppercase)
       class MenuMinuman extends Component {
           render(){
               return (
                   <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                       <p>Nama Menu: {this.props.namaMenu}</p>
                       <p>Harga: Rp. {this.props.hargaMenu}</p>
                   </div>
               )
           }
       }
       
       export default MenuMinuman


       Perhatikan bahwa kita menggunakan this.props.namaMenu dan this.props.hargaMenu. Keyword this merujuk pada class MenuMinuman. Jadi ketika kita menggunakan class-based component, kita harus menggunakan keyword this.
    