const websiteHome = `
<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <div class="site-wrap">
        <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close mt-3"> <span class="js-menu-toggle"> <i
                            class="fa fa-times fa-xs"></i></span></div>
            </div>
            <div class="site-mobile-menu-body"></div>
        </div>
        <div class="top-bar py-3 top-bg">
            <div class="container">
                <div class="row">
                    <div class="col-8 text-left">
                        <ul class="social-media">
                            <li>
                                <a href="https://www.facebook.com/Atencionapp" class="p-2" target="_blank"><img
                                        src="./public-website/images/facebook.svg" alt="Facebook"></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/atencionapp" class="p-2" target="_blank"><img
                                        src="./public-website/images/twitter.svg" alt="Twitter"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <header class="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-6 col-xl-2">
                        <a class="mb-0 site-logo" href="index.html">
                            <img src="./public-website/images/logo.svg" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-md-10 d-none d-xl-block">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                            <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ">
                                <li><a href="index.html" class="nav-link active-link">Home</a></li>
                                <li class="nav-link has-children">
                                    <a href="producten.html">Producten</a>
                                    <ul class="dropdown">
                                        <li><a href="webapp.html" class="nav-link">Webapp</a></li>
                                        <li><a href="cms-portal.html" class="nav-link">CMS-portal</a></li>
                                        <li><a href="gebruikskosten.html" class="nav-link">Gebruikskosten</a></li>
                                    </ul>
                                </li>
                                <li><a href="over-recreatiegemak.html" class="nav-link">Over Recreatiegemak</a></li>
                                <li><a href="ervaringen.html" class="nav-link">Ervaringen</a></li>
                                <li><a href="klant-worden.html" class="nav-link">Klant worden</a></li>
                                <li><a href="contact.html" class="nav-link">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;">
                        <a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><i
                                class="fa fa-bars fa-lg"> </i></a>
                    </div>
                </div>
            </div>
        </header>
        <!--- Introductie -->
        <div class="site-blocks-cover overlay" style="background-image: url(public-website/images/recreatiegemak-headerimg.jpg);"
            data-aos="fade">
            <div class="container">
                <div class="row header-text">
                    <div class="col-md-7" data-aos="fade-up" data-aos-delay="400">
                    <h1>OPTIMALE SERVICE, MEER OMZET & LAGERE KOSTEN</h1>
                    <p>Recreatiegemak versterkt de gastvrijheidsbeleving in de verblijfsrecreatiesector.</p>
                    <p>Met de webapp van Recreatiegemak maakt u het contact met uw gasten persoonlijker en
                        gemakkelijker. Waarmee u tijd & middelen bespaart, en zowel uw gasttevredenheid als
                        uw omzet verhoogt.
                    </p>
                    <p>Op basis van innovatieve en betrouwbare webtechnologie waarbij optimale gebruiksvriendelijkheid, flexibiliteit en real-time aanpasbaarheid van uw content centraal staan.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <!---De voordelen van Recreatiegemak-->
        <section class="site-section"
            style="background-image: url(public-website/images/recreatiegemak-img1.jpg); background-size: cover">
            <div class="container text-white">
                <div class="row mb-3">
                    <div class="col-12">
                        <h2 class="section-title text-white">De voordelen van Recreatiegemak</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 mb-lg-0 devoordelen">
                        <img src="public-website/images/happy.png" alt="Image" class="img-fluid mb-4 pt-4" data-aos="fade"
                            data-aos-delay="100">
                        <h4>Meer tevreden gasten</h4>
                        <ul class="list-unstyled ul-check ul-check-small">
                            <li>Gasten hebben te allen tijde toegang tot actuele en relevante informatie, zonder daarvoor een mobiele app te moeten downloaden!</li>
                            <li>Gasten kunnen eenvoudiger met de receptie communiceren, waar ze ook zijn</li>
                            <li>Bestellen, activiteiten plannen of verzoeken indienen gaat in een handomdraai</li>
                            <li>Gasten kunnen een meer persoonlijke en gefocuste service krijgen</li>
                        </ul>

                    </div>
                    <div class="col-md-6 col-lg-6 mb-lg-0 devoordelen">
                        <img src="public-website/images/profit.png" alt="Image" class="img-fluid mb-4 pt-4" data-aos="fade"
                            data-aos-delay="300">
                        <h4>Meer omzet</h4>
                        <ul class="list-unstyled ul-check ul-check-small">
                            <li>Gasten zullen meer besteden per bezoek</li>
                            <li>Gasten kunnen eenvoudiger bestellen, en bestellen daardoor vaker en meer</li>
                            <li>Verbeterde mogelijkheden voor 'up- & cross-sell': gasten zullen vaker geneigd zijn een (duurder of een extra) product aan hun bestelling toe te voegen</li>
                            <li>Samenwerken met (lokale) partners wordt een stuk eenvoudiger</li>
                        </ul>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-6 mb-lg-0 devoordelen">

                        <img src="public-website/images/efficiency.png" alt="Image" class="img-fluid mb-4 pt-4" data-aos="fade"
                            data-aos-delay="200">
                        <h4>Meer effici&euml;ntie</h4>
                        <ul class="list-unstyled ul-check ul-check-small">
                            <li>Lagere tot geen kosten voor o.a. informatieboekjes en andere fysieke (promotie)-materialen</li>
                            <li>Effici&euml;nter verwerken van bestellingen en serviceverzoeken van gasten</li>
                            <li>Vermindering van piekmomenten: meer planmatig en gespreid werken</li>
                            <li>Aanzienlijke tijdsbesparing door automatisering van handmatige, dagelijks terugkerende handelingen</li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-lg-0 devoordelen">

                        <img src="public-website/images/analytics.png" alt="Image" class="img-fluid  mb-4 pt-4" data-aos="fade"
                            data-aos-delay="400">
                        <h4>Meer inzicht</h4>
                        <ul class="list-unstyled ul-check ul-check-small">
                            <li>Uitgebreide statistieken & managementinformatie</li>
                            <li>Beter inspelen op trends & ontwikkelingen</li>
                        </ul>
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="col-12">
                        <a href="webapp.html" class="btn btn-primary btn-black--hover shadow-none mr-1 mb-3 mt-3">Webapp</a>
                        <a href="cms-portal.html" class="btn btn-primary btn-black--hover shadow-none ml-1">CMS-portal</a>
                    </div>
                </div>
            </div>
        </section>
        <!--- Waar is Recreatiegemak van waarde? -->
        <section class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 ml-auto order-md-2 mb-4">
                        <img src="public-website/images/recreatiegemak-img2.jpg" alt="Image" class="img-fluid">
                    </div>
                    <div class="col-md-7 order-md-1">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <h2 class="section-title mb-3">Waar is Recreatiegemak van waarde?</h2>
                                <p> De Recreatiegemak-producten kunnen worden gebruikt in de gehele (verblijfs-)recreatiesector.
                                    Als digitaal informatie- & communicatiekanaal en ter ondersteuning van diverse bestel-, reserverings- en serviceprocessen.
                                </p>
                                <p>Gasten informeren over uw faciliteiten en actualiteiten.
                                    Digitaal laten bestellen van bijvoorbeeld broodjes, afhaal- en/of bezorgmaaltijden.
                                    Faciliteren van roomservice in hotels, of het maken van reserveringen voor restaurants, (sport)faciliteiten en/of (wellness)behandelingen.
                                    Slechts enkele voorbeelden waar Recreatiegemak werkt!
                                </p>
                                <p> Recreatiegemak helpt de volgende soorten bedrijven:</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 mb-lg-0 mb-4 waar">
                                <img src="public-website/images/campings.svg" alt="Image" class="img-fluid w-30 mb-4" data-aos="fade"
                                    data-aos-delay="100">
                                <ul class="ulpadleft">
                                    <li>Campings</li>
                                    <li>Camperparken
                                    <li>Vakantieparken</li>
                                    <li>Kampeerterreinen</li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-lg-4 mb-lg-0 mb-4 waar">
                                <img src="public-website/images/hotel.svg" alt="Image" class="img-fluid w-30 mb-4" data-aos="fade"
                                    data-aos-delay="200">
                                <ul class="ulpadleft">
                                    <li>Hotels</li>
                                    <li>Pensions</li>
                                    <li>Bed & breakfasts</li>
                                    <li>Groepsaccommodaties</li>
                                    <li>Appartementen & lodges</li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-lg-4 mb-lg-0 mb-3 waar">
                                <img src="public-website/images/marina.svg" alt="Image" class="img-fluid w-30 mb-4" data-aos="fade"
                                    data-aos-delay="300">
                                <ul class="ulpadleft">
                                    <li>Jachthavens</li>
                                    <li>Marina's</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row pt-4">
                            <div class="col-12">
                                <a href="klant-worden.html"
                                    class="btn btn-primary btn-black--hover btn-blue shadow-none ml-1">WORD KLANT BIJ RECREATIEGEMAK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--- Waarom Recreatiegemak? -->
        <section class="site-section greenbg pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="section-title mb-4 text-white">Waarom Recreatiegemak?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 mb-lg-0" data-aos="fade" data-aos-delay="100">
                        <ul class="list-unstyled ul-check primary text-white">
                            <li class="mb-4">
                                <h4>Businessfocus </h4>
                                <p class="font-weight-bold">De dagelijkse business van onze klanten is onze belangrijkste focus.</p>
                                <p class="p-mremove"> Processen verbeteren, klant-/gasttevredenheid verhogen en waarde
                                    cre&euml;ren is wat Recreatiegemak drijft en waar we ruime expertise in hebben.
                                    We zijn weliswaar een technologiebedrijf, maar in al ons denken en doen is niet de
                                    IT maar de 'business' ons uitgangspunt.
                                </p>
                            </li>
                            <li class="mb-4">
                                <h4>Continue innovatie </h4>
                                <p class="font-weight-bold">Goed kan (en moet) altijd nog beter. Verbeteren en
                                    vernieuwen zit in de genen van Recreatiegemak.</p>
                                <p class="p-mremove"> Voor onze bestaande producten leggen we onszelf hoge
                                    kwaliteitseisen op.
                                    Nog scherper zijn we op de doorontwikkeling met nieuwe features voor nog meer
                                    gebruiksgemak.
                                    In goede samenwerking met onze klanten en op basis van een duidelijke roadmap
                                    ontwikkelen we doorlopend nieuwe concepten.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-lg-0" data-aos="fade" data-aos-delay="100">
                        <ul class="list-unstyled ul-check primary text-white">
                            <li class="mb-4">
                                <h4>Gedeelde belangen </h4>
                                <p class="font-weight-bold">Wij zijn alleen relevant als we waarde cre&euml;ren voor
                                    onze klanten.</p>
                                <p class="p-mremove"> Bij ons geen enorme kosten, langlopende contracten en
                                    bureaucratische processen.
                                    Alles is er bij ons op gericht om samen met u uw gastvrijheidsprocessen duurzaam te
                                    verbeteren.
                                    Zodat we uw investering waard zijn & waard blijven.
                                </p>
                            </li>
                            <li class="mb-4">
                                <h4>Innovatieve technologie</h4>
                                <p class="font-weight-bold">In onze producten maken we alleen gebruik van bewezen &
                                    moderne technologie&euml;n.</p>
                                <p class="p-mremove">Technologie&euml;n die gerenommeerde bedrijven zoals Facebook,
                                    Netflix en Uber ook toepassen zodat we altijd up & running zijn en leveren waar we
                                    voor staan.
                                    Optimale gebruiksvriendelijkheid, betrouw- & beschikbaarheid en flexibiliteit staan
                                    daarbij centraal.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </section>
    <!--- Recreatiegemak eenvoudig in gebruik nemen -->
    <section class="site-section bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3">
                    <h2 class="section-title mb-3 ">Recreatiegemak eenvoudig in gebruik nemen</h2>
                    <p>Recreatiegemak streeft naar een optimaal gebruiksgemak voor zowel onze klanten als hun gasten.
                    </p>
                    <p>Daarbij hoort ook dat wij onze klanten maximaal ontzorgen tijdens onze dienstverlening.
                        Daarom bespreken we graag, volledig vrijblijvend, uw wensen en tonen we u een volledige
                        demoversie in een persoonlijk gesprek.
                    </p>
                    <p>Ook tijdens de implementatie nemen wij u zoveel mogelijk werk uit handen.
                        Vanaf het eerste contact volgen we onderstaand 3-stappenplan dat, indien gewenst, binnen enkele
                        dagen volledig afgerond kan zijn.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-4 mb-4 mb-lg-0 eenvoudig">
                    <img src="public-website/images/list.svg" alt="Image" class="img-fluid mb-4" data-aos="fade" data-aos-delay="100">
                    <h4>1. Inventarisatie </h4>
                    <p class="text-left p-mremove">Zodra u uw interesse kenbaar maakt, zullen wij telefonisch contact
                        met u opnemen om uw wensen en situatie op hoofdlijnen door te nemen, en een afspraak in te
                        plannen voor een nadere kennismaking.</p>
                </div>
                <div class="col-md-4 col-lg-4 mb-4 mb-lg-0 eenvoudig">
                    <img src="public-website/images/handshake.svg" alt="Image" class="img-fluid mb-4" data-aos="fade"
                        data-aos-delay="200">
                    <h4>2. Introductie</h4>
                    <p class="text-left p-mremove">Tijdens een persoonlijk gesprek (op uw locatie of via videobellen)
                        bespreken we uw wensen & vragen, en laten we zien hoe onze producten van waarde kunnen zijn in
                        uw specifieke situatie.
                        Wanneer u overtuigd bent van de meerwaarde van Recreatiegemak, ontvangt u van ons een voorstel
                        voor onze dienstverlening.
                    </p>
                </div>
                <div class="col-md-4 col-lg-4 mb-lg-0 eenvoudig">
                    <img src="public-website/images/implementation.svg" alt="Image" class="img-fluid mb-4" data-aos="fade"
                        data-aos-delay="300">
                    <h4>3. Implementatie</h4>
                    <p class="text-left p-mremove">Nadat wij de implementatie zoveel als mogelijk op afstand hebben
                        voorbereid, ronden we die af bij u op locatie.
                        Vanzelfsprekend nemen we dan voldoende tijd voor een goede kennisoverdracht zodat u de
                        Recreatiegemak-producten met vertrouwen kunt gaan gebruiken.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 mb-lg-0 mb-3">
                            <div class="row mb-3">
                                <div class="col-12">
                                    <a class="site-logo" href="index.html"><img src="./public-website/images/logo.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <ul style="list-style: none; padding-left: 0">
                                        <li> <img src="./public-website/images/phone.svg" class="pr-3 phone">085 130 4537</li>
                                        <li><img src="./public-website/images/envelop.svg" class="pr-3 envelope">info@recreatiegemak.nl
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                            <h2 class="footer-heading mb-4">Sociale media</h2>
                            <div class="mb-2"> <a href="https://www.facebook.com/Atencionapp" target="_blank"><img src="./public-website/images/fb.svg"
                            alt="Facebook" class="pr-3 fb">Facebook</br></a> </div>
                            <div class="mb-2">  <a href="https://twitter.com/atencionapp" target="_blank"><img src="./public-website/images/twitter.svg" alt="Twitter" class="pr-3 tw">Twitter</br></a></div>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-lg-0">
                            <h2 class="footer-heading mb-4">Voorwaarden</h2>
                            <ul class="list-unstyled">
                                <li><a
                                        href="https://s3.eu-central-1.amazonaws.com/live.atencion.nl/voorwaarden/Algemene_Voorwaarden_Atencion.pdf"><i
                                            class="fa fa-chevron-right"> </i> Algemene Voorwaarden</a></li>
                                <li><a
                                        href="https://s3.eu-central-1.amazonaws.com/live.atencion.nl/voorwaarden/Gebruiksvoorwaarden_Atencion.pdf"><i
                                            class="fa fa-chevron-right"> </i> Gebruiksvoorwaarden</a></li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 text-center">
                <div class="col-md-12">
                    <div class="border-top pt-5">
                        <p>Copyright &copy; <script>
                                document.write(new Date().getFullYear());
                            </script> Recreatiegemak</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>`;
