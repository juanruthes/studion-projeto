$(document).ready(function () {
  // Menu
  $(".navbar__menu-btn").on("click", function () {
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });

  // Carrossel
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next">Next</button>',
  };
  $(".slider").slick(slickOptions);

  // Email
  $(".footer__form-button").on("click", () => {
    const email = $("#email").val();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "juanruthes2@gmail.com",
      Password: "63967B00AAD0FEC8924AAABF8E15DC7B944F",
      To: "juanruthes2@gmail.com",
      From: email,
      Subject: "Por favor me adicione na newsletter",
      Body: `Olá,
      Eu gostaria de ser adicionado na newsletter do site.
      Meu e-mail é ${email}`,
    }).then((message) => alert(message));
  });
});
