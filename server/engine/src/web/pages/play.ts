import { layout } from './layout.js';
import Environment from '#/util/Environment.js';
import { getPublicPerDeploymentToken } from '#/io/PemUtil.js';

export function handlePlayPage(url: URL): Response | null {
    if (url.pathname !== '/play' && url.pathname !== '/play/') {
        return null;
    }

    const nodeid = Environment.NODE_ID;
    const lowmem = 0;
    const members = Environment.NODE_MEMBERS;
    const perDeploymentToken = Environment.WEB_SOCKET_TOKEN_PROTECTION ? getPublicPerDeploymentToken() : '';

    const content = `
    <style>
        .play-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
        }
        .play-container canvas {
            width: 765px;
            height: 503px;
            display: block;
            border: 2px solid rgba(255,215,0,0.3);
            border-radius: 8px;
            background: #000;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
            outline: none;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        .play-controls {
            margin-top: 10px;
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        .play-controls a, .play-controls select {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            color: #4aff4a;
            text-decoration: none;
            cursor: pointer;
        }
        .play-controls a:hover { text-decoration: underline; }
        .play-controls select {
            background: rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 4px;
            padding: 2px 5px;
        }
    </style>
    <div class="play-container">
        <canvas id="canvas" width="765" height="503">
            Your browser is not capable of running our web client.
        </canvas>
        <div class="play-controls">
            <select id="play-size" onchange="setPlaySize()">
                <option value="1">1x Size</option>
                <option value="2">2x Size</option>
                <option value="3">3x Size</option>
                <option value="auto" selected>Auto Size</option>
            </select>
            <select id="play-filtering" onchange="setPlayFilter()">
                <option value="auto">Auto Scaling</option>
                <option value="pixelated">Pixel Scaling</option>
            </select>
            <a href="#" onclick="togglePlayFullscreen(); return false;">Fullscreen</a>
            <a href="#" id="play-screenshot" onclick="savePlayScreenshot(); return false;">Screenshot</a>
        </div>
    </div>

    <script>
        (function() {
            const canvas = document.getElementById('canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Loading...', canvas.width / 2, canvas.height / 2);
            }
        })();

        function setPlaySize(size) {
            const canvas = document.getElementById('canvas');
            if (!size) size = document.getElementById('play-size').value;
            switch (size) {
                case '1': case '2': case '3':
                    canvas.style.width = (765 * parseInt(size)) + 'px';
                    canvas.style.height = (503 * parseInt(size)) + 'px';
                    canvas.style.maxWidth = 'none';
                    break;
                default:
                case 'auto':
                    canvas.style.width = '765px';
                    canvas.style.height = '503px';
                    canvas.style.maxWidth = '100%';
                    break;
            }
            document.getElementById('play-size').value = size;
            localStorage.setItem('playCanvasSize', size);
        }

        function setPlayFilter() {
            const canvas = document.getElementById('canvas');
            const val = document.getElementById('play-filtering').value;
            canvas.style.imageRendering = val === 'pixelated' ? 'pixelated' : 'auto';
            localStorage.setItem('playFiltering', val);
        }

        function togglePlayFullscreen() {
            const canvas = document.getElementById('canvas');
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                canvas.requestFullscreen();
            }
        }

        function savePlayScreenshot() {
            const link = document.getElementById('play-screenshot');
            link.download = 'screenshot-' + Math.floor(Date.now() / 1000) + '.png';
            link.href = document.getElementById('canvas').toDataURL('image/png');
        }

        // Restore settings
        (function() {
            const size = localStorage.getItem('playCanvasSize') || 'auto';
            setPlaySize(size);
            const filter = localStorage.getItem('playFiltering');
            if (filter === 'pixelated') {
                document.getElementById('canvas').style.imageRendering = 'pixelated';
                document.getElementById('play-filtering').value = 'pixelated';
            }
        })();
    </script>

    <script src="/client/deps.js"></script>
    <script type="module">
        import { Client } from '/client/client.js';
        ${perDeploymentToken ? `document.cookie = 'per_deployment_token="${perDeploymentToken}"; Domain=' + window.location.hostname;` : ''}
        new Client(${nodeid}, ${lowmem}, ${members});
    </script>
    `;

    return new Response(layout('Play', content, 'play'), {
        headers: { 'Content-Type': 'text/html' }
    });
}
