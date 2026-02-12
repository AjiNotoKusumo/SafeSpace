import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const baseLayout = {
    color: "#fff",
    borderRadius: "8px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    minWidth: "200px",
    height: "50px",     
    display: "flex",
    alignItems: "center",
    fontWeight: "500"
}


const notification = (message, state) => {
    Toastify({
        text: `${message}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: (state === 'success')? "#198754" : "#dc3545", 
            ...baseLayout
        },
    }).showToast();
}

export default notification