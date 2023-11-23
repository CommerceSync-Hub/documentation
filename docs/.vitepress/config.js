const OurDocumentationSidebar = [
    { text: 'Introduction', link: '/documentation/intro'},
    { text: 'Product Bridge', link: '/documentation/productbridge'},
    { text: 'WooSync Plugin', link: '/documentation/woosync'},
    { text: 'CommerceSync Theme', link: '/documentation/commercesync-theme'},

]

module.exports = {
    title: 'CommerceSync Bundle Docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'About', link: '/about'},
            { text: 'Documentation', link: '/documentation/intro'},
            { text: 'Download', link: 'https://github.com/CommerceSync-Hub/CommerceSync-Hub-Bundle/archive/refs/heads/main.zip'},
            { text: 'Github', link: 'https://github.com/CommerceSync-Hub/CommerceSync-Hub-Bundle'},
            { text: 'Contact', link: '/contact'},

        ],
        sidebar: {
            '/documentation/intro': OurDocumentationSidebar,
            '/documentation/productbridge': OurDocumentationSidebar,
            '/documentation/woosync': OurDocumentationSidebar,
            '/documentation/commercesync-theme': OurDocumentationSidebar,
           
        
        }
    }
}