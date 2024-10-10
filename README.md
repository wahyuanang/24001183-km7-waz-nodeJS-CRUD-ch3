
# Car and Motorcycle Management 
### RESTful API for CRUD using Express.js and sequelize with PostgreSQL for Database

Aplikasi ini dirancang untuk mengelola data kendaraan, termasuk mobil dan motor, dengan memanfaatkan teknologi RESTful API untuk menghubungkan server dan client. Database yang digunakan adalah PostgreSQL, yang dikelola melalui ORM (Object-Relational Mapping) Sequelize. Sequelize memungkinkan pengembang untuk berinteraksi dengan database menggunakan sintaks JavaScript yang lebih mudah dan efisien, tanpa perlu menulis query SQL secara manual.

Dengan Express.js sebagai framework backend, aplikasi ini menyediakan berbagai operasi CRUD (Create, Read, Update, Delete) untuk daftar kendaraan. Setiap kendaraan memiliki informasi terperinci yang disimpan dalam database PostgreSQL, seperti jenis kendaraan (mobil atau motor), model, merek, harga sewa, dan status ketersediaan. RESTful API yang dikembangkan memungkinkan pengguna untuk menambah kendaraan baru, melihat daftar kendaraan yang tersedia, memperbarui detail kendaraan, dan menghapus kendaraan yang tidak lagi aktif dalam sistem.

