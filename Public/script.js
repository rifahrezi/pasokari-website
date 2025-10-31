document.addEventListener('DOMContentLoaded', () => {

    // ===== DATA PRODUK =====
    const categoryData = {
        "Sayuran": {
            id: { products: ["BAYAM HIJAU","BEETROOT","BROKOLI","BUNCIS","BUNCIS BABY","DAUN KEMANGI","DAUN PANDAN","DAUN PISANG","DAUN SELEDRI","DAUN SINGKONG","EDAMAME","HORENSO","JAGUNG ACAR","JAGUNG MANIS KULIT","JAGUNG MANIS KUPAS","JAMUR CHAMPIGNON","JAMUR ENOKI","JAMUR KUPING BASAH","JAMUR SHIMEJI COKELAT","JAMUR TIRAM","JAMUR LIMAU","KACANG PANJANG","KACANG TANAH","KAILAN BABY","KANGKUNG","KEMBANG KOL","KENTANG BABY","KENTANG DIENG","KOL PUTIH","KOL UNGU","KUCAI","LABU SIAM","LABU SIAM ACAR","LOBAK PUTIH","OYONG","PAKCOY (REG/ORGANIC)","PAPRIKA (MERAH/HIJAU)","PARE","PARSLEY","SAWI HIJAU","SAWI PUTIH","SELADA KERITING","SELADA ROMAINE HIJAU","SELEDRI STICK","TAUGE","TERONG UNGU","TIMUN","TIMUN JEPANG","TOMAT MERAH","UBI CILEMBU","UBI MERAH","UBI UNGU","WORTEL BABY","WORTEL BRASTAGI","WORTEL ORGANIK","ZUCCHINI"] },
            en: { products: ["GREEN SPINACH","BEETROOT","BROCCOLI","GREEN BEANS","BABY GREEN BEANS","BASIL LEAVES","PANDAN LEAVES","BANANA LEAVES","CELERY LEAVES","CASSAVA LEAVES","EDAMAME","HORENSO (Japanese Spinach)","BABY CORN","SWEET CORN (with husk)","SWEET CORN (peeled)","CHAMPIGNON MUSHROOM","ENOKI MUSHROOM","WOOD EAR MUSHROOM (wet)","BROWN SHIMEJI Mushroom","OYSTER MUSHROOM","LIME MUSHROOM? (Verify name)","LONG BEANS","PEANUTS","BABY KALE","WATER SPINACH","CAULIFLOWER","BABY POTATOES","DIENG POTATOES","WHITE CABBAGE","RED CABBAGE","CHIVES","CHAYOTE","PICKLED CHAYOTE","DAIKON RADISH","LUFFA","PAK CHOY (REG/ORGANIC)","BELL PEPPER (RED/GREEN)","BITTER MELON","PARSLEY","MUSTARD GREENS","NAPA CABBAGE","CURLY LETTUCE","GREEN ROMAINE LETTUCE","CELERY STICK","BEAN SPROUTS","PURPLE EGGPLANT","CUCUMBER","JAPANESE CUCUMBER","RED TOMATO","CILEMBU SWEET POTATO","RED SWEET POTATO","PURPLE SWEET POTATO","BABY CARROT","BRASTAGI CARROT","ORGANIC CARROT","ZUCCHINI"] }
        },
        "Herbs & Spices": {
            id: { products: ["BAWANG BOMBAY","BAWANG MERAH","BAWANG PUTIH (REG/KATING)","BIJI PALA","CABAI HIJAU BESAR","CABAI HIJAU KERITING","CABAI MERAH BESAR","CABAI MERAH KERITING","CABAI RAWIT HIJAU","CABAI RAWIT MERAH","CENGKEH","DAUN BASIL","DAUN JERUK (REG/ORGANIK)","DAUN SALAM","JAHE GAJAH","JAHE PUTIH","JINTEN","KAPULAGA","KAYU MANIS","KENCUR","KUNYIT","LADA HITAM UTUH","LADA PUTIH UTUH","LENGKUAS","RASEDA ASAM JAWA","SEREH"] },
            en: { products: ["ONION","SHALLOTS","GARLIC (REG/KATING)","NUTMEG","LARGE GREEN CHILI","CURLY GREEN CHILI","LARGE RED CHILI","CURLY RED CHILI","GREEN BIRD'S EYE CHILI","RED BIRD'S EYE CHILI","CLOVES","BASIL LEAVES","LIME LEAVES (REG/ORGANIC)","BAY LEAVES","ELEPHANT GINGER","WHITE GINGER","CUMIN","CARDAMOM","CINNAMON","GALANGAL (Kaempferia galanga)","TURMERIC","WHOLE BLACK PEPPER","WHOLE WHITE PEPPER","GALANGAL (Alpinia galanga)","TAMARIND PASTE","LEMONGRASS"] }
        },
        "Buah-buahan": {
            id: { products: ["ALPUKAT MENTEGA","ANGGUR","APEL","BLEWAH","BUAH NAGA","JERUK","JAMBU","NANAS","MANGGA","MELON","PEPAYA","PISANG","SEMANGKA","STRAWBERRY"] },
            en: { products: ["AVOCADO","GRAPES","APPLE","CANTALOUPE","DRAGON FRUIT","ORANGE","GUAVA","PINEAPPLE","MANGO","MELON","PAPAYA","BANANA","WATERMELON","STRAWBERRY"] }
        },
        "Bahan Pangan Lain": {
            id: { products: ["EMPING MELINJO","KACANG HIJAU","KELAPA MUDA","KETAN HITAM","TAHU","TELUR","TEMPE"] },
            en: { products: ["MELINJO CRACKERS","MUNG BEANS","YOUNG COCONUT","BLACK GLUTINOUS RICE","TOFU","EGGS","TEMPEH"] }
        },
        "Frozen Food": {
            id: { products: ["STRAIGHT CUT 2.5 KG","SHOESTRING 2.5 KG","CRINCLE CUT 2.5 KG","SOSIS COCKTAIL AKAI 66 PCS","BAKSO BEEF AKAI 50 PCS"] }, // Pakai titik
            en: { products: ["STRAIGHT CUT FRIES 2.5 KG","SHOESTRING FRIES 2.5 KG","CRINKLE CUT FRIES 2.5 KG","AKAI COCKTAIL SAUSAGES 66 PCS","AKAI BEEF BALLS 50 PCS"] } // Pakai titik
        }
    };

    // ===== OBJEK TRANSLATIONS (DENGAN TAMBAHAN) =====
    const translations = {
        'id': {
            navHome: 'Beranda', navProducts: 'Produk', navAbout: 'Tentang', navContact: 'Kontak',
            heroTitle: 'Solusi Terpercaya Produk Pangan Berkualitas',
            heroSubtitle: 'Menjamin kesegaran dan kualitas premium melalui kemitraan agrikultur lokal terpilih.',
            heroCTA: 'Lihat Kategori',
            productsTitle: 'Kategori Produk',
            aboutTitle: 'PASOKARI',
            aboutText1: 'Mitra rantai pasok tepercaya untuk bahan pangan segar premium, PASOKARI meyakini bahwa kualitas terbaik hidangan berakar pada bahan baku unggulan.',
            aboutText2: 'Melalui aliansi agrikultur dengan produsen lokal yang berkomitmen pada praktik berkelanjutan, PASOKARI menawarkan lebih dari pasokan. Kami adalah solusi rantai pasok profesional yang dirancang untuk secara langsung mendukung dan mengoptimalkan efisiensi operasional dapur.',
            contactTitle: 'Hubungi Kami',
            contactSubtitle: 'Siap untuk berdiskusi tentang kebutuhan Anda? Hubungi kami melalui platform di bawah ini.',
            contactWhatsApp: 'Hubungi via WhatsApp',
            contactEmail: 'Kirim Email',
            footerText: 'Kualitas Terpercaya, Diantar Dengan Penuh Kepedulian.',
            contactInfoTitle: 'Informasi Kontak',
            contactAddressTitle: 'Alamat:',
            contactAddressText: 'Citra Sentul Raya,<br>Bogor, Jawa Barat, 16810',
            contactPhoneTitle: 'Telepon:',
            contactEmailTitle: 'Email:',
            contactSocialTitle: 'Media Sosial:',
            contactFormTitleAlt: 'Butuh Bantuan? Hubungi Kami',
            contactFormDescAlt: 'Isi formulir di bawah ini dan tim kami akan segera menghubungi anda.',
            formNamePlaceholder: 'Nama Anda',
            formPhonePlaceholder: 'Nomor Telepon Anda',
            formEmailPlaceholder: 'Email Anda',
            formMessagePlaceholder: 'Pesan Anda',
            formSend: 'Kirim Pesan',
            modalProductsTitle: 'Produk Tersedia:',
            modalCTA: 'Minta Penawaran untuk Kategori Ini',
            productDetailCTA: 'Minta Penawaran Produk Ini',
            categoryVegetables: 'Sayuran',
            categoryHerbs: 'Rempah & Bumbu',
            categoryFruits: 'Buah-buahan',
            categoryStaples: 'Bahan Pangan Lain',
            categoryFrozen: 'Makanan Beku',
            modalSayuranDesc: 'Pilihan sayuran terbaik untuk hidangan sehat Anda, dikurasi dari sumber lokal terpercaya.',
            modalHerbsDesc: 'Ragam bumbu segar yang menambah aroma dan cita rasa alami, dipilih untuk meningkatkan kualitas setiap hidangan.',
            modalBuahDesc: 'Buah segar penuh vitamin untuk setiap momen, dipetik pada tingkat kematangan optimal untuk rasa terbaik.',
            modalPanganDesc: 'Kacang, telur, tahu, tempe, dan bahan pokok berkualitas lainnya untuk melengkapi kebutuhan dapur Anda.',
            modalFrozenDesc: 'Solusi cepat untuk hidangan praktis dan lezat, dibuat dari bahan berkualitas dan diproses secara higienis.',
            formInquiryDefaultProduct: 'Halo, saya tertarik untuk meminta penawaran produk berikut: ',
            formInquiryDefaultCategory: 'Halo, saya tertarik untuk meminta penawaran untuk kategori produk berikut: ',
            formErrorRequired: 'Harap isi semua bidang yang wajib diisi.',
            formErrorEmail: 'Harap masukkan alamat email yang valid.',
            formSending: 'Mengirim...',
            formSuccess: 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.',
            formErrorServer: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.',
            // KUNCI BARU
            modalSearchPlaceholder: 'Cari produk di kategori ini...'
        },
        'en': {
            navHome: 'Home', navProducts: 'Products', navAbout: 'About', navContact: 'Contact',
            heroTitle: 'Trusted Solution for Quality Food Products',
            heroSubtitle: 'Ensuring premium freshness and quality through chosen local agricultural partnerships.',
            heroCTA: 'View Categories',
            productsTitle: 'Product Categories',
            aboutTitle: 'PASOKARI',
            aboutText1: 'PASOKARI, the trusted supply chain partner for premium fresh food ingredients, asserts that the finest culinary outcomes are rooted in superior sourcing.',
            aboutText2: 'By leveraging sustainable agricultural alliances with local producers, we transcend conventional procurement. PASOKARI provides a professional supply chain solution specifically designed to directly enhance and streamline critical daily kitchen operations.',
            contactTitle: 'Contact Us',
            contactSubtitle: 'Ready to discuss your needs? Reach out to us through the platforms below.',
            contactWhatsApp: 'Contact via WhatsApp',
            contactEmail: 'Send Email',
            footerText: 'Trusted Quality, Delivered With Care.',
            contactInfoTitle: 'Contact Information',
            contactAddressTitle: 'Address:',
            contactAddressText: 'Citra Sentul Raya,<br>Bogor, West Java, 16810',
            contactPhoneTitle: 'Phone:',
            contactEmailTitle: 'Email:',
            contactSocialTitle: 'Social Media:',
            contactFormTitleAlt: 'Need Help? Contact Us',
            contactFormDescAlt: 'Fill out the form below and our team will contact you shortly.',
            formNamePlaceholder: 'Your Name',
            formPhonePlaceholder: 'Your Phone Number',
            formEmailPlaceholder: 'Your Email',
            formMessagePlaceholder: 'Your Message',
            formSend: 'Send Message',
            modalProductsTitle: 'Available Products:',
            modalCTA: 'Request Quote for This Category',
            productDetailCTA: 'Request Quote for This Product',
            categoryVegetables: 'Vegetables',
            categoryHerbs: 'Herbs & Spices',
            categoryFruits: 'Fruits',
            categoryStaples: 'Other Staples',
            categoryFrozen: 'Frozen Food',
            modalSayuranDesc: 'The best selection of vegetables for your healthy dishes, curated from trusted local sources.',
            modalHerbsDesc: 'A variety of fresh seasonings adding natural aroma and flavor, selected to enhance the quality of every dish.',
            modalBuahDesc: 'Fresh fruits full of vitamins for every moment, picked at optimal ripeness for the best flavor.',
            modalPanganDesc: 'Quality nuts, eggs, tofu, tempeh, and other staple foods to complete your kitchen needs.',
            modalFrozenDesc: 'A quick solution for practical and delicious meals, made from quality ingredients and processed hygienically.',
            formInquiryDefaultProduct: 'Hello, I am interested in requesting a quote for the following product: ',
            formInquiryDefaultCategory: 'Hello, I am interested in requesting a quote for the following product category: ',
            formErrorRequired: 'Please fill out all required fields.',
            formErrorEmail: 'Please enter a valid email address.',
            formSending: 'Sending...',
            formSuccess: 'Thank you! Your message has been sent. We will contact you shortly.',
            formErrorServer: 'Sorry, an error occurred. Please try again later.',
            // KUNCI BARU
            modalSearchPlaceholder: 'Search products in this category...'
        }
    };

    // ===== VARIABEL GLOBAL =====
    let currentLang = document.documentElement.lang || 'id';

    // ===== FUNGSI TRANSLATE =====
    function translatePage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                const translationText = translations[lang][key];

                if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && key.endsWith('Placeholder')) {
                    el.placeholder = translationText;
                }
                else if (key === 'contactAddressText') {
                    el.innerHTML = translationText;
                }
                else if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                    el.textContent = translationText;
                }

            } else { 
                const fallbackLang = lang === 'en' ? 'id' : 'en';
                if (translations[fallbackLang] && translations[fallbackLang][key]) {
                    const fallbackText = translations[fallbackLang][key];
                    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && key.endsWith('Placeholder')) {
                       el.placeholder = fallbackText;
                    } else if (key === 'contactAddressText') {
                       el.innerHTML = fallbackText;
                    } else if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                       el.textContent = fallbackText;
                    }
                } else {
                   if (!key.endsWith('Placeholder')) {
                       console.warn(`Translation key "${key}" not found in any language.`);
                   } else {
                       if (el.placeholder) el.placeholder = '';
                   }
                }
            }
        });
        document.documentElement.lang = lang;
        const currentLangText = document.getElementById('currentLangText');
        if(currentLangText) currentLangText.textContent = lang.toUpperCase();
    }


    // ===== LOGIKA UMUM =====
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
    }

    // Language Dropdown
    const langBtnTrigger = document.getElementById('langBtnTrigger');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    if (langBtnTrigger && langDropdown && langOptions.length > 0) {
        langBtnTrigger.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('active'); });
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = option.getAttribute('data-lang');
                if (selectedLang === currentLang) { langDropdown.classList.remove('active'); return; }
                currentLang = selectedLang;
                translatePage(currentLang);
                langDropdown.classList.remove('active');
            });
        });
        document.addEventListener('click', (e) => {
             if (langDropdown && langDropdown.classList.contains('active') && !langBtnTrigger.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
         });
    }

    // Responsive Navbar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.querySelector('.nav-mobile');
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', () => { navMobile.classList.toggle('active'); menuToggle.classList.toggle('open'); });
        document.querySelectorAll('.nav-mobile a').forEach(link => {
            link.addEventListener('click', () => { navMobile.classList.remove('active'); menuToggle.classList.remove('open'); });
        });
    }

    // Panggil terjemahan awal saat halaman dimuat
    translatePage(currentLang);


    // ===== LOGIKA HOMEPAGE (index.html) =====
    const categoryModal = document.getElementById('categoryModal');
    const productDetailModal = document.getElementById('productDetailModal');

    // ===== BARU: Menutup Modal dengan Tombol Escape =====
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (categoryModal && categoryModal.style.display === 'flex') {
                categoryModal.style.display = 'none';
            }
            if (productDetailModal && productDetailModal.style.display === 'flex') {
                productDetailModal.style.display = 'none';
            }
        }
    });

    // Hanya jalankan logika modal jika elemen modal ditemukan
    if (categoryModal && productDetailModal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalProductList = document.getElementById('modalProductList');
        const closeModal = document.getElementById('closeModal');
        const modalCTA = document.getElementById('categoryModalCTA');
        // MODIFIKASI: Ambil elemen pencarian
        const modalSearchInput = document.getElementById('modalSearchInput');

        const productDetailClose = document.getElementById('productDetailClose');
        const productDetailImage = document.getElementById('productDetailImage');
        const productDetailTitle = document.getElementById('productDetailTitle');
        const productDetailCTA = document.getElementById('productDetailModalCTA');

        // Event listener untuk kartu kategori
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                // MODIFIKASI: Reset bilah pencarian saat modal dibuka
                if (modalSearchInput) modalSearchInput.value = '';

                const category = card.dataset.category; 
                const categoryProductsData = categoryData[category];
                const currentTranslationData = translations[currentLang];

                if (categoryProductsData && currentTranslationData) {

                    let titleKey;
                    if (category === 'Sayuran') titleKey = 'categoryVegetables';
                    else if (category === 'Herbs & Spices') titleKey = 'categoryHerbs';
                    else if (category === 'Buah-buahan') titleKey = 'categoryFruits';
                    else if (category === 'Bahan Pangan Lain') titleKey = 'categoryStaples';
                    else if (category === 'Frozen Food') titleKey = 'categoryFrozen';

                    if (titleKey) {
                        modalTitle.setAttribute('data-lang-key', titleKey);
                        if (currentTranslationData[titleKey]) {
                           modalTitle.textContent = currentTranslationData[titleKey];
                        } else {
                           const fallbackLang = currentLang === 'en' ? 'id' : 'en';
                           modalTitle.textContent = translations[fallbackLang]?.[titleKey] || category;
                        }
                    } else {
                        modalTitle.removeAttribute('data-lang-key');
                        modalTitle.textContent = category;
                    }

                    let descKey;
                    if (category === 'Sayuran') descKey = 'modalSayuranDesc';
                    else if (category === 'Herbs & Spices') descKey = 'modalHerbsDesc';
                    else if (category === 'Buah-buahan') descKey = 'modalBuahDesc';
                    else if (category === 'Bahan Pangan Lain') descKey = 'modalPanganDesc';
                    else if (category === 'Frozen Food') descKey = 'modalFrozenDesc';

                    if (descKey && currentTranslationData[descKey]) {
                        modalDesc.textContent = currentTranslationData[descKey];
                    } else {
                        modalDesc.textContent = "Deskripsi tidak tersedia.";
                        console.warn(`Modal description key "${descKey}" not found for language "${currentLang}".`);
                    }

                    modalProductList.innerHTML = ''; 

                    const productListForFilenames = categoryProductsData.id.products;
                    const productListForDisplay = categoryProductsData[currentLang]?.products || productListForFilenames;

                    if (productListForFilenames.length !== productListForDisplay.length) {
                        console.warn("Product list length mismatch for category:", category, " - using ID names for display.");
                    }

                    productListForFilenames.forEach((productNameID, index) => {
                        const item = document.createElement('div');
                        item.classList.add('modal-product-item');

                        const folderName = category.toLowerCase().replace(/[\(\)\/& -]/g, '_').replace(/_+/g, '_');
                        const cleanProductNameID = productNameID.toLowerCase().replace(/[\(\)\/]/g, '').replace(/ /g, '_').replace(/,/g,'.');
                        const imgName = `${cleanProductNameID}.jpg`;
                        const imgPath = `assets/katalog/${folderName}/${imgName}`;
                        const displayProductName = productListForDisplay[index] || productNameID;

                        item.dataset.imgSrc = imgPath;
                        item.dataset.productName = displayProductName;

                        // MODIFIKASI: Menambahkan loading="lazy" pada gambar
                        item.innerHTML = `
                            <img src="${imgPath}" alt="${displayProductName}" loading="lazy" onerror="this.style.backgroundColor='#eee'; this.removeAttribute('src'); this.alt='Image not found';">
                            <p>${displayProductName}</p>
                        `;

                        item.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const detailImgSrc = item.dataset.imgSrc;
                            const detailProductNameDisplay = item.dataset.productName;
                            productDetailImage.src = detailImgSrc;
                            productDetailImage.alt = detailProductNameDisplay;
                            productDetailTitle.textContent = detailProductNameDisplay;
                            productDetailModal.style.display = 'flex';
                        });

                        modalProductList.appendChild(item);
                    });

                    categoryModal.style.display = 'flex';
                } else {
                    console.error("Product data or translation data not found for category:", category, currentLang);
                }
            });
        });

        // Menutup modal kategori
        closeModal.addEventListener('click', () => {
            categoryModal.style.display = 'none';
            if (modalSearchInput) modalSearchInput.value = ''; // Reset pencarian
        });
        window.addEventListener('click', e => {
            if (e.target === categoryModal && productDetailModal.style.display !== 'flex') {
                categoryModal.style.display = 'none';
                if (modalSearchInput) modalSearchInput.value = ''; // Reset pencarian
            }
        });

        // Menutup modal detail produk
        productDetailClose.addEventListener('click', () => { productDetailModal.style.display = 'none'; });
        window.addEventListener('click', e => {
            if (e.target === productDetailModal) {
                productDetailModal.style.display = 'none';
            }
        });

        // ===== BARU: Logika Pencarian Modal =====
        if (modalSearchInput && modalProductList) {
            modalSearchInput.addEventListener('keyup', () => {
                const searchTerm = modalSearchInput.value.toLowerCase();
                const items = modalProductList.querySelectorAll('.modal-product-item');
                
                items.forEach(item => {
                    const productName = item.querySelector('p').textContent.toLowerCase();
                    // Cek apakah nama produk mengandung istilah pencarian
                    if (productName.includes(searchTerm)) {
                        item.classList.remove('hidden'); // Tampilkan jika cocok
                    } else {
                        item.classList.add('hidden'); // Sembunyikan jika tidak cocok
                    }
                });
            });
        }

        // Handler Smooth scroll DAN PRE-FILL FORM
        function smoothScrollToContact(prefillMessage = "") {
            const targetSection = document.querySelector('#contact');
            const messageTextarea = document.getElementById('message');

            if (targetSection) {
                if (prefillMessage && messageTextarea) {
                    messageTextarea.value = prefillMessage;
                    messageTextarea.focus();
                }
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                categoryModal.style.display = 'none';
                productDetailModal.style.display = 'none';
            }
        }

        if (modalCTA) {
            modalCTA.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryName = modalTitle.textContent;
                const prefillKey = 'formInquiryDefaultCategory';
                const prefillMessage = (translations[currentLang]?.[prefillKey] || "Saya tertarik dengan kategori: ") + categoryName;
                smoothScrollToContact(prefillMessage);
            });
        }
        
        if (productDetailCTA) {
            productDetailCTA.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = productDetailTitle.textContent;
                const prefillKey = 'formInquiryDefaultProduct';
                const prefillMessage = (translations[currentLang]?.[prefillKey] || "Saya tertarik dengan produk: ")
 + productName;
                smoothScrollToContact(prefillMessage);
            });
        }

    } // Akhir if (categoryModal && productDetailModal)

    // Smooth scroll navigasi utama & LOGIKA SCROLLSPY
    if (document.getElementById('home') && document.getElementById('products')) {
         const navLinks = document.querySelectorAll('.nav-center a, .nav-mobile a, .logo-container, .hero-content .cta-button');
         const sections = document.querySelectorAll('section[id]');
         const navLinksDesktop = document.querySelectorAll('.nav-center a[data-section]');
         const navLinksMobile = document.querySelectorAll('.nav-mobile a[data-section]');

         function handleSmoothScroll(e) {
             const href = this.getAttribute('href');
             if (href.startsWith('#') && href.length > 1) {
                 e.preventDefault();
                 const targetId = href.substring(1);
                 const targetElement = document.getElementById(targetId);
                 if (targetElement) {
                     const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                     const elementPosition = targetElement.getBoundingClientRect().top;
                     const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                     window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                     if(navMobile && navMobile.classList.contains('active')) {
                         navMobile.classList.remove('active');
                         if (menuToggle) menuToggle.classList.remove('open');
                     }
                 }
             } else if (href === '#home' || (this.classList.contains('logo-container') && href === '#home')) {
                 e.preventDefault();
                 window.scrollTo({ top: 0, behavior: 'smooth' });
                 if(navMobile && navMobile.classList.contains('active')) {
                     navMobile.classList.remove('active');
                     if (menuToggle) menuToggle.classList.remove('open');
                 }
             }
         }

         navLinks.forEach(link => {
             link.addEventListener('click', handleSmoothScroll);
         });

         function activateNavOnScroll() {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                if (sectionTop <= (navbarHeight + 1) && (sectionTop + sectionHeight) > (navbarHeight + 1)) {
                    currentSectionId = section.getAttribute('id');
                }
            });
            if (window.pageYOffset < 200) {
                 currentSectionId = 'home';
            }
            navLinksDesktop.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === currentSectionId) {
                    link.classList.add('active');
                }
            });
            navLinksMobile.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === currentSectionId) {
                    link.classList.add('active');
                }
            });
         }
         
         window.addEventListener('scroll', activateNavOnScroll);
         activateNavOnScroll();
    }

    // AJAX Form Submission
    const inquiryForm = document.getElementById('inquiryForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = inquiryForm ? inquiryForm.querySelector('.form-submit-btn') : null;

    if (inquiryForm && formStatus && submitBtn) {
        
        inquiryForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            const formData = new FormData(inquiryForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            const message = formData.get('message').trim();

            formStatus.textContent = '';
            formStatus.className = ''; 

            if (!name || !email || !phone || !message) {
                formStatus.textContent = translations[currentLang].formErrorRequired;
                formStatus.classList.add('error');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = translations[currentLang].formErrorEmail;
                formStatus.classList.add('error');
                return;
            }

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = translations[currentLang].formSending;
                const response = await fetch(inquiryForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    formStatus.textContent = translations[currentLang].formSuccess;
                    formStatus.classList.add('success');
                    inquiryForm.reset();
                } else {
                    throw new Error('Server error');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                formStatus.textContent = translations[currentLang].formErrorServer;
                formStatus.classList.add('error');
            } finally {
                submitBtn.disabled = false;
                const sendKey = submitBtn.getAttribute('data-lang-key');
                submitBtn.textContent = translations[currentLang][sendKey] || 'Send Message';
            }
        });
    }

});