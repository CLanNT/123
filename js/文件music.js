
//<!CDATA[
var bodyBgs = [];
bodyBgs[0] = "music/01.flac";
bodyBgs[1] = "music/02.flac";
bodyBgs[2] = "music/03.flac";
bodyBgs[3] = "music/04.flac";
bodyBgs[4] = "music/05.flac";
bodyBgs[5] = "music/06.flac";
bodyBgs[6] = "music/07.flac";
bodyBgs[7] = "music/08.flac";
bodyBgs[8] = "music/09.flac";
bodyBgs[9] = "music/10.flac";
bodyBgs[10] = "music/11.flac";
bodyBgs[11] = "music/12.flac";
var randomBgIndex = Math.round( Math.random() * 11 ); document.write('<audio src=\''+bodyBgs[randomBgIndex]+ '\'autoplay=\'autoplay\'' + 'loop=\'loop \'></audio>');
//]]>


