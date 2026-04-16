// ── MOCKUP HTML (srcdoc for the preview iframe) ──────────────────────────────
const MOCKUP_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    /* Smoobu CSS custom properties (defaults) */
    :root {
      --font-color-default: #9a9a9a;
      --font-color-label: #9a9a9a;
      --font-color-input: #9a9a9a;
      --font-color-icons: #9a9a9a;
      --font-color-input-icons: #9a9a9a;
      --font-color-headlines: #9a9a9a;
      --font-color-error: #f45b69;
      --font-color-black: #424242;
      --border-radius: 5px;
      --border-radius-btn: 5px;
      --border-radius-img: 5px;
      --border-width: 1px;
      --border-color-default: #ced4da;
      --border-color-container: #ced4da;
      --border-color-input: #ced4da;
      --border-color-image: transparent;
      --button-color-primary: #3b4aff;
      --button-color-secondary: white;
    }

    /* Smoobu utility classes (from main.css) */
    .color-default      { color: var(--font-color-default); }
    .color-label        { color: var(--font-color-label); }
    .color-input        { color: var(--font-color-input); }
    .color-icons        { color: var(--font-color-icons); }
    .color-input-icons  { color: var(--font-color-input-icons); }
    .color-headlines    { color: var(--font-color-headlines); }
    .color-error        { color: var(--font-color-error); }
    .color-black        { color: var(--font-color-black); }
    /* Production-specific classes (no Smoobu variable equivalent) */
    .grey-label         { color: var(--font-color-label); }
    .person-label       { color: var(--font-color-default); }
    .label-default      { color: var(--font-color-label); }

    .border-default {
      border: var(--border-width) solid var(--border-color-default) !important;
      border-radius: var(--border-radius) !important;
    }
    .border-container { border-color: var(--border-color-container) !important; }
    .border-input     { border-color: var(--border-color-input) !important; }

    .btn {
      border-radius: var(--border-radius-btn) !important;
      border-color: var(--button-color-primary) !important;
    }
    .btn-primary,
    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:not(:disabled):not(.disabled):active,
    .btn-primary:not(:disabled):not(.disabled).active {
      color: var(--button-color-secondary) !important;
      background-color: var(--button-color-primary) !important;
      border-color: var(--button-color-primary) !important;
      border-radius: var(--border-radius-btn) !important;
      box-shadow: none !important;
    }
    .btn-primary:hover { filter: brightness(0.9); }
    .btn-secondary,
    .btn-secondary:active,
    .btn-secondary:focus,
    .btn-secondary:not(:disabled):not(.disabled):active {
      color: var(--button-color-primary) !important;
      background-color: var(--button-color-secondary) !important;
      border-color: var(--button-color-primary) !important;
      border-radius: var(--border-radius-btn) !important;
      box-shadow: none !important;
    }
    .form-control:focus {
      border-color: var(--border-color-input) !important;
      box-shadow: none !important;
    }

    /* Layout & structure */
    body {
      font-family: metropolis, sans-serif;
      padding: 20px;
      background: #fff;
    }

    header.background-color {
      border-bottom: 1px solid var(--border-color-default);
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    h1.logo_title {
      font-size: 22px;
      font-weight: 600;
      margin: 0;
      line-height: 1.3;
    }

    .navbar { margin: 6px 0; padding: 0; }
    .navbar-brand { padding: 0; }

    .label-default {
      font-size: 13px;
      margin-bottom: 5px;
    }

    /* Input group border handling */
    .input-group .form-control.border-default {
      border-right: none !important;
      border-radius: var(--border-radius) 0 0 var(--border-radius) !important;
    }

    select.form-control.border-default {
      border: var(--border-width) solid var(--border-color-input) !important;
      border-radius: var(--border-radius) !important;
    }

    .input-group-text {
      background: #fff;
      border: var(--border-width) solid var(--border-color-input) !important;
      border-left: none !important;
      border-radius: 0 var(--border-radius) var(--border-radius) 0 !important;
    }

    #check-availability-container { padding: 16px; }
    .border-box-container { padding: 0; }

    #check-availability-button {
      width: 100%;
      margin-top: 24px;
      height: 38px;
    }

    /* Apartment cards */
    .apartmentInfo { margin-bottom: 12px; }

    .apartmentInfoBox {
      overflow: hidden;
      padding: 0 !important;
    }

    .apartment-image-container {
      padding: 16px !important;
      display: flex;
    }

    .apartment-image-container img {
      width: 100%;
      height: 100%;
      min-height: 200px;
      object-fit: cover;
      display: block;
      border-radius: var(--border-radius-img) !important;
    }

    ._classTextContainer_ {
      padding: 20px 24px !important;
      display: flex;
      flex-direction: column;
      min-height: 200px;
    }

    h2.color-headlines {
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    .amenities-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      font-size: 16px;
      margin-top: 0;
    }

    .card-bottom {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      padding-top: 16px;
    }

    .price-info { font-size: 13px; color: inherit; }
    .price-info strong { font-size: 16px; font-weight: 700; }

    @media (max-width: 575px) {
      .card-bottom {
        flex-direction: column;
        align-items: stretch;
      }
      .price-info {
        text-align: right;
      }
      .card-bottom .bookingLink {
        text-align: center;
        width: 100%;
      }
    }

    .bookingLink {
      font-size: 13px;
      padding: 6px 18px;
      display: inline-block;
      text-decoration: none;
      white-space: nowrap;
    }

    /* Booking form view */
    #bookingFormView .back-link {
      font-size: 12px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 16px;
    }
    #bookingFormView .back-link:hover { opacity: 0.7; }
  </style>
  <!-- User custom CSS is injected here -->
  <style id="smoobu-custom"></style>
  <!-- Context mode CSS (standalone vs embedded) injected here -->
  <style id="smoobu-context"></style>
