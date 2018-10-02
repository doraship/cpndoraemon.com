export default function () {
  const URLS = {
    about: '/about',
    contact: '/contact',
    home: '/',
    none: '#',
    signin: '/signin',
    signup: '/signup',
  };

  return name => (URLS[name] || URLS.none);
}
