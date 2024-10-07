console.log("welcome");
const music= new Audio('audio/1.mp3');
//music.play();

const songs=[
    {
        id:"1",
    songName:'<h5>On My Way<br><div class="sub">Alan Walker</div></h5>',
    poster:"musicimg/1.jpg"

    },
    {
        id:"2",
    songName:'<h5>besabriyaan<br><div class="sub">Armaan Malik</div></h5>',
    poster:"musicimg/2.jpg"

    },

     {
        id:"3",
    songName:'<h5>Pani da Rang<br><div class="sub">Ayushmann Khurrana</div></h5>',
    poster:"musicimg/3.jpg"

    },
    {
        id:"4",
    songName:'<h5>Zehnaseeb<br><div class="sub">Chinmayi and Shekhar Ravjian</div></h5>',
    poster:"musicimg/4.jpg"

    },
    {
        id:"5",
    songName:'<h5>Paradise<br><div class="sub">Coldplay</div></h5>',
    poster:"musicimg/5.jpg"

    },
    {
        id:"6",
    songName:'<h5>Dusk Till Dawn<br><div class="sub">Zayn</div></h5>',
    poster:"musicimg/6.jpg"

    },
    {
        id:"7",
    songName:'<h5>Ghawrbaari<br><div class="sub">Anupam Roy</div></h5>',
    poster:"musicimg/7.jpg"

    },
    {
        id:"8",
    songName:'<h5>Hymn for the Weekend<br><div class="sub">Coldplay</div></h5>',
    poster:"musicimg/8.jpg"

    },
    {
        id:"9",
    songName:'<h5>Remind Me To Forget<br><div class="sub">Kygo and Miguel</div></h5>',
    poster:"musicimg/9.jpg"

    },
    {
        id:"10",
    songName:'<h5>The Night We Met<br><div class="sub">Lord Huron</div></h5>',
    poster:"musicimg/10.jpg"

    },
    {
        id:"11",
    songName:'<h5>Maiyya Mainu<br><div class="sub">Sachet Tandon and Sachet–Parampara</div></h5>',
    poster:"musicimg/11.jpg"

    },
    {
        id:"12",
    songName:'<h5>Mitti Di Khushboo<br><div class="sub">Ayushmann Khurrana</div></h5>',
    poster:"musicimg/12.jpg"

    },
    {
        id:"13",
    songName:'<h5>Oboseshe<br><div class="sub">Arijit Singh</div></h5>',
    poster:"musicimg/13.jpg"

    },
    {
        id:"14",
    songName:'<h5>cold/mess<br><div class="sub">Prateek Kuhad</div></h5>',
    poster:"musicimg/14.jpg"

    },

     {
        id:"15",
    songName:'<h5>Tune Kaha<br><div class="sub">Prateek Kuhad</div></h5>',
    poster:"musicimg/15.jpg"

    },
     {
        id:"16",
    songName:'<h5>Jeet 2.0<br><div class="sub"> Ritviz</div></h5>',
    poster:"musicimg/16.jpg"

    },
     {
        id:"17",
    songName:'<h5>Samajavaragamana<br><div class="sub">Sid Sriram</div></h5>',
    poster:"musicimg/17.jpg"

    },
     {
        id:"18",
    songName:'<h5>Shape of You<br><div class="sub">Ed Sheeran</div></h5>',
    poster:"musicimg/18.jpg"

    },

     {
        id:"19",
    songName:'<h5>Tum Jab Paas<br><div class="sub">Prateek Kuhad</div></h5>',
    poster:"musicimg/19.jpg"

    },
     {
        id:"20",
    songName:'<h5>When Chai Met Toast<br><div class="sub">Band</div></h5>',
    poster:"musicimg/20.jpg"

    },

     {
        id:"21",
    songName:'<h5>I Don’t Wanna Live Forever<br><div class="sub">Taylor Swift and Zayn</div></h5>',
    poster:"musicimg/21.jpg"

    }    

]

Array.from(document.getElementsByClassName('songitems')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});


let masterplay= document.getElementById('masterplay');
let wave= document.getElementById('wave');
masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();        
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        
    }
    else{
        music.pause();
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
        wave.classList.remove('active1');
    }
});
const map=() => {
    Array.from(document.getElementsByClassName('playlist')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill'); 
        el.style.opacity="0";        
    })
}
const mab=() => {
    Array.from(document.getElementsByClassName('songitems')).forEach((el)=>{
        el.style.background='rgb(0, 31, 51, .0)';
    })
}
let index=0;
let poster_master=document.getElementById('poster_master');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playlist')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;  
        music.src = `audio/${index}.mp3`;
        poster_master.src = `musicimg/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill'); 
        wave.classList.add('active1');   
        
        let songtitle = songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML= songName;
        })
        mab();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background="rgb(0, 31, 51, 1)";
        map();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        el.target.style.opacity="1";        
    })
});

    let currentstart=document.getElementById('currentstart');
    let currentend=document.getElementById('currentend');
    let seek=document.getElementById('seek');
    let bar2=document.getElementById('bar2');
    let circle=document.getElementsByClassName('circle')[0];
    music.addEventListener('timeupdate', ()=>{
        let music_cur=music.currentTime;
        let music_dur=music.duration;        
        let min1=Math.floor(music_dur/60);
        let sec1=Math.floor(music_dur%60);  
        if(sec1<10){
            sec1=`0${sec1}`;
        }       
        
        currentend.innerText=`${min1}:${sec1}`;

        let min2=Math.floor(music_cur/60);
        let sec2=Math.floor(music_cur%60);
        if(sec2<10){
            sec2=`0${sec2}`;
        }
        currentstart.innerText=`${min2}:${sec2}`;



        let progessbar= parseInt((music_cur/music_dur)*100);
        seek.value=progessbar;
        let seekbar=seek.value;
        bar2.style.width=`${seekbar}%`;
        circle.style.left=`${seekbar}%`;
    });
    seek.addEventListener('change',()=>{
    music.currentTime=  seek.value * music.duration /100;
    });
    
    let vol_icon=document.getElementById('vol_icon');
    let vol=document.getElementById('vol');
    let vol_bar=document.getElementById('vol_bar');
    let vol_dot=document.getElementById('vol_dot');
    vol.addEventListener('change',()=>{
        if(vol.value==0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-mute-fil');
        }
        if(vol.value>0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-mute-fil');
        }
        if(vol.value>50){
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-mute-fil');
        }
        let vol_a=vol.value;
        vol_bar.style.width= `${vol_a}%`;
        vol_dot.style.left= `${vol_a}%`;
        music.volume= vol_a/100;
    })


    let back=document.getElementById('back');
    let next=document.getElementById('next');
    back.addEventListener('click',()=>{
        index--;
        if(index<1){
            index= Array.from(document.getElementsByClassName('songitems')).length;
        }
        music.src = `audio/${index}.mp3`;
        poster_master.src = `musicimg/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');  
        wave.classList.add('active1');  
        
        let songtitle = songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML= songName;
        })
        mab();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background="rgb(0, 31, 51, 1)";
        map();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        el.target.style.opacity="1"; 
    });
    next.addEventListener('click',()=>{
        index++;
        if(index>Array.from(document.getElementsByClassName('songitems')).length){
            index=1;
        }
        music.src = `audio/${index}.mp3`;
        poster_master.src = `musicimg/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active1');    
        
        let songtitle = songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML= songName;
        })
        mab();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background="rgb(0, 31, 51, 1)";
        map();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        el.target.style.opacity="1";     
    })
    