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

  const handleConfirmDeposit = () => {
    // Log the information after the user confirms the deposit
    console.log("Selected Payment Method:", selectedPaymentMethod);
    console.log("Selected Amount:", selectedAmount);
    console.log("Active Tab:", activeTab);

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
