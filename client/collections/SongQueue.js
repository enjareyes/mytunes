// SongQueue.js - Defines a backbone model 
// class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  playFirstSong: function(){
    this.at(0).play();
  },

  enqueue: function(){
    if (this.length === 1){
      this.playFirstSong()
    } 
  },

  dequeue: function(song){
    if (this.at(0)=== song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function(){
    this.shift();
    if (this.length >= 1){
      this.playFirstSong()
    } else{
      this.trigger('stop')
    }
  }

});