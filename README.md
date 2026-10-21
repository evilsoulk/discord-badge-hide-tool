<div align="center">

```
  ███████╗██╗   ██╗██╗██╗     ███████╗ ██████╗ ██╗   ██╗██╗     ██╗  ██╗
  ██╔════╝██║   ██║██║██║     ██╔════╝██╔═══██╗██║   ██║██║     ██║ ██╔╝
  █████╗  ██║   ██║██║██║     ███████╗██║   ██║██║   ██║██║     █████╔╝ 
  ██╔══╝  ╚██╗ ██╔╝██║██║     ╚════██║██║   ██║██║   ██║██║     ██╔═██╗ 
  ███████╗ ╚████╔╝ ██║███████╗███████║╚██████╔╝╚██████╔╝███████╗██║  ██╗
  ╚══════╝  ╚═══╝  ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝
```

# ⚡ Discord Badge Manager (Rozet Yöneticisi)
### Discord profilinizdeki rozetleri tek tıkla gizleyin veya tekrar görünür yapın!

[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![Discord API](https://img.shields.io/badge/Discord%20API-v9-5865F2.svg?style=for-the-badge&logo=discord)](https://discord.com)
[![Developer](https://img.shields.io/badge/Developer-evilsoulk-blueviolet.svg?style=for-the-badge&logo=github)](https://github.com/evilsoulk)
[![License](https://img.shields.io/badge/License-MIT-red.svg?style=for-the-badge)](#)

</div>

---

## 📌 Proje Hakkında

**Discord Badge Manager**, Discord'un resmi web/masaüstü istemcisinde bulunan rozet gizleme (`hidden_badges`) ve sıralama (`display_order`) API uç noktalarını kullanarak, hesabınızdaki rozetleri profilinizden **gizlemenizi** ya da **tekrar görünür yapmanızı** sağlayan hızlı, interaktif ve modern bir CLI aracıdır.

Sıfır harici kütüphane (`npm install` gerektirmez) ile doğrudan standart Node.js üzerinde çalışır.

---

## ✨ Özellikler

- ⚡ **Tek Tuşla Aç/Kapat (Toggle):** Karışık menüler yok! Rozet numarasını yazıp Enter'a basarak anında durumunu değiştirin (`Görünür ⇄ Gizli`).
- 🔢 **Çoklu İşlem Desteği:** Birden fazla rozeti aynı anda değiştirmek için virgülle yazın (Örn: `1, 3, 5`).
- 🛡️ **Kayıtlı Token Desteği:** Token'ınızı ilk seferde `token.txt` içerisine kaydeder, her açılışta tekrar sormaz.
- 🎨 **Modern Cyberpunk Arayüz:** Terminalde renkli, estetik ve okunabilir canlı durum tablosu.
- ⚡ **Hızlı Kısayollar:**
  - `H` ➔ Sahip olduğunuz **tüm rozetleri anında gizler**.
  - `A` ➔ Tüm rozetleri **tekrar görünür yapar**.
  - `T` ➔ Kayıtlı token'ı sıfırlayıp yenisini girmenizi sağlar.
  - `Q` ➔ Programdan çıkar.
- 📦 **Sıfır Bağımlılık (Zero Dependencies):** Herhangi bir ek paket kurmanıza gerek yoktur, saf Node.js ile çalışır.

---

## 🖥️ Konsol Önizlemesi

```text
  ╭─────────────────────────────────────────────────────────────────╮
  │  Hesap : yungswagboy (lelouch'$)     ID: 277188192170672129
  │  Nitro : Aktif
  ╰─────────────────────────────────────────────────────────────────╯

  Rozet Özeti: Toplam 8 adet  |  1 Görünür 🟢  |  7 Gizli 🔴

  ┌─────┬──────────────┬──────────────────────────────┬──────────────┐
  │ #   │ DURUM        │ ROZET ADI                    │ DETAY        │
  ├─────┼──────────────┼──────────────────────────────┼──────────────┤
  │ [ 1]│ 🟢 GÖRÜNÜR   │ Nitro                        │ 24.09.2026   │
  │ [ 2]│ 🔴 GİZLİ     │ Oyun Çeşitliliği             │ 6 oyun       │
  │ [ 3]│ 🔴 GİZLİ     │ Oyun Süresi (Play Time)      │ 47 saat      │
  │ [ 4]│ 🔴 GİZLİ     │ Yayıncı (Streaming)          │ 31 saat      │
  │ [ 5]│ 🔴 GİZLİ     │ Sunucu Takviyesi (Booster)   │ 17.06.2024   │
  │ [ 6]│ 🔴 GİZLİ     │ Hesap Yaşı                   │ 9 yıl, 8 ay  │
  │ [ 7]│ 🔴 GİZLİ     │ Eski Kullanıcı Adı (Legacy)  │ Ádos#9538    │
  │ [ 8]│ 🔴 GİZLİ     │ Görevler (Quests)            │ 1 Görev      │
  └─────┴──────────────┴──────────────────────────────┴──────────────┘

  ⚡ KULLANIM:
  • Numarasını yazıp Enter'a bas: Durumunu değiştirir (Görünür ⇄ Gizli)
  • Birden fazla için virgülle yaz: 1, 3, 5
  • [H] Hepsini Gizle  |  [A] Hepsini Aç  |  [T] Token Değiştir  |  [Q] Çıkış

  👉 Seçiminiz: 
```

---

## 🚀 Kurulum & Çalıştırma

### Gereksinimler
- [Node.js](https://nodejs.org/) (v18 veya daha yeni sürüm)

### 1. Depoyu İndirin
```bash
git clone https://github.com/evilsoulk/discord-badge-manager.git
cd discord-badge-manager
```

### 2. Çalıştırın
```bash
node main.js
```

> **İpucu:** Dilerseniz token'ı doğrudan parametre olarak da verebilirsiniz:
> ```bash
> node main.js TOKENINIZ
> ```

---

## 🔑 Discord Token Nasıl Alınır?

1. Discord'u tarayıcınızda veya PTB uygulamasında açın.
2. `Ctrl + Shift + I` (veya `F12`) tuşlarına basarak **Geliştirici Araçları (DevTools)** penceresini açın.
3. **Network (Ağ)** sekmesine gelin.
4. Profil ayarlarınızda bir değişiklik yapın veya sayfayı yenileyin (`F5`).
5. Herhangi bir Discord API isteğine tıklayıp **Headers** bölümündeki `authorization` değerini kopyalayın.

> ⚠️ **UYARI:** Token bilginizi kesinlikle kimseyle paylaşmayın! Bu araç token'ınızı yalnızca yerel bilgisayarınızda (`token.txt`) saklar ve doğrudan Discord API sunucularına iletir.

---

## 🏷️ Discord Rozet ID Listesi

| ID | Rozet Adı | Açıklama |
| :---: | :--- | :--- |
| **`1`** | **Nitro** | Discord Nitro Abonelik Rozeti |
| **`12`** | **Sunucu Takviyesi** | Server Booster Rozeti |
| **`13`** | **Eski Kullanıcı Adı** | Legacy Discriminator Rozeti (`#0000`) |
| **`14`** | **Görevler (Quests)** | Tamamlanan Discord Görevleri |
| **`18`** | **Hesap Yaşı** | Hesabın Kayıt Süresi / Yaşı |
| **`19`** | **Yayıncı (Streaming)** | Yayın Yapma Aktivite Rozeti |
| **`20`** | **Oyun Süresi** | Oyun Oynama Süresi Aktivite Rozeti |
| **`21`** | **Oyun Çeşitliliği** | Farklı Oyunlar Oynama Rozeti |
| **`2`** | **Discord Partner** | Discord Partner Sunucu Sahibi |
| **`3`** | **Moderatör Mezunu** | Sertifikalı Discord Moderatörü |
| **`4, 5, 6, 7`** | **HypeSquad** | Events, Bravery, Brilliance, Balance |
| **`8, 9`** | **Bug Hunter** | Seviye 1 & Seviye 2 Hata Avcısı |
| **`10, 11`** | **Erken Geliştirici / Destekçi** | Early Bot Dev & Early Supporter |
| **`22`** | **Discord Personeli** | Discord Staff Rozeti |

---

## 👨‍💻 Geliştirici

- **GitHub:** [@evilsoulk](https://github.com/evilsoulk)

⭐ Projeyi beğendiyseniz repoya yıldız (star) vermeyi unutmayın!
