const OurDocumentationSidebar = [{ text: 'Documentation', link: '/documentation/documentation.md'},]

module.exports = {
    title: 'CommerceSync Bundle Docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'About', link: '/about'},
            { text: 'Documentation', link: '/documentation/'},
            { text: 'Download', link: 'https://github.com/CommerceSync-Hub/CommerceSync-Hub-Bundle/archive/refs/heads/main.zip'},
            { text: 'Github', link: 'https://github.com/CommerceSync-Hub/CommerceSync-Hub-Bundle'},
            { text: 'Contact', link: '/contact'},

        ],
        sidebar: {
            '/about/': OurDocumentationSidebar,
            '/contact/' : OurDocumentationSidebar,
        
        }
    }
}