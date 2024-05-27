import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from './config';

export default createMiddleware({
    defaultLocale: 'tr',
    locales,
    pathnames,
    localePrefix,
    localeDetection: false,
});


export const config = {
    // Match only internationalized pathnames
    matcher: [
        "/",
        "/(en|tr)/:path*",
        "/((?!_next|_vercel|api|.*\\..*).*)"
    ],
};