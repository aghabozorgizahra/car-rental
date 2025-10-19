const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress-slide");

let priceGap = 100000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value),
            minRange = parseInt(rangeInput[0].min),
            maxRange = parseInt(rangeInput[0].max);

        if (maxPrice - minPrice >= priceGap && maxPrice <= maxRange && minPrice >= minRange) {
            if (e.target.classList.contains("input-min")) {
                rangeInput[0].value = minPrice;
            } else {
                rangeInput[1].value = maxPrice;
            }
            updateSlider();
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.classList.contains("range-min")) {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        }
        updateSlider();
    });
});

function updateSlider() {
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value),
        minRange = parseInt(rangeInput[0].min),
        maxRange = parseInt(rangeInput[0].max);

    priceInput[0].value = minVal;
    priceInput[1].value = maxVal;

    let leftPercent = ((minVal - minRange) / (maxRange - minRange)) * 100;
    let rightPercent = 100 - ((maxVal - minRange) / (maxRange - minRange)) * 100;

    range.style.right = leftPercent + "%";
    range.style.left = rightPercent + "%";
}

window.addEventListener("DOMContentLoaded", () => {
    rangeInput[0].value = 6000000;
    rangeInput[1].value = 60000000;
    updateSlider();
});
// 

// --------------------------------------------------------------

const cars = {
    benz: 'اجاره بنز',
    bmw: 'اجاره بی ام و',
    peugeot: 'اجاره پژو',
    audi: 'اجاره پورشه',
    kia: 'اجاره کیا',
    toyota: 'اجاره هیوندای'
};
const carList = document.getElementById("brandList");
for (const key in cars) {
    const div = document.createElement("div");
    div.classList.add("form-check", "mb-2");

    const input = document.createElement("input");
    input.classList.add("form-check-input");
    input.type = "checkbox";
    input.value = key;
    input.id = key;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", key);
    label.textContent = cars[key];

    div.appendChild(input);
    div.appendChild(label);
    carList.appendChild(div);
}

// ----------------------------------------------------------

const rentalTypeGroup  = {
    p:'اجاره خودرو با راننده',
    b:'اجاره خودرو بدون راننده',
    c:'اجاره خودرو ایرانی',
    z:'اجاره خودرو لوکس',
    v:'اجاره خودرو تشریفات',
    n:'اجاره ماشین عروس'
}

const rentalNeeds = document.querySelector('.rental-needs');
for(const key in rentalTypeGroup){

    const div = document.createElement('div');
    div.classList.add("form-check", "mb-2");

    const input = document.createElement('input');
    input.classList.add('form-check-input');
    input.type = "radio";
    input.name = 'rentalType';
    input.value = key;
    input.id = key;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", key);
    label.textContent = rentalTypeGroup[key];

    div.appendChild(input);
    div.appendChild(label);
    rentalNeeds.appendChild(div);
}
// ---------
const filterToggles = [
  { header: "#inputRange", content: "#priceInput" },
  { header: "#brand", content: "#brandList" },
  { header: "#rental-need", content: ".rental-needs" }
];

filterToggles.forEach(pair => {
  const header = document.querySelector(pair.header);
  const content = document.querySelector(pair.content);
  const arrow = header.querySelector(".arrow-icon");

  header.addEventListener("click", () => {
    if (content.classList.contains("open")) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      arrow.classList.remove("rotate");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      arrow.classList.add("rotate");
    }
  });
});

// ------------------------------carList--------------------------------
class ProductCard {
    constructor({ title, model, image, discount, dailyPrice, monthlyPrice, guarantee }) {
        this.title = title;
        this.model = model;
        this.image = image;
        this.discount = discount;
        this.dailyPrice = dailyPrice;
        this.monthlyPrice = monthlyPrice;
        this.guarantee = guarantee;
    }

