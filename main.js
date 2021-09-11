var images = ["family book.JPG" ,
  
  "Dr-N-RANJIT-KUMAR.jpg", 
  "rohith.jpg",
   "SSRG6667.JPG",
   "mother.JPG"];
var names = ["Family Book", "Ranjith kumar", "Rohith", "Poojitha", "Saroja"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
}
