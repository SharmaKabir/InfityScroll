//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const count= 10;
const apiKey='Ef_Q2eQA1uVRmtOUcYWj7C2G649eS-gricOM8Vem84Q';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');
const loader=document.getElementById('loader');
let photosArray=[];

//displayPhoths()=> user sees photos!

//response.json=photosArray
//then loop for each photo edit the img
//get photos from unsplash a
//create elements 
function displayPhotos(){
photosArray.forEach((photo)=>{
//create element
//create anchor to link unsplash
const item=document.createElement('a');
item.setAttribute('href',photo.links.html);
item.setAttribute('target','_blank');
//create img for photo
const img=document.createElement("img");
img.setAttribute('src',photos.urls.regular);
img.setAttribute('alt',photo.alt_description);

});
}
async function getPhotos(){
    try{
        const response =await fetch(apiUrl);
        photosArray=await response.json();
        //console.log( photosArray);
        displayPhotos();

    }catch(error){
        //catch error here
    }
}
getPhotos();
