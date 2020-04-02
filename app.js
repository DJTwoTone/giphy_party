// console.log("Let's get this party started!");

async function getGif() {
  let q = $("#gifsearch").val();

  let res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q,
      api_key: "2n7iQ2hcwAICYiPOgBZB5zfj07WEM9fl"
    }
  });
  const randNum = Math.floor(Math.random() * 25);
  const gifURL = res.data.data[Number(`${randNum}`)].images.original.url;
  const $newImg = $(`
  
  <img src="${gifURL}" class="m-2 border border-success rounded" style="width: 200px; height: auto">
  
  `);
  $("#gifcontainer").append($newImg);
}

function makeGif(url) {}

const searchBtn = document.querySelector("#search");
const input = document.querySelector("#gifsearch");

searchBtn.addEventListener("click", function(e) {
  e.preventDefault();
  getGif();
  input.value = "";
});

const delBtn = document.querySelector("#delete");

delBtn.addEventListener("click", function(e) {
  e.preventDefault();
  $("#gifcontainer").html("");
});

const gifContainer = document.querySelector("#gifcontainer");
