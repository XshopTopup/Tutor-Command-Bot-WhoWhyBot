# Tutor Documentation

Documentation for the Tutor application endpoints.

## Available Endpoints

### HTML Pages

| Endpoint | Description | File |
|----------|-------------|------|
| `/addlist` | Panduan penggunaan command `.addlist` untuk menambah daftar produk | `addlist.html` |
| `/addsewa` | Panduan penggunaan command `.addsewa` untuk menambah sewa | `addsewa.html` |
| `/dellist` | Panduan penggunaan command `.dellist` untuk menghapus daftar | `dellist.html` |
| `/perpanjangsewa` | Panduan penggunaan command `.perpanjangsewa` untuk memperpanjang sewa | `perpanjangsewa.html` |
| `/setdone_changedone` | Panduan penggunaan command `.setdone` dan `.changedone` | `setdone_changedone.html` |
| `/setlistview` | Panduan penggunaan command `.setlistview` untuk mengatur tampilan daftar | `setlistview.html` |
| `/setproses_changeproses` | Panduan penggunaan command `.setproses` dan `.changeproses` | `setproses_changeproses.html` |
| `/updatelist` | Panduan penggunaan command `.updatelist` untuk memperbarui daftar | `updatelist.html` |

### Static Assets

| Path | Description |
|------|-------------|
| `/gambar/*` | Direktori untuk semua file gambar yang digunakan dalam dokumentasi |

## Deployment Information

- **Platform**: Vercel
- **Configuration**: `vercel.json`
- **Static Files**: Located in `/public` directory
- **Routing**: Handled by Vercel rewrites in `vercel.json`

## Development

To run locally:
```bash
npm install
node app.js
```

The application will run on `http://localhost:3003` (to avoid conflicts with Vercel environment).

## Notes

- All HTML files use absolute image paths starting with `/gambar/`
- Images are cached with immutable caching headers for optimal performance
- Root path (`/`) redirects to `https://cloudku.sbs`