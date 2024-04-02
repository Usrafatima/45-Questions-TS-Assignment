function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Ali Zafar", "The First Album"));
console.log(make_album("Atif Aslam", "The Second Album"));
console.log(make_album("Nazia Hassan", "The Third Album", 12));
