import * as PIXI from 'pixi.js'


class Sprite {
    options: any
    stage: any
    sprite: any
    constructor(options, stage) {
        this.options = options
        this.stage = stage
        PIXI.loader
            .add(this.options.source)
            .load(this.setup.bind(this));

        this.click()
    }
    setup() {
        const source = this.options.source
        let texture = PIXI.utils.TextureCache[source];
        let rectangle = new PIXI.Rectangle(0, 0, 20, 20);
        texture.frame = rectangle;
        let rocket = new PIXI.Sprite(texture);
        rocket.x = 32;
        rocket.y = 32;
        this.stage.addChild(rocket)
    }
    remove() {

        this.stage.removeChild(this.sprite)
    }
    click() {
        PIXI.loader.on("click", this.remove);
    }
}

export default Sprite