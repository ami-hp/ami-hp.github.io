import '../css/tailwind-build.css'
import '../scss/main.scss'
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'


window.Alpine = Alpine;

Alpine.plugin(intersect)
Alpine.start();

