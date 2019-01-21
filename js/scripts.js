

    const scroll = new SmoothScroll('a[href*="#"]');

    const mySwiper = new Swiper(".swiper-container", {
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        }
    });

    jQuery(() => {
        jQuery("select").on("change", e => {
          const value = e.target.value;
          const subscribeBtn = $("form button");
    
          if (value !== "") {
            subscribeBtn.attr("disabled", false);
          } else {
            subscribeBtn.attr("disabled", true);
          }
        });
      });