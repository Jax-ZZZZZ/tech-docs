### PAX S300 Basic Operations Guide

> This operation guide also applies to **PAX A35**. The operation flow is identical.  
> Note: PAX S300 has been discontinued and is supported for maintenance purposes only.  
> ⚠️ **S300 / A35 are external PIN Pad devices. All transaction operations are performed on the computer POS.  
> The card terminal is used only for the final payment step.**

---

#### 1. Sale (Chip / EMV) — Chip Card Payment

Used when the customer pays with a **chip-enabled credit or debit card**.

**Steps (on the computer POS):**

1. Create an order in the POS system
2. Click **Pay / Credit Card**
3. Confirm the **payment amount**

**Steps (on S300 / A35):**

4. The POS sends the amount to the card terminal
5. Ask the customer to **insert the chip card**
6. The customer enters a PIN or signs if required
7. Once approved, the POS shows payment completed and prints or sends the receipt

🎥 **Operation Video:**  
[Click to view Sale (Chip / EMV) operation video](https://www.youtube.com/watch?v=ROS6bkcLD6w&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=10)

---

#### 2. Sale (Contactless / Tap) — Contactless Payment

Used for **Tap / Contactless** payments.

**Steps (on the computer POS):**

1. Create an order in the POS system
2. Click **Pay / Credit Card**
3. Confirm the **payment amount**

**Steps (on S300 / A35):**

4. The POS sends the amount to the card terminal
5. Ask the customer to tap the card or device near the reader
6. The customer enters a PIN or signs if required
7. Once approved, the POS completes the payment and prints or sends the receipt

🎥 **Operation Video:**  
[Click to view Sale (Contactless / Tap) operation video](https://www.youtube.com/watch?v=_vFkdRT6u40&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=9)

---

#### 3. Sale (Apple Pay) — Apple Pay Payment

Used for **Apple Pay and mobile wallet** payments.

**Steps (on the computer POS):**

1. Create an order in the POS system
2. Click **Pay / Credit Card**
3. Confirm the **payment amount**

**Steps (on S300 / A35):**

4. Ask the customer to use Apple Pay (phone or watch near the terminal)
5. The customer completes Face ID or Touch ID authentication
6. Once approved, the POS completes the payment and prints or sends the receipt

🎥 **Operation Video:**  
[Click to view Sale (Apple Pay) operation video](https://www.youtube.com/watch?v=8fiRBvJ_Zk8&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=8)

---

#### 4. Sale (Manual / Key-In) — Manual Card Entry Payment

Used when the card cannot be inserted or tapped (**higher risk**).

**Steps (on the computer POS):**

1. Create an order in the POS system
2. Click **Pay / Credit Card**
3. Confirm the **payment amount**

**Steps (on S300 / A35):**

4. Enter the card number and expiration date
5. Enter **CVV, ZIP Code, and Billing Address Number**
6. Once approved, the POS completes the payment and prints or sends the receipt

> ⚠️ Manual card entry transactions carry a higher risk of chargebacks. Use with caution.

🎥 **Operation Video:**  
[Click to view Sale (Manual / Key-In) operation video](https://www.youtube.com/watch?v=zgsem-Ygh5E&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=7)

---

#### 5. Void Sales (Cancel Payment)

Used to void a transaction **on the same day before Batch settlement**.

**Steps (performed entirely on the computer POS):**

1. Go to **Transaction / History** in the POS system
2. Locate the transaction and click **Reopen Check**
3. Select the payment method (e.g. **VISA / MasterCard / Amex / Discover**)
4. Click **Void / Cancel**
5. The POS displays **Void Successful**

> ⚠️ Transactions that have already been batched cannot be voided and must be refunded instead.

🎥 **Operation Video:**  
[Click to view Void Sales operation video](https://www.youtube.com/watch?v=qOmN4XZbJQI&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=6)

---

#### 6. Add Tips

Used to add tips to a transaction that is **completed but not yet batched**.

**Steps (on the computer POS):**

1. Go to **Adjust Tip** in the POS system
2. Select the corresponding transaction
3. Click **Adjust Tip**
4. Enter the tip amount
5. Confirm submission

> Tips will be settled during Batch. No action is required on the card terminal.

🎥 **Operation Video:**  
[Click to view Add Tips operation video](https://www.youtube.com/watch?v=TVxQR9l88lQ&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=5)

---

#### 7. Batch (Settlement)

Used to submit all completed transactions **to the bank for settlement**.

> ⚠️ **S300 / A35 automatically batch during the early morning by default.**  
> To manually settle transactions on the same day, follow the steps below.

**Steps (on the computer POS):**

1. Go to **Operation Center → Credit Card Batch**
2. Verify the transaction count and total amount
3. Click **Close Batch** in the top-right corner
4. Confirm settlement
5. The POS displays Batch success and prints the Batch Report

> In most cases, Batch funds are deposited within **1–2 business days**. Weekends and bank holidays may delay the deposit.  
> Example: a Monday batch typically deposits on Wednesday; a Friday batch typically deposits on the following Monday.

🎥 **Operation Video:**  
[Click to view Batch (Settlement) operation video](https://www.youtube.com/watch?v=FaO6bS2hHls&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=4)

---

#### 8. Force Auth (Force Authorization / Force Tip)

Used to post a transaction or tip **when an authorization code (Auth Code) has already been obtained**.

**Steps (on the computer POS):**

1. Go to **Operation Center → Credit Card Batch**
2. Click **Force Auth** in the bottom-left corner
3. Click **Set Amount** and enter the tip or adjustment amount
4. Enter the **Auth Code** (available on the credit card receipt)
5. Click **Force Auth** on the right to submit

**Steps (on S300 / A35):**

6. Enter the customer’s **card number and expiration date**
7. The POS displays the Force Auth transaction count and amount
8. Click **Cancel** in the bottom-right corner to exit

> ⚠️ This function is high risk.  
> It will appear as an **additional transaction** on the customer’s bank statement and may result in a dispute.

🎥 **Operation Video:**  
[Click to view Force Auth operation video](https://www.youtube.com/watch?v=m2x1xLqCdbM&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=3)

---

#### 9. Refund (Chip) — Chip Card Refund

Used to refund **batched chip card transactions**.

**Steps (on the computer POS):**

1. Go to **Refund** in the POS system
2. Select the original **Transaction Number**
3. Click **Credit Card**
4. Click **Set Amount** and enter the refund amount
5. Enter a **Reason** (for POS record only)
6. Click **Finish** to process the refund

**Steps (on S300 / A35):**

7. Ask the customer to **insert the original chip card**
8. The POS confirms success and prints the refund receipt

> Refunds typically appear in **3–7 business days**, depending on the customer’s bank.

🎥 **Operation Video:**  
[Click to view Refund (Chip) operation video](https://www.youtube.com/watch?v=rNWeG3LRjr8&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=2)

---

#### 10. Refund (Manual) — Manual Card Entry Refund

Used when the physical card cannot be read.

**Steps (on the computer POS):**

1. Go to **Refund** in the POS system
2. Select the original **Transaction Number**
3. Click **Credit Card**
4. Click **Set Amount** and enter the refund amount
5. Enter a **Reason** (for POS record only)
6. Click **Finish** to process the refund

**Steps (on S300 / A35):**

7. Enter the customer’s **card number and expiration date**
8. The POS confirms success and prints the refund receipt

> Refunds typically appear in **3–7 business days**, depending on the customer’s bank.

🎥 **Operation Video:**  
[Click to view Refund (Manual) operation video](https://www.youtube.com/watch?v=s9uBA7jvd4Q&list=PLUKpuydjO6RC086I5D05Nt1vRnmEnmg5D&index=1)
