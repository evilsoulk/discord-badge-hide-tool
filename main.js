const readline = require('readline');
const fs = require('fs');
const path = require('path');

const TOKEN_PATH = path.join(__dirname, 'token.txt');
const SUPER_PROPERTIES = 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJwdGIiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC4xMjI2Iiwib3NfdmVyc2lvbiI6IjEwLjAuMjYyMDAiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJ4NjQiLCJzeXN0ZW1fbG9jYWxlIjoidHIiLCJoYXNfY2xpZW50X21vZHMiOmZhbHNlLCJjbGllbnRfbGF1bmNoX2lkIjoiYTIwNzQxMTUtY2NhZS00OWFjLTk5YWEtYWY1MGZkZTBkY2EyIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgZGlzY29yZC8xLjAuMTIyNiBDaHJvbWUvMTQ4LjAuNzc3OC4yODAgRWxlY3Ryb24vNDIuMTEuMTUgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjQyLjExLjE1Iiwib3Nfc2RrX3ZlcnNpb24iOiIyNjIwMCIsImNsaWVudF9idWlsZF9udW1iZXIiOjY0NDc5NSwibmF0aXZlX2J1aWxkX251bWJlciI6OTU0NDgsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGwsImxhdW5jaF9zaWduYXR1cmUiOiJiODJlNGNlOS02MjlkLTQ2ZGItOWYyZS1lMTE2ZjIzYTQzNmUiLCJjbGllbnRfaGVhcnRiZWF0X3Nlc3Npb25faWQiOiI0ZGQ3ZDY1NC1hZDI3LTQzZjUtOWM5MS00ZGE5ODgzYWM0MmYiLCJjbGllbnRfYXBwX3N0YXRlIjoiZm9jdXNlZCJ9';

const BADGE_NAMES = {
  1: "Nitro",
  2: "Discord Partner",
  3: "Moderatör Mezunu",
  4: "HypeSquad Events",
  5: "HypeSquad Bravery",
  6: "HypeSquad Brilliance",
  7: "HypeSquad Balance",
  8: "Bug Hunter Seviye 1",
  9: "Bug Hunter Seviye 2",
  10: "Erken Bot Geliştiricisi",
  11: "Erken Destekçi (Early)",
  12: "Sunucu Takviyesi (Booster)",
  13: "Eski Kullanıcı Adı (Legacy)",
  14: "Görevler (Quests)",
  15: "Last Meadow",
  16: "Orbs Çırağı",
  17: "Hediye Etme (Gifting)",
  18: "Hesap Yaşı",
  19: "Yayıncı (Streaming)",
  20: "Oyun Süresi (Play Time)",
  21: "Oyun Çeşitliliği",
  22: "Discord Personeli (Staff)"
};

const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[38;5;82m",
  red: "\x1b[38;5;196m",
  yellow: "\x1b[38;5;220m",
  cyan: "\x1b[38;5;51m",
  purple: "\x1b[38;5;141m",
  white: "\x1b[38;5;255m",
  gray: "\x1b[38;5;244m"
};

