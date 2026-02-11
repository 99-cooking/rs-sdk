/**
 * Shared site layout for loot.xyz
 * Authentic 2007 RuneScape website design
 */

export const GITHUB_URL = 'https://github.com/99-cooking/rs-sdk';

export function rsLayout(title: string, content: string, activePage: string = ''): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - loot.xyz</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
            font-size: 10px;
            background-color: #473a2b;
            background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
            color: #c8b896;
            min-height: 100vh;
        }

        a { color: #c0a060; }
        a:hover { color: #ffe898; text-decoration: underline; }

        /* ===== OUTER WRAPPER ===== */
        .site-wrap {
            width: 775px;
            margin: 0 auto;
            background: #1b1108;
            border-left: 1px solid #5c4a32;
            border-right: 1px solid #5c4a32;
            min-height: 100vh;
        }

        /* ===== TOP BANNER / LOGO ===== */
        .rs-header {
            background: linear-gradient(180deg, #2c1e0e 0%, #1a0f05 50%, #0e0804 100%);
            text-align: center;
            padding: 15px 0 10px 0;
            border-bottom: 2px solid #3a2a18;
            position: relative;
        }
        .rs-header::after {
            content: '';
            display: block;
            height: 3px;
            background: linear-gradient(90deg, #1b1108, #5c4a32, #8a7a5a, #5c4a32, #1b1108);
        }
        .rs-logo {
            font-size: 32px;
            font-weight: bold;
            font-family: Georgia, 'Times New Roman', serif;
            color: #ffd760;
            text-shadow: 2px 2px 4px #000, 0 0 20px rgba(255,180,0,0.15);
            letter-spacing: 2px;
        }
        .rs-logo-sub {
            font-size: 10px;
            color: #8a7a5a;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-top: 2px;
        }

        /* ===== NAVIGATION BAR ===== */
        .rs-nav {
            background: linear-gradient(180deg, #4a3a22 0%, #3a2c18 50%, #2e2010 100%);
            border-top: 1px solid #6a5a3c;
            border-bottom: 2px solid #2a1c0e;
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: stretch;
        }
        .rs-nav a {
            display: flex;
            align-items: center;
            padding: 0 18px;
            color: #c8b896;
            text-decoration: none;
            font-size: 10px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-right: 1px solid #2a1c0e;
            border-left: 1px solid rgba(106,90,60,0.3);
            transition: background 0.1s;
        }
        .rs-nav a:first-child { border-left: 1px solid #2a1c0e; }
        .rs-nav a:hover {
            background: linear-gradient(180deg, #5c4a2e 0%, #4a3a22 50%, #3a2c18 100%);
            color: #ffe898;
            text-decoration: none;
        }
        .rs-nav a.active {
            background: linear-gradient(180deg, #6a5a3c 0%, #5c4a2e 50%, #4a3a22 100%);
            color: #ffd760;
        }

        /* ===== SUB-HEADER GOLD BAR ===== */
        .rs-subheader {
            background: linear-gradient(180deg, #5c4a32 0%, #3a2c18 100%);
            height: 22px;
            border-bottom: 1px solid #2a1c0e;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9px;
            color: #8a7a5a;
            letter-spacing: 1px;
        }

        /* ===== MAIN CONTENT AREA ===== */
        .rs-content {
            background: #2b2015;
            border: 1px solid #3a2c18;
            margin: 8px;
            padding: 12px;
            min-height: 400px;
        }

        /* ===== SECTION HEADERS (brown gradient bar) ===== */
        .rs-section-header {
            background: linear-gradient(180deg, #5c4a32 0%, #3a2c18 100%);
            border: 1px solid #6a5a3c;
            border-bottom: 1px solid #2a1c0e;
            padding: 5px 10px;
            margin-bottom: 0;
        }
        .rs-section-header h2 {
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #ffd760;
            text-shadow: 1px 1px 0 #000;
            margin: 0;
        }

        /* ===== SECTION BODY ===== */
        .rs-section-body {
            background: #241a0f;
            border: 1px solid #3a2c18;
            border-top: none;
            padding: 10px 12px;
            margin-bottom: 10px;
        }
        .rs-section-body p {
            line-height: 1.6;
            margin-bottom: 8px;
            color: #c8b896;
            font-size: 10px;
        }

        /* ===== PANELS (like the RS info boxes) ===== */
        .rs-panel {
            background: #241a0f;
            border: 1px solid #3a2c18;
            margin-bottom: 10px;
        }
        .rs-panel-header {
            background: linear-gradient(180deg, #5c4a32 0%, #3a2c18 100%);
            border-bottom: 1px solid #2a1c0e;
            padding: 5px 10px;
        }
        .rs-panel-header h2 {
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            color: #ffd760;
            text-shadow: 1px 1px 0 #000;
            margin: 0;
        }
        .rs-panel-body {
            padding: 10px 12px;
        }
        .rs-panel-body p {
            line-height: 1.6;
            margin-bottom: 8px;
            color: #c8b896;
            font-size: 10px;
        }

        /* ===== STATS ROW ===== */
        .rs-stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 12px 0;
            background: #1e150c;
            border: 1px solid #3a2c18;
            margin-bottom: 10px;
        }
        .rs-stat { text-align: center; }
        .rs-stat-value {
            font-size: 20px;
            font-weight: bold;
            color: #ffd760;
        }
        .rs-stat-label {
            color: #8a7a5a;
            font-size: 9px;
            margin-top: 2px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* ===== FEATURE GRID ===== */
        .rs-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin: 10px 0;
        }
        .rs-feature {
            background: #1e150c;
            border: 1px solid #3a2c18;
            padding: 10px;
        }
        .rs-feature h3 {
            color: #ffd760;
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 4px;
        }
        .rs-feature p {
            color: #a09070;
            font-size: 10px;
            line-height: 1.5;
        }

        /* ===== PLAY BUTTON ===== */
        .rs-btn {
            display: inline-block;
            padding: 6px 20px;
            background: linear-gradient(180deg, #5a8a28 0%, #3c6c12 50%, #2d5510 100%);
            color: #fff;
            text-decoration: none;
            font-size: 11px;
            font-weight: bold;
            border: 1px solid #7ecc3e;
            cursor: pointer;
            text-shadow: 1px 1px 0 #1a3308;
        }
        .rs-btn:hover {
            background: linear-gradient(180deg, #6e9e3a 0%, #4a7e1e 50%, #3a6818 100%);
            color: #fff;
            text-decoration: none;
        }
        .rs-btn-play {
            font-size: 14px;
            padding: 8px 40px;
        }
        .rs-btn-gold {
            background: linear-gradient(180deg, #6a5a3c 0%, #4a3a22 50%, #3a2c18 100%);
            border-color: #8a7a5a;
            color: #ffd760;
        }
        .rs-btn-gold:hover {
            background: linear-gradient(180deg, #7a6a4c 0%, #5a4a32 50%, #4a3c28 100%);
            color: #ffe898;
            text-decoration: none;
        }

        /* ===== FORMS ===== */
        .rs-form { max-width: 350px; margin: 0 auto; }
        .rs-form-group { margin-bottom: 12px; }
        .rs-form-group label {
            display: block;
            margin-bottom: 3px;
            color: #c8b896;
            font-weight: bold;
            font-size: 10px;
        }
        .rs-form-group input[type="text"],
        .rs-form-group input[type="password"] {
            width: 100%;
            padding: 4px 6px;
            border: 1px solid #5c4a32;
            background: #1b1108;
            color: #c8b896;
            font-size: 10px;
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
        }
        .rs-form-group input:focus {
            outline: none;
            border-color: #8a7a5a;
        }

        /* ===== CODE BLOCK ===== */
        pre {
            background: #1b1108;
            padding: 8px;
            border: 1px solid #3a2c18;
            overflow-x: auto;
            color: #7ecc3e;
            font-size: 10px;
            font-family: 'Courier New', Courier, monospace;
        }

        /* ===== MESSAGES ===== */
        .rs-error {
            color: #ff4444;
            background: #1b1108;
            border: 1px solid #5c2020;
            padding: 6px 10px;
            margin-bottom: 10px;
            font-size: 10px;
        }
        .rs-success {
            color: #7ecc3e;
            background: #1b1108;
            border: 1px solid #2a5c20;
            padding: 6px 10px;
            margin-bottom: 10px;
            font-size: 10px;
        }

        /* ===== FOOTER ===== */
        .rs-footer {
            background: linear-gradient(180deg, #2b2015 0%, #1b1108 100%);
            text-align: center;
            padding: 10px;
            font-size: 9px;
            color: #5c4a32;
            border-top: 1px solid #3a2c18;
        }
        .rs-footer a { color: #8a7a5a; }
        .rs-footer a:hover { color: #c8b896; }

        /* ===== HISCORES ===== */
        .hs-layout {
            display: flex;
            gap: 8px;
        }
        .hs-sidebar {
            width: 150px;
            flex-shrink: 0;
        }
        .hs-main {
            flex: 1;
            min-width: 0;
        }
        .hs-skill-list {
            list-style: none;
            padding: 0;
        }
        .hs-skill-list li {
            border-bottom: 1px solid #2a1c0e;
        }
        .hs-skill-list li:last-child { border-bottom: none; }
        .hs-skill-list a {
            display: block;
            padding: 3px 8px;
            color: #c8b896;
            text-decoration: none;
            font-size: 10px;
        }
        .hs-skill-list a:hover {
            color: #ffd760;
            background: #2b2015;
            text-decoration: none;
        }
        .hs-skill-list a.active {
            color: #ffd760;
            background: #2b2015;
            font-weight: bold;
        }
        .hs-skill-list .hs-special a {
            color: #c0a060;
        }
        .hs-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
        }
        .hs-table th {
            color: #ffd760;
            font-size: 9px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 4px 6px;
            border-bottom: 1px solid #5c4a32;
            text-align: left;
            background: linear-gradient(180deg, #3a2c18 0%, #2b2015 100%);
        }
        .hs-table th.right { text-align: right; }
        .hs-table td {
            padding: 3px 6px;
            border-bottom: 1px solid #2a1c0e;
            color: #c8b896;
        }
        .hs-table td.right { text-align: right; }
        .hs-table td a { color: #c0a060; }
        .hs-table td a:hover { color: #ffe898; }
        .hs-table tr:hover td { background: rgba(255,215,96,0.03); }
        .hs-search-row {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        .hs-search-box {
            flex: 1;
            background: #1e150c;
            border: 1px solid #3a2c18;
            padding: 8px;
            text-align: center;
        }
        .hs-search-box b {
            display: block;
            color: #c8b896;
            margin-bottom: 4px;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .hs-search-box input[type="text"],
        .hs-search-box input[type="number"] {
            padding: 3px 6px;
            border: 1px solid #5c4a32;
            background: #1b1108;
            color: #c8b896;
            font-size: 10px;
            width: 100px;
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
        }
        .hs-search-box input:focus {
            outline: none;
            border-color: #8a7a5a;
        }
        .hs-search-box input[type="submit"] {
            padding: 3px 10px;
            background: linear-gradient(180deg, #4a3a22 0%, #3a2c18 100%);
            border: 1px solid #5c4a32;
            color: #c8b896;
            cursor: pointer;
            font-size: 9px;
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
            margin-top: 4px;
        }
        .hs-search-box input[type="submit"]:hover {
            background: linear-gradient(180deg, #5c4a32 0%, #4a3a22 100%);
            color: #ffd760;
        }
        .hs-search-result {
            background: #1e150c;
            border: 1px solid #3a2c18;
            padding: 6px 10px;
            text-align: center;
            margin-top: 8px;
            color: #c8b896;
            font-size: 10px;
        }
        select {
            background: #1b1108;
            border: 1px solid #5c4a32;
            color: #c8b896;
            padding: 3px 6px;
            font-size: 10px;
            font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
        }

        /* Item icons */
        canvas.item-icon {
            image-rendering: pixelated;
            vertical-align: middle;
        }
        .text-orange { color: #ff9900; }
        .yellow { color: #ffd760; }

        /* Player profile stat table */
        .hs-profile-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
        }
        .hs-profile-table th {
            color: #ffd760;
            font-size: 9px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 4px 6px;
            border-bottom: 1px solid #5c4a32;
            text-align: left;
            background: linear-gradient(180deg, #3a2c18 0%, #2b2015 100%);
        }
        .hs-profile-table th.right { text-align: right; }
        .hs-profile-table td {
            padding: 3px 6px;
            border-bottom: 1px solid #2a1c0e;
            color: #c8b896;
        }
        .hs-profile-table td.right { text-align: right; }
        .hs-profile-table td a { color: #c0a060; }
        .hs-profile-table td a:hover { color: #ffe898; }

        /* ===== SCROLLBAR (matches brown theme) ===== */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #1b1108; }
        ::-webkit-scrollbar-thumb { background: #5c4a32; border: 1px solid #3a2c18; }
        ::-webkit-scrollbar-thumb:hover { background: #6a5a3c; }

        /* ===== DIVIDER ===== */
        .rs-divider {
            height: 1px;
            background: #3a2c18;
            margin: 10px 0;
        }

        @media (max-width: 800px) {
            .site-wrap { width: 100%; }
            .rs-nav { flex-wrap: wrap; height: auto; }
            .rs-nav a { padding: 6px 12px; }
            .hs-layout { flex-direction: column; }
            .hs-sidebar { width: 100%; }
            .hs-search-row { flex-direction: column; }
            .rs-features { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="site-wrap">
        <div class="rs-header">
            <div class="rs-logo">loot.xyz</div>
            <div class="rs-logo-sub">A RuneScape 2004 Private Server</div>
        </div>
        <nav class="rs-nav">
            <a href="/"${activePage === 'home' ? ' class="active"' : ''}>Home</a>
            <a href="/register"${activePage === 'register' ? ' class="active"' : ''}>Create Account</a>
            <a href="/hiscores"${activePage === 'hiscores' ? ' class="active"' : ''}>Hiscores</a>
            <a href="/rs2.cgi"${activePage === 'play' ? ' class="active"' : ''}>Play Now</a>
            <a href="${GITHUB_URL}">SDK</a>
        </nav>
        <div class="rs-subheader">loot.xyz &mdash; Free Online Adventure Game</div>
        <div class="rs-content">
            ${content}
        </div>
        <div class="rs-footer">
            <p>Powered by <a href="https://github.com/LostCityRS/Server">LostCity</a> &middot;
               SDK by <a href="${GITHUB_URL}">rs-sdk</a> &middot;
               Hosted by <a href="https://github.com/99-cooking">99 Cooking</a></p>
            <p style="margin-top:4px;">&copy; 2025 loot.xyz</p>
        </div>
    </div>
</body>
</html>`;
}
