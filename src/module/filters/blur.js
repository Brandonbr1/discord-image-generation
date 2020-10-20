const jimp = require(`jimp`);

module.exports = class Blur {
    /**
     * Blur
     * @param {image} image 
     * @param {level} level 
     */
    async getImage(image, level) {
        if (!image) throw new Error(`You must provide an image.`);
        image = await jimp.read(image);
        image.resize(480, 480);
        image.blur(isNaN(level) ? 5 : parseInt(level));
        let raw;
        image.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};