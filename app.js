let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ol = document.querySelector("ol");
let listCol=document.querySelector(".collage-list");
async function getCollages(country) {
  try {
    let res = await axios.get(url + country);
    let collages = res.data;
    showData(collages);
  } catch (err) {
    console.log("Network err", err);
  }
}

function showData(collages) {
   ol.innerText="";
   for (col of collages) {
    let li=document.createElement("li");
    li.classList.add("li");
    li.innerText=col.name;
    ol.appendChild(li);
  }
}

btn.addEventListener("click", async () => {
    let country = inp.value;
    getCollages(country);
    listCol.style.backgroundColor="whitesmoke";
    inp.value=""
});
