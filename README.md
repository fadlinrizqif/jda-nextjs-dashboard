## Integrasi Aplikasi dengan database

1. Menghubungkan Aplikasi NextJS dengan database(neon) melaui Vercel
2. Menginstall package Prisma
3. lalu eksekusi package prisma agar dibuatkan file schema.prisma
4. pada file schema.prisma kita bisa membuat struktur database, pada tugas ini saya membuat 6 kolom (id, name, price, created_at, updated_at, deleted_at)
5. lalu melakukan migration untuk merekam dan menerapkan perubahan pada schema
6. lalu membuat CRUD pada API seperti tugas sebelumnya namun mengirimkan datanya ke database dengan prisma

Pada bagian halaman products tidak ada perubahan karena sudah terhubung dengan API. Pada tugas ini hanya mengubah isi kode pada API saja untuk terhubung dengan database dengan bantuan Prisma. 

Note: .env.sample ikut dimasukan kedalam github untuk direview oleh mentor
