import * as PIXI from 'pixi.js'

class Stage {
    view: any
    stage:any
    constructor(options) {
        //Create a Pixi Application
        let app = new PIXI.Application(options);
        this.view = app.view
        this.stage = app.stage
    }
}

export default Stage