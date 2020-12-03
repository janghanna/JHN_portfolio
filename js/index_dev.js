import 'babel-polyfill';
import about from './about_me.js';
import popup from './popup.js';
import side from './sidenav.js';
import slide from './slide.js';

function init(){

    var pageURL = location.pathname,
        pageS = pageURL.lastIndexOf('/')+1,
        pageE = pageURL.lastIndexOf('.'),
        pageName = pageURL.slice(pageS,pageE);
    

    side();
    
    switch(pageName){
        case 'about_me': about(); break;
        case 'portfolio':slide(); popup(); break;
    }
}
window.addEventListener('DOMContentLoaded',init);