// import css from './index.scss'
// import pic from './timg (2).jpg'
let a: number = 0;
import axios from 'axios'
axios.get('/some/path').then(res => {
    console.log(res);

}).catch(err => {
    console.log(err);

})
console.log(a);
// const img = new Image()
// img.src = pic
// let ele = `<div class=${css.font}>${a}</div>`
// document.write(ele)

// document.getElementsByTagName('body')[0].append(img)