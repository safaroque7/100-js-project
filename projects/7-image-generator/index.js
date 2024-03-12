let imageGenerator = document.getElementById("image-generator");

imageGenerator.addEventListener("click", function () {

    let number = Math.floor(Math.random() * 100);

    let showGeneratedImages = document.getElementById("show-generated-images");
    div = document.createElement('div');
    div.className = "col-md-3 col-6 mb-md-4 mb-2";
    div.innerHTML = '<img src="https://picsum.photos/id/'+number+'/335/200" alt="image" class="img-fluid" />';

    showGeneratedImages.appendChild(div);
});
