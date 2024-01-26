const routes = {
    home: { name: 'Home', path: '/', visibleInNavigation: true },
    about: { name: 'About', path: '/about', visibleInNavigation: true },
    menu: { name: 'Menu', path: '/menu', visibleInNavigation: true },
    bookings: { name: 'Reservations', path: '/bookings', visibleInNavigation: true },
    confirmedBooking: { name: 'Confirmed Booking', path: '/confirmed-booking', visibleInNavigation: false },
    orderOnline: { name: 'Order Online', path: '/order-online', visibleInNavigation: true },
    login: { name: 'Login', path: '/login', visibleInNavigation: true },
};

export default routes;