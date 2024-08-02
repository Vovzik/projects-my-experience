document.addEventListener("DOMContentLoaded", ready);

function ready() {
    (function ($) {
        function burger() {
            const js__headerBurgerClick = document.querySelectorAll('.js__header-burgerclick')
            const js__headerBurger = document.querySelectorAll('.js__header-burger');
            const headerNavOpenJs = document.querySelector('.header-nav-open-js');
            const headerContentJs = document.querySelector('.header-content-js');
            const body = document.querySelector('body');
            const headerNav = document.querySelector('.header__nav');
            const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px'; //Получили ширину scroll
            const timeout = 400;


            for (let i = 0; i < js__headerBurgerClick.length; i++) {
                js__headerBurgerClick[i].addEventListener('click', () => {
                    for (let i = 0; i < 3; i++) {
                        js__headerBurger[i].classList.toggle('open');
                        headerNavOpenJs.classList.toggle('open');
                        body.classList.toggle('menu-lock');
                        headerNav.classList.toggle('open');
                        bodylock();

                        if (!js__headerBurger[i].classList.contains('open')) {
                            bodyUnlock();
                        }
                    }
                });

            }

            function bodylock() {
                body.style.paddingRight = lockPaddingValue;
                headerContentJs.style.paddingRight = lockPaddingValue;
                body.classList.add('menu-lock')
            };


            function bodyUnlock() {
                setTimeout(function () {
                    body.style.paddingRight = '0px';
                    headerContentJs.style.paddingRight = '0px';
                    body.classList.remove('menu-lock');
                }, timeout)
            };
        }

        burger();

        function runningLane() {
            const body = document.querySelector('body');
            const speed = body.clientWidth <= 480 ? 30 : 20;

            $('.ticker-marquee').marquee({
                duration: 25000,
                speed: speed,
                startVisible: true,
                duplicated: true,
                pauseOnHover: false,
                delayBeforeStart: 0,
                direction: 'left',
            });

            $('.ticker-marquee2').marquee({
                duration: 25000,
                speed: speed,
                startVisible: true,
                duplicated: true,
                pauseOnHover: false,
                delayBeforeStart: 0,
                direction: 'right',
            });


        }

        runningLane();

        function maskPhone() {
            const element = document.querySelectorAll('.phone');
            const maskOptions = {
                mask: '+7 (000) 000-00-00',
                lazy: false
            }

            for (let i = 0; i < element.length; i++) {
                const mask = new IMask(element[i], maskOptions);
            }
        }

        maskPhone()

        function sendForm() {
            const wpcf7Elm = document.querySelectorAll('.wpcf7');
            const popupFormSend = document.querySelector('.popup-form-send');
            for (let i = 0; i < wpcf7Elm.length; i++) {
                if (wpcf7Elm[i]) {
                    wpcf7Elm[i].addEventListener('wpcf7mailsent', function (event) {
                        popupFormSend.classList.add('open');
                        setTimeout(() => {
                            popupFormSend.classList.remove('open');
                        }, 2000)
                    }, false);
                }
            }
        }

        sendForm()

        function accardion() {
            const element = document.querySelectorAll('.answering-questions__question');
            const content = document.querySelectorAll('.answering-questions__answer');


            for (let i = 0; i < element.length; i++) {
                if (element[i]) {
                    element[i].addEventListener('click', () => {
                        element[i].classList.toggle('active');
                        content[i].classList.toggle('open');
                    })
                }
            }

        }

        accardion();

        function sliderNews() {
            new Swiper('.news__slider', {
                // Optional parameters
                slidesPerView: 2.6,
                spaceBetween: 10,
                loop: false,
                pagination: {
                    el: '.news__pagination',
                    clickable: true
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    992: {
                        slidesPerView: 2.6,
                    },
                }

            });
        }

        sliderNews()

        function polosaContentHeight() {
            const body = document.querySelector('body');
            const polosa = document.querySelector('.polosa-body');
            let height = body.offsetHeight;
            polosa.style.height = `${height}px`;
        }

        polosaContentHeight();

        function progressBar () {
            // Узнаем на сколько страница прокручена
            let scroll = document.body.scrollTop || document.documentElement.scrollTop;
            // Узнаем высоту всей страницы
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            // Получаем в % на сколько прокручена страница
            let scrolled = scroll / height * 100;




            // Подставляем % прокрутки в ширину нашей линии
            document.querySelector('.progress-bar__polosa').style.width = scrolled + '%';
        }

        window.addEventListener('scroll', progressBar);

        function customCursor () {
            var cursor = {
                delay: 8,
                _x: 0,
                _y: 0,
                endX: (window.innerWidth / 2),
                endY: (window.innerHeight / 2),
                cursorVisible: true,
                cursorEnlarged: false,
                $dot: document.querySelector('.cursor-dot'),
                $outline: document.querySelector('.cursor-dot-outline'),

                init: function () {
                    this.dotSize = this.$dot.offsetWidth;
                    this.outlineSize = this.$outline.offsetWidth;

                    this.setupEventListeners();
                    this.animateDotOutline();
                },

                setupEventListeners: function () {
                    var self = this;

                    document.querySelectorAll('a').forEach(function (el) {
                        el.addEventListener('mouseover', function () {
                            self.cursorEnlarged = true;
                            self.toggleCursorSize();
                        });
                        el.addEventListener('mouseout', function () {
                            self.cursorEnlarged = false;
                            self.toggleCursorSize();
                        });
                    });

                    document.addEventListener('mousedown', function () {
                        self.cursorEnlarged = true;
                        self.toggleCursorSize();
                    });
                    document.addEventListener('mouseup', function () {
                        self.cursorEnlarged = false;
                        self.toggleCursorSize();
                    });


                    document.addEventListener('mousemove', function (e) {
                        self.cursorVisible = true;
                        self.toggleCursorVisibility();

                        self.endX = e.clientX;
                        self.endY = e.clientY;
                        self.$dot.style.top = self.endY + 'px';
                        self.$dot.style.left = self.endX + 'px';
                    });

                    document.addEventListener('mouseenter', function (e) {
                        self.cursorVisible = true;
                        self.toggleCursorVisibility();
                        self.$dot.style.opacity = 1;
                        self.$outline.style.opacity = 1;
                    });

                    document.addEventListener('mouseleave', function (e) {
                        self.cursorVisible = true;
                        self.toggleCursorVisibility();
                        self.$dot.style.opacity = 0;
                        self.$outline.style.opacity = 0;
                    });
                },

                animateDotOutline: function () {
                    var self = this;

                    self._x += (self.endX - self._x) / self.delay;
                    self._y += (self.endY - self._y) / self.delay;
                    self.$outline.style.top = self._y + 'px';
                    self.$outline.style.left = self._x + 'px';

                    requestAnimationFrame(this.animateDotOutline.bind(self));
                },

                toggleCursorSize: function () {
                    var self = this;

                    if (self.cursorEnlarged) {
                        self.$dot.style.transform = 'translate(-50%, -50%) scale(4)';
                        self.$outline.style.transform = 'translate(-50%, -50%) scale(0)';
                    } else {
                        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                },

                toggleCursorVisibility: function () {
                    var self = this;

                    if (self.cursorVisible) {
                        self.$dot.style.opacity = 1;
                        self.$outline.style.opacity = 1;
                    } else {
                        self.$dot.style.opacity = 0;
                        self.$outline.style.opacity = 0;
                    }
                }
            }

            cursor.init();
        }

        customCursor();

        function themeLightDark () {
             const switchElement = document.querySelector('.header__relay');
             const logoDark = document.querySelector('.header__logo-dark');
             const logoLight = document.querySelector('.header__logo-light');
             const body = document.querySelector('body');


             switchElement.addEventListener('click', () => {
                 switchElement.classList.toggle('active');
                 logoDark.classList.toggle('active');
                 logoLight.classList.toggle('active');

                   if (switchElement.innerText === 'Dark') {
                       switchElement.innerText = 'Light';
                   } else {
                       switchElement.innerText = 'Dark';
                   }

                 body.classList.toggle('theme-light');
             });
        }

        themeLightDark();

    })(jQuery);
}




