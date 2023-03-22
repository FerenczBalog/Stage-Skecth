export default class AddNew {

    render() {
        return `
            <form>
                <label for="name">Name (4 to 8 characters):</label>
                <input type="text" id="name" name="name" required>                   
            </form>
        `;
    }
}