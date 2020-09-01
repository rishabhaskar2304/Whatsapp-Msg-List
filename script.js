let s = "";
let nl = "\r\n";
// l = no. of elements you want to fetch
// m will be the no. of intial element
let l=7;
 for(i=0;i<l;i++) {
    let m = 9+i;
    let n=m.toString();
    let o = "#main > div._3h-WS > div > div > div.z_tTQ > div:nth-child(" + n + ") > div > div > div > div.copyable-text > div.eRacY > span._3Whw5.selectable-text.invisible-space.copyable-text > span"
    let k = document.querySelector(o).textContent;
    s+=k;
    s+=nl;
  }
  document.querySelector("#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text").innerHTML = s;
