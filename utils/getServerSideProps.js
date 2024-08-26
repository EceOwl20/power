export function getServerSideProps(context) {
    const language = context.req.headers['accept-language']
      ? context.req.headers['accept-language'].split(',')[0].split('-')[0]
      : defaultLocale;
  
    return {
      props: {
        language: locales.includes(language) ? language : defaultLocale
      }
    };
  }
  