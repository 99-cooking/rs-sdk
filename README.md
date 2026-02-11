```
    ██╗      ██████╗  ██████╗ ████████╗   ██╗  ██╗██╗   ██╗███████╗
    ██║     ██╔═══██╗██╔═══██╗╚══██╔══╝   ╚██╗██╔╝╚██╗ ██╔╝╚══███╔╝
    ██║     ██║   ██║██║   ██║   ██║       ╚███╔╝  ╚████╔╝   ███╔╝ 
    ██║     ██║   ██║██║   ██║   ██║       ██╔██╗   ╚██╔╝   ███╔╝  
    ███████╗╚██████╔╝╚██████╔╝   ██║   ██╗██╔╝ ██╗   ██║   ███████╗
    ╚══════╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
```

# 🦞 loot.xyz

**A RuneScape 2004 private server** — Experience the golden age of Gielinor.

🎮 **Play Now:** https://loot.xyz  
🤖 **Bot SDK:** https://github.com/99-cooking/rs-sdk  
📊 **Hiscores:** https://loot.xyz/hiscores

---

## ✨ Features

- **25x XP Rates** — Level up fast, perfect for experiments
- **All Members Content** — P2P areas and skills unlocked for everyone
- **Bot-Friendly** — Full SDK support for automation and AI agents
- **2004 Authentic** — The real RuneScape experience, pre-GE era
- **Web Client** — Play directly in your browser, no download needed

---

## 🎮 How to Play

1. Visit https://loot.xyz
2. Click **Register** to create an account (or just log in with a new username)
3. Click **Play Now** to launch the web client
4. Enter your credentials and start your adventure!

---

## 🤖 Bot Development

Want to automate your grind? Clone our SDK:

```bash
git clone https://github.com/99-cooking/rs-sdk.git
cd rs-sdk && bun install

# Create a new bot
bun scripts/create-bot.ts mybot

# Run your bot
bun bots/mybot/script.ts
```

The SDK connects to loot.xyz by default and provides:
- Full game state access (inventory, skills, map, NPCs)
- Action primitives (walk, click, interact)
- Pathfinding utilities
- Tutorial Island auto-skip

See the [SDK documentation](https://github.com/99-cooking/rs-sdk) for more details.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      loot.xyz                           │
├─────────────────────────────────────────────────────────┤
│  Engine (Port 8080)     │  Gateway (Port 7780)          │
│  ├─ Game simulation     │  ├─ WebSocket bridge          │
│  ├─ Web client serving  │  ├─ Bot state management      │
│  ├─ Hiscores            │  └─ SDK ↔ Browser relay       │
│  ├─ Registration        │                               │
│  └─ REST APIs           │                               │
├─────────────────────────────────────────────────────────┤
│  Data (Volume)                                          │
│  ├─ db.sqlite (accounts, hiscores)                      │
│  └─ players/ (save files)                               │
└─────────────────────────────────────────────────────────┘
```

**Endpoints:**
| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/register` | Account registration |
| `/rs2.cgi` | Web game client |
| `/bot?bot=NAME&password=PASS` | Bot client (headless-friendly) |
| `/hiscores` | Player rankings |
| `/gateway` | WebSocket for SDK |
| `/status` | Bot status API |
| `/playercount` | Online player count |

---

## 🚀 Self-Hosting

### Prerequisites
- [Bun](https://bun.sh) v1.0+
- Node.js 18+ (for some dependencies)

### Local Development

```bash
# Clone the repo
git clone https://github.com/99-cooking/loot.xyz.git
cd loot.xyz

# Install dependencies
bun install

# Start the server
bun start.ts
```

The server will be available at `http://localhost:8080`.

### Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/loot-xyz)

1. Connect your GitHub repo
2. Add a volume mounted at `/opt/server/data`
3. Set `PORT=8080`
4. Deploy!

---

## 🎮 Server Features

This server has modifications from the original game for development and bot testing:

- **Faster leveling** — 25x XP rates, accelerated progression
- **Infinite run energy** — Players never tire
- **No random events** — Anti-botting events disabled
- **All members content** — Full P2P access for everyone

---

## 🙏 Credits

This project is built on the shoulders of giants:

- **[LostCity/Server](https://github.com/LostCityRS/Server)** — The incredible open-source RS2 server emulator
- **[rs-sdk](https://github.com/MaxBittker/rs-sdk)** — Bot SDK by Max Bittker
- **[2004scape](https://2004scape.org)** — Inspiration and community

---

## 📜 Legal

This is a fan project for educational and preservation purposes. Not affiliated with or endorsed by Jagex Ltd. RuneScape is a registered trademark of Jagex Ltd.

---

<p align="center">
  <b>Made with 🦞 by <a href="https://github.com/99-cooking">99 Cooking</a></b><br>
  <i>Est. 2026 — Cooking lobsters since Tutorial Island</i>
</p>
