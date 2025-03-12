import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get("status");
        const transactionId = params.get("transaction_id");

        if (status === "success") {
            alert(`Payment successful! Transaction ID: ${transactionId}`);
            navigate("/dashboard"); // Redirect user after success
        } else {
            alert("Payment failed. Please try again.");
            navigate("/deposit");
        }
    }, []);

    return <h2>Processing Payment...</h2>;
};

export default PaymentSuccess;