</head>
<body class="background-color">

  <header class="background-color" id="page-header">
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" id="navbar-brand-link" href="#">
          <h1 class="logo_title color-headlines">Meine Ferienwohnungen</h1>
        </a>
      </div>
    </div>
  </header>

  <div id="searchContainer" class="border-box-container">
    <div id="check-availability-container" class="border-box border-default">
      <div class="row">
        <div class="col-12 col-md-9">
          <div class="row">

            <div class="col-6 col-md-4 form-group">
              <div class="label-default color-label">Anreise</div>
              <div class="input-group">
                <input class="form-control border-default border-input color-default color-input"
                       type="text" placeholder="TT.MM.JJJJ" readonly>
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="far fa-calendar-alt color-icons color-input-icons"></i>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-4 form-group">
              <div class="label-default color-label">Abreise</div>
              <div class="input-group">
                <input class="form-control border-default border-input color-default color-input"
                       type="text" placeholder="TT.MM.JJJJ" readonly>
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="far fa-calendar-alt color-icons color-input-icons"></i>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 form-group">
              <div class="label-default color-label">Gäste</div>
              <select class="form-control border-default border-input color-default color-input">
                <option class="color-black">2 Gäste</option>
                <option class="color-black">3 Gäste</option>
                <option class="color-black">4 Gäste</option>
              </select>
            </div>

          </div>
        </div>
        <div class="col-12 col-md-3">
          <button id="check-availability-button" class="btn btn-primary">
            Verfügbarkeit prüfen
          </button>
        </div>
      </div>
    </div>
  </div>

  <div id="apartmentListContainer" style="margin-top: 16px;">

    <!-- Card 1 -->
    <div class="row" style="margin-bottom: 12px;">
      <div class="col-md-12">
        <div class="apartmentInfo rounded-lg">
          <div class="apartmentInfoBox border-box border-default border-container">
            <div class="row no-gutters">
              <div class="col-4 col-md-3 apartment-image-container">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=290&fit=crop&crop=center" alt="">
              </div>
              <div class="_classTextContainer_ col-8 col-md-9">
                <h2 class="color-headlines">Sonnige Ferienwohnung am See</h2>
                <div class="amenities-row">
                  <i class="fas fa-bed color-icons"></i>
                  <i class="fas fa-shower color-icons"></i>
                  <i class="fas fa-wifi color-icons"></i>
                  <i class="fas fa-user color-icons"></i>
                  <i class="fas fa-paw color-icons"></i>
                  <i class="fas fa-utensils color-icons"></i>
                  <i class="fas fa-tv color-icons"></i>
                  <i class="fas fa-car color-icons"></i>
                </div>
                <div class="card-bottom">
                  <span class="price-info color-black">5 Nächte.&nbsp;<strong>640 €</strong></span>
                  <a class="btn btn-primary bookingLink" href="#" data-apt="Sonnige Ferienwohnung am See" data-img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=300&fit=crop&crop=center">Jetzt buchen!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="row">
      <div class="col-md-12">
        <div class="apartmentInfo rounded-lg">
          <div class="apartmentInfoBox border-box border-default border-container">
            <div class="row no-gutters">
              <div class="col-4 col-md-3 apartment-image-container">
                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=290&fit=crop&crop=center" alt="">
              </div>
              <div class="_classTextContainer_ col-8 col-md-9">
                <h2 class="color-headlines">Gemütliches Stadtapartment</h2>
                <div class="amenities-row">
                  <i class="fas fa-bed color-icons"></i>
                  <i class="fas fa-shower color-icons"></i>
                  <i class="fas fa-wifi color-icons"></i>
                  <i class="fas fa-user color-icons"></i>
                  <i class="fas fa-coffee color-icons"></i>
                  <i class="fas fa-utensils color-icons"></i>
                  <i class="fas fa-tv color-icons"></i>
                  <i class="fas fa-snowflake color-icons"></i>
                </div>
                <div class="card-bottom">
                  <span class="price-info color-black">3 Nächte.&nbsp;<strong>267 €</strong></span>
                  <a class="btn btn-primary bookingLink" href="#" data-apt="Gemütliches Stadtapartment" data-img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=300&fit=crop&crop=center">Jetzt buchen!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- ── BOOKING FORM VIEW (hidden by default) ─────────────────────── -->
  <div id="bookingFormView" style="display: none; margin-top: 16px;">

    <div style="margin-bottom: 14px;">
      <a href="#" id="backToListing" class="back-link color-default">
        <i class="fas fa-arrow-left"></i>&nbsp;Zurück zur Übersicht
      </a>
    </div>

    <div class="row">

      <!-- LEFT: Property summary + price breakdown -->
      <div class="col-12 col-md-5" style="margin-bottom: 16px;">
        <div class="apartmentInfoBox border-box border-default border-container">
          <div class="apartment-image-container">
            <img id="formAptImg"
                 src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=300&fit=crop&crop=center"
                 alt="">
          </div>
          <div style="padding: 16px 20px;">
            <h3 id="formAptTitle" class="color-headlines"
                style="font-size: 16px; font-weight: 700; margin: 0 0 14px 0;">
              Sonnige Ferienwohnung am See
            </h3>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 13px;">
              <i class="fas fa-user color-icons"></i>
              <span class="person-label">2 Personen</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; font-size: 13px;">
              <i class="fas fa-calendar-alt color-icons"></i>
              <span class="person-label">12.05.26 &rarr; 17.05.26</span>
            </div>
            <hr style="border: none; border-top: 1px solid var(--border-color-default); margin: 0 0 12px 0;">
            <div style="font-size: 13px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span class="color-default">Grundpreis</span>
                <span class="color-black">750,00 €</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <span class="color-default">Reinigungsgebühr</span>
                <span class="color-black">50,00 €</span>
              </div>
              <hr style="border: none; border-top: 1px solid var(--border-color-default); margin: 0 0 10px 0;">
              <div style="display: flex; justify-content: space-between; font-weight: 700;">
                <span class="color-black">Gesamtbetrag</span>
                <span class="color-black">800,00 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Contact form. Real Smoobu wrapper class: one-apartment-form-left-container border-box border-default border-container — needs .border-container so Property cards & check-out picker colors this whole box (verified on booking.smoobu.com 2026-04-16). -->
      <div class="col-12 col-md-7">
        <div class="one-apartment-form-left-container border-box border-default border-container" style="padding: 20px 24px;">
          <h3 class="color-headlines" style="font-size: 15px; font-weight: 700; margin: 0 0 16px 0;">Kontakt</h3>

          <div class="row">
            <div class="col-6 form-group">
              <div class="label-default color-label">Vorname*</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
            <div class="col-6 form-group">
              <div class="label-default color-label">Nachname*</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
          </div>
          <div class="row">
            <div class="col-6 form-group">
              <div class="label-default color-label">E-Mail*</div>
              <input type="email" class="form-control border-default border-input color-default color-input">
            </div>
            <div class="col-6 form-group">
              <div class="label-default color-label">Telefon</div>
              <input type="tel" class="form-control border-default border-input color-default color-input">
            </div>
          </div>
          <div class="row">
            <div class="col-8 form-group">
              <div class="label-default color-label">Straße / Hausnummer</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
            <div class="col-4 form-group">
              <div class="label-default color-label">PLZ</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
          </div>
          <div class="row">
            <div class="col-6 form-group">
              <div class="label-default color-label">Stadt</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
            <div class="col-6 form-group">
              <div class="label-default color-label">Land</div>
              <input type="text" class="form-control border-default border-input color-default color-input">
            </div>
          </div>
          <div class="form-group">
            <div class="label-default color-label">Nachricht an den Gastgeber</div>
            <textarea class="form-control border-default border-input color-default color-input" rows="2"></textarea>
          </div>

          <!-- Optional Extras — real Smoobu wraps addon labels in <label class="label-default color-label color-black"> so they pick up the Labels color -->
          <label class="grey-label" style="margin-bottom: 10px; display: block;">Optionale Leistungen</label>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; font-size: 13px;">
            <label class="label-default color-label color-black" style="margin: 0; font-weight: normal;">Endreinigung &nbsp;60 € / Buchung</label>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="btn btn-secondary" style="width: 26px; height: 26px; padding: 0; line-height: 1;">−</button>
              <span class="color-black" style="min-width: 16px; text-align: center; font-size: 13px;">0</span>
              <button class="btn btn-secondary" style="width: 26px; height: 26px; padding: 0; line-height: 1;">+</button>
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; font-size: 13px;">
            <label class="label-default color-label color-black" style="margin: 0; font-weight: normal;">Haustier &nbsp;15 € / Buchung</label>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="btn btn-secondary" style="width: 26px; height: 26px; padding: 0; line-height: 1;">−</button>
              <span class="color-black" style="min-width: 16px; text-align: center; font-size: 13px;">0</span>
              <button class="btn btn-secondary" style="width: 26px; height: 26px; padding: 0; line-height: 1;">+</button>
            </div>
          </div>

          <!-- Payment method -->
          <div class="form-group">
            <div class="label-default color-label">Zahlungsmethode</div>
            <select class="form-control border-default border-input color-default color-input">
              <option class="color-black">Zahlung bei Anreise</option>
              <option class="color-black">Kreditkarte</option>
              <option class="color-black">PayPal</option>
            </select>
          </div>

          <!-- T&C — real Smoobu wraps this in <label class="label-default color-label color-black"> inside .form-group -->
          <div class="form-group" style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 16px; font-size: 12px;">
            <input type="checkbox" style="margin-top: 3px; flex-shrink: 0; cursor: pointer;">
            <label class="label-default color-label color-black" style="margin: 0; font-weight: normal; display: inline;">Ich stimme den
              <a href="#" style="text-decoration: underline; color: inherit;">AGB</a>
              und der
              <a href="#" style="text-decoration: underline; color: inherit;">Datenschutzerklärung</a>
              zu.
            </label>
          </div>

          <!-- Price summary + submit -->
          <div style="text-align: right; font-size: 13px; margin-bottom: 12px; line-height: 1.9;">
            <div><span class="color-default">Grundpreis: </span><span class="color-black">750,00 €</span></div>
            <div><span class="color-default">Reinigungsgebühr: </span><span class="color-black">50,00 €</span></div>
            <div style="font-size: 15px; font-weight: 700; margin-top: 2px;" class="color-black">Gesamtbetrag: 800,00 €</div>
          </div>
          <button class="btn btn-primary" style="width: 100%; height: 42px; font-size: 14px;">Verfügbar – Jetzt buchen!</button>
          <div style="margin-top: 10px;">
            <small class="color-error">
              <i class="fas fa-exclamation-circle"></i>&nbsp;Bitte füllen Sie alle Pflichtfelder aus.
            </small>
          </div>
        </div>
      </div>

    </div>
  </div>

  <script>
    (function () {
      var listContainer   = document.getElementById('apartmentListContainer');
      var formView        = document.getElementById('bookingFormView');
      var formTitle       = document.getElementById('formAptTitle');
      var formImg         = document.getElementById('formAptImg');

      function showForm(aptName, imgSrc) {
        if (aptName && formTitle) formTitle.textContent = aptName;
        if (imgSrc  && formImg)   formImg.src = imgSrc;
        listContainer.style.display = 'none';
        // Search bar stays visible (mirrors real Smoobu behaviour)
        formView.style.display = 'block';
      }

      function showListing() {
        formView.style.display      = 'none';
        listContainer.style.display = 'block';
      }

      document.querySelectorAll('.bookingLink').forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          showForm(el.dataset.apt, el.dataset.img);
        });
      });

      var backBtn = document.getElementById('backToListing');
      if (backBtn) {
        backBtn.addEventListener('click', function (e) {
          e.preventDefault();
          showListing();
        });
      }
    })();
  <\/script>
