
import UpdatedComponent from "./HOC";
import PropTypes from "prop-types"; // Import PropTypes

function Person2({ incrementHandle, refreshHandle, inc }) {
  return (
    <div>
      <h1>Person2</h1>
      <p>Total amount ${inc}</p>
      <button onClick={incrementHandle}>Increment</button>
      <button onClick={refreshHandle}>Refresh</button>
    </div>
  );
}
// Define prop types for the component
Person2.propTypes = {
    incrementHandle: PropTypes.func.isRequired, // Ensure incrementHandle is a required function prop
    refreshHandle: PropTypes.func.isRequired,
    inc: PropTypes.number.isRequired,
  };

// Named export with a name 'Person2Component'
export const Person2Component = UpdatedComponent(Person2);

// Export default as before
export default Person2Component;
