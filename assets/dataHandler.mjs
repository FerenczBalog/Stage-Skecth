export default class DataHandler {
    static async fetchData(){
        try {
            const res = await fetch('data.json');
            const data = await res.json();
           // console.log(data)
            return data
        } catch(err) {
            console.log('Err', err)
        }
    } 

    static async fetchCarousel(){
        try {
            const res = await fetch('carousel.json');
            const data = await res.json();
            console.log(data)
            return data
        } catch(err) {
            console.log('Err', err)
        }
    }
}