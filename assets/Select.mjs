export default class Select {
    constructor () {
        // options from db
    }

    render() {
        return `
        <select class="bg-black text-light rounded-2 border-dark">
            <option value="1">Your First Performance</option>
            <option value="2">Your Second Performance</option>
            <option value="3">Your Third Performance</option>
            <option value="4">Your Fourth Performance</option>
            <option value="5">Your Fifth Performance</option>
        </select>
        `;
    }
}