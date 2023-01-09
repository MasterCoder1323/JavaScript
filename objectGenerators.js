function album(songs,photos,audioId,viewerId){
    this.songs:songs,
    this.songIndex:0,
    this.currentSong:this.songs[this.songIndex],
    this.photos:photos,
    this.currentPhoto:this.photos[this.songIndex],
    this.audio: document.getElementById(audioId),
    this.viewer: document.getElementById(viewerId),
    this.play: function(){
        this.audio.src = this.song;
        this.audio.play();
    }
    this.pause: function(){
        this.audio.pause();
    }
    this.setSong: function(index){
        this.songIndex = index;
        this.currentPhoto:this.photos[this.songIndex];
        this.currentSong:this.songs[this.songIndex];
    }
};
