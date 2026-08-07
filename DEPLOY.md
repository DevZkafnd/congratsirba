# 🚀 Panduan Deploy ke Vercel

## Cara Deploy (Mudah!)

### Option 1: Deploy via Button
Klik button ini dan ikuti instruksinya:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevZkafnd/congratsirba)

### Option 2: Deploy Manual

1. **Login ke Vercel**
   - Buka https://vercel.com
   - Login dengan GitHub

2. **Import Project**
   - Klik "Add New" → "Project"
   - Pilih repository: `DevZkafnd/congratsirba`
   - Klik "Import"

3. **Configure Project**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`

4. **Set Environment Variables** (PENTING!)
   Tambahkan variabel berikut di Vercel Dashboard → Settings → Environment Variables:

   ```
   VITE_BIRTHDAY_NAME=Irba Luthfiah
   VITE_BIRTHDAY_GENDER=female
   VITE_BIRTHDAY_RELATIONSHIP=friend
   VITE_THEME_COLOR=#f4a7c7
   VITE_FAVORITE_COLOR=#f4a7c7
   VITE_BIRTHDAY_COLOR=#f4a7c7
   VITE_FAVORITE_ITEMS=uang,kalkulator,grafik naik,toga,bunga
   VITE_BIRTHDAY_INTERESTS=uang,kalkulator,grafik naik,toga,bunga
   VITE_BIRTHDAY_LETTER_TITLE=Untuk Irba Luthfiah, S.Ak.
   VITE_BIRTHDAY_CUSTOM_MESSAGE=Selamat menyandang gelar Sarjana Akuntansi! Semua kerja keras, lembur ngitung debit-kredit, dan begadang ngerjain skripsi akhirnya terbayar. Semoga karirmu secerah dan serapi laporan keuanganmu yang selalu balance ✨
   VITE_BIRTHDAY_WISHER_NAME=Zaki Affandi - Pacarmu yang selalu bangga 💕
   VITE_FAVORITE_EMOJIS=party,sparkle,star,graduation,money
   VITE_PHOTO_1=/assets/photo-1.png
   VITE_PHOTO_2=/assets/photo-2.png
   VITE_PHOTO_3=/assets/photo-3.png
   VITE_SHOW_PHOTO_SECTION=true
   VITE_SHOW_QUIZ_SECTION=true
   VITE_SHOW_GIFT_SECTION=true
   VITE_SHOW_HEART_TREE_SECTION=true
   VITE_SHOW_VIDEO_SECTION=false
   VITE_SHOW_CAKE_SECTION=true
   VITE_SHOW_FINAL_SURPRISE=true
   VITE_ANIMATION_SPEED=moderate
   VITE_ANIMATION_INTENSITY=high
   VITE_PARTICLE_COUNT=25
   ```

5. **Deploy!**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - Website siap! 🎉

## 📱 Cara Update Nanti

Kalau mau update konten:
1. Edit file di GitHub atau push perubahan baru
2. Vercel otomatis deploy ulang
3. Website update dalam 1-2 menit

## 🔧 Troubleshooting

**Build gagal?**
- Pastikan Install Command: `npm install --legacy-peer-deps`
- Cek semua environment variables sudah diisi

**Foto tidak muncul?**
- Pastikan foto ada di folder `public/assets/`
- Gunakan path: `/assets/photo-1.png` (bukan `./assets`)

**Warna tidak sesuai?**
- Cek `VITE_THEME_COLOR` di environment variables
- Format harus: `#f4a7c7` (dengan #)

## 🎨 Custom Domain (Opsional)

Di Vercel Dashboard → Settings → Domains:
1. Tambah domain custom (misalnya: wisuda-irba.com)
2. Ikuti instruksi setup DNS
3. Tunggu propagasi (5-10 menit)

---

**Selamat! Website ucapan wisuda Irba siap dipublish! 🎓✨**
