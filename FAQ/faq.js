const kidButton = document.getElementById("kid-button");
const kidPanel = document.getElementById("kid-friendly");

const quartersButton = document.getElementById("quarters-button");
const quartersPanel = document.getElementById("machine-quarters");

const foodButton = document.getElementById("food-button");
const foodPanel = document.getElementById("serve-food");

const parkingButton = document.getElementById("parking-button");
const parkingPanel = document.getElementById("parking-available");

const giftButton = document.getElementById("gift-button");
const giftPanel = document.getElementById("gift-cards");

const wifiButton = document.getElementById("wifi-button");
const wifiPanel = document.getElementById("wi-fi");

const clickHandler = (button, panel) => {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
  panel.hidden = isExpanded;
};

kidButton.addEventListener("click", () => clickHandler(kidButton, kidPanel));
quartersButton.addEventListener("click", () =>
  clickHandler(quartersButton, quartersPanel)
);
foodButton.addEventListener("click", () => clickHandler(foodButton, foodPanel));
parkingButton.addEventListener("click", () =>
  clickHandler(parkingButton, parkingPanel)
);
giftButton.addEventListener("click", () => clickHandler(giftButton, giftPanel));
wifiButton.addEventListener("click", () => clickHandler(wifiButton, wifiPanel));
