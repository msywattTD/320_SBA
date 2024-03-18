export default function Form() {
    return (
        <div>
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="sort">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">0</option>
            </select>
            <button type="submit">Sort</button>
        </div>
    );
}
