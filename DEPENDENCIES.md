# Dépendances Externes - Massa.net v2

Ce document liste toutes les dépendances externes du site pour garantir son autonomie.

## 🔴 Dépendances Critiques (vers massa.net/massa.foundation)

### Documentation
- `https://docs.massa.net/` - Documentation principale (utilisée dans Navbar, Footer, Home, Start)
- `https://docs.massa.net/docs/tutorial/home` - Référencé dans bounties.ts
- `https://docs.massa.net/docs/node/run` - Référencé dans Start.tsx

**Impact**: Si massa.net est shutdown, ces liens ne fonctionneront plus.

### Services Massa
- `https://deweb.massa.network/search` - Service DeWeb (utilisé dans Deweb.tsx)
- `https://station.massa.net/` - Massa Station (utilisé dans Start.tsx, ecosystem.ts)
- `https://bridge.massa.net/index` - Massa Bridge (utilisé dans Start.tsx, ecosystem.ts)
- `https://syntra.massa.network/` - Syntra (utilisé dans ecosystem.ts)
- `https://explorer.massa.net/mainnet` - Explorer (utilisé dans Technology.tsx)
- `https://massa-graph.massahub.network/` - Massa Graph (utilisé dans ecosystem.ts)

**Impact**: Ces services pourraient être indisponibles si massa.net est shutdown.

### Forum
- `https://forum.massa.community/` - Forum communautaire (utilisé dans Navbar, Footer)

**Impact**: Le forum pourrait être indisponible.

### Emails
- `kevin@massa.foundation` - Email pour lister un projet (utilisé dans Ecosystem.tsx)
- `grants@massa.foundation` - Email pour les grants (utilisé dans GrantsBounty.tsx)
- `info@massa.net` - Email de contact (utilisé dans PrivacyPolicy.tsx, TermsOfService.tsx)

**Impact**: Ces emails pourraient ne plus fonctionner si massa.foundation/massa.net est shutdown.

## 🟡 Dépendances Non-Critiques (Services Externes)

### Réseaux Sociaux
- `https://discord.com/invite/massa` - Discord
- `https://x.com/massachain` - Twitter/X
- `https://www.youtube.com/@massa_chain` - YouTube
- `https://t.me/massanetwork` - Telegram
- `https://www.linkedin.com/company/massa-labs` - LinkedIn
- `https://massachain.medium.com/` - Medium
- `https://github.com/massalabs` - GitHub

**Impact**: Ces services sont externes et indépendants de massa.net.

### Services DeWeb (Décentralisés)
- `https://massabooks.massa-deweb.xyz` - MassaBook (décentralisé)
- `https://massablog.massa-deweb.xyz` - MassaBlog (décentralisé)

**Impact**: Ces services sont hébergés sur DeWeb et devraient rester disponibles même si massa.net est shutdown.

### Autres Services
- `https://coinmarketcap.com/currencies/massa/` - CoinMarketCap
- `https://www.coingecko.com/en/coins/massa` - CoinGecko
- `https://snaps.metamask.io/snap/npm/massalabs/metamask-snap/` - MetaMask Snap
- `https://chromewebstore.google.com/detail/bearby/...` - Bearby Wallet
- `https://www.enkrypt.com/download.html` - Enkrypt
- `https://cdn.embedly.com/...` - Embedly (pour YouTube)

**Impact**: Services externes, indépendants de massa.net.

## ✅ Ressources Locales

Toutes les images, SVG, et assets sont stockés localement dans `/public/images/`.

## 📝 Recommandations

1. **Pour les liens critiques**: Considérer des alternatives ou des copies locales de la documentation si nécessaire.
2. **Pour les emails**: Prévoir des alternatives ou des redirections.
3. **Pour les services**: S'assurer que les services DeWeb sont bien décentralisés et indépendants.

## 🔗 Références Canoniques

- `https://massa.net/` - Référencé dans Home.tsx (SEO canonical)
- `https://massa.foundation/` - Référencé dans TermsOfService.tsx, PrivacyPolicy.tsx

**Impact**: Ces URLs sont utilisées pour le SEO et les références légales.

