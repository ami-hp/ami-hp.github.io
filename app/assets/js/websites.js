import '../css/tailwind-build.css'
import '../scss/main.scss'

import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'


window.Alpine = Alpine;

Alpine.plugin(intersect)

document.addEventListener('alpine:init', () => {
    Alpine.store('page', {
        websites: {
            images: [
                {href: 'https://asremobile.com/',                         title: 'Asr-e mobile',               class: 'asremobile',     year: '2024', contribute: true  , skills: {webpack: false, javascript: true, jquery: true,  alpine: false, bootstrap: true, laravel: true,  php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/adminpanel-plainadmin/', title: 'PlainAdmin RTL Admin Panel', class: 'plainAdmin',     year: '2023', contribute: false , skills: {webpack: false, javascript: true, jquery: false, alpine: false, bootstrap: true, laravel: false, php:false, sass:true, tailwind: false, rest: false}},
                {href: 'https://amaj.in/',                                title: 'Amaj',                       class: 'amaj',           year: '2021', contribute: true  , skills: {webpack: false, javascript: true, jquery: false, alpine: false, bootstrap: true, laravel: true, php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://applecenter.ir',                          title: 'Apple Center',               class: 'appleCenter',    year: '2020', contribute: true  , skills: {webpack: false, javascript: true, jquery: true,  alpine: false, bootstrap: true, laravel: true, php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/shana.studio/',          title: 'Shana Studio',               class: 'shana',          year: '2021', contribute: false , skills: {webpack: false, javascript: true, jquery: false, alpine: false, bootstrap: true, laravel: true, php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/dr.h/',                  title: 'Doctor Hoda',                class: 'drh',            year: '2021', contribute: false , skills: {webpack: false, javascript: true, jquery: false, alpine: false, bootstrap: true, laravel: true, php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/gooshiland/',            title: 'Gooshiland',                 class: 'gooshiland',     year: '2021', contribute: false , skills: {webpack: false, javascript: true, jquery: true, alpine: false, bootstrap: true, laravel: true, php:false, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/noya-games/',            title: 'Noya Games',                 class: 'noya',           year: '2020', contribute: false , skills: {webpack: false, javascript: true, jquery: true, alpine: false, bootstrap: true, laravel: false, php:true, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/damos/',                 title: 'Damos Agency',               class: 'damos',          year: '2020', contribute: false , skills: {webpack: false, javascript: true, jquery: true, alpine: false, bootstrap: true, laravel: false, php:true, sass:false, tailwind: false, rest: false}},
                {href: 'https://ami-hp.github.io/ati.elevator/',          title: 'ATI Elevator',               class: 'ati',            year: '2020', contribute: false , skills: {webpack: false, javascript: true, jquery: true, alpine: false, bootstrap: true, laravel: false, php:true, sass:false, tailwind: false, rest: false}}
            ],
            skills : ['bootstrap', 'sass' , 'javascript' , 'jquery' , 'tailwind', 'alpine', 'webpack', 'laravel' , 'php' , 'rest'],
        },
        packages: {
            images: [
                {href: 'https://github.com/ami-hp/laravel-eye', title: 'Laravel-Eye', class: 'eye', year: '2023', contribute: false , skills: {webpack: false, javascript: false, jquery: false, alpine: false, bootstrap: false, laravel: true, php:true, sass:false, tailwind: false, rest: false}},
            ],
            skills : ['bootstrap', 'sass' , 'javascript' , 'jquery' , 'tailwind', 'alpine', 'webpack', 'laravel' , 'php' , 'rest'],
        }
    })
})

Alpine.start();