</body>
</html>`;

// ── SMOOBU DEFAULTS ───────────────────────────────────────────────────────────
const SMOOBU_DEFAULTS = {
  buttonColorPrimary:   '#3b4aff',
  buttonColorSecondary: '#ffffff',
  fontColorBlack:       '#424242',
  fontColorDefault:     '#9a9a9a',
  fontColorLabel:       '#9a9a9a',
  fontColorIcons:       '#9a9a9a',
  fontColorError:       '#f45b69',
  borderColorDefault:   '#ced4da',
  borderColorContainer: '#ced4da',
  borderColorInput:     '#ced4da',
  borderRadiusBorders:  5,
  borderRadiusImages:   5,
  borderRadiusButtons:  5,
  borderWidth:          1,
};

// ── TEMPLATES ─────────────────────────────────────────────────────────────────
const TEMPLATES = {
  minimal: {
    buttonColorPrimary:   '#1a1a1a',
    buttonColorSecondary: '#ffffff',
    fontColorBlack:       '#1a1a1a',
    fontColorDefault:     '#6b6b6b',
    fontColorLabel:       '#6b6b6b',
    fontColorIcons:       '#6b6b6b',
    fontColorError:       '#f45b69',
    borderColorDefault:   '#e0e0e0',
    borderColorContainer: '#e0e0e0',
    borderColorInput:     '#e0e0e0',
    borderRadiusBorders:  4,
    borderRadiusImages:   4,
    borderRadiusButtons:  4,
    borderWidth:          1,
    fontFamily:           'Inter',
    bodyBackground:       '#f5f5f5',
    cardBackground:       '#ffffff',
    searchBackground:     '#ffffff',
  },
  modern: {
    buttonColorPrimary:   '#3b4aff',
    buttonColorSecondary: '#ffffff',
    fontColorBlack:       '#0d0d0d',
    fontColorDefault:     '#555555',
    fontColorLabel:       '#555555',
    fontColorIcons:       '#3b4aff',
    fontColorError:       '#f45b69',
    borderColorDefault:   '#3b4aff',
    borderColorContainer: '#e0e0e0',
    borderColorInput:     '#ced4da',
    borderRadiusBorders:  2,
    borderRadiusImages:   2,
    borderRadiusButtons:  2,
    borderWidth:          1,
    fontFamily:           'Inter',
    bodyBackground:       '#ffffff',
    cardBackground:       '#ffffff',
    searchBackground:     '#ffffff',
  },
  warm: {
    buttonColorPrimary:   '#c17b3e',
    buttonColorSecondary: '#ffffff',
    fontColorBlack:       '#3d2b1f',
    fontColorDefault:     '#8a7060',
    fontColorLabel:       '#8a7060',
    fontColorIcons:       '#c17b3e',
    fontColorError:       '#f45b69',
    borderColorDefault:   '#d4b896',
    borderColorContainer: '#d4b896',
    borderColorInput:     '#d4b896',
    borderRadiusBorders:  10,
    borderRadiusImages:   10,
    borderRadiusButtons:  10,
    borderWidth:          1,
    fontFamily:           'Lato',
    bodyBackground:       '#fdf6ee',
    cardBackground:       '#fff9f2',
    searchBackground:     '#fff9f2',
  },
};

// ── STATE ─────────────────────────────────────────────────────────────────────
let state = {
  ...SMOOBU_DEFAULTS,
  fontFamily:        '',
  bodyBackground:    '#ffffff',
  cardBackground:    '#ffffff',
  searchBackground:  '#ffffff',
  contextMode:       'standalone',   // 'standalone' | 'embedded'
};

// ── CSS VARIABLE MAP ──────────────────────────────────────────────────────────
const CSS_VAR_MAP = {
  buttonColorPrimary:   '--button-color-primary',
  buttonColorSecondary: '--button-color-secondary',
  fontColorBlack:       '--font-color-black',
  fontColorDefault:     '--font-color-default',
  fontColorLabel:       '--font-color-label',
  fontColorIcons:       '--font-color-icons',
  fontColorError:       '--font-color-error',
  borderColorDefault:   '--border-color-default',
  borderColorContainer: '--border-color-container',
  borderColorInput:     '--border-color-input',
};

// ── CSS GENERATOR ─────────────────────────────────────────────────────────────
function normalizeHex(h) { return h.toLowerCase().trim(); }

function generateCSS(s) {
  const parts = [];

  // Google Font @import
  if (s.fontFamily) {
    const enc = s.fontFamily.replace(/ /g, '+');
    parts.push(`@import url('https://fonts.googleapis.com/css2?family=${enc}:wght@400;700&display=swap');`);
  }

  // :root CSS variable overrides (only where different from Smoobu defaults)
  const rootVars = [];
  for (const [key, cssVar] of Object.entries(CSS_VAR_MAP)) {
    if (normalizeHex(s[key]) !== normalizeHex(SMOOBU_DEFAULTS[key])) {
      rootVars.push(`  ${cssVar}: ${s[key]};`);
    }
  }
  // --font-color-headlines mirrors fontColorBlack (Smoobu headings use this separate variable)
  if (normalizeHex(s.fontColorBlack) !== normalizeHex(SMOOBU_DEFAULTS.fontColorBlack)) {
    rootVars.push(`  --font-color-headlines: ${s.fontColorBlack};`);
  }
  // --font-color-input mirrors fontColorDefault (Smoobu input text has no dedicated UI control;
  // it renders the same as secondary body text in practice, so we reuse the "Secondary text" color).
  if (normalizeHex(s.fontColorDefault) !== normalizeHex(SMOOBU_DEFAULTS.fontColorDefault)) {
    rootVars.push(`  --font-color-input: ${s.fontColorDefault};`);
  }
  // --font-color-input-icons mirrors fontColorIcons (calendar + select-dropdown indicators next to inputs)
  if (normalizeHex(s.fontColorIcons) !== normalizeHex(SMOOBU_DEFAULTS.fontColorIcons)) {
    rootVars.push(`  --font-color-input-icons: ${s.fontColorIcons};`);
  }
  if (s.borderRadiusBorders !== SMOOBU_DEFAULTS.borderRadiusBorders) {
    rootVars.push(`  --border-radius: ${s.borderRadiusBorders}px;`);
  }
  if (s.borderWidth !== SMOOBU_DEFAULTS.borderWidth) {
    rootVars.push(`  --border-width: ${s.borderWidth}px;`);
  }
  if (rootVars.length > 0) {
    parts.push(`:root {\n${rootVars.join('\n')}\n}`);
  }

  // Direct class overrides — Smoobu hardcodes colors on many elements rather than using variables,
  // so !important rules are needed to override them in production.
  //
  // Five disjoint text categories (UI labels → state keys → selectors):
  //   Headlines → fontColorBlack   → visual h1/h2/h3 + .color-headlines carriers
  //   Text      → fontColorDefault → everything that isn't a headline, label, or icon
  //                                  (prices, metadata, side labels, addon rows, back links,
  //                                  T&C, typed input text, AND input placeholders)
  //   Labels    → fontColorLabel   → form field labels + .grey-label section captions (Optional Extras)
  //   Icons     → fontColorIcons   → Font Awesome / SVG icons in the engine
  //   Error     → fontColorError   → validation errors (driven via --font-color-error only)

  // HEADLINES — narrowed to true visual headlines (h1/h2/h3 and .color-headlines carriers).
  // h2/h3 fallback catches bare <h2>/<h3> on the checkout page (e.g. "Haus am See", "Kontaktdaten")
  // which Smoobu ships without .color-headlines.
  if (normalizeHex(s.fontColorBlack) !== normalizeHex(SMOOBU_DEFAULTS.fontColorBlack)) {
    parts.push(
`.color-headlines,
h1.color-headlines, h2.color-headlines, h3.color-headlines,
h1.logo_title,
.apartmentInfoBox h3,
h2:not(.color-default):not(.color-label),
h3:not(.color-default):not(.color-label) {
  color: ${s.fontColorBlack} !important;
}`
    );
  }

  // TEXT — prices, metadata, external links, back links, typed input text, placeholders.
  // Audit 2026-04-16 revealed two bleed bugs that are fixed here:
  //   1. Error bleed — .color-default elements can also carry .color-error (e.g. validation icons/spans);
  //      adding :not(.color-error) stops Text from overriding Error.
  //   2. Addon/T&C bleed — addon selection labels and the T&C checkbox label both carry
  //      .label-default.color-label.color-black in real Smoobu DOM. They belong in Labels (they are
  //      literal <label> elements structurally). Adding :not(.label-default) to the .color-black
  //      chain keeps them in Labels while still pulling in the external link on search results
  //      (a.color-default.color-black, which carries no .label-default).
  if (normalizeHex(s.fontColorDefault) !== normalizeHex(SMOOBU_DEFAULTS.fontColorDefault)) {
    parts.push(
`.color-default:not(.color-label):not(.color-headlines):not(.color-icons):not(.color-input-icons):not(.color-error),
.color-black:not(.color-headlines):not(.color-error):not(.label-default),
.person-label,
.arrival-date-label, .departure-date-label,
.basePrice-row, .cleaningFee-row, .prepayment-row, .price-row,
.additionalGuestFee-row, .addon-row, .commission-row,
.longStayDiscount-row, .coupon-row,
.back-link {
  color: ${s.fontColorDefault} !important;
}
.form-control::placeholder,
input::placeholder,
textarea::placeholder {
  color: ${s.fontColorDefault} !important;
  opacity: 1 !important;
}`
    );
  }

  // LABELS — form field labels + .grey-label section captions (e.g. "Optional Extras").
  // Restricted via parent selectors so it doesn't leak onto T&C checkbox text or anything else
  // that happens to carry .color-label in the real DOM.
  if (normalizeHex(s.fontColorLabel) !== normalizeHex(SMOOBU_DEFAULTS.fontColorLabel)) {
    parts.push(
`.label-default,
.label-default.color-label,
.form-group > .color-label,
.form-group > label,
.form-group > .label-default,
.grey-label:not(.color-headlines) {
  color: ${s.fontColorLabel} !important;
}`
    );
  }

  // ICONS — Font Awesome / inline icons. Smoobu hardcodes icon colors on some elements so an
  // !important override is required. Scope covers both the property/checkout card and the inline
  // icons next to inputs.
  if (normalizeHex(s.fontColorIcons) !== normalizeHex(SMOOBU_DEFAULTS.fontColorIcons)) {
    parts.push(
`.color-icons,
.color-input-icons,
.apartmentInfoBox i,
.apartmentInfoBox .fa,
.apartmentInfoBox .fas,
.apartmentInfoBox .far,
.form-control + i,
.input-group i {
  color: ${s.fontColorIcons} !important;
}`
    );
  }

  // Button & input state overrides (always included — fixes Bootstrap blue bleed-through)
  parts.push(
`.btn {
  border-radius: ${s.borderRadiusButtons}px !important;
}
.btn-primary:active,
.btn-primary:focus,
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active {
  background-color: var(--button-color-primary) !important;
  border-color: var(--button-color-primary) !important;
  box-shadow: none !important;
}
.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:not(:disabled):not(.disabled):active {
  color: var(--button-color-primary) !important;
  background-color: var(--button-color-secondary) !important;
  border-color: var(--button-color-primary) !important;
  box-shadow: none !important;
}
.form-control:focus {
  border-color: var(--border-color-input) !important;
  box-shadow: none !important;
}
.apartment-image-container img {
  border-radius: ${s.borderRadiusImages}px !important;
}
.border-default {
  border-radius: var(--border-radius) !important;
}
.input-group .form-control.border-default {
  border-right: none !important;
  border-radius: var(--border-radius) 0 0 var(--border-radius) !important;
}
/* Date section / calendar icon wrapper: real Smoobu DOM has <span class="input-group-text">
   with NO .border-* class, so it falls back to Bootstrap's hardcoded #ced4da border. We force
   top/right/bottom to follow the Input fields picker, and zero out the left edge so the wrapper
   visually merges with the date input on its left. */
