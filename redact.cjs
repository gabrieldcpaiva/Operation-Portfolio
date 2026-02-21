const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

const imagesToRedact = [
    { name: '01_logo_inspired.png', rects: [{ x: 100, y: 180, w: 600, h: 100 }] },
    { name: '03_train.png', rects: [{ x: 480, y: 300, w: 200, h: 80 }] },
    { name: '04_christmas_scene.png', rects: [{ x: 230, y: 150, w: 350, h: 100 }] }
];

async function redactImage({ name, rects }) {
    const inputPath = path.join(__dirname, 'public/coloring-pages', name);
    const outputPath = path.join(__dirname, 'public/coloring-pages', name.replace('.png', '_redacted.png'));

    if (!fs.existsSync(inputPath)) {
        console.log(`File not found: ${inputPath}`);
        return;
    }

    try {
        const image = await loadImage(inputPath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0, image.width, image.height);

        // Draw Redaction Boxes
        ctx.fillStyle = '#0a0a0a'; // Match the site background
        rects.forEach(rect => {
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        });

        const out = fs.createWriteStream(outputPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => console.log(`Redacted: ${outputPath}`));
    } catch (e) {
        console.error(`Error processing ${name}: ${e}`);
    }
}

async function run() {
    for (const img of imagesToRedact) {
        await redactImage(img);
    }
}

run();
