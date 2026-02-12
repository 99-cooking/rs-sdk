import { layout } from './layout.js';

export function handlePlayPage(url: URL): Response | null {
    if (url.pathname !== '/play' && url.pathname !== '/play/') {
        return null;
    }

    const content = `
    <style>
        .play-container {
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }
        .play-container iframe {
            border: 2px solid rgba(255,215,0,0.3);
            border-radius: 8px;
            background: #000;
        }
    </style>
    <div class="play-container">
        <iframe src="/rs2.cgi" width="789" height="532" allowfullscreen></iframe>
    </div>
    `;

    return new Response(layout('Play', content, 'play'), {
        headers: { 'Content-Type': 'text/html' }
    });
}
