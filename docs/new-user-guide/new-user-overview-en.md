### New Restaurant Merchant POS Quick Start Guide

#### 1. Information to Verify Before First POS Use

Before processing any transactions, please make sure the following business information is accurate:

- Restaurant name  
- Business address  
- Business phone number  
- Applicable sales tax rate  

This information directly affects receipts, transaction reports, tax calculations, and customer support.  
Please review carefully.

---

#### 2. Important Notes for First-Time Terminal Use

#### 2.1 Debit Card Pre-Authorization

For **debit cards with relatively low available balances (approximately under $1,000)**, restaurant merchants may trigger a **bank pre-authorization**:

- Banks may temporarily hold **an additional ~20% of the transaction amount** to cover potential tips
- This prevents the final settled amount from exceeding the available balance

**Example:**

- Amount entered on terminal: $100  
- Amount shown on customer’s bank alert: $120  

This is a **temporary authorization hold**, not an extra charge.  
After the restaurant completes the nightly **Batch (settlement)**, the bank will automatically adjust the charge to the correct final amount.

---

#### 2.2 Recommended Payment Methods and Security Levels

Recommended payment methods (from **highest to lowest security**, and **lowest to highest processing cost**):

1. **Tap / Contactless / Apple Pay**
2. **Chip (EMV)**
3. **Swipe (Magnetic Stripe)**
4. **Manual Entry**

Notes:

- Tap and Chip provide the same security level and usually have similar processing costs
- For Chip and earlier methods (Tap / Contactless),  
  customers **cannot dispute certain transactions as “card stolen” chargebacks**
- This does **not** mean these methods are completely chargeback-free
- Different chargeback types require different supporting documentation

---

#### 2.3 Manual Card Entry: Risks and Requirements

Manual Entry transactions typically require only:

- Card number  
- Expiration date  

Because this method carries the **highest risk**, the system is configured to:

- **Require CVV (security code) by default**

Even with CVV, banks generally **favor the cardholder** in disputes.  
To have a chance of winning a chargeback, **all of the following must be met**:

- Customer signature
- CVV match
- ZIP code match
- Billing address number match

**Strongly recommended:**

- For **high-value transactions**
- Especially **manual entry transactions**

Always request:

- The physical credit card
- A government-issued photo ID (e.g., driver’s license)

Reason: Fraudsters typically do not possess the physical card.

---

#### 2.4 Credit Card Surcharges, Cash Discounts, and Visa Compliance

Visa conducts periodic compliance audits.  
If significant violations are identified, Visa may impose **substantial fines**, including but not limited to:

- Improper credit card surcharges
- Unlawful minimum transaction amounts
- Non-compliant cash discount practices

If your restaurant plans to apply **credit card service fees**, all of the following rules must be strictly followed:

- **Debit cards may NOT have a minimum transaction amount**
- **Credit card minimum transaction amount may not exceed $10**
- **Cash Discount rules:**
  - Menu and posted prices must reflect the **credit card price**
  - Cash payments may receive a discount
  - Displaying cash prices and adding a fee for credit cards is considered a **surcharge and is not allowed**
- **Surcharges do NOT apply to debit cards**
- Proper signage must be posted at the entrance and point of sale
- Credit card surcharges:
  - May be a flat fee or a percentage
  - Must NOT exceed **3% of the transaction amount**
- The following states **prohibit credit card surcharges**:
  - Massachusetts (MA)
  - Connecticut (CT)
  - Maine (ME)
  - Oklahoma (OK)
- **Convenience fees** are permitted **only** for third-party platforms, such as:
  - BeyondMenu Online
  - Uber Eats
  - DoorDash
- **Service fees** are permitted **only** for public institutions, such as:
  - Government agencies
  - Hospitals
  - Schools
