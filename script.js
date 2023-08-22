$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    dots: true,
    loop: false,
    margin: 50,
    nav: true,
    autoWidth: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // ######################################################## fitur bahasa #########################################################
  $('#inggris').hover(function () {
    $('#bodyku').html(`  <body class="body" id="bodyku">
    <nav class="navbar navbar-expand-lg fixed-top" style="padding: 0px; height: 67px">
      <div class="container inner-navbar d-flex justify-content-between">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="black" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          <!-- <span fill="white" class="navbar-toggler-icon"></span> -->
        </button>

        <div class="Qdayak d-block">
          <span style="color: #920d0d; font-size: 32px; font-family: Poppins; font-weight: 700">QD</span><span style="color: black; font-size: 32px; font-family: Poppins; font-weight: 700">ayak</span
          ><span style="color: #920d0d; font-size: 32px; font-family: Poppins; font-weight: 700">.</span>
        </div>

        <div class="collapse navbar-collapse menu rounded-2 justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item nav-hover-1">
              <a style="padding: 0px" class="nav-link" aria-current="page" href="#home"><p class="nav-color-1">Home</p></a>
            </li>
            <li class="nav-item nav-hover-7">
              <a style="padding: 0px" class="nav-link text-black" href="#profil"><p class="nav-color-7">Profil</p></a>
            </li>
            <li class="nav-item nav-hover-2">
              <a style="padding: 0px" class="nav-link" href="#adat"><p class="nav-color-2">Adat</p></a>
            </li>
            <li class="nav-item nav-hover-3">
              <a style="padding: 0px" class="nav-link text-black" href="#legenda"><p class="nav-color-3">Legend</p></a>
            </li>

            <li class="nav-item nav-hover-5">
              <a style="padding: 0px" class="nav-link text-black" href="#makanan"><p class="nav-color-5">Food</p></a>
            </li>
            <li class="nav-item nav-hover-4">
              <a style="padding: 0px" class="nav-link text-black" href="#rumah"><p class="nav-color-4">House</p></a>
            </li>

            <li class="nav-item nav-hover-6">
              <a style="padding: 0px" class="nav-link text-black" href="#senjata"><p class="nav-color-6">Weapon</p></a>
            </li>

            <li class="nav-item d-flex align-content-center my-lg-0 my-2">
              <!-- <button style="padding: 0px" id="dark-mode-toggle">Mode Gelap</button> -->
              <div class="m-auto">
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox" class="checkbox-label">
                  <i class="bi bi-sun"></i>
                  <i class="bi bi-moon"></i>
                  <span class="ball"></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="overflow-hidden" id="home">
      <div class="landing" id="landing">
        <div class="container">
          <div class="row inner-landing mx-5">
            <div class="col-lg-6 align-content-center">
              <div class="rectangle2">
                <p class="Welcome">Welcome</p>
                <a id="inggris" class="Welcome"  href="">inggris</a>

              </div>

              <div class="SukuDayak">Dayak<br />Culture</div>

              <div class="Warisan">“The natural heritage of nature and culture”</div>
            </div>
            <div class="col-lg-6"></div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="line-bottom"></div>

            <div class="circle1">
              <a href="#profil">
                <svg xmlns="http://www.w3.org/2000/svg" class="lingkaran1" viewBox="0 0 125 125" fill="none">
                  <g filter="url(#filter0_b_67_173)">
                    <circle cx="62.5" cy="62.5" r="60.5" stroke="white" stroke-width="4" />
                  </g>
                  <path
                    d="M65.5 46C65.5 44.6193 64.3807 43.5 63 43.5C61.6193 43.5 60.5 44.6193 60.5 46L65.5 46ZM61.2322 81.7678C62.2085 82.7441 63.7915 82.7441 64.7678 81.7678L80.6777 65.8579C81.654 64.8816 81.654 63.2986 80.6777 62.3223C79.7014 61.346 78.1184 61.346 77.1421 62.3223L63 76.4645L48.8579 62.3223C47.8816 61.346 46.2986 61.346 45.3223 62.3223C44.346 63.2986 44.346 64.8816 45.3223 65.8579L61.2322 81.7678ZM60.5 46V80H65.5V46L60.5 46Z"
                    fill="white"
                  />
                  <defs>
                    <filter id="filter0_b_67_173" x="-14" y="-14" width="153" height="153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_67_173" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_67_173" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </a>
            </div>

            <div class="line-bottom"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="profil overflow-hidden" id="profil">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 position-relative">
            <img class="profil-img" src="images/dayakprofil.png" alt="profil-kepala" />
          </div>
          <div class="col-lg-7">
            <div class="mx-5 profil-tulisan">
              <div class="rectangle3 d-flex align-content-center justify-content-center">
                <p class="profil-judul">profil</p>
              </div>
              <h1 class="profil-subjudul">
                Profil Dayak <br />
                Culture
              </h1>
              <p class="profil-isi">
                The Dayak tribe is an original ethnic group that inhabits the interior of the island of Kalimantan, Indonesia.They are one of the indigenous groups that have a diversity of cultural, language, and customs that are rich.Dayak tribe
                Consists of various tribes that have their own characteristics and identity, such as Dayak Ngaju, Dayak Iban, Dayak Kenyah, Dayak Punan, and many more. <br />
                <br />

                As a native group of Kalimantan, the Dayak tribe has a long and rich history.Their traditions and cultures are often related to life in the forest, relying on agriculture, fisheries, and knowledge about nature.
                Art, music, and dance is also an important part of their culture, with many ceremonies and celebrations that show their identity and relationship with nature and spirits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="adat overflow-hidden" id="adat">
      <div class="container h-100">
        <div class="d-flex justify-content-center">
          <div class="isi-adat">
            <div class="rectangle4 mx-auto d-flex align-content-center justify-content-center">
              <p class="adat-judul">Adat</p>
            </div>
            <h1 class="adat-subjudul my-4">
              Adat Dayak <br />
              Culture
            </h1>
            <p class="adat-isi">These are some of the popular and unique customs in the Dayak tribe</p>
          </div>
        </div>
      </div>
    </div>

    <div id="upacara">
      <div class="upacara">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex justify-content-center align-content-center">
              <img class="upacara1-img" src="images/tiwah.jpg" alt="tiwah" />
            </div>
            <div class="col-lg-6">
              <div class="upacara1-tulisan">
                <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                  <p class="upacara-judul">Tiwah Ceremony</p>
                </div>
                <h1 class="upacara-subjudul mb-3">
                  Tiwah Ceremony <br />
                  Dayak Culture
                </h1>
                <p class="upacara-isi">
                  Tiwah Ceremony is a traditional event that is very meaningful for Dayak Culture.This ceremony has the main goal to deliver and pay the last respects to the spirit of the person who has passed away.
                  <button type="button" class="" data-bs-toggle="modal" data-bs-target="#tiwah"><span>Read More</span></button>
                </p>

                <!-- Button trigger modal -->

                <!-- Modal -->
                <div class="modal fade" id="tiwah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                      <div class="modal-body">
                        <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                          <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 16">
                              <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                              <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            </g>
                          </svg>
                        </button>
                        <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                          <h1 class="judul-modal">
                            Tiwah Ceremony <br />
                            Dayak Culture
                          </h1>
                          <p class="isi-modal">
                            Tiwah Ceremony is a traditional event that is very meaningful for Dayak Culture.This ceremony has the main goal to deliver and pay the last respects to the spirit of the person who has passed away.
                            Through a series of rituals and performances, Tiwah Ceremony created an atmosphere full of meaning and enthusiasm for the Dayak community.In the Tiwah Ceremony procession, various rites, dances, and rhythm of musical instruments
                            Traditional Dayak Culture is an inseparable part.
                            <img src="images/modal-tiwah.jpg" alt="tiwah" class="modal-img my-2" />
                            This ritual is the way they convey prayers and hopes that the spirits of people who have died are guarded by the spirits of the ancestors.Therefore, the sacredness of the Tiwah Ceremony is comparable to the two ceremonies that have been
                            previously explained.After prayer and hope have been disclosed to the spirits of the ancestors, then the bones of people who have died will be placed with full honor.This place is known as
                            "Sandung," a small house that was specifically built as a place of cluties.During the ceremony, the rhythm of traditional musical instruments continued to play, creating a solemn and focused atmosphere.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="upacara">
        <div class="container">
          <div id="parent" class="row">
            <div id="a" class="col-lg-6">
              <div class="upacara1-tulisan">
                <div class="rectangle5-manajah mt-5 mb-4 d-flex align-content-center justify-content-center">
                  <p class="upacara-judul">Manajah Anatang Ceremony</p>
                </div>
                <h1 class="upacara-subjudul mb-3">
                  Manajah Anatang Ceremony<br />
                  Dayak Culture
                </h1>
                <p class="upacara-isi">
                  Manajah Anatang Ceremony has a significant role in dealing with the situation of war for Dayak Culture.In this context, this ceremony becomes a strategic step to get important instructions related to
                  The existence of enemies that are difficult to detect. <button type="button" class="" data-bs-toggle="modal" data-bs-target="#manajah"><span>Read More</span></button>
                </p>

                <!-- Button trigger modal -->

                <!-- Modal -->
                <div class="modal fade" id="manajah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                      <div class="modal-body">
                        <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                          <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 16">
                              <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                              <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            </g>
                          </svg>
                        </button>
                        <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                          <h1 class="judul-modal">
                            Manajah Anatang Ceremony <br />
                            Dayak Culture
                          </h1>
                          <p class="isi-modal">
                            Manajah Antang Ceremony has a significant role in dealing with war situations for Dayak Culture.In this context, this ceremony becomes a strategic step to get important instructions
                            Related to the existence of enemies that are difficult to detect.Through this series of ceremonies, Dayak Culture hopes to reveal the existence of enemies that have been hidden.One key aspect of the ceremony
                            Antang's manage is a call to the spirits of the ancestors through Antang birds.
                            <img src="images/modal-manajah.jpg" alt="tiwah" class="modal-img my-2" /> Burung ini dianggap memiliki kemampuan untuk memberikan petunjuk berharga To the community, and in this ceremony, they are expected
                            tell where the enemy is.Besides being a strategic tool in the context of war, Antang's management ceremony also has a deep spiritual dimension, strengthening the relationship between humans and ancestral spirits
                            and the natural surroundings.roundings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="b" class="col-lg-6 d-flex justify-content-center align-content-center">
              <img class="upacara1-img" src="images/manajah.jpg" alt="tiwah" />
            </div>
          </div>
        </div>
      </div>
      <div class="upacara">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex justify-content-center align-content-center">
              <img class="upacara1-img" src="images/tariu.jpg" alt="tariu" />
            </div>
            <div class="col-lg-6">
              <div class="upacara1-tulisan">
                <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                  <p class="upacara-judul">Tariu Ceremony</p>
                </div>
                <h1 class="upacara-subjudul mb-3">
                  Tariu Ceremony <br />
                  Dayak Culture
                </h1>
                <p class="upacara-isi">
                  Tariu Ceremony is one of the traditional ceremonies conducted by Dayak Culture in Kalimantan.Tariu is a ritual or celebration held by Dayak Culture to respect the spirits of ancestors and nature.Ceremony dance
                  Usually held at the time specified in the Dayak Culture tradition, and the goal is to ask for blessings, safety, and abundant crop yields.
                  <button type="button" class="" data-bs-toggle="modal" data-bs-target="#tariu"><span>Read More</span></button>
                </p>

                <!-- Button trigger modal -->

                <!-- Modal -->
                <div class="modal fade" id="tariu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content">
                      <div class="modal-body">
                        <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                          <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 16">
                              <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                              <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            </g>
                          </svg>
                        </button>
                        <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                          <h1 class="judul-modal">
                            Tariu Ceremony <br />
                            Dayak Culture
                          </h1>
                          <p class="isi-modal">
                            Tariu Ceremony is one of the traditional ceremonies conducted by Dayak Culture in Kalimantan.Tariu is a ritual or celebration held by Dayak Culture to respect the spirits of ancestors and nature.Ceremony
                            Tariu is usually held at the time specified in the Dayak Culture tradition, and the goal is to ask for blessings, safety, and abundant crop yields.In the Ceremony Tariu, Dayak Culture usually
                            Wear traditional clothes and decorate yourself with traditional ornaments.<img src="images/modal-tariu.jpg" alt="tariu" class="modal-img my-2" />They perform a special dance accompanied by songs and music
                            traditional.This dance has a deep spiritual meaning and involves harmony with the nature and ancestral spirits.During the Ceremony Tariu, various rituals and sacrifice were also performed as a form
                            Respect for the spirits of ancestors and nature.The Dayak Culture believes that by doing this ceremony earnestly, they will get blessings and protection from ancestral spirits as well
                            safety for their community.Tariu Ceremony is not only a religious celebration, but also a means of maintaining cultural identity and commemorating ancestral heritage.Through dance, singing, and
                            Ritual, Dayak Culture keeps the traditions and values of ancestors living in modern life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="" id="legenda">
      <div class="legenda-bg d-flex">
        <div class="owl-carousel owl-theme">
          <div class="pembuka-legenda">
            <div class="rectangle4 d-flex align-content-center justify-content-center">
              <p class="adat-judul">Legend</p>
            </div>
            <h1>
              Legenda Dayak <br />
              Culture
            </h1>
            <p>These are some of the popular and unique legendary customs in Dayak Culture</p>
          </div>

          <div class="item">
            <div class="merahmerah d-flex flex-column position-relative">
              <h1 class="judul-legenda mt-4 mx-auto">
                Origin <br />
                Landak River
              </h1>
              <img class="gambar-legenda" src="images/sungailandak.png" alt="" />
              <p class="isi-legenda mx-4 mt-4">
                In a village, live a husband and wife.Every day they work as crops.Although life is very simple, they are always willing to help the neighbors as much as they can.

                <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#landak"><span>Read More</span></button>
              </p>

              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="item">
            <div class="merahmerah d-flex flex-column position-relative">
              <h1 class="judul-legenda mt-4 mx-auto">
                Story Bujang <br />
                Beji
              </h1>
              <img class="gambar-legenda" src="images/bujang.jpg" alt="" />
              <p class="isi-legenda mx-4 mt-4">
                Bujang Beji intends to use the Peak of Bukit Batu in Nanga Silat, Kapuas Hulu to clog the Melawi River.With his supernatural powers, he cut the top of the stone hill and carried it using seven grass.

                <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#bujang"><span>Read More</span></button>
              </p>

              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="item">
            <div class="merahmerah d-flex flex-column position-relative">
              <h1 class="judul-legenda mt-4 mx-auto">
                Ghost <br> Army
              </h1>
              <img class="gambar-legenda" src="images/hantu.jpg" alt="" />
              <p class="isi-legenda mx-4 mt-4">
               During the colonial period, Dutch troops were very superior to the homeland troops, especially Dayak Culture.This is because the Dutch have adequate weapons to carry out war and intimidation.

                <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#hantu"><span>Read More</span></button>
              </p>

              <!-- Button trigger modal -->
            </div>
          </div>
          <div class="item">
            <div class="merahmerah d-flex flex-column position-relative">
              <h1 class="judul-legenda mt-4 mx-auto">
                History of Nusa<br />
                Island
              </h1>
              <img class="gambar-legenda" src="images/nusa.jpg" alt="" />
              <p class="isi-legenda mx-4 mt-4">
                Once upon a time, in the past there was someone named Nusa who lived in a village, on the banks of the Kahayan River.In the village, Nusa lived with his wife and sister -in -law.
                <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#nusa"><span>Read More</span></button>
              </p>

              <!-- Button trigger modal -->
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="landak" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 16">
                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    </g>
                  </svg>
                </button>
                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                  <h1 class="judul-modal">
                    Many-Majestal<br />
                    Landak River
                  </h1>
                  <p class="isi-modal">
                    In a village, live a husband and wife.Every day they work as crops.Although life is very simple, they are always willing to help the neighbors as much as they can.One night, the husband
                    Can't sleep because his heart is very nervous.When he turned to his wife who was fast asleep, he was very surprised.A centipede whose body is shining white out of his wife's head.The centipede crept
                    Get down and get out of the house.Feeling curious, the husband followed where the centipede went.Centipede entered a small hole near his house and did not come out anymore.The next morning, the husband tells
                    The strange incident to his wife.The story of the fairy tale of the people from West Kalimantan "Mother also dreamed weird sir last night.Mother seems to be near a lake.Suddenly, the mother saw a giant hedgehog in the middle of the lake.
                    Hedgehogs are golden yellow hairy.
                    <img src="images/modal-landak.jpg" alt="modal-landak.jpg" class="modal-img my-2" />
                    Does my dream have something to do with what you saw last night?Maybe it's a good sign, sir.What if we just look at the hole where the centipede is hiding? "His wife's proposal."That's right, our Marl
                    Approach the hole, "said her husband.This husband and wife approached the hole where the centipede disappeared.The husband turned his hand into a hole.He felt his hand touch something, he pulled the object.
                    This husband and wife are surprised not to play, the object obtained from the hole is a hedgehog statue made of gold."We just bring home this hedgehog statue, sir.Who knows, bring good to us, "
                    said the wife.The hedgehog statue they kept well."If we sell the hedgehog statue, surely our lives are much better, sir," said the wife "Patience ma'am, we just save it first.Who knows there are clues
                    About the hedgehog statue, "said the Swami calmly.That night, the farmer dreamed of being visited by a giant gold hedgehog."Sir, let me stay with you.I promise to grant everything
                    Your request, "said the hedgehog."How to?"asked the swami."Sir, enough to stroke the head of the hedgehog statue and ask for something, then end it by stroking it again.I will teach the spell; "say
                    Giant Hedgehog.The giant hedgehog said the spell.The husband memorized him silently.In the morning, he woke up and told this to his wife.Then, the farmer rubbed the head of the hedgehog statue and
                    Say spells."Give me a lot of rice," said the farmer who then closed it again with a spell.Miraculously, rice granules flowed profusely from the mouth of the hedgehog statue.Then the farmer
                    Repeating reading spells, then asking for jewelry and basic needs.The hedgehog statue meets all its requests.The husband and wife became rich.They share with all their neighbors, so
                    The life of the village became more balk.The wealth of the farmer lured a robber to come lurking.Finally, the robber found out where the wealth came from.He managed to peek at the farmer
                    Stroking the golden hedgehog statue and reading a spell.In the evening, he managed to steal the hedgehog statue and brought it to his village named Ngabang Village.The village is being hit by drought.Even for
                    The main water needs are gone.The robber earlier was proud to gather residents, "Calm down brothers and sisters.I will help Kallan from this drought, "said the robber.Then, he rubbed the statue
                    The hedgehog and read the spell as he heard at the farmer's house.Instantly, heavy water gushed from the mouth of the hedgehog.Residents rejoiced.However, the water continues to flow profusely to make everyone overwhelmed.
                    Over time the water inundated the village.The robber could not stop him, because he did not know the mantra to stop his request to the hedgehog statue.The statue of the hedgehog continues to issue
                    water.Finally, the village of Ngabang sank and could no longer hold water, so that water flowed out of the village which later became a large river.By the local community, the river was named River River.
                    River River flows in the middle of the city of Ngabang, Landak Regency, West Kalimantan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="hantu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 16">
                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    </g>
                  </svg>
                </button>
                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                  <h1 class="judul-modal">
                    Pasukan<br />
                    Hantu
                  </h1>
                  <p class="isi-modal">
                    In history, so far the popular weapon used by Indonesian troops against Dutch troops is a sharp bamboo.Romanticism of spiky bamboo is so strong that it forgets other weapons that are not
                    less interesting to discuss.Precisely on the island of Kalimantan.The widest island in Indonesia holds wealth which is still preserved by Dayak Culture.During the Dutch period, Dayak Culture put up a fight
                    With his distinctive weapon, so it is called a ghost forces.The story of the deadly weapons and ghost troops in Dayak Culture is what is interesting to be examined further.The following is the full review.
                    <img src="images/modal-hantu.jpg" alt="modal-hantu.jpg" class="modal-img my-2" />
                    During the colonial period, Dutch troops were very superior to the homeland troops, especially Dayak Culture.This is because the Dutch have adequate weapons to carry out war and intimidation.However, different
                    The story is when the Dutch entered the interior of Kalimantan.There is Dayak Culture which is far more fierce than Dutch troops.Kalimantan Dayak troops have a very deadly powerful weapon.This weapon
                    Until now legendary and became one of the weapons that was feared by Dutch troops.The legendary weapon and able to repel the Dutch troops is chopsticks or also referred to as Damek.
                    Dayak Culture has a weapon known as chopsticks as a tool for hunting.Chopsticks are not ordinary chopsticks.The chopsticks used by Dayak troops as weapons are toxic chopsticks.Dayak troops will
                    smear the eyes of chopsticks with the sap of Ipuh trees or poisonous Iren trees.Chopsticks are made of wooden trees that have a round shape with a length of 2 meters.The stem diameter is 2 cm, and the diameter
                    1 cm hole.While chopstick bullets (smeared with poisons) are made of bamboo or a type of old palm tree.Dayak Culture's poisonous chopsticks are not only deadly with poison.But also makes people
                    Exposed to seizures in a terrible way.People affected by chopsticks will usually die in minutes.They will seizure while removing dirt or urine before later
                    Killed.Usually this chopstick will be directed to the target neck.That way the opponent will die quickly and sadistically.The troops called ghost troops here are Dayak Culture.There are two reasons why
                    This Dayak Culture troops are very scary and deadly that they are called ghost troops.First, Dayak Culture has an understanding of excellent forests.They are native of Kalimantan, so
                    Dayak troops are very good at controlling the battlefield.Second, Dayak Culture forces certainly have a deadly weapon, chopsticks.Thanks to the silence and ability of Dayak Culture in killing the opponent, then
                    The troops are quite appropriate if called ghost troops.Thanks to the ferocity and horror of weapons possessed by Dayak Culture, the interior of Kalimantan can live comfortably without intervention from people
                    foreign.Dayak Culture's ability to attack enemies can make Dutch troops not attack the interior of Kalimantan.They only exist to control big cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="bujang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 16">
                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    </g>
                  </svg>
                </button>
                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                  <h1 class="judul-modal">
                    Kisah Bujang<br />
                    Beji
                  </h1>
                  <p class="isi-modal">
                    Earlier, two leaders named Single Beji and Tumenggung Marubai.These two people have a very backdrop.The Marubai Tumenggung is a good and not arrogant person.
                    Meanwhile, Single Beji is a magical, greedy and arrogant man.Both have livelihoods as fish seekers and have their own territories.Tumenggung Marubai and his followers looking for
                    Fish in the Simpang Melawi River, while the bachelor is in Sungal Simpang Kapuas.West Kalimantan People's Fair The Story of the Sungai Simpang Melawi Region has many types of fish, more than
                    Fish in the Sungal Simpang Kapuas.That is why, the Basil catching the marubai is always more than the single.Tumenggung Melawi uses trap or a large trap to catch fish.
                    After accumulating in the trap, it only chooses large fish, while the small fish are released again so the fish in the Sungal Simpang Melawi are always growing and never running out.

                    <img src="images/modal-bujang1.jpg" alt="modal-bujang1.jpg" class="modal-img my-2" />
                    Seeing the catch of Tumenggung Marubai, Bujang Beji felt jealous.He was also looking for ways to defeat Tumenggung Melawi.Then, he took a bad way.He began to catch fish by menguba, which is poisoning
                    The fish with tubes, which are a type of fish toxins from the roots of forest plants that are very intoxicating.At first, he got a lot of fish.More than the catch of Tumenggung Marubai.
                    However, because the way used is to kill fish with poisons, over time the fish in the Simpang Kapuas river becomes greatly reduced.Meanwhile, Tumenggung Marubai still gets a lot of results
                    catch.This makes Bujang Beji more jealous."This can't be left!"Bujang Beji thought, "There must be a way so that Tumenggung Marubai doesn't get much fish."Then, Bujang Beji began to think hard.
                    He found the best way he thought."I have to close the Melawi River flow with a large stone upstream of the river, thus the fish will settle there," said Bujang Beji.
                    <br />

                    Bujang Beji intends to use the Peak of Bukit Batu in Nanga Silat, Kapuas Hulu to clog the Melawi River.With his supernatural powers, he cut the peak of the stone hill and carried it using seven leaves
                    weeds.While carrying the stone hill, suddenly the sound of the girls was laughing at him.They are goddesses in the land of Khayangan.When it reached the intersection between Kapuas and Malawi,
                    Bujang Beji looked up to see who laughed at him.Unintentionally, his feet stepped on toxic thorns until La jumped and screamed in pain.As a result, the seven pieces of weeds he used
                    cut off.The peak of the stone hill fell in a river called the Jetak.
                    <img src="images/modal-bujang2.jpg" alt="modal-bujang2.jpg" class="modal-img my-2" />
                    Bujang Beji was very angry at the goddess who laughed at him."I'll reply to you guys!"he shouted as he stomped his feet pierced by a poisonous thorn on one of the hills nearby.Then, Bujang
                    Beji tried to lift the stone hill that had been submerged in the Jetak by prying it using a longitudinal hill.However, because the stone hill was attached to the Jetak, his efforts were unsuccessful.Hill
                    Elongated that was broken.The fault is now called Bukit Liut.Thus, Bujang Beji's business failed to close the Melawi River.All because of the goddesses.I will take revenge, "said Bujang Benji.Bujang
                    Benji plans to reach the land of Khayangan by using a mambu kumpang tree, which is a kind of giant wood tree that ends up to the sky.He started planting mambu kumpang trees.Within a few days
                    only the tree has grown very tall, until the peak is not visible to the eyes.Before climbing the mambu kumpang, Bujang Beji performed a traditional ritual, which gave offerings to the spirits and animals in
                    The surroundings so as not to disturb their business to reach the land of Khayangan.However, there are two types of animals that forget to be given offerings by Bujang Beji, they are a termite and bear group.Termites and bears feel angry,
                    because it is not given offerings.They also negotiated to frustrate Bujang Beji's business."Let's just be stuck in the mambu kumpang tree until it is cut off!"Bear proposal.The termite group agreed.When Bujang Beji starts
                    Climbing the mambu kumpang tree, a group of termite and bear coming to storm and eat away at the bottom until the tree is cut off.At that time, Bujang Beji had almost reached the country
                    Khayangan.He also crashed into the ground and died instantly.Thus, Bujang Beji's efforts to harm the Goddess of Khayangan failed.Tumenggung Marubai also avoided the evil intentions of Bujang Beji.Meanwhile,
                    The hilltop of Nanga Silat which is separated from the Bachelor Beji punch transformed into a dark hill.Now the dark hill is one of the attractions in the Sintang area, West Kalimantan, and is a tourist forest area with
                    very beautiful scenery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="nusa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 16">
                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    </g>
                  </svg>
                </button>
                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                  <h1 class="judul-modal">
                    History of Nusa Island
                  </h1>
                  <p class="isi-modal">
                    The origin of the island of Nusa Almisah, in the past there was someone named Nusa who lived in a village, on the banks of the Kahayan River.In the village, Nusa lived with his wife and sister -in -law.Nusa and her sister -in -law work working
                    Plant in a small field near his house.They work hard until the crops are abundant.However, one day the village where Nusa and his family lived drought.
                    <img src="images/modal-nusa.jpg" alt="modal-nusa.jpg" class="modal-img my-2" />
                    Finally, Nusa and his sister -in -law went to hunt in the Ruhan River, a small river in the Kahayan River.On the way, they were blocked by trees that fell towards the river.They also pulled over and tried to cut down trees
                    That.Because the day was getting late, they finally divided the tasks, Nusa's sister -in -law continued to cut down trees, while Nusa entered the forest to hunt.In the forest, Nusa found a large egg and then brought it
                    The giant egg returned home.Nusa's wife was worried because the eggs brought by Nusa were very large, moreover the eggs were not known to come from what animal.According to him, they should not eat the eggs.
                    But Nusa believes it is different and still wants to eat the giant egg.Nusa also boiled the egg and ate it until it runs out.But something happened, Nusa's body was filled with red spots that were painful and itchy.Moment
                    Scratched, the spots turned into scales.Nusa's body enlarged and felt hot.He asked to be put into the river.With the help of local residents, Nusa's sister -in -law brought Nusa to the Drying Kahayan River.
                    In the water, Nusa's body turned into a large dragon.Nusa then advised his wife to invite his younger siblings and villagers to evacuate, because that night the storm would rain.So heavy storm rain
                    In the evening, until Nusa's body which has become a large dragon was carried by the river current, until finally stranded near the river mouth.The arrival of Nusa made the fish in the estuary anxious because they became prey.
                    Until one day, jelawat fish and Saluang fish were looking for ways to save the fish so as not to be eaten by Nusa Si Dragon.The fish also run plans to expel Nusa.One of a Saluang fish tells
                    Nusa that there are other dragons who challenged it, even though it was only the tricks of the fish.The next day, Nusa prepared to wait for the dragon to challenge her.But strangely, that day there were no river fish passing by.Because
                    The dragon awaited Nusa did not arrive, he fell asleep.Saluang fish that had been observing from a distance approached him and woke up Nusa, he said that his enemy had come.Nusa was panicked and direct
                    Looking where his enemy, when he saw the tail, he immediately bit it.But apparently Nusa bit his own tail until it broke!Seeing this, Saluang fish immediately told thousands of fish in the river to
                    Attacking the tail of the Nusa Nusa who was injured in his body.Naga Nusa also tried to escape from the pursuit of thousands of fish to exhaustion and finally he died.The fish ate the dragon until the skeleton lives.Framework
                    Naga Nusa has gradually overgrown with shrubs and becomes an island.The island was finally known as the island of Nusa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="upacara" id="makanan">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex justify-content-center align-content-center">
            <img class="upacara1-img" src="images/makanan.png" alt="makanan" style="margin: auto" />
          </div>
          <div class="col-lg-6">
            <div class="upacara1-tulisan">
              <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                <p class="upacara-judul">Food</p>
              </div>
              <h1 class="upacara-subjudul mb-3">
                Special food of <br>
                Dayak Culture
              </h1>
              <p class="upacara-isi">The following is an attractive and unique Special Food Food Culture</p>

              <br />
              <div class="makanan row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card shadow h-100 w-100">
                    <img src="images/bubur.jpg" class="card-img-top" alt="bubur" />
                    <div class="card-body">
                      <h5 class="card-title">Bubur Pedas</h5>
                      <p class="card-text">
                        This type of porridge comes from the Malay community in Sambas, West Kalimantan, and later adopted as a meal by the Malay community in Sarawak.
                        <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#bubur"><span>Read More</span></button>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow h-100 w-100">
                    <img src="images/tempoyak.jpg" class="card-img-top" alt="tempoyak" />
                    <div class="card-body">
                      <h5 class="card-title">Tempoyak</h5>
                      <p class="card-text">
                        Tempoyak is a typical Indonesian dish that is a favorite for culinary lovers who like unique and brave tastes.This dish is made from ripe durian meat fermentation, giving a strong aroma and
                        distinctive characteristics. <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#tempoyak1"><span>Read More</span></button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="bubur" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group 16">
                    <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                  </g>
                </svg>
              </button>
              <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                <h1 class="judul-modal">Bubur Pedas</h1>
                <p class="isi-modal">
                  <img src="images/bubur.jpg" alt="" class="modal-img my-2" />
                  In West Kalimantan, spicy porridge is usually made of rice porridge mixed with anchovies, beans, leeks, and spices.This type of porridge comes from the Malay community in Sambas, West Kalimantan, and
                  Then it was adopted as a dish by the Malay community in Sarawak.Spicy porridge is generally served with sauce and soy sauce to add flavor, often added lime juice.At Sambas, this dish
                  become popular among the people.In Pontianak, spicy porridge is usually sold in a cart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="tempoyak1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group 16">
                    <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                    <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                  </g>
                </svg>
              </button>
              <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                <h1 class="judul-modal">Tempoyak</h1>
                <p class="isi-modal">
                  <img src="images/modal-tempoyak.jpg" alt="tempoyak" class="modal-img my-2" />
                  Tempoyak is a typical Indonesian dish that is a favorite for culinary lovers who like unique and brave tastes.This dish is made from ripe durian meat fermentation, giving a strong aroma and
                  distinctive characteristics.After the durian meat is cooked, mixed with salt, and the fermentation process is carried out for several days or even weeks.This gives a very special taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="rumah">
      <div class="container">
        <div class="bg-rumah d-flex flex-column align-content-center justify-content-center">
          <div class="d-flex flex-column mx-auto konten-rumah">
            <div class="my-lg-4 my-3 rectangle7 d-flex mx-auto align-content-center justify-content-center">
              <p class="rumah-judul">Traditional House</p>
            </div>

            <h1 class="judul-rumah">Betang Dayak Culture Traditional House</h1>
            <p class="isi-rumah">
              Betang House is a traditional house of Kalimantan which is found in various corners of Kalimantan and is inhabited by the Dayak community, especially in the upstream river area which is usually the center of Dayak Culture settlements.In West Kalimantan,
              Betang houses are usually called long houses, houses of Radakng, or Panjai house.
            </p>
          </div>
          <div class="d-flex mx-auto my-3">
            <div id="rumah1">
              <img class="rumah-1" src="images/rumah-adat1.jpg" alt="rumah" />
            </div>
            <div id="rumah2">
              <img class="rumah-2" src="images/rumah-adat2.jpeg" alt="rumah" />
            </div>
            <div id="rumah3">
              <img class="rumah-3" src="images/rumah-adat3.jpeg" alt="rumah" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="upacara" id="senjata">
      <div class="container">
        <div id="parent" class="row">
          <div id="a" class="col-lg-6">
            <div class="upacara1-tulisan">
              <div class="rectangle5-manajah mt-5 mb-4 d-flex align-content-center justify-content-center">
                <p class="upacara-judul">Weapon</p>
              </div>
              <h1 class="upacara-subjudul mb-3">
                Mandau Weapon<br />
                Dayak Culture
              </h1>
              <p class="upacara-isi">
                Mandau is a sharp weapon of a type of sword originating from Dayak culture in Kalimantan.Mandau is included in one of Indonesia's traditional weapons, whose use began in the 17-18th century.
                The past European explorers who carried out expeditions and research to Borneo Island call it the Dayak Sword of the Dayaks of the Hunters (The Dayak knight sword of the headhunters)
              </p>
            </div>
          </div>
          <div id="b" class="col-lg-6 d-flex justify-content-center align-content-center">
            <img class="upacara1-img" src="images/senjata.png" alt="Senjata Mandau" />
          </div>
        </div>
      </div>
    </div>

    <footer class="">
      <div class="container mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 mt-5 border-top">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <div class="Qdayak d-block">
              <span style="color: #f4f4f4; font-size: 32px; font-family: Poppins; font-weight: 700">QD</span><span style="color: black; font-size: 32px; font-family: Poppins; font-weight: 700">ayak</span
              ><span style="color: #ffffff; font-size: 32px; font-family: Poppins; font-weight: 700">.</span>
            </div>
          </a>
          <!-- <p class="text-muted">© 2022</p> -->
        </div>

        <div class="col mb-3 text-white">
          <h5 class="text-start nav-item mb-2">Qdayak</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-start text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="#profil" class="nav-link p-0 text-start text-white">Profil</a></li>
            <li class="nav-item mb-2"><a href="#adat" class="nav-link p-0 text-start text-white">Adat Istiadat</a></li>
            <li class="nav-item mb-2"><a href="#legenda" class="nav-link p-0 text-start text-white">Legend</a></li>
            <li class="nav-item mb-2"><a href="#makanan" class="nav-link p-0 text-start text-white">Food</a></li>
            <li class="nav-item mb-2"><a href="#rumah" class="nav-link p-0 text-start text-white">House</a></li>
            <li class="nav-item mb-2"><a href="#senjata" class="nav-link p-0 text-start text-white">Weapon</a></li>
          </ul>
        </div>

        <div class="col mb-3 text-white">
          <h5 class="text-start nav-item mb-2 ms-md-5">Quick Content</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tiwah"><span>Tiwah Ceremony</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#manajah"><span>Manajah Anatang Ceremony</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tariu"><span>Tariu Ceremony</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bujang"><span>Bujang beji</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#landak"><span>Landak River</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bujang"><span>Bujang beji</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#hantu"><span>Ghost Army</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#nusa"><span>Nusa Island</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bubur"><span>Bubur pedas</span></button>
            </li>
            <li class="nav-item mb-2">
              <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tempoyak1"><span>Tempoyak</span></button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <script src="owlcarousel/owl.carousel.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <script defer src="	https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/owl.carousel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
  </body>`)
  });
});