.input-group-text {
  border: var(--border-width) solid var(--border-color-input) !important;
  border-left: 0 !important;
  border-radius: 0 var(--border-radius) var(--border-radius) 0 !important;
}`
  );

  // Direct property overrides
  if (s.fontFamily) {
    parts.push(`body {\n  font-family: '${s.fontFamily}', sans-serif;\n}`);
  }
  if (s.bodyBackground) {
    parts.push(`body {\n  background: ${s.bodyBackground} !important;\n}`);
  }
  if (s.cardBackground) {
    // Unified "Cards & checkout" color — applies to every card-like surface in the booking engine:
    //   • property cards in search results (.apartmentInfoBox)
    //   • left price-breakdown box on checkout (.apartmentInfoBox)
    //   • right contact-form wrapper on checkout ([class*="col-md-"] > .border-box)
    // The structural selector catches the right form wrapper on real Smoobu DOM without needing
    // a dedicated class name. Verified live on booking.smoobu.com 2026-04-15.
    parts.push(
`.apartmentInfoBox,
.apartmentInfoBox > div,
[class*="col-md-"] > .border-box,
[class*="col-lg-"] > .border-box {
  background: ${s.cardBackground} !important;
}`
    );
  }
  if (s.searchBackground) {
    parts.push(`#check-availability-container {\n  background: ${s.searchBackground} !important;\n}`);
  }

  if (parts.length === 0) {
    return '/* No changes from Smoobu defaults */';
  }

  return `/* Generated by Smoobu Style Generator */\n\n${parts.join('\n\n')}`;
}

