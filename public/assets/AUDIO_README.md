# 🎵 Panduan Audio untuk Pacar Tersayang

## Masalah Audio Eksternal
Audio dari Pixabay/Soundjay diblokir dengan error 403 karena tidak mengizinkan hotlinking dari website lain.

## Solusi: Upload Audio Sendiri

### 1. Download atau Siapkan Audio Kamu
Cari audio romantis untuk pacar kamu dari:
- YouTube (convert ke MP3)
- Freesound.org
- Bensound.com
- Atau rekaman suara kamu sendiri! 💕

### 2. Jenis Audio yang Dibutuhkan:

#### Background Music (bgMusic)
- Musik romantis yang loop
- Contoh: lagu favorit kalian, instrumental romantis
- Format: MP3
- Nama file: `bg-music.mp3`

#### Sound Effects (opsional):
- `type-click.mp3` - suara ketikan
- `whoosh.mp3` - suara swoosh
- `reveal.mp3` - suara reveal surprise
- `pop.mp3` - suara pop balon
- `boom.mp3` - suara boom konfeti

### 3. Upload Audio
1. Letakkan file audio di folder ini: `public/assets/audio/`
2. Update `src/config/birthday.ts` dengan path audio:

```typescript
export const AUDIO_ASSETS = {
  bgmUrl: "/assets/audio/bg-music.mp3",
  // ... atau kosongkan untuk silent mode
}
```

3. Update `SoundManager.tsx`:
```typescript
const AUDIO_URLS = {
    bgMusic: AUDIO_ASSETS.bgmUrl || "/assets/audio/bg-music.mp3",
    typeClick: "/assets/audio/type-click.mp3",
    whoosh: "/assets/audio/whoosh.mp3",
    reveal: "/assets/audio/reveal.mp3",
    pop: "/assets/audio/pop.mp3",
    boom: "/assets/audio/boom.mp3",
};
```

### 4. Mode Silent (Saat Ini)
Saat ini website berjalan dalam **silent mode** tanpa audio eksternal yang error.
Website tetap cantik dan animasinya jalan sempurna untuk pacar kamu! ✨

## Tips Romantis 💝
- Upload lagu favorit kalian berdua sebagai background music
- Atau rekam suara kamu mengucapkan selamat ulang tahun!
- Bisa juga instrumental piano romantis yang lembut

Semua untuk pacar tercinta! 🎂💕
