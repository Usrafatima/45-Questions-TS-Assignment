function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Ali Zafar", "The First Album"));
console.log(make_album("Atif Aslam", "The Second Album"));
console.log(make_album("Nazia Hassan", "The Third Album", 12));