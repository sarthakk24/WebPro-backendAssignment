console.log("this js file is for all frontend work");

const newContactSubmit = document.querySelector("#new-contact--submit");
const searchContact = document.querySelector(".search-contact");

let id;

if (newContactSubmit) {
  newContactSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const input_name = document.querySelector("#name").value;
    const input_phone = document.querySelector("#phone").value;
    const input_email = document.querySelector("#email").value;
    const input_portfolio = document.querySelector("#portfolio").value;

    const sending_obj = {
      name: input_name,
      phone: input_phone,
      email: input_email,
      portfolio: input_portfolio,
    };

    const sectionIdDisplay = document.querySelector(".id-display");
    const spanIdDisplay = document.querySelector(".display-id");

    fetch("http://localhost:7000/api/newcontact", {
      method: "POST",
      body: JSON.stringify(sending_obj),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((doc) => {
        sectionIdDisplay.classList.remove("hidden");
        const data = doc.json();
        return data;
      })
      .then((res) => {
        console.log(res);
        spanIdDisplay.innerHTML = res.id;
        id = res.id;
      });
  });
}

if (searchContact) {
  searchContact.addEventListener("click", (e) => {
    e.preventDefault();
    let data;

    if (id) {
      data = id;
    } else {
      data = document.querySelector("#searchAnother").value;
    }

    location.href = `http://localhost:7000/${data}`;
  });
}
