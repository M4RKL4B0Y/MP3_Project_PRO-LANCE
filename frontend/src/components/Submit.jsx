export default function Submit() {
    function handleClick() {
        alert('Form Submitted');
    }
    return (
        <div>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}