const rumah1 = document.getElementById('rumah1');
const rumah2 = document.getElementById('rumah2');
const rumah3 = document.getElementById('rumah3');

const bg = document.querySelector('.bg-rumah');

const backgroundImages = ['rumah-adat1.jpg', 'rumah-adat2.jpeg', 'rumah-adat3.jpeg'];
let urutan = 0;

rumah1.addEventListener('click', function () {
  urutan = 0;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});
rumah2.addEventListener('click', function () {
  urutan = 1;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});
rumah3.addEventListener('click', function () {
  urutan = 2;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});

function changeBackgroundImage() {
  if (urutan > 2) {
    urutan = 0;
  }
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
  urutan += 1;
}
changeBackgroundImage();
setInterval(changeBackgroundImage, 3000);

// _____________________________________________________Dark Mode____________________________________________

const darkModeToggle = document.querySelector('#checkbox');
const body = document.body;
const checkbox = document.getElementById('checkbox');

// Cek apakah mode gelap telah diaktifkan sebelumnya
const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Fungsi untuk mengaktifkan/menonaktifkan mode gelap
function toggleDarkMode() {
  // Tambahkan atau hapus kelas "dark-mode" dari elemen <body>
  body.classList.toggle('dark-mode');

  // Simpan preferensi pengguna di localStorage

  const darkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', darkModeEnabled);
}

// Setel mode gelap berdasarkan preferensi pengguna
if (isDarkMode) {
  body.classList.add('dark-mode');
  checkbox.checked = true;
}

// Tambahkan event listener untuk tombol toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// ----------------------------------------------------------- fitur bahasa -----------------------------------------------
