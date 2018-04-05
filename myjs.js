function getProducts(){
var products = [
  {
     "id": "1",
     "name": "Lanvin Eclat D`Arpege",
     "description": "Fragrance was launched by the design house of Lanvin. Eclat D'Arpege is a feminine scent that possesses a blend of floral scents. Women's perfume is perfect for almost any occasion. Available in a 1-ounce eau de toilette spray. Made in France.",
     "price": 900,
     "img": "img/eclat.jpg"
   },
   {
     "id": "2",
     "name": "Calvin Klein Forbidden Euphoria",
     "description": "Forbidden Euphoria is sweet yet feminine and it’s no wonder it is a signature scent to so many with top notes of mandarin, peach blossom, passion fruit and raspberry.  Heart notes reveal a floral side to the fragrance thanks to pink peony, tiger orchid, and jasmine.",
     "price": 1000,
     "img": "img/calvin-klein-forbidden-euphoria.jpg" //calvin-clein-forbidden-euphoria.jpg
   },
    {
     "id": "3",
     "name": "Calvin Klein Forbidden Euphoria",
     "description": "Это роскошная парфюмированная вода, полная романтики, чистоты и нежного очарования. Прозрачный цветочный букет чувственно-нежный, балансирующий между реальностью и вымыслом, утончённый и притягательный. ",
     "price": 1000,
     "img": "img/21574876006.jpg" //21574876006.jpg
   },
    {
     "id": "4",
     "name": "Calvin Klein",
     "description": "Это роскошная парфюмированная вода, полная романтики, чистоты и нежного очарования. Прозрачный цветочный букет чувственно-нежный, балансирующий между реальностью и вымыслом, утончённый и притягательный. ",
     "price": 1000,
     "img": "img/eclat.jpg"
   }
   ],
   counter=0;





 for(var key in products){
  //document.write("<div id='content'>");
    var result = document.write("<article><div class='products'><figure><img src='" + products[key].img + "'></figure>" +  "<header><div class='name'>" + products[key].id + " - " + products[key].name + "</div></header>"+ "<p>" + products[key].description+ "</p>" + "</div></article>");
 //  document.write("</div");
    counter++
  }
 
 
 //  var viewName = document.getElementsByTagName('.products');
  //viewName.addClassName('figure');
//return products;
 }

getProducts();


//checking if Object products is empty
function isEmptyProd(products){
  for(var id in products) {if(products.hasOnwProperty(id)) return false; }
  return true;
}




function Newest(){
  var newestProducts = [];

  newestProducts.filter();
}

