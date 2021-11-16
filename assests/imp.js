
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let image_data_url 
camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
}); 
click_button.addEventListener('click', function(e) {
    // for(var i=0;;i=i*100)
   	  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
         
   	 image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	// console.log(image_data_url);
    uploadFile();
});
// const dropZone=document.querySelector(".dropzone");
// const fileInput=document.querySelector("#fileInput");
// const browseBtn=document.querySelector(".browseBtn");
// const bgProgress=document.querySelector(".bg-progress");
// const percent=document.querySelector("#percent");
// const progressBar=document.querySelector(".progress-bar");
// const progressContainer=document.querySelector(".progress-container");
// const fileURL=document.querySelector("#fileURL");
// const sharingContainer=document.querySelector(".sharing-container");
// const copyBtn=document.querySelector("#icon");
// const emailForm=document.querySelector('#emailForm');
// const toast=document.querySelector(".toast");

// const host="https://innshare.herokuapp.com/";
// const uploadURL=  `${host}api/files`;
// const emailURL=  `${host}api/files/send`;

// dropZone.addEventListener("dragover",(e)=>{
//     e.preventDefault();
//     // to make it efficient we added in if statememt so taht we are not adding again and again
//     if(!dropZone.classList.contains('dragged'))
//     {
//         dropZone.classList.add('dragged');
//     }
// });


// dropZone.addEventListener("dragleave",(e)=>{
//     e.preventDefault();
//     dropZone.classList.remove('dragged');
// })


// dropZone.addEventListener("drop",(e)=>{
//     e.preventDefault(); 
//     dropZone.classList.remove('dragged');
//     // console.log(e.dataTransfer.files.length);
//     const files=e.dataTransfer.files;
//     fileInput.files=files;
//     // console.log(files);
//     uploadFile();
    
// })

// fileInput.addEventListener("click",()=>{
//     uploadFile();
// })

// browseBtn.addEventListener("click",()=>{
//   //we here are transferring the click to fileInput
//   fileInput.click();
// })

const uploadFile=()=>{
    const file=image_data_url;
    const formData=new FormData();
    console.log(file);
}

//     const updateProgress=(e)=>{
//         const percent=(e.loaded/e.total)*100;
//         console.log(percent);
//         bgProgress.style.width=`{percent}%`;
//         percent.innerText=percent;
//         progressBar.style.transform=`scaleX(${percent/100})`
//     }


//   const showLink=({file})=>{
//   console.log(file);
//   fileInput.value="";
//   emailForm[2].removeAttribute("disabled","false");

//   progressContainer.style.display="none";
//   fileURL.value=file;
//   sharingContainer.style.display="block";
//   }

//   copyBtn.addEventListener("click",()=>{
//       fileURL.select();
//       document.execCommand("copy");
//       showToast("LINK COPIED");
//   })


//   emailForm.addEventListener("submit",(e)=>{
//       e.preventDefault();
//    const url=fileURL.value;
      
//       const formData={
//           uuid:"url.split("/").splice(-1,1)[0]",
//           emailTo:emailForm.elements["from-email"].value,
//           emailFrom:emailForm.elements["receiver-email"].value
//       };



//       emailForm[2].setAttribute("disabled","true");
//        fetch(emailURL,{
//            method:"POST",
//            headers:{
//                "Content-Type": "application/json"
//            },
//            body: JSON.stringify(formData)
//       }).then(res=>res.json())
//         .then(({success})=>{
//           if(success)
//           {
//               sharingContainer.style.display="none";
//                showToast("Email Sent!");
//             }
//       })



//   })

//   let toastTimer;
//   const showToast = (msg) => {
//       toast.innerText=msg; 
//       toast.style.transform="translateY(0)";
//     clearTimeout(toastTimer);

//      toastTimer= setTimeout(()=>{
//     toast.style.transform="translateY(200px)"
//       },5000);

//   }
  