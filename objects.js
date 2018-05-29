var playlist = {
  hannah: "Hannah's song"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}