export function isTokenValid() {
    const token = localStorage.getItem('token');
    // verificam daca exista tokenul in localStorage
    if (!token) {
        return false;
    }

    // verificam daca acesta nu este expirat
    // 1. transform string in object js
    const parsedToken = JSON.parse(token);
    console.log(`Bearer ${parsedToken.token}`);

    // 2. luam timpul de expirare a tokenului
    const expirationTime = parsedToken.expiration;

    // 3. luam timpul curent in milisecunde
    const currentTime = new Date().getTime();

    // 4. comparam cei 2 timpi
    if (expirationTime < currentTime) {
        return false;
    }

    return true;
}

export function getToken() {
    const tokenRaw = localStorage.getItem('token');
    const parsedToken = JSON.parse(tokenRaw);
    const token = parsedToken.token;

    return token;
}

export function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  