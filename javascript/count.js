const para = document.getElementsByTagName("p");
let count = 0;
function incr() {
  if (count < 15) {
    count++;
    para[0].textContent = count;
    para[1].textContent = "increased";
  } else {
    alert("you can't increase than 15😝");
  }
  if(count++ % 2==0){
  para[2].textcontent="even";
  }
  else{
    para[2].textContent="odd";
  }
}
function decr() {
  if(count > 0) {
    count--;
    para[0].textContent = count;
    para[1].textContent = "decreased";
  
  } else {
    alert("don't decrease than zero😒");
  }
}
function reset() {
  let count = 0;
  para[0].textContent = count;
  para[1].textContent = "";

}

place = 0;
function change() {
  // color list
  colorList = ["white", "black"];
  // set the color
  document.body.style.backgroundColor = colorList[place];
  place++;
  // if place is greater than the list size, reset
  if (place === colorList.length) place = 0;
}
