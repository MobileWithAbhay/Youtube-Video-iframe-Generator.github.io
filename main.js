var link = document.querySelector('.url');
var width = document.querySelector('.width');
var height = document.querySelector('.height');
var frameborder = document.querySelector('.frameborder');
var hidden1 = document.querySelector('.hidden1');

function iframe() {
     if(link.value.indexOf("https://youtu.be/") != -1){
          hidden1.classList.add('active');
          var url1 = link.value.replace("https://youtu.be/","https://www.youtube.com/embed/");
        document.querySelector('.preview').innerHTML = 
          `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      document.querySelector('.result').value =
          `<iframe width="${width.value}" height="${height.value}" src="${url1}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      }
      else if(link.value.indexOf("https://www.youtube.com/watch?v=") != -1){
             hidden1.classList.add('active');
             var url1 = link.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
          document.querySelector('.preview').innerHTML = 
            `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          document.querySelector('.result').value =
            `<iframe width="${width.value}" height="${height.value}" src="${url1}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
        else if (link.value.indexOf("https://youtube.com/shorts/") != -1){
            hidden1.classList.add('active');
            var url1 = link.value.replace("https://youtube.com/shorts/", "https://www.youtube.com/embed/");
            var u3 = url1.replace("?feature=share", "");
          document.querySelector('.preview').innerHTML = 
           `<iframe width="100%" height="190" src="${u3}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          document.querySelector('.result').value =
            `<iframe width="${width.value}" height="${height.value}" src="${u3}" title="YouTube video player" frameborder="${frameborder.value}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        
        }
        else {
          alert('Enter Your YouTube Url');
       }
    }

let iframeCopy = document.querySelector('.result');
function ClipboardLink(){
  if(iframeCopy.value != ""){
    const textarea = document.createElement('textarea');
    const resultE = iframeCopy.value;
  if (!iframeCopy) { return; }
    textarea.value = resultE;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('👇👇👇Code Copied to Clipboard👇👇👇\n'+iframeCopy.value);
  }
  else {
  alert('Enter Your YouTube Url');
  }
}
