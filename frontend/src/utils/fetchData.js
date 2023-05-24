export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "578647e4ccmsh4f1d45226171cb2p18cf99jsn58dc551e30e0",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "0acd6c7ae3msh1b0030147057330p15e538jsn697bb815816f",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData =async(url, options) =>{
    const response = await fetch(url, options);
    const data= await response.json();
    return data;
}