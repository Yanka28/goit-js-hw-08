
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframeEl = document.querySelector('#vimeo-player')
const player = new Player(iframeEl);
const LS_SET = "videoplayer-current-time"

const onPlay = function ({ seconds }) {
    localStorage.setItem(LS_SET, JSON.stringify(seconds))
   
}

player.on('timeupdate', throttle(onPlay, 1000));

const LS_GET = localStorage.getItem(LS_SET)
 console.log(LS_GET);
player.setCurrentTime(Number(LS_GET)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});




