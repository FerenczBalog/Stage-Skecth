import Header from "/assets/Header.mjs";

export default class AddNew {

    constructor() {
        this.header = new Header().render()
    }

    render() {

        return `
            <div id="AddNew>
            <span id="close">&times;</span>
                <form>
                    <label for="name">Name (4 to 8 characters):</label>
                    <input type="text" id="name" name="name" required> 
                    
                    <label for="name2">Name (4 to 8 characters):</label>
                    <input type="text" id="name2" name="name" required> 

                    <label for="name3">Name (4 to 8 characters):</label>
                    <input type="text" id="name3" name="name" required> 
                </form>
            </div>
        `; 
    }
}