function banner() {
  console.clear();
  const art = [
    "  ███████╗██╗   ██╗██╗██╗     ███████╗ ██████╗ ██╗   ██╗██╗     ██╗  ██╗",
    "  ██╔════╝██║   ██║██║██║     ██╔════╝██╔═══██╗██║   ██║██║     ██║ ██╔╝",
    "  █████╗  ██║   ██║██║██║     ███████╗██║   ██║██║   ██║██║     █████╔╝ ",
    "  ██╔══╝  ╚██╗ ██╔╝██║██║     ╚════██║██║   ██║██║   ██║██║     ██╔═██╗ ",
    "  ███████╗ ╚████╔╝ ██║███████╗███████║╚██████╔╝╚██████╔╝███████╗██║  ██╗",
    "  ╚══════╝  ╚═══╝  ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝"
  ];

  const palette = [
    "\x1b[38;5;207m",
    "\x1b[38;5;171m",
    "\x1b[38;5;135m",
    "\x1b[38;5;99m",
    "\x1b[38;5;75m",
    "\x1b[38;5;51m"
  ];

  console.log("");
  art.forEach((line, i) => console.log(palette[i] + line + c.reset));

  console.log(`\n  ${c.purple}╭─────────────────────────────────────────────────────────────────╮${c.reset}`);
  console.log(`  ${c.purple}│${c.reset}  ${c.bold}${c.white}⚡ DISCORD BADGE MANAGER (ROZET YÖNETİCİSİ)${c.reset}                   ${c.purple}│${c.reset}`);
  console.log(`  ${c.purple}│${c.reset}  ${c.cyan}Developer :${c.reset} ${c.yellow}evilsoulk${c.reset}                                           ${c.purple}│${c.reset}`);
  console.log(`  ${c.purple}│${c.reset}  ${c.cyan}GitHub    :${c.reset} ${c.green}https://github.com/evilsoulk${c.reset}                      ${c.purple}│${c.reset}`);
  console.log(`  ${c.purple}╰─────────────────────────────────────────────────────────────────╯${c.reset}\n`);
}

function prompt(rl, q) {
  return new Promise(res => {
    if (rl.closed) return res("");
    rl.question(q, ans => res(ans.trim()));
  });
}

function headers(token) {
  return {
    "Accept": "*/*",
    "Accept-Language": "tr,en-US;q=0.9",
    "Authorization": token,
    "Content-Type": "application/json",
    "Origin": "https://ptb.discord.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.1226 Chrome/148.0.7778.280 Electron/42.11.15 Safari/537.36",
    "X-Super-Properties": SUPER_PROPERTIES
  };
}

async function getUser(token) {
  try {
    const res = await fetch("https://ptb.discord.com/api/v9/users/@me", { headers: headers(token) });
    if (res.status === 401) return { error: "Yetkisiz erişim (401). Token hatalı!" };
    if (!res.ok) return { error: `Sunucu hatası: HTTP ${res.status}` };
    return { data: await res.json() };
  } catch (err) {
    return { error: err.message };
  }
}

async function getBadges(token) {
  try {
    const res = await fetch("https://ptb.discord.com/api/v9/users/@me/badges", { headers: headers(token) });
    if (!res.ok) return { error: `Rozetler alınamadı: HTTP ${res.status}` };
    return { data: await res.json() };
  } catch (err) {
    return { error: err.message };
  }
}

async function patchBadges(token, hiddenBadges, displayOrder) {
  try {
    const res = await fetch("https://ptb.discord.com/api/v9/users/@me/badges/settings", {
      method: "PATCH",
      headers: headers(token),
      body: JSON.stringify({ display_order: displayOrder, hidden_badges: hiddenBadges })
    });
    if (!res.ok) return { error: `HTTP ${res.status}: ${await res.text()}` };
    return { data: await res.json() };
  } catch (err) {
    return { error: err.message };
  }
}

