<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>

<div class="wrapper">
    <header class="header">
        <div class="header__content header-content-js">
            <div class="container-wrapper">
                <div class="header__inner">
                    <a class="header__logo" href="<?php echo is_front_page() ? '#' : '/' ?>">
                        <img class="header__logo-img header__logo-dark"
                             src="<?php bloginfo('template_url'); ?>/assets/img/header/logo-dark.svg" alt="Logo">
                        <img class="header__logo-img header__logo-light"
                             src="<?php bloginfo('template_url'); ?>/assets/img/header/logo.svg" alt="Logo">
                    </a>
                    <div class="header__relay">
                        Dark
                    </div>
                    <nav class="header__nav">
                        <ul class="header__list">
                            <li>
                                <a href="#" aria-current="page">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    портфолио
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    студия
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class='header__burger js__header-burgerclick'>
                        <div class='header__burger-item js__header-burger header__burger--top'></div>
                        <div class='header__burger-item js__header-burger header__burger--middle'></div>
                        <div class='header__burger-item js__header-burger header__burger--bottom'></div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="header__catalog-menu header-nav-open-js">
            <div class="container-wrapper">
                <div class="header__catalog-inner">
                    <ul class="header__catalog-list">
                        <li>
                            <a href="#">
                                ГЛАВНАЯ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ПОРТФОЛИО
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                СТУДИЯ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                КОНТАКТЫ
                            </a>
                        </li>
                    </ul>
                    <div class="header__info">
                        <div class="header__info-left">
                            <a class="header__mail" href="#">
                                rubilnik@mail.ru
                            </a>
                            <a class="header__phone" href="#">
                                +7 (999)999-99-99
                            </a>
                            <div class="header__items">
                                <div class="header__item">
                                    <h6 class="header__title">
                                        Россия
                                    </h6>
                                    <p class="header__text">
                                        г. Йошкар-Ола, <br>
                                        ул. Эшкинина, д.25
                                    </p>
                                </div>
                                <div class="header__item">
                                    <h6 class="header__title header__title--custom">
                                        График работы:
                                    </h6>
                                    <p class="header__text">
                                        Пн-Пт: с 10:00 до 18:00 <br>
                                        Сб-Вс: Выходной
                                    </p>
                                </div>
                            </div>
                            <a class="header__link" href="#">
                                Заказать услугу
                            </a>
                        </div>
                        <div class="header__info-right">
                            <div class="header__socials">
                                <a class="header__social" href="#">
                                    ВКОНТАКТЕ
                                </a>
                                <a class="header__social" href="#">
                                    ИНСТАГРАМ
                                </a>
                                <a class="header__social" href="#">
                                    ТЕЛЕГРАМ
                                </a>
                            </div>
                            <iframe class="header__map"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1aa3a9f7919cfdf05c6264349e7f2b9a42159e0745e9b0fe8fc0cb6dc954f967&amp;source=constructor"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>