Penggunaan Sequelize sebagai ORM juga menyederhanakan pemodelan data, serta memungkinkan pengelolaan hubungan antar tabel, seperti misalnya tabel kendaraan dengan tabel kategori atau tipe kendaraan. Aplikasi ini memastikan kemudahan integrasi dengan sistem lain, serta fleksibilitas untuk pengembangan lebih lanjut. Dengan arsitektur yang efisien, performa aplikasi tetap optimal meskipun menangani data dalam jumlah besar pada PostgreSQL, sambil menjaga struktur kode tetap bersih dan mudah dikelola.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Jobdesk Anggota Team](#jobdesk-anggota-team)
- [Instalasi](#instalasi)
- [Kontribusi](#kontribusi)

## Tentang Proyek

### 1. Penggunaan Sequelize sebagai ORM
Sequelize adalah Object-Relational Mapping (ORM) yang digunakan dalam proyek ini untuk mengelola interaksi antara aplikasi Node.js dan database PostgreSQL. Dengan Sequelize, pengelolaan data menjadi lebih efisien karena memungkinkan pengembang untuk menggunakan sintaks JavaScript dalam melakukan operasi pada database, seperti query, insert, update, dan delete tanpa harus menulis perintah SQL secara manual

### 2. Setup Menggunakan Express.js
Express.js digunakan sebagai framework backend dalam proyek ini karena sifatnya yang ringan, fleksibel, dan modular. Dalam setup aplikasi ini, Express.js membantu dalam merancang rute (routes) untuk berbagai endpoint yang diperlukan dalam pengelolaan data kendaraan.

### 3. Pembuatan CRUD Menggunakan RESTful API
RESTful API diimplementasikan dalam proyek ini untuk menyediakan akses CRUD (Create, Read, Update, Delete) pada data kendaraan yang tersimpan di PostgreSQL. Setiap operasi CRUD direpresentasikan melalui HTTP method, seperti POST untuk menambahkan data kendaraan baru, GET untuk membaca data kendaraan, PUT untuk memperbarui data kendaraan, dan DELETE untuk menghapus kendaraan dari database. API ini dibuat mengikuti standar REST, yang menjamin bahwa aplikasi dapat diakses oleh berbagai platform lain secara fleksibel dan efisien.

Dengan RESTful API ini, pengguna dapat:

- Create: Menambahkan kendaraan baru (mobil atau motor) ke dalam database.
- Read: Mengambil daftar kendaraan yang ada atau melihat detail spesifik dari satu kendaraan.
- Update: Memperbarui informasi kendaraan yang sudah ada, seperti mengubah harga sewa atau status ketersediaan.
- Delete: Menghapus kendaraan yang tidak lagi tersedia.

## Fitur

**RESTful API untuk manajemen data mobil tanpa database** :

  - GET /API/v1/cars akan membuka list cars
  - GET /API/v1/cars/:id akan membuka satu data cars.
  - POST /API/v1/cars akan mengembalikan response data cars yang sudah terbuat.
  - PATCH /API/v1/cars/:id akan mengembalikan response data cars yang sudah terupdate.
  - DELETE /API/v1/cars/:id akan mengembalikan response data cars yang sudah terhapus.
  
  - GET /API/v1/motorcyles akan membuka list motorcyles
  - GET /API/v1/motorcyles/:id akan membuka satu data motorcyles.
  - POST /API/v1/motorcyles akan mengembalikan response data motorcyles yang sudah terbuat.
  - PATCH /API/v1/motorcyles/:id akan mengembalikan response data motorcyles yang sudah terupdate.
  - DELETE /API/v1/motorcyles/:id akan mengembalikan response data motorcyles yang sudah terhapus.

## Jobdesk Anggota Team

Berikut ini adalah pembagian jondesk masing-masing anggota team kami:
  - GET All + GET By ID mobil: Dikerjakan oleh Jetro Sulthan Fatih Nurrafi
  - GET All + GET By ID motor: Dikerjakan oleh Tegar Alfa Rizzi
  - Create mobil: Dikerjakan oleh Gede Brandon Abelio Ogaden
  - Create motor: Dikerjakan oleh Rafly Aziz Abdillah
  - Update mobil: Dikerjakan oleh Wahyu Anang Zulfikri
  - Update motor: Dikerjakan oleh Nita Fitrotul Mar'ah
  - Delete mobil: Dikerjakan oleh Ahmad Alif Ramadhan
  - Delete motor: Dikerjakan oleh Muhammad Rifqi Tri Afandi

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi ini di komputer Anda:

1. **Download aplikasi Car and Motorcycles Management**:
   - Clone repositori ini atau unduh file zip dari [https://github.com/wahyuanang/24001183-km7-waz-nodeJS-CRUD-ch3.git](#).
   ```bash
   git clone https://github.com/wahyuanang/24001183-km7-waz-nodeJS-CRUD-ch3.git
   ```

2. **Atur Konfigurasi Server dengan membuat file .env sesuai file env.example**:
   - deklarasikan seputar server anda di postgre di file .env tersebut. pastikan anda memiliki PostgreSQL dan menghidupkannya

3. **Jalankan perintah "npm install" pada terminal folder instalasi**:
   - buka terminal dan pastikan terinstall node js, kemudian jalankan perintah diatas.

4. **jalankan perintah "npx squelize db:create"**:
   - perintah ini untuk membuat databse pada postgre anda.

5. **Jalankan perintah "npx sequelize db:migrate"**:
   -  perintah ini untuk membuat tabel sesuai migration aplikasi pada postgre anda.

6. **Jalankan perintah "npx sequelize db:seed:all (opsional)"**:
   - perintah ini untuk mengeksekusi perintah insert ke tabel di database yang telah dibuat langkah sebelumnya. ini bersifat opsional mau dilakukan atau tidak

7. **Jalankan perintah "npm run dev" atau "npm run start" pada terminal folder instalasi**:
   - setelah langkah sebelumnya dilakukan maka jalankan perintah diatas.

8. **Buka postman anda, dan explore fitur yang tersedia dalam aplikasi**:
   - Jelajahi berbagai fitur crud untuk file json dalam folder data.

## Kontribusi

Daftar Anggota Dalam Repository Ini

1. **[Wahyu Anang Zulfikri](https://github.com/wahyuanang)**
2. **[Rafly Aziz Abdillah](https://github.com/raflytch)**
3. **[Ahmad Alif Ramadhan](https://github.com/neobitose)**
4. **[Gede Brandon Abelio Ogaden](https://github.com/OddDuckkk)**
5. **[Nita Fitrotul Mar'ah](https://github.com/Nitaa1904)**
6. **[Jetro Sulthan Fatih Nurrafi](https://github.com/JetroSulthan)**
7. **[Tegar Alfa Rizzi](https://github.com/TegarAlfaR)**
8. **[Muhammad Rifqi Tri Afandi](https://github.com/RifqiAfandi)**
