var playlist = new Object({Outkast: 'hey ya'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[Outkast] = songTitle
  return playlist
}