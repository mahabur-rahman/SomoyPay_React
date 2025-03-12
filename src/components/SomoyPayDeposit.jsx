import { useState } from "react";
import "../index.css";

const SomoyPayDeposit = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);

  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);

  };

  const handleConfirmDeposit = async () => {
    if (!selectedAmount || !selectedPaymentMethod) {
      alert("Please select a payment method and amount.");
      return;
    }

    const transactionId = `TXN_${Date.now()}`; // Generate a unique transaction ID

    try {
      const response = await fetch(import.meta.env.VITE_SOMOYPAY_PAYMENT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-SECRET-KEY": import.meta.env.VITE_DEPOSIT_SECRET_KEY,
        },
        body: JSON.stringify({
          currency: "BDT",
          amount: selectedAmount,
          reference: transactionId,
          callback_url: import.meta.env.VITE_CALLBACK_URL,
          customer_name: "N/A",
          customer_email: "user@example.com",
          customer_phone: "N/A",
          customer_address: "N/A",
          note: "Testing Deposit for integration",
        }),
      });

      const data = await response.json();

      console.log("Payment Initiation Response:", data);

      if (data.status === "success" && data.data.payment_url) {
        console.log("Redirecting to payment URL...");
        // Log the URL to ensure it's correct
        console.log("Payment URL:", data.data.payment_url);
        // Redirect to payment URL
        window.location.replace(data.data.payment_url); // or window.location.href = data.data.payment_url;
      } else {
        console.error("Payment initiation failed:", data);
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again later.");
    }
  };




  return (
    <div className="somoyPay-container">
      <main className="somoyPay-main">
        <div className="somoyPay-card">
          <div className="somoyPay-header">
            <div className="somoyPay-title">Funds</div>
            <div>
              <button
                onClick={() => handleTabChange("deposit")}
                className={`somoyPay-button ${activeTab === "deposit" ? "active" : ""}`}
              >
                Deposit
              </button>
              <button
                onClick={() => handleTabChange("withdraw")}
                className={`somoyPay-button ${activeTab === "withdraw" ? "active" : ""}`}
              >
                Withdrawal
              </button>
            </div>
          </div>

          {activeTab === "deposit" ? (
            <>
              <hr className="somoyPay-divider" />
              {/* Promotions Section */}
              <div className="somoyPay-promotions">
                <h3 className="somoyPay-section-title">Special Promotions</h3>
                <p>
                  Check out our current promotions and enjoy exclusive offers
                  when making a deposit.
                </p>
              </div>

              {/* Payment Method Section */}
              <div className="somoyPay-payment-method">
                <h3 className="somoyPay-section-title">Payment Method</h3>
                <button
                  onClick={() => handlePaymentMethodSelect("SomoyPay")}
                  className={`somoyPay-payment-button ${selectedPaymentMethod === "SomoyPay" ? "active" : ""}`}
                >
                  SomoyPay
                </button>
              </div>

              {/* Amount Section */}
              <div className="somoyPay-amount">
                <h3 className="somoyPay-section-title">Amount</h3>
                <div className="somoyPay-amount-buttons">
                  <button
                    onClick={() => handleAmountSelect(10)}
                    className={`somoyPay-amount-button ${selectedAmount === 10 ? "active" : ""}`}
                  >
                    10
                  </button>
                  <button
                    onClick={() => handleAmountSelect(20)}
                    className={`somoyPay-amount-button ${selectedAmount === 20 ? "active" : ""}`}
                  >
                    20
                  </button>
                  <button
                    onClick={() => handleAmountSelect(30)}
                    className={`somoyPay-amount-button ${selectedAmount === 30 ? "active" : ""}`}
                  >
                    30
                  </button>
                  <button
                    onClick={() => handleAmountSelect(40)}
                    className={`somoyPay-amount-button ${selectedAmount === 40 ? "active" : ""}`}
                  >
                    40
                  </button>
                  <button
                    onClick={() => handleAmountSelect(50)}
                    className={`somoyPay-amount-button ${selectedAmount === 50 ? "active" : ""}`}
                  >
                    50
                  </button>
                  <button
                    onClick={() => handleAmountSelect(100)}
                    className={`somoyPay-amount-button ${selectedAmount === 100 ? "active" : ""}`}
                  >
                    100
                  </button>
                </div>
              </div>

              {/* Confirm Deposit Section */}
              <div className="somoyPay-confirm">
                <div className="somoyPay-input-container">
                  <span className="somoyPay-currency">৳</span>
                  <input
                    type="number"
                    value={selectedAmount ?? ""}
                    readOnly
                    placeholder="0.00"
                    className="somoyPay-input"
                  />
                </div>
                <button onClick={handleConfirmDeposit} className="somoyPay-confirm-button">
                  Confirm Deposit
                </button>
              </div>
            </>
          ) : (
            <h2 className="somoyPay-withdrawal">Withdrawal Section</h2>
          )}
        </div>
      </main>
    </div>
  );
};

export default SomoyPayDeposit;
