//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const count= 10;
const apiKey='Ef_Q2eQA1uVRmtOUcYWj7C2G649eS-gricOM8Vem84Q';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//get photos from unsplash api
async function getPhotos(){
    try{
        const response =await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
    }catch(error){
        //catch error here
    }
}
getPhotos();