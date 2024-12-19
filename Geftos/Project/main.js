//#region slider
let slideIndex = 1;
showSlides(slideIndex);
//showSales(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  // showSales((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  // showSales((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 2000);


let dark = document.getElementById("Dark");

dark.onclick = function () {
  let darkElement = document.getElementById("myPage");
  {
    darkElement.classList.toggle("dark");
  }
};

//#endregion darkMode

//#region button for category
function showProducts(category) {
  var allSections = document.querySelectorAll(".pro");
  allSections.forEach((section) => section.classList.remove("show"));
  if (category === "all") {
    document.getElementById("allProducts").classList.add("show");
  } else {
    document.getElementById(category).classList.add("show");
  }
}
//#endregion button for category
//#region scroll
const btn = document.getElementById("top");
window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//#endregion scroll

//#region product Details


const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(element) {
  const itemDiv = element.closest(".items");
  const selectedProduct = itemDiv.querySelector("img").alt;

  const productsArray = JSON.parse(localStorage.getItem("productsArray"));
  if (selectedProduct && productsArray) {
   
    const product = productsArray.find(item => item.name === selectedProduct);
    if (product) {
      if (product.quantity > 0) {
      
        const cartItem = cart.find(item => item.name === product.name);
        if (cartItem) {
         
          cartItem.quantity += 1;
        } else {
         
          cart.push({
            imageSrc:product.imageSrc,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: 1
          });
        }
        
        console.log(cart);

        // Decrease the quantity of the product in the products array
        product.quantity -= 1;

        // Update the products array in local storage
        const updatedProducts = productsArray.map(item =>
          item.name === product.name
            ? { ...item, quantity: product.quantity }
            : item
        );
        localStorage.setItem("productsArray", JSON.stringify(updatedProducts));

        // Update the cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        console.log("Product is out of stock!");
      }
    } else {
      console.log("Product not found in the products array!");
    }
  } else {
    console.log("No products available or selected!");
  }
}

//#endregion add to card 

//#region directToCards


function directToCards(element) {
  if (element) {
    window.location.href = 'cart.html';
    return;
  }

}

//#endregion directToCards


//#region product Details


