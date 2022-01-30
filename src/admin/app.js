import AuthLogo from './extensions/concreto.png'

export default {
    config: {
        auth: {
            logo: AuthLogo,
        },

        theme: {
            colors: {
                alternative100: '#F9773B',
                alternative200: '#F9773B',
                alternative500: '#2C2B2B',
                alternative600: '#1389E6',
                alternative700: '#8312d1',
                danger700: '#b72b1a'
            },
        },
        tutorials: false,
        notifications: { release: false },
        locales: [
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            // 'uk',
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],
    },
    bootstrap(app) {
        console.log(app);
    },
};