let s = "";
let nl = "\r\n";
let pathr = ") > div > div > div > div.copyable-text > div:nth-last-child(1) > span.selectable-text.invisible-space.copyable-text > span";
let inp = prompt("Paste the JS path :");
let x = inp.indexOf("(");
let y = inp.indexOf(")");
let init = inp.slice(x+1,y);
let pathl = inp.slice(0,x+1);
let int = parseInt(init);
// l = no. of elements you want to fetch
// m will be the no. of intial element
let l=prompt("How many messages do you want to copy?");
 for(i=0;i<l;i++) {
    let m = int+i;
    let n=m.toString();
    let path = pathl + n + pathr;
    let k = document.querySelector(path).textContent;
    s+=k;
    s+=nl;
  }
  document.querySelector("#main > footer >div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2)").innerHTML = s;