function productDetails(element) {
  const itemDiv = element.closest(".items");

  if (!itemDiv) return null; // Safety check if the element is not found

  const nameOfProduct = itemDiv.querySelector("img")?.alt;
  const imageSrc = itemDiv.querySelector("img")?.src;

  if (!nameOfProduct || !imageSrc) return null; // Ensure required values exist

  let product = {
    nameOfProduct: nameOfProduct,
    imageSrc: imageSrc,
  };

  return product;
}
//#endregion product Details
// Example array of products saved in localStorage
const products = [
  {
    name: "Smart Watch",
    imageSrc: "./image/e2.jpg",
    price: "100$",
    quantity: 5,
    category: "Electronics"
  },
  {
    name: "AirPods",
    imageSrc: "./image/airpods1.jpg",
    price: "1000$",
    quantity: 1,
    category: "Electronics"
  },
  {
    name: "iPhone 16",
    imageSrc: "./image/iphone16.jpg",
    price: "2000$",
    quantity: 7,
    category: "Electronics"
  },
  {
    name: "Camera",
    imageSrc: "./image/camera5.jpg",
    price: "50$",
    quantity: 10,
    category: "Electronics"
  },
  {
    name: "Headphones",
    imageSrc: "./image/headphones5.jpg",
    price: "50$",
    quantity: 15,
    category: "Electronics"
  }

  ,
  {
    name: "Blue and Pink Bear",
    imageSrc: "./image/bear9.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Twin Bears",
    imageSrc: "./image/bear11.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Pink Heart Bear",
    imageSrc: "./image/bears10.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Cute Pink Bear",
    imageSrc: "./image/bears7.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "White Bunny",
    imageSrc: "./image/bears8.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Smiling Pink Bear",
    imageSrc: "./image/bears7.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Grey Bunny",
    imageSrc: "./image/bears6.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Baby Girl Bear",
    imageSrc: "./image/bears4.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Pink Sitting Bear",
    imageSrc: "./image/bears2.jpg",
    price: "50$",
    quantity: 6,
    category: "Toys"
  },
  {
    name: "White Bow Bear",
    imageSrc: "./image/bears1.jpg",
    price: "50$",
    quantity: 4,
    category: "Toys"
  }
  ,
  {
    name: "Los Angeles Hoodie",
    imageSrc: "./image/clothes1.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Beige Puffer Jacket",
    imageSrc: "./image/clothes2.jpg",
    price: "50$",
    quantity: 3,
    category: "Clothes"
  },
  {
    name: "White Teddy Jacket",
    imageSrc: "./image/clothes3.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Beige and Black Sweater",
    imageSrc: "./image/clothes4.jpg",
    price: "50$",
    quantity: 10,
    category: "Clothes"
  },
  {
    name: "Cloud Blue Outfit",
    imageSrc: "./image/clothes5.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Summer Blue Set",
    imageSrc: "./image/clothes6.jpg",
    price: "50$",
    quantity: 12,
    category: "Clothes"
  },
  {
    name: "Dream Girls Set",
    imageSrc: "./image/clothes7.jpg",
    price: "50$",
    quantity: 17,
    category: "Clothes"
  },
  {
    name: "Blue and White Shirts Set",
    imageSrc: "./image/clothes8.jpg",
    price: "50$",
    quantity: 16,
    category: "Clothes"
  },
  {
    name: "White and Beige Shoes",
    imageSrc: "./image/clothes10.jpg",
    price: "50$",
    quantity: 1,
    category: "Shoes"
  },
  {
    name: "Brown Wide-Leg Pants",
    imageSrc: "./image/clothes11.jpg",
    price: "50$",
    quantity: 12,
    category: "Clothes"
  },
  {
    name: "Modern Blue Outfit",
    imageSrc: "./image/clothes12.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "White Shirt & Pants",
    imageSrc: "./image/clothes13.jpg",
    price: "50$",
    quantity: 10,
    category: "Clothes"
  },
  {
    name: "Minimal Beige Outfit",
    imageSrc: "./image/clothes14.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Casual Beige Outfit",
    imageSrc: "./image/clothes15.jpg",
    price: "50$",
    quantity: 5,
    category: "Clothes"
  },
  {
    name: "Elegant Beige Set",
    imageSrc: "./image/clothes16.jpg",
    price: "50$",
    quantity: 3,
    category: "Clothes"
  },
  {
    name: "Black-Camera",
    imageSrc: "./image/camera.jpg",
    price: "50$",
    quantity: 20,
    category: "Electronic"
  },
  {
    name: "Wight-Camera",
    imageSrc: "./image/camera3.jpg",
    price: "50$",
    quantity: 15,
    category: "Electronic"
  }
,
  {
    name: "Digital Watch",
    imageSrc: "./image/watchMen2.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  },
  {
    name: "SumSung",
    imageSrc: "./image/sumsung17.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  },
  {
    name: "Red-flowers",
    imageSrc: "./image/flowers1.jpg",
    price: "50$",
    quantity: 1,
    category: "flowers"
  },

  //
  {
    name: "Men-Watch",
    imageSrc: "./image/watch.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  }
,
{
  name: "Sunflowers",
  imageSrc: "./image/flower5.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
},
{
  name: "Lavender",
  imageSrc: "./image/flower6.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
}
,
{
  name: "Daisies",
  imageSrc: "./image/Daisies.jpg",
  price: "50$",
  quantity: 10,
  category: "Flowers"
},
{
  name: "Lilies",
  imageSrc: "./image/0.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
} ,
{
  name: "Peonies",
  imageSrc: "./image/6.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
}
];

localStorage.setItem("productsArray", JSON.stringify(products));
function redirectToDetails(element) {
  const productDiv = element.closest(".items");
  const productName = productDiv.querySelector("img").alt;
  localStorage.setItem("selectedProductName", productName);
  window.location.href = "product_details.html";
}




//#region user name

document.addEventListener('DOMContentLoaded', () => {

  var login = document.getElementById("signIn");
  var logOut = document.getElementById("logOut");

  const spanLogin = document.getElementById("span1");

  logOut.style.display = "none";
  const username = localStorage.getItem("userName");


  if (username != null) {
    spanLogin.innerHTML = username;
    login.style.display = "none";
    logOut.style.display = "inline";
    localStorage.removeItem('userName');

    logOut.onclick = function () {
      spanLogin.innerHTML = '';
      localStorage.removeItem("userName");
      logOut.style.display = "none";
      // window.location.href = 'createAccount.html';
      login.style.display = "inline";

    }
    // 


  }

});

//#endregion user name