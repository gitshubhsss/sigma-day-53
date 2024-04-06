let url = "http://universities.hipolabs.com/search?name=";
let ol = document.querySelector("ol");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let listColor = document.querySelector(".collage-list");

async function getData(country) {
  /* take the data from API*/
  try {
    let res = await axios.get(url + country);
    let collages = res.data;
    ol.innerText = "";
    for (col of collages) {
      let li = document.createElement("li");
      li.innerText = col.name;
      ol.appendChild(li);
    }
  } catch (err) {
    console.log("error", err);
  }
}

btn.addEventListener("click", async () => {
  let country = inp.value;
  getData(country);
  inp.value = "";
  listColor.style.backgroundColor = "aliceblue";
});