// ── PREVIEW IFRAME ────────────────────────────────────────────────────────────
const iframe = document.getElementById('preview-iframe');
let iframeReady = false;

iframe.addEventListener('load', () => {
  iframeReady = true;
  injectCSS();
  applyContextMode();
});

iframe.srcdoc = MOCKUP_HTML;

function injectCSS() {
  if (!iframeReady) return;
  try {
    const styleTag = iframe.contentDocument.getElementById('smoobu-custom');
    if (styleTag) styleTag.textContent = generateCSS(state);
  } catch (e) {
    console.warn('Preview injection failed:', e);
  }
}

function applyContextMode() {
  if (!iframeReady) return;
  try {
    const contextTag = iframe.contentDocument.getElementById('smoobu-context');
    if (contextTag) {
      contextTag.textContent = state.contextMode === 'embedded'
        ? `header#page-header { display: none !important; }`
        : '';
    }
  } catch (e) {
    console.warn('Context mode injection failed:', e);
  }
}

// ── UPDATE (called on every state change) ─────────────────────────────────────
function update() {
  injectCSS();
  applyContextMode();
  document.getElementById('css-output').textContent = generateCSS(state);
}

// ── COLOR INPUT BINDING ───────────────────────────────────────────────────────
function isValidHex(v) { return /^#[0-9a-fA-F]{6}$/.test(v); }

function bindColor(stateKey) {
  const picker = document.getElementById(stateKey);
  const hex    = document.getElementById(stateKey + 'Hex');
  const tBtn   = document.getElementById(stateKey + 'Transparent');
  if (!picker || !hex) return;

  function setTransparentState() {
    state[stateKey] = 'transparent';
    hex.value = 'transparent';
    hex.disabled = true;
    picker.disabled = true;
    if (tBtn) tBtn.classList.add('active');
    update();
  }

  function setColorState(color) {
    state[stateKey] = color;
    picker.value = color;
    hex.value = color;
    hex.disabled = false;
    picker.disabled = false;
    if (tBtn) tBtn.classList.remove('active');
    update();
  }

  // Initial render
  if (state[stateKey] === 'transparent') {
    hex.value = 'transparent';
    hex.disabled = true;
    picker.disabled = true;
    if (tBtn) tBtn.classList.add('active');
  } else {
    picker.value = state[stateKey] || '#ffffff';
    hex.value    = state[stateKey] || '#ffffff';
  }

  // Transparent toggle button
  if (tBtn) {
    tBtn.addEventListener('click', () => {
      if (state[stateKey] === 'transparent') {
        setColorState('#ffffff');
      } else {
        setTransparentState();
      }
    });
  }

  picker.addEventListener('input', () => {
    setColorState(picker.value);
  });

  hex.addEventListener('input', () => {
    const val = hex.value.trim();
    if (val.toLowerCase() === 'transparent') {
      setTransparentState();
      return;
    }
    const normalized = val.startsWith('#') ? val : '#' + val;
    if (isValidHex(normalized)) {
      setColorState(normalized);
    }
  });

  hex.addEventListener('blur', () => {
    if (state[stateKey] === 'transparent') return;
    if (!isValidHex(hex.value)) hex.value = state[stateKey];
  });
}

// ── SLIDER BINDING ────────────────────────────────────────────────────────────
function bindSlider(id, stateKey) {
  const slider  = document.getElementById(id);
  const display = document.getElementById(id + 'Value');
  if (!slider) return;

  slider.value = state[stateKey];
  if (display) display.textContent = state[stateKey] + 'px';

  slider.addEventListener('input', () => {
    state[stateKey] = parseInt(slider.value, 10);
    if (display) display.textContent = slider.value + 'px';
    update();
  });
}

// ── SYNC ALL UI CONTROLS TO STATE ─────────────────────────────────────────────
const COLOR_KEYS = [
  'buttonColorPrimary', 'buttonColorSecondary',
  'fontColorBlack', 'fontColorDefault', 'fontColorLabel',
  'fontColorIcons', 'fontColorError',
  'borderColorDefault', 'borderColorContainer', 'borderColorInput',
  'bodyBackground', 'cardBackground', 'searchBackground',
];

function syncAllControls() {
  COLOR_KEYS.forEach(key => {
    const picker = document.getElementById(key);
    const hex    = document.getElementById(key + 'Hex');
    const tBtn   = document.getElementById(key + 'Transparent');

    if (state[key] === 'transparent') {
      if (picker) { picker.disabled = true; }
      if (hex)    { hex.value = 'transparent'; hex.disabled = true; }
      if (tBtn)   { tBtn.classList.add('active'); }
    } else {
      if (picker) { picker.value = state[key] || '#ffffff'; picker.disabled = false; }
      if (hex)    { hex.value = state[key] || '#ffffff'; hex.disabled = false; }
      if (tBtn)   { tBtn.classList.remove('active'); }
    }
  });

  const brBorders = document.getElementById('borderRadiusBorders');
  const brImages  = document.getElementById('borderRadiusImages');
  const brButtons = document.getElementById('borderRadiusButtons');
  const bw        = document.getElementById('borderWidth');
  if (brBorders) brBorders.value = state.borderRadiusBorders;
  if (brImages)  brImages.value  = state.borderRadiusImages;
  if (brButtons) brButtons.value = state.borderRadiusButtons;
  if (bw)        bw.value        = state.borderWidth;

  const brBordersVal = document.getElementById('borderRadiusBordersValue');
  const brImagesVal  = document.getElementById('borderRadiusImagesValue');
  const brButtonsVal = document.getElementById('borderRadiusButtonsValue');
  const bwVal        = document.getElementById('borderWidthValue');
  if (brBordersVal) brBordersVal.textContent = state.borderRadiusBorders + 'px';
  if (brImagesVal)  brImagesVal.textContent  = state.borderRadiusImages  + 'px';
  if (brButtonsVal) brButtonsVal.textContent = state.borderRadiusButtons + 'px';
  if (bwVal)        bwVal.textContent        = state.borderWidth + 'px';

  const ff = document.getElementById('fontFamily');
  if (ff) ff.value = state.fontFamily;
}

// ── INIT ──────────────────────────────────────────────────────────────────────
function init() {
  // Color bindings
  COLOR_KEYS.forEach(bindColor);

  // Slider bindings
  bindSlider('borderRadiusBorders', 'borderRadiusBorders');
  bindSlider('borderRadiusImages',  'borderRadiusImages');
  bindSlider('borderRadiusButtons', 'borderRadiusButtons');
  bindSlider('borderWidth',         'borderWidth');

  // Preset chips
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const val    = parseInt(btn.dataset.value, 10);
      state[target] = val;

      const slider  = document.getElementById(target);
      const display = document.getElementById(target + 'Value');
      if (slider)  slider.value = val;
      if (display) display.textContent = val + 'px';
      update();
    });
  });

  // Font family
  const fontSelect = document.getElementById('fontFamily');
  fontSelect.value = state.fontFamily;
  fontSelect.addEventListener('change', () => {
    state.fontFamily = fontSelect.value;
    update();
  });

  // Template buttons
  document.querySelectorAll('.template-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tmpl = TEMPLATES[btn.dataset.template];
      if (!tmpl) return;
      Object.assign(state, tmpl);
      syncAllControls();
      document.querySelectorAll('.template-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      update();
    });
  });

  // Context mode toggle (Standalone / Embedded)
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.contextMode = btn.dataset.mode;
      document.getElementById('bodyBackgroundLabel').textContent =
        btn.dataset.mode === 'embedded' ? 'Container' : 'Page';
      applyContextMode();
    });
  });

  // Preview width toggle
  document.querySelectorAll('.width-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.width-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('previewWrapper').classList.toggle('mobile', btn.dataset.width === 'mobile');
    });
  });

  // Copy CSS button
  const copyBtn = document.getElementById('copy-btn');
  copyBtn.addEventListener('click', async () => {
    const css = generateCSS(state);
    try {
      await navigator.clipboard.writeText(css);
    } catch {
      const ta = Object.assign(document.createElement('textarea'), { value: css });
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy CSS';
      copyBtn.classList.remove('copied');
    }, 2000);
  });

  // Initial render
  update();
}

document.addEventListener('DOMContentLoaded', init);
