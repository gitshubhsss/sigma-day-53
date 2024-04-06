let url = 'https://api.potterdb.com/v1/movies/';

async function getData(){
    let res=await axios.get(url);
    console.log(res.data.data);
    let movies=res.data.data;
    for (mov of movies) {
      let mNAME= mov.attributes;
      console.log(mNAME.title);
    }
}