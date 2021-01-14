import Stage from './stage'
import Sprite from './sprite'

const stage = new Stage({
    width: 512, height: 512, antialias: true,
})
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(stage.view);


const sprite = new Sprite({source:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3175175485,30977167&fm=15&gp=0.jpg'},stage.stage)

