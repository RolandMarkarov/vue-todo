

function getItemFromLocal(){
 return  JSON.parse(localStorage.getItem('task'))
}
function setItemToLocal(elem){
  let arr = [];
  arr.push(elem)
  getItemFromLocal() ? updateLocal(elem) : localStorage.setItem('task', JSON.stringify(arr))
}

function updateLocal(elem) {
  let temp = JSON.parse(localStorage.getItem('task'))
  console.log(temp, elem)
  temp.push(elem)
  localStorage.setItem('task', JSON.stringify(temp))
}
function patchLocal(item){
  localStorage.setItem('task', JSON.stringify(item))
}

module.exports={
  setItemToLocal,
  getItemFromLocal,
  updateLocal,
  patchLocal
}
