/**
 * Fetch the data from an API by using the fetch API.
 * @param route the route where you want fetch the data.
 * @return Promise
 */
const fetchData = async route => {
    try {
        const data = await fetch(process.env.NODE_ENV === "development" ? `http://localhost:1337/${route}` : ``);
        const dataParsed = await data.json();
        return dataParsed;
    } catch (error) {
        throw error;
    }
}

export default fetchData;