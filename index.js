const torrentParser = require('./src/torrent-parser');
const handleTorrent = require('./src/handle-torrent');

const torrent = torrentParser.open('./test/1.torrent');

handleTorrent(torrent, torrent.info.name);
