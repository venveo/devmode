// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
    name: "Example Project",
    copyright: "Example Company, Inc.",
    paths: {
        src: {
            base: "./src/",
            css: "./src/css/",
            js: "./src/js/"
        },
        dist: {
            base: "./web/dist/",
            clean: [
                '**/*',
            ]
        },
        templates: "./templates/"
    },
    urls: {
        live: "https://devMode.fm/",
        local: "http://devMode.test/",
        critical: "https://devMode.fm/",
        publicPath: () => process.env.PUBLIC_PATH || "/dist/",
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "app": "app.js",
        "episodes": "modules/episodes.js",
        "player": "modules/player.js"
    },
    babelLoaderConfig: {
        exclude: [
            /(node_modules|bower_components)/
        ],
    },
    copyWebpackConfig: [
        {
            from: "./src/js/workbox-catch-handler.js",
            to: "js/[name].[ext]"
        }
    ],
    criticalCssConfig: {
        base: "./web/dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
                {
                    url: "",
                    template: "index"
                },
                {
                    url: "",
                    template: "amp_index"
                },
                {
                    url: "about",
                    template: "about/index"
                },
                {
                    url: "about",
                    template: "about/amp_index"
                },
                {
                    url: "calendar",
                    template: "calendar/index"
                },
                {
                    url: "calendar",
                    template: "calendar/amp_index"
                },
                {
                    url: "episodes/webpack-inside-out-with-sean-larkin",
                    template: "episodes/_entry"
                },
                {
                    url: "episodes/webpack-inside-out-with-sean-larkin",
                    template: "episodes/_amp_entry"
                },
                {
                    url: "errors/offline",
                    template: "errors/offline"
                },
                {
                    url: "errors/error",
                    template: "errors/error"
                },
                {
                    url: "errors/503",
                    template: "errors/503"
                },
                {
                    url: "errors/404",
                    template: "errors/404"
                }
            ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || false,
    },
    manifestConfig: {
        basePath: ""
    },
    purgeCssConfig: {
        paths: [
            "./templates/**/*.{twig,html}",
            "./src/vue/**/*.{vue,html}",
            "./node_modules/vuetable-2/src/components/**/*.{vue,html}",
        ],
        whitelist: [
            "./src/css/components/**/*.{css}"
        ],
        whitelistPatterns: [],
        extensions: [
            "html",
            "js",
            "twig",
            "vue"
        ]
    },
    saveRemoteFileConfig: [
        {
            url: "https://www.google-analytics.com/analytics.js",
            filepath: "js/analytics.js"
        }
    ],
    createSymlinkConfig: [
        {
            origin: "img/favicons/favicon.ico",
            symlink: "../favicon.ico"
        }
    ],
    webappConfig: {
        logo: "./src/img/favicon-src.png",
        prefix: "img/favicons/"
    },
    workboxConfig: {
        swDest: "../sw.js",
        precacheManifestFilename: "js/precache-manifest.[manifestHash].js",
        importScripts: [
            "/dist/js/workbox-catch-handler.js",
        ],
        exclude: [
            /\.(png|jpe?g|gif|svg|webp)$/i,
            /\.(mp3)$/i,
            /\.map$/,
            /^manifest.*\\.js(?:on)?$/,
        ],
        globDirectory: "./web/",
        globPatterns: [
            "offline.html",
            "offline.svg"
        ],
        offlineGoogleAnalytics: true,
        runtimeCaching: [
            {
                urlPattern: /\/admin.*$/, // Don't cache admin requests
                handler: "networkOnly"
            },
            {
                urlPattern: /\.php/, // Don't cache any php requests (such as queue handler)
                handler: "networkOnly"
            },
            {
                urlPattern: /\.(mp3)$/i, // Don't cache any mp3s
                handler: "networkOnly"
            },
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
                handler: "cacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 20
                    }
                }
            }
        ]
    }
};
