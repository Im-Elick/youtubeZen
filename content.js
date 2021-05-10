//TODO add tag theater-requested_ on #page-manager > ytd-watch-flexy
//TODO change placeholder to "" on #search
const observer = new MutationObserver((mutations)=>{
  console.table(mutations);
})

//hide "search"
const search = document.querySelector("#search input[id='search']");
console.log(search);
search.removeAttribute("placeholder")

/*
observer.observe(target, {
  attributes:true,
  attributeFilter:["theater-requested_"]
})
*/
console.log("Loaded zen mode");