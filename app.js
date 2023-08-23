const getProductsData = (url) => {
  fetch(`https://mrittik-server.vercel.app/${url}`)
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const getCategoryData = () => {
  fetch(`https://mrittik-server.vercel.app/category`)
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const getBrandData = () => {
  fetch(`https://mrittik-server.vercel.app/brands`)
    .then((res) => res.json())
    .then((data) => displayBrand(data));
};

const getTagData = () => {
  fetch(`https://mrittik-server.vercel.app/tags`)
    .then((res) => res.json())
    .then((data) => displayTag(data));
};

// Display Category
function displayCategory(data) {
  let categoryList = document.getElementById("categoryList");

  data.map((category) => {
    categoryList.innerHTML += `
    <li  class="bg-white px-1 text-base cursor-pointer rounded-sm bg-orange-600/10 text-orange-500">${category.name}</li>
`;
  });
}

// Display Brand
function displayBrand(data) {
  let brandList = document.getElementById("brandList");

  data.map((brands) => {
    brandList.innerHTML += `
        <li onclick="getProductsData('products?brand=${brands.brand}')" class="bg-white px-1 text-base cursor-pointer rounded-sm bg-orange-600/10 text-orange-500">${brands.brand}</li>
    `;
  });
}

// Display Tags
function displayTag(data) {
  let tagList = document.getElementById("tagList");

  data.map((tags) => {
    tagList.innerHTML += `
        <li class="bg-white px-1 text-base cursor-pointer rounded-sm bg-orange-600/10 text-orange-500">${tags.tag}</li>
    `;
  });
}

// Display Products
function displayProduct(data) {
  let productList = document.getElementById("productList");
  productList.innerHTML = "";

  data.map((product) => {
    productList.innerHTML += `
    <a href="./pages/detail.html?id=${
      product.id
    }" class="block border border-cyan-300 p-2 rounded-md group">
        <div class="relative overflow-hidden h-[200px] p-2 rounded-md text-center bg-cyan-200">
            <span class="absolute right-1 top-1 z-10 bg-orange-600 text-white rounded-sm text-sm px-2">${
              product.badge !== undefined ? product.badge : ""
            }</span>
            <img src="${
              product.img
            }" class="group-hover:scale-110 duration-300 h-full object-contain mx-auto " alt="${
      product.name
    }" />
        </div>
        <h3 class="text-xl font-bold text-slate-800 mt-2">${product.name}</h3>
        <p class="text-sm">Brand: ${product.brand}</p>
        <p class="text-sm">Category:  ${product.categoryName}</p>
        <div class="flex items-center justify-between mt-3">
            <button class="bg-black text-white px-2 py-1">Add To Cart</button>
            <span class="text-cyan-500 text-xl font-bold">$ ${
              product.price
            }</span>
        </div>
    </a>
    `;
  });
}

getProductsData("products");
getCategoryData();
getBrandData();
getTagData();
