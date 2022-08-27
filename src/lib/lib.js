export function getAverageColor(imageEl, ratio) {
    const canvas = document.createElement('canvas');

    const height = canvas.height = imageEl.naturalHeight;
    const width = canvas.width = imageEl.naturalWidth;

    const context = canvas.getContext('2d');
    context.drawImage(imageEl, 0, 0);

    let data, length;
    let i = -4;
    let count = 0;

    try {
        data = context.getImageData(0, 0, width, height);
        length = data.data.length;
    } catch (err) {
        console.log(err);
        return {
            R: 0,
            G: 0,
            B: 0
        }
    }

    let R, G, B;
    R = G = B = 0;

    while ((i += ratio * 4) < length) {
        ++count;

        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
    }

    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);

    return {
        R, G, B
    };
}