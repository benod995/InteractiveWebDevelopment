var index = 0; //index set to 0
slideshow(); // function for slideshow

function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides"); //geting the id for mySlides
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    index++; //increment index while i is less then the length of x
	//if the array is full set the index back 
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block"; 
    setTimeout(slideshow, 2000); // Change image every 2 seconds
}

var image_tracker ='a';

var productIndex = 0; //setting the product index to 0 initially


function change()
	{
		var image = document.getElementById('pizzaImage');
		//get the image id
		
		if(document.getElementById("plain").checked){ //if plain pizza is checked display appropriate image
			image.src = "plain-pizza.png";
			image.style.height = "280px";
			image.style.width = "280px";
			
	}
	 else if  (document.getElementById("pepperoni").checked)//else if pepperoni pizza is checked display appropriate image
	{
				image.src = "peperoni.png";
				image.style.height = "280px";
				image.style.width = "280px";
	}
	 else if  (document.getElementById("pepperandham").checked)//else if pepperoni and ham pizza is checked display appropriate image
	{
				image.src = "pepperoni-and-ham.png";
				image.style.height = "280px";
				image.style.width = "280px";
	}
	 else if  (document.getElementById("ham").checked)//else if ham pizza is checked display appropriate image etc...
	{
				image.src = "ham-pizza.png";
				image.style.height = "280px";
				image.style.width = "280px";
				
	}
	 else if  (document.getElementById("pineapple").checked)
	{
				image.src = "pineapple-pizza.png" 
				image.style.height = "280px";
				image.style.width = "280px";
	}
	 else if  (document.getElementById("plainL").checked)
	{
				image.src = "plain-pizza.png" 
				image.style.height = "300px";
				image.style.width = "300px";
				
	}
	 else if  (document.getElementById("pepperoniL").checked)
	{
				image.src = "peperoni.png";
				image.style.height = "300px";
				image.style.width = "300px";
	}
	 else if  (document.getElementById("pepperandhamL").checked)
	{
				image.src = "pepperoni-and-ham.png";
				image.style.height = "300px";
				image.style.width = "300px";
				
	}
	 else if  (document.getElementById("hamL").checked)
	{
				image.src = "ham-pizza.png";
				image.style.height = "300px";
				image.style.width = "300px";
	}
	 else if  (document.getElementById("pineappleL").checked)
	{
				image.src = "pineapple-pizza.png";
				image.style.height = "300px";
				image.style.width = "300px";
				
	}
	

}

	var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart()
	{
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) 
		{
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);;
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            
			
			document.getElementById("yesNo").checked;
			
			//if the yes option is clicked then provide a discount of 10%
			if(document.getElementById("yesNo").checked){ 
				cart_total_price+=shoppingCart[product].Price*0.90;
			}
			else{ //no discount if no is clicked
				cart_total_price+=shoppingCart[product].Price;
			}
			
        }
        //fill total cost of our shopping cart 
        document.getElementById("cart_total").innerHTML= "Total Price &euro;" + cart_total_price.toFixed(2);
			
		
    }


    function AddtoCart(name,description,price) //add to cart method that passes in arguments
	{
       //Object that will hold three properties mentioned: type, size and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //using .push to add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

	
    }  
	
	 function removeFromCart(name,description,price)
	{
       
       var singleProduct = {};
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
	   //using .pop to to remove the last item from the array
       shoppingCart.pop(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

	
    }  
