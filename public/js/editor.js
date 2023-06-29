const blogTitle = document.querySelector('.title');
const article= document.querySelector('.article');

const bannerImage=document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn= document.querySelector('.publish-btn');
const uploadInput= document.querySelector('#image-upload');

bannerImage.addEventListener('change',()=>{
    uploadImage(bannerImage,"banner");
})

uploadInput.addEventListener('change',()=>{
    uploadImage(uploadInput,"image")
})
const uploadImage=(uploadFile, uploadType)=>{
    const [file]=uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image',file);

        fetch('/upload',{
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data=>{
            if(uploadType=="image"){
                addImage(data,file.name);
            }
            else{
                bannerPath=`${location.origin}/${data}`;
                banner.style.backgroundImage=`url("${bannerPath}")`;
            }
           
        })
    }
    else{
        alert("upload image only");
    }
}

const addImage=(imagepath,alt)=>{
    let curPos=article.selectionStart;
    let textToInsert= `\r![${alt}](${imagepath})\r`;
    article.value=article.value.slice(0, curPos) + textToInsert+ article.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click',()=>{
    if(article.value.length && blogTitle.value.length){
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitles= blogTitle.value.split(" ").join("-");
        let id='';
        for(let i=0;i<4;i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        let docName = `${blogTitles}-${id}`;
        let date =new Date();

        //firestore with db variable access

        db.collection("blogs").doc(docName).set({
            title: blogTitle.value,
            article: article.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(()=> {
            location.href = `/${docName}`;
        })
        .catch((err) =>{
            console.error(err);
        })
    }
    else{
        alert("Please Fill the details!");
    }
})