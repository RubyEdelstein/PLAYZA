const footer_links = [
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
     {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
    {
        name:'Lorem ipsum dolor.',
        url:''
    },
]

$(document).ready(function() {
 
    footer_links.map((link, index) => {
    
        $('.footer__links ul').append(`<li><a href='${link.url}'>${link.name}</a></li>`)
    })

});