async function initToken(rl) {
  const argToken = (process.argv[2] || "").trim();
  if (argToken) return argToken;

  if (fs.existsSync(TOKEN_PATH)) {
    try {
      const saved = fs.readFileSync(TOKEN_PATH, 'utf8').trim();
      if (saved) {
        console.log(`${c.cyan}[i] Kayıtlı token bulundu.${c.reset}`);
        const chk = await getUser(saved);
        if (chk.data) {
          console.log(`${c.green}[✓] Hesap: ${c.bold}${chk.data.username}${c.reset} (${chk.data.global_name || ""})`);
          const choice = await prompt(rl, `${c.yellow}[?] Bu token ile devam edilsin mi? (Enter: Evet / 'n': Yeni token): ${c.reset}`);
          if (choice.toLowerCase() !== 'n') return saved;
        }
      }
    } catch (_) {}
  }

  console.log("");
  let input = await prompt(rl, `${c.yellow}[?] Discord Authorization Token girin: ${c.reset}`);
  input = input.replace(/^["']|["']$/g, '');

  if (input) {
    const save = await prompt(rl, `${c.cyan}[?] Token kaydedilsin mi? (E/h): ${c.reset}`);
    if (save.toLowerCase() !== 'h') {
      try {
        fs.writeFileSync(TOKEN_PATH, input, 'utf8');
        console.log(`${c.green}[✓] Token kaydedildi.${c.reset}\n`);
      } catch (_) {}
    }
  }

  return input;
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  banner();

  let token = await initToken(rl);
  if (!token) {
    console.log(`${c.red}[!] Token girilmedi.${c.reset}`);
    return rl.close();
  }

  console.log(`\n${c.cyan}[*] Hesaba bağlanılıyor...${c.reset}`);
  const userRes = await getUser(token);

  if (userRes.error) {
    console.log(`${c.red}[X] ${userRes.error}${c.reset}`);
    return rl.close();
  }

  const user = userRes.data;
  let statusMsg = `${c.green}[✓] Giriş yapıldı: ${user.username} (${user.id})${c.reset}`;

  while (true) {
    banner();

    console.log(`  ${c.purple}╭─────────────────────────────────────────────────────────────────╮${c.reset}`);
    console.log(`  ${c.purple}│${c.reset}  ${c.bold}Hesap :${c.reset} ${c.white}${user.username}${c.reset} (${user.global_name || "Özel isim yok"})     ${c.dim}ID:${c.reset} ${user.id}`);
    console.log(`  ${c.purple}│${c.reset}  ${c.bold}Nitro :${c.reset} ${user.premium_type ? c.green + "Aktif" : c.gray + "Yok"}${c.reset}`);
    console.log(`  ${c.purple}╰─────────────────────────────────────────────────────────────────╯${c.reset}`);

    const badgeRes = await getBadges(token);
    if (badgeRes.error) {
      console.log(`\n${c.red}[X] ${badgeRes.error}${c.reset}`);
      break;
    }

    const badges = badgeRes.data.badges || [];
    const owned = badges.filter(b => b.owned);
    const hiddenCount = owned.filter(b => b.hidden).length;
    const visibleCount = owned.length - hiddenCount;

    console.log(`\n  ${c.bold}Rozet Özeti:${c.reset} Toplam ${c.cyan}${owned.length}${c.reset} adet  |  ${c.green}${visibleCount} Görünür 🟢${c.reset}  |  ${c.red}${hiddenCount} Gizli 🔴${c.reset}\n`);

    if (owned.length === 0) {
      console.log(`  ${c.yellow}Hesapta aktif rozet yok.${c.reset}\n`);
    } else {
      console.log(`  ${c.gray}┌─────┬──────────────┬──────────────────────────────┬──────────────┐${c.reset}`);
      console.log(`  ${c.gray}│${c.reset} ${c.bold}#${c.reset}   ${c.gray}│${c.reset} ${c.bold}DURUM${c.reset}        ${c.gray}│${c.reset} ${c.bold}ROZET ADI${c.reset}                    ${c.gray}│${c.reset} ${c.bold}DETAY${c.reset}        ${c.gray}│${c.reset}`);
      console.log(`  ${c.gray}├─────┼──────────────┼──────────────────────────────┼──────────────┤${c.reset}`);

      owned.forEach((b, index) => {
        const num = (index + 1).toString().padStart(2, ' ');
        const name = (BADGE_NAMES[b.badge_id] || b.name || "Rozet").padEnd(28, ' ');
        const status = b.hidden ? `${c.red}🔴 GİZLİ  ${c.reset}` : `${c.green}🟢 GÖRÜNÜR${c.reset}`;
        const detail = (b.info_label || `ID: ${b.badge_id}`).slice(0, 12).padEnd(12, ' ');
        console.log(`  ${c.gray}│${c.reset} ${c.cyan}${c.bold}[${num}]${c.reset}${c.gray}│${c.reset} ${status}   ${c.gray}│${c.reset} ${c.white}${name}${c.reset} ${c.gray}│${c.reset} ${c.dim}${detail}${c.reset} ${c.gray}│${c.reset}`);
      });

      console.log(`  ${c.gray}└─────┴──────────────┴──────────────────────────────┴──────────────┘${c.reset}`);
    }

    if (statusMsg) {
      console.log(`\n  ${statusMsg}`);
      statusMsg = "";
    }

    console.log(`\n  ${c.yellow}${c.bold}⚡ KULLANIM:${c.reset}`);
    console.log(`  ${c.white}• Numarasını yazıp Enter'a bas: Durumunu değiştirir ${c.dim}(Görünür ⇄ Gizli)${c.reset}`);
    console.log(`  ${c.white}• Birden fazla için virgülle yaz: ${c.cyan}1, 3, 5${c.reset}`);
    console.log(`  ${c.white}• ${c.red}[H]${c.reset} Hepsini Gizle  |  ${c.green}[A]${c.reset} Hepsini Aç  |  ${c.yellow}[T]${c.reset} Token Değiştir  |  ${c.gray}[Q]${c.reset} Çıkış\n`);

    const action = await prompt(rl, `  ${c.yellow}👉 Seçiminiz: ${c.reset}`);

    if (rl.closed || action === "q" || action === "exit") {
      console.log(`\n  ${c.green}Çıkış yapıldı.${c.reset}\n`);
      break;
    }

    if (action === "t") {
      try { fs.unlinkSync(TOKEN_PATH); } catch (_) {}
      console.log(`\n  ${c.yellow}[*] Kayıtlı token silindi.${c.reset}`);
      token = await initToken(rl);
      statusMsg = `${c.green}[✓] Token güncellendi.${c.reset}`;
      continue;
    }

    if (action === "h") {
      const allIds = owned.map(b => b.badge_id);
      const res = await patchBadges(token, allIds, []);
      statusMsg = res.error ? `${c.red}[X] Hata: ${res.error}${c.reset}` : `${c.green}[✓] Tüm rozetler gizlendi.${c.reset}`;
      continue;
    }

    if (action === "a") {
      const allIds = owned.map(b => b.badge_id);
      const res = await patchBadges(token, [], allIds);
      statusMsg = res.error ? `${c.red}[X] Hata: ${res.error}${c.reset}` : `${c.green}[✓] Tüm rozetler görünür yapıldı.${c.reset}`;
      continue;
    }

    const numbers = action
      .split(/[,\s]+/)
      .map(x => parseInt(x, 10))
      .filter(x => !isNaN(x) && x >= 1 && x <= owned.length);

    if (numbers.length === 0) {
      statusMsg = `${c.red}[!] Geçersiz seçim. Listeden bir numara yazın.${c.reset}`;
      continue;
    }

    let currentHidden = owned.filter(b => b.hidden).map(b => b.badge_id);
    let changed = [];

    for (const num of numbers) {
      const b = owned[num - 1];
      const id = b.badge_id;
      const name = BADGE_NAMES[id] || b.name;

      if (currentHidden.includes(id)) {
        currentHidden = currentHidden.filter(x => x !== id);
        changed.push(`${name} (${c.green}AÇILDI${c.reset})`);
      } else {
        currentHidden.push(id);
        changed.push(`${name} (${c.red}GİZLENDİ${c.reset})`);
      }
    }

    const newDisplay = owned.map(b => b.badge_id).filter(id => !currentHidden.includes(id));
    const patchRes = await patchBadges(token, currentHidden, newDisplay);

    statusMsg = patchRes.error
      ? `${c.red}[X] Güncelleme hatası: ${patchRes.error}${c.reset}`
      : `${c.green}[✓] Güncellendi:${c.reset} ${changed.join(', ')}`;
  }

  rl.close();
}

main();
