var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
$('.fa-repeat').on('click',function()
{
  $('.fa-repeat').toggleClass('disabled')
  willLoop=1-willLoop;
});

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});



$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
function toggleSong()
{
        var song = document.querySelector('audio');
        console.log("pass");
        console.log(song);
        if (song.paused == true) {
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
}
$('.play-icon').on('click',function(){ toggleSong(); });

$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

function updateCurrentTime()
{
  var song=document.querySelector('audio');
  var currentTime=Math.floor(song.currentTime);
  currentTime=fancyTimeFormat(currentTime);
  var duration=Math.floor(song.duration);
  duration=fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);

}


function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


var songs = [
  //first playlist
  [{
        'name': 'Umar Bhar',
        'artist': 'Shael',
        'album':'Aitbar',
        'duration': '4:59',
       'fileName': 'p1_song1.mp3',
       'image':'p1_song1.jpg'
    },
    {
        'name': 'Tere sang yara',
        'artist': 'Arjit Singh',
        'album': 'Rustam',
        'duration': '4:50',
        'fileName': 'p1_song2.mp3',
        'image':'p1_song2.jpg'

    },
    {
        'name': 'Tum jo Aaye',
        'artist': 'Rahet Fateh Ali khan, Tulsi Kumar',
        'album': 'Once upon a Time in Mumbai',
        'duration': '4:48',
        'fileName': 'p1_song3.mp3',
        'image':'p1_song3.jpg'

    },
    {
        'name': 'Hum Deewane hai Aapke',
        'artist': 'Altaaf Sayyed',
        'album': 'Mera Sanam',
        'duration': '5:43',
        'fileName': 'p1_song4.mp3',
        'image':'p1_song4.jpg'
    }],

//second playlist
    [{
          'name': 'Galti se Mistake',
          'artist': 'Arjit Singh, Amit Mishra',
          'album': 'Jagga Jasoos',
          'duration': '3:23',
         'fileName': 'p2_song1.mp3',
         'image':'p2_song1.jpg'
      },
      {
          'name': 'Mere Rashke Qamar',
          'artist': 'Rahet Fateh Ali Khan',
          'album': 'Baadshaho',
          'duration': '3:40',
          'fileName': 'p2_song2.mp3',
          'image':'p2_song2.jpg'

      },
      {
          'name': 'Radha',
          'artist': 'Shahid Mallya',
          'album': 'Jab harry met Sejal',
          'duration': '3:50',
          'fileName': 'p2_song3.mp3',
          'image':'p2_song3.jpg'

      },
      {
          'name': 'Ding Dang',
          'artist': 'Amit Mishra, Antara Mitra',
          'album': 'Munna Michael',
          'duration': '3:22',
          'fileName': 'p2_song4.mp3',
          'image':'p2_song4.jpg'
      }],

//playlist 3
      [{
            'name': 'Holi Khele Raghuveera',
            'artist': 'Amitabh Bachchan, Alka Yagnik',
            'album': 'Baghban',
            'duration': '5:37',
           'fileName': 'p3_song1.mp3',
           'image':'p3_song1.jpg'
        },
        {
            'name': 'Balam Pichkari',
            'artist': 'Vishal Dadlani, Shalmali Kholgade',
            'album': 'Ye jawaani hai Deewani',
            'duration': '4:56',
            'fileName': 'p3_song2.mp3',
            'image':'p3_song2.jpg'

        },
        {
          'name': 'Badri Ki Dulhania (Title Track)',
          'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
          'album': 'Badrinath ki Dulhania',
          'duration': '3:26',
         'fileName': 'p3_song3.mp3',
         'image':'p3_song3.jpg'

        },
        {
            'name': 'Aaj Na Chhodenge',
            'artist': 'Kihore Kumar, Lata Mangeshkar',
            'album': 'Kati-Patang',
            'duration': '5:15',
            'fileName': 'p3_song4.mp3',
            'image':'p3_song4.jpg'
        }],

//playlist 4
        [{
              'name': 'Chori Chori Dil Tera',
              'artist': 'Kumar Sanu, Sujata Goshwamy',
              'album': 'Phool aur Angaar',
              'duration': '6:39',
             'fileName': 'p4_song1.mp3',
             'image':'p4_song1.jpg'
          },
          {
              'name': 'Hum Teri Mohabbat Mein',
              'artist': 'Kumar Sanu, Sadhan Sargam',
              'album': 'Phool aur Angaar',
              'duration': '6:29',
              'fileName': 'p4_song2.mp3',
              'image':'p4_song1.jpg'

          },
          {
              'name': ' dil ne ye kha dil se',
              'artist': 'Sonu Nigam, Alka Yagnik',
              'album': 'Dhadkan',
              'duration': '5:01',
              'fileName': 'p4_song3.mp3',
              'image':'p4_song3.jpg'

          },
          {
              'name': 'Mera dil bi kitna pagal',
              'artist': 'Kumar Sanu',
              'album': 'Saajan',
              'duration': '5:25',
              'fileName': 'p4_song4.mp3',
              'image':'p4_song4.jpg'
          }],

//playlist 5
          [{
                'name': 'Fyonladiya',
                'artist': 'Kishan Mahipal',
                'album': 'Ghughuti 2',
                'duration': '5:48',
               'fileName': 'p5_song1.mp3',
               'image':'p5_song1.jpg'
            },
            {
                'name': 'Gf Bf',
                'artist': 'Gurinder Seagal',
                'album': 'GF-BF',
                'duration': '5:14',
                'fileName': 'p5_song2.mp3',
                'image':'p5_song2.jpg'

            },
            {
                'name': 'Kala Chasma',
                'artist': 'Neha Kakkar, Badshah, Amar Arshi',
                'album': 'Baar Baar Dekho',
                'duration': '3:07',
                'fileName': 'p5_song3.mp3',
                'image':'p5_song3.jpg'

            },
            {
                'name': 'Akhiyan',
                'artist': 'Neha Kakkar,Bohemia,Tony Kakkar',
                'album': 'Akhiyan',
                'duration': '4:40',
                'fileName': 'p5_song4.mp3',
                'image':'p5_song4.jpg'
            }],

//playlist 6
            [{
                  'name': 'Kagna Tera ni',
                  'artist': 'Dr Jeus',
                  'album': 'Char Dil ki Chadhni',
                  'duration': '4:00',
                 'fileName': 'p6_song1.mp3',
                 'image':'p6_song1.jpg'
              },
              {
                  'name': 'Dard Karaara',
                  'artist': 'Kumar Sanu',
                  'album': 'Dum laga ke haiysa',
                  'duration': '4:15',
                  'fileName': 'p6_song2.mp3',
                  'image':'p6_song2.jpg'

              },
              {
                  'name': 'Dil Beimaan',
                  'artist': 'Benny Dayal, Shalmali Kholgade',
                  'album': 'Race 2',
                  'duration': '2:29',
                  'fileName': 'p6_song3.mp3',
                  'image':'p6_song3.jpg'

              },
              {
                  'name': 'Patiala Peg',
                  'artist': 'Diljit',
                  'album': 'Patiala Peg',
                  'duration': '4:16',
                  'fileName': 'p6_song4.mp3',
                  'image':'p6_song4.jpg'
              }],
]


