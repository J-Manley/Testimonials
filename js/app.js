(function () {
  // Customers
  let customers = [];
  let index = 0;

  // Object constructor function
  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }
  // Create customer function
  function createCustomer(name, img, text) {
    // Full img
    let fullImg = `img/customer-${img}.jpg`;

    // Create a new customer instance
    const customer = new Customer(name, fullImg, text);

    // Add to all customers
    customers.push(customer);
  }

  createCustomer(
    "John",
    1,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic vero animi quos dicta porro nisi quae ut modi, voluptates nemo aspernatur commodi perspiciatis non, corporis quasi iusto accusantium impedit sequi architecto quas id quod cumque. Facilis excepturi vitae aperiam, nesciunt mollitia ullam quis! `
  );
  createCustomer(
    "Bob",
    2,
    `Similique illum, saepe nulla cumque quasi necessitatibus doloremque atque dolorem labore laudantium veniam unde reiciendis impedit quis velit alias possimus. Pariatur libero blanditiis veritatis placeat laborum ducimus reprehenderit deleniti, illo earum facere quod `
  );
  createCustomer(
    "Peter",
    3,
    `consectetur dicta iure dolores autem laboriosam. Assumenda delectus, eveniet cum quis accusamus praesentium nam error corrupti voluptatum aspernatur reiciendis blanditiis excepturi exercitationem, itaque illo rem sint temporibus facere totam qui adipisci nemo quos similique `
  );
  createCustomer(
    "Arnold",
    4,
    `distinctio? In id voluptatem rem placeat impedit architecto esse nihil possimus aliquid debitis, repellat, ipsa molestiae amet illum quidem iste. Iusto deserunt voluptas accusamus labore dignissimos, exercitationem ad? Error, neque earum perferendis, odio aut ratione nesciunt ab `
  );

  // console.log(customers);

  document.querySelectorAll(".btn").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      // console.log(event.target);
      if (event.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }

      if (event.target.parentElement.classList.contains("nextBtn")) {
        if (index === customers.length - 1) {
          index = -1;
        }
        index++;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }
    });
  });
})();
