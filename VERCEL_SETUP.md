# 🚀 Setting Vercel untuk Deploy

## Environment Variables yang Harus Diset di Vercel

Masuk ke **Vercel Dashboard** → **Project Settings** → **Environment Variables**

Tambahkan semua variable berikut:

### 1. Identitas & Relationship
```
VITE_BIRTHDAY_NAME=Irba Luthfiah
VITE_BIRTHDAY_GENDER=female
VITE_BIRTHDAY_RELATIONSHIP=partner
```

### 2. Tema & Warna (Pink Aesthetic)
```
VITE_TITLE=Selamat Atas Sidangnya, Irba Luthfiah, S.Ak.
VITE_CARD_TITLE_SURPRISE=Selamat Lulus Sidang Sayangku!
VITE_THEME_COLOR=#ff69b4
VITE_FAVORITE_COLOR=#ff69b4
VITE_BIRTHDAY_COLOR=#ff69b4
```

### 3. Interests & Emojis
```
VITE_FAVORITE_ITEMS=uang,kalkulator,grafik naik,toga,bunga
VITE_BIRTHDAY_INTERESTS=uang,kalkulator,grafik naik,toga,bunga
VITE_FAVORITE_EMOJIS=sparkle,star
```

### 4. Pesan Romantis
```
VITE_BIRTHDAY_LETTER_TITLE=Untuk Irba Luthfiah, S.Ak.
VITE_BIRTHDAY_CUSTOM_MESSAGE=Sayangku, selamat lulus sidang dan resmi jadi Sarjana Akuntansi! Aku bangga banget sama perjuangan kamu selama ini. Semua malam begadang ngitung debit-kredit, semua stress ngerjain skripsi, akhirnya terbayar hari ini. Kamu luar biasa sayang! Semoga ini jadi awal kesuksesan kamu yang lebih besar lagi. I love you! ❤️
VITE_BIRTHDAY_WISHER_NAME=Pacarmu yang bangga
```

### 5. Foto-foto Irba Luthfiah
```
VITE_PHOTO_1=/assets/photos/irba-1.png
VITE_PHOTO_2=/assets/photos/irba-2.png
VITE_PHOTO_3=/assets/photos/irba-3.png
```

### 6. Sections (Aktif/Nonaktif)
```
VITE_SHOW_PHOTO_SECTION=true
VITE_SHOW_QUIZ_SECTION=true
VITE_SHOW_GIFT_SECTION=true
VITE_SHOW_HEART_TREE_SECTION=true
VITE_SHOW_VIDEO_SECTION=false
VITE_SHOW_CAKE_SECTION=true
VITE_SHOW_FINAL_SURPRISE=true
```

### 7. Animation Settings
```
VITE_ANIMATION_SPEED=moderate
VITE_ANIMATION_INTENSITY=medium
VITE_PARTICLE_COUNT=15
```

## 📝 Langkah-langkah Deploy

1. **Push ke GitHub** (sudah dilakukan ✅)
   ```bash
   git push origin main
   ```

2. **Buka Vercel Dashboard**
   - Login ke https://vercel.com
   - Pilih project "congratsirba"

3. **Masukkan Environment Variables**
   - Settings → Environment Variables
   - Copy paste semua variable di atas
   - **PENTING:** Apply untuk **Production, Preview, dan Development**

4. **Redeploy**
   - Deployments → Pilih latest deployment
   - Klik menu (...) → **Redeploy**
   - Centang "Use existing Build Cache" (UNCHECK ini)
   - Klik **Redeploy**

5. **Tunggu Build Selesai** (2-3 menit)

## ✅ Checklist Verifikasi

Setelah deploy, cek:
- [ ] Warna pink aesthetic sudah muncul
- [ ] Nama "Irba Luthfiah" tampil
- [ ] Konten romantis untuk pacar (bukan bestie)
- [ ] Foto-foto Irba muncul di gallery
- [ ] Logo love menampilkan "Aku Cinta Kamu Irba Luthfiah 💕"
- [ ] Ada jeda 10 detik sebelum transisi
- [ ] Tidak ada error "Oops! Something went wrong"

## 🔧 Troubleshooting

### Jika foto tidak muncul:
- Pastikan file `irba-1.png`, `irba-2.png`, `irba-3.png` ada di folder `public/assets/photos/`
- Redeploy dengan clear cache

### Jika masih ada error:
- Cek Vercel Logs di Dashboard → Deployment → Function Logs
- Pastikan semua environment variables sudah diset

### Jika warna masih neon/bukan pink:
- Clear browser cache (Ctrl + Shift + R)
- Cek apakah `VITE_FAVORITE_COLOR` sudah diset ke `#ff69b4`

## 📞 Support

Jika ada masalah, cek:
1. Vercel Deployment Logs
2. Browser Console (F12)
3. Network tab untuk file yang gagal load