const websiteHomePageHead = `<head><title>Recreatiegemak</title>
<link rel="icon" href="./public-website/images/favicon.png">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Quicksand:400, 600,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="./public-website/css/bootstrap.min.css">
<link rel="stylesheet" href="./public-website/css/jquery-ui.css">
<link rel="stylesheet" href="./public-website/css/jquery.fancybox.min.css">
<link rel="stylesheet" href="./public-website/css/aos.css">
<link rel="stylesheet" href="./public-website/css/style.css">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-147183184-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-147183184-1');
</script></head>`;
const websiteHomePageScript = `<script src="public-website/js/jquery-3.3.1.min.js"></script>
<script src="public-website/js/jquery-migrate-3.0.1.min.js"></script>
<script src="public-website/js/jquery-ui.js"></script>
<script src="public-website/js/popper.min.js"></script>
<script src="public-website/js/bootstrap.min.js"></script>
<script src="public-website/js/owl.carousel.min.js"></script>
<script src="public-website/js/jquery.stellar.min.js"></script>
<script src="public-website/js/jquery.countdown.min.js"></script>
<script src="public-website/js/bootstrap-datepicker.min.js"></script>
<script src="public-website/js/jquery.easing.1.3.js"></script>
<script src="public-website/js/aos.js"></script>
<script src="public-website/js/jquery.fancybox.min.js"></script>
<script src="public-website/js/jquery.sticky.js"></script>
<script src="public-website/js/main.js"></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="public-website/js/index.js"></script>`;