$(document).ready(function(){

  $('#playlist-wrapper div').on('click',function(){
  var id= $(this).attr('id');
  var lastChar = id.substr(id.length -1);
  var pos=parseInt(lastChar);
  changeCurrentSongDetails(songs[pos-1][0]);


    for(var i =0; i < songs[pos].length;i++) {
       var obj = songs[pos-1][i];
       var name = '#song' + (i+1);
       var song = $(name);
       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1);

   }



 });

updateCurrentTime();
setInterval(function()
{
updateCurrentTime();
},1000);

$('#songs').DataTable({ paging: false});


});

function addSongNameClickEvent(songObj,position){

var id="#song"+position;
var songName= songObj.fileName;
console.log(songName);

$(id).on('click',function()
{

var audio=document.querySelector('audio');
var currentSong="songs/"+audio.src;

console.log(currentSong);

if(currentSong.search(songName)!=-1)
{
toggleSong();
}
else{
audio.src="songs/"+songName;
console.log(audio.src);
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}


function changeCurrentSongDetails(songObj) {
$('.current-song-image').attr('src','img/' + songObj.image)
$('.current-song-name').text(songObj.name)
$('.current-song-album').text(songObj.album)
}



$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
});





var equal=0;

$(".fa-bar-chart").click(function(){

$(this).toggleClass("active");
if(equal==0)
{

equal=1;

$("svg").css("display","inline-block");
$(".content").css("display","none");
$(".contain").css("display","inline-block");
$(".contain").css("background","black");


}
else{
equal=0;
$("svg").css("display","none");
$(".content").css("display","inline-block");
$(".contain").css("display","none");




}});













$(".playlist").mouseover(function(){


$(".playlist .p1").removeClass('hidden');

$(".playlist").css("height","205px");

});
$(".playlist").mouseout(function(){

$(".playlist .p1").addClass('hidden');

$(".playlist").css("height","200px");

});



$('#playlist-wrapper div').on('click',function(){
var id= $(this).attr('id');
  $('#playlist-wrapper').addClass('hidden');
  $('.content').removeClass('hidden');
  $('footer').removeClass('hidden');
});