    render() {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 col-12 ";

        const card = document.createElement("div");
        card.className = "card ";
        // card.style.width = "18rem";

        const body = document.createElement("div");
        body.className = "card-body ";

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "card-img position-relative mb-3";
        if (this.discount || this.discount > 0) {

            const badge = document.createElement("span");
            badge.className = `badge bg-badge position-absolute top-0 end-0 p-2 m-2`;
            badge.textContent = `${this.discount}%`;
            imgWrapper.appendChild(badge);
        }

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;
        img.className = "card-img-top rounded-2";

        imgWrapper.appendChild(img);

        const title = document.createElement("h5");
        title.className = "card-title mb-2";
        title.textContent = this.title;

        const model = document.createElement("p");
        model.className = "card-text mb-3";
        model.innerHTML = `<span class="text-muted">مدل:</span> <span>${this.model}</span>`;

        const daily = document.createElement("div");
        daily.className = "list g-0 row p-2 rounded-2 align-items-center mb-2";
        daily.innerHTML = `
      <div class="col-8">
        <span>از ۱ تا ۳۰ روز:</span>
        <span class="text-primary price text-start p-0">${this.dailyPrice}</span>
      </div>
      <span class="col-4 text-end">روزانه</span>
    `;

        const monthly = document.createElement("div");
        monthly.className = "list g-0 row p-2 rounded-2 align-items-center mb-3";
        monthly.innerHTML = `
      <div class="col-8">
        <span>از ۱ تا ۳۰ روز:</span>
        <span class="text-primary price text-start p-0">${this.monthlyPrice}</span>
      </div>
      <span class="col-4 text-end">ماهانه</span>
    `;

        const hr = document.createElement("hr");
        hr.className = "my-3";


        const footerRow = document.createElement("div");
        footerRow.className = "d-flex align-items-center justify-content-between my-2";

        const guaranteeTxt = document.createElement("span");
        guaranteeTxt.className = "card-footer-txt";
        guaranteeTxt.textContent = "مبلغ ضمانت:";

        const guaranteeVal = document.createElement("span");
        guaranteeVal.className = "price-z";
        guaranteeVal.textContent = this.guarantee;

        footerRow.appendChild(guaranteeTxt);
        footerRow.appendChild(guaranteeVal);

        const btnWrapper = document.createElement("div");
        btnWrapper.className = "d-grid gap-2 mt-2";

        const btn = document.createElement("button");
        btn.className = "btn btn-primary btn-card";
        btn.textContent = "درخواست رزرو";

        btnWrapper.appendChild(btn);

        body.appendChild(imgWrapper);
        body.appendChild(title);
        body.appendChild(model);
        body.appendChild(daily);
        body.appendChild(monthly);
        body.appendChild(hr);
        body.appendChild(footerRow);
        body.appendChild(btnWrapper);

        card.appendChild(body);
        col.appendChild(card);

        return col;
    }
}

const carsList = [
   {
            title: "اجاره بنز E350 سدان",
            model: 2016,
            discount: 20,
            image: "assets/imgs/2.png",
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        },
        {
            title: "اجاره تویوتا لندکروز در تهران 2013",
            model: 2016,
            image: "assets/imgs/1.png",
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        },
        {
            title: "اجاره جنسیس کوپه",
            model: 2016,
            image: "assets/imgs/3.jpg",
            discount: 20,
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        },
        {
            title: "اجاره بی ام و 528",
            model: 2016,
            image: "assets/imgs/6-1.png",
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        },
        {
            title: "اجاره هیوندای توسان 2014",
            model: 2016,
            image: "assets/imgs/5-1.png",
            discount: 20,
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        }, {
            title: "اجاره بنز sl کروک",
            model: 2016,
            image: "assets/imgs/4.png",
            dailyPrice: "8,500,000",
            monthlyPrice: "8,500,000",
            guarantee: "80 میلیون تومان"
        },

];
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-card");

  carsList.forEach(car => {
    const card = new ProductCard(car);
    productList.appendChild(card.render());
  });
});
