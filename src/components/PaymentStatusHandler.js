import { useEffect, useState } from "react";

// Function to extract and handle the payment status from URL parameters
const usePaymentStatus = () => {
    const [paymentStatus, setPaymentStatus] = useState(null);

    // Function to get the URL parameters
    const getURLParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');
        const paymentMethod = urlParams.get('payment_method');
        const reference = urlParams.get('reference');
        return { status, paymentMethod, reference };
    };

    // Effect hook to check the payment status when the component mounts
    useEffect(() => {
        const { status, paymentMethod, reference } = getURLParams();

        if (status && reference) {
            // Set the payment status
            setPaymentStatus({ status, paymentMethod, reference });

            // Handle different statuses
            if (status === 'Pending') {
                console.log(`Payment is pending for reference: ${reference}`);
            } else if (status === 'Success') {
                console.log(`Payment successful for reference: ${reference}`);
            } else {
                console.log(`Payment failed for reference: ${reference}`);
            }
        }
    }, []);

    return paymentStatus;
};

export default usePaymentStatus;
