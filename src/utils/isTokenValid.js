function isTokenValid() {
    const token = localStorage.getItem('token');
    // verificam daca exista tokenul in localStorage
    if (!token) {
        return false;
    }

    // verificam daca acesta nu este expirat
    // 1. transform string in object js
    const parsedToken = JSON.parse(token);

    // 2. luam timpul de expirare a tokenului
    const expirationTime = parsedToken.expiration;

    // 3. luam timpul curent in milisecunde
    const currentTime = new Date().getTime();

    // 4. comparam cei 2 timpi
    if (currentTime < expirationTime) {
        return false;
    }

    return true;
}