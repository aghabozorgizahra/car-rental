let searchIcon = document.getElementById("searchIcon");
let searchBox = document.getElementById("searchBox");
let navList = document.getElementById("navList");
let btnLogReg = document.getElementById("btnLogReg");
let overlay = document.querySelector(".overlay");

let dropDown = document.getElementById("dropDown");
let dropDownSec = document.getElementById("dropDownSec");

// SearchBox Section
searchIcon.addEventListener("click", function () {
    searchBox.style.display = "block";
    overlay.style.display = "block";
    navList.style.opacity = "0";
    btnLogReg.style.opacity = "0";
})

overlay.addEventListener("click", function () {
    searchBox.style.display = "none";
    overlay.style.display = "none";
    navList.style.opacity = "1";
    btnLogReg.style.opacity = "1";
})

// DropDown Rezerve Section
dropDown.addEventListener("click", function () {
    if (dropDownSec.style.display == "none") {

        dropDownSec.style.display = "block";
    } else {
        dropDownSec.style.display = "none";
    }
})

// Owned by Persian Datepicker
$(document).ready(function () {
    $(".dateCarRental").pDatepicker({
        timePicker: {
            enabled: false
        },
        format: "YYYY/MM/DD"
    });
});

$('.timeCarRentale').persianDatepicker({
    onlyTimePicker: true,
    format: "HH:mm"
});
// list car
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
        body.appendChild(footerRow);
        body.appendChild(btnWrapper);

        card.appendChild(body);
        col.appendChild(card);

        return col;
    }
}

// data
const products = {
    popular: [
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


    ],
    luxury: [
        {
            title: "اجاره بی‌ام‌و 530i",
            model: 2021,
            image: "Frame 427320662(5).png",
            discount: 10,
            dailyPrice: "18,000,000",
            monthlyPrice: "15,000,000",
            guarantee: "150 میلیون تومان"
        },
        {
            title: "اجاره مازراتی لوانته",
            model: 2022,
            image: "Frame 427320662(6).png",
            discount: 5,
            dailyPrice: "25,000,000",
            monthlyPrice: "20,000,000",
            guarantee: "200 میلیون تومان"
        }
    ],
    economy: [
        {
            title: "اجاره پراید 131",
            model: 2015,
            image: "Frame 427320662(7).png",
            discount: 25,
            dailyPrice: "800,000",
            monthlyPrice: "700,000",
            guarantee: "10 میلیون تومان"
        },
        {
            title: "اجاره پژو 206",
            model: 2018,
            image: "Frame 427320662(8).png",
            discount: 15,
            dailyPrice: "1,000,000",
            monthlyPrice: "900,000",
            guarantee: "20 میلیون تومان"
        }
    ]
};
function renderCards(category) {
    const container = document.querySelector(".product-card");
    container.innerHTML = ""; // پاک کردن قبلی‌ها

    products[category].forEach(car => {
        const card = new ProductCard(car).render();
        container.appendChild(card);
    });
}

// دکمه‌ها
const btnPopular = document.getElementById("btn-popular");
const btnLuxury = document.getElementById("btn-luxury");
const btnEconomy = document.getElementById("btn-economy");

btnPopular.addEventListener("click", () => {
    setActiveButton(btnPopular);
    renderCards("popular");
});

btnLuxury.addEventListener("click", () => {
    setActiveButton(btnLuxury);
    renderCards("luxury");
});

btnEconomy.addEventListener("click", () => {
    setActiveButton(btnEconomy);
    renderCards("economy");
});

function setActiveButton(activeBtn) {
    [btnPopular, btnLuxury, btnEconomy].forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
    });
    activeBtn.classList.remove("btn-outline-primary");
    activeBtn.classList.add("btn-primary");
}
document.addEventListener("DOMContentLoaded", () => {
    setActiveButton(btnPopular);
    renderCards("popular");
});

// نطرات
const reviews = [
    {
        name: "اولدوز بهاور",
        date: "27 دی 1380",
        image: "assets/imgs/img(4).jpg",

        text: `اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال
           یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی می‌گم،
           اتو رنت تو کار خودش بهترینه!`,
        stars: 5
    },
    {
        name: "محمدجواد امینی",
        date: "10 مرداد 1401",
        image: "assets/imgs/img(1).png",
        text: `ماشین بسیار تمیز، تحویل سریع و برخورد فوق‌العاده‌ی پشتیبانی.
           از تجربه‌ام کاملاً راضی‌ام.`,
        stars: 4
    },
    {
        name: "فرزانه حیدری",
        date: "3 آبان 1399",
        image: "assets/imgs/img(3).png",
        text: `همه چیز عالی بود، مخصوصاً روند رزرو و پاسخ‌گویی.`,
        stars: 5
    },
    {
        name: "فاطمه ابراهیمی‌فر",
        date: "12 شهریور 1400",
        image: "assets/imgs/img(2).png",
        text: `به‌موقع، حرفه‌ای و قابل اعتماد. صد درصد توصیه می‌کنم.`,
        stars: 5
    }
];

// نمایش ستاره‌ها
const getStars = (count) =>
    Array.from({ length: 5 }, (_, i) =>
        `<i class="bi ${i < count ? 'bi-star-fill text-warning' : 'bi-star text-muted'}"></i>`
    ).join("");

const display = document.getElementById("review-display");
const thumbs = document.getElementById("review-thumbnails");

// تابع نمایش نظر اصلی
function showReview(index) {
    const r = reviews[index];
    display.innerHTML = `
    <div class="col-12 text-center">
      <img src="${r.image}" alt="${r.name}" class="border border-primary border-5  reviews-profile mt-3" >
      <p class="reviews-name mt-3">${r.name}</p>
      <div class="stars fs-4 mb-3">${getStars(r.stars)}</div>
      <p class="reviews-txt text-secondary">${r.text}</p>
    </div>
  `;

    document.querySelectorAll(".review-thumb").forEach(el => el.classList.remove("active-review"));
    document.querySelectorAll(".review-thumb")[index].classList.add("active-review");
}

// ساخت کارت‌های کوچک پایین
reviews.forEach((r, i) => {
    const col = document.createElement("div");
    col.className = "col-3";
    col.innerHTML = `
    <div class="review-thumb d-flex align-items-center justify-content-center reviews-sec rounded-4 p-2 border ">
      <img src="${r.image}" alt="${r.name}" class="reviews-pro " >
      <div class="d-flex flex-column ps-2 text-start text-center">
        <span class="reviews-name pb-2 ">${r.name}</span>
        <span class="reviews-date ">${r.date}</span>
      </div>
    </div>
  `;
    col.addEventListener("click", () => showReview(i));
    thumbs.appendChild(col);
});

showReview(0);
