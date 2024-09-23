---
layout: default
permalink: /loan-schedule-types.html
title: Loan schedule types
parent: Loan Management
nav_order: 1
---

# Understanding Cumulative and Progressive Loan Schedule Types in Apache Fineract®

One of the critical components of any loan management system, including Apache Fineract®, is its ability to handle various **loan schedule types**. 

In this article, we'll explore two common loan schedule types in Apache Fineract®: **cumulative** and **progressive** loan schedules. We'll explain their differences and provide examples to demonstrate how they work in practice.

## What is a Loan Schedule?

A loan schedule outlines how a loan is repaid over time. It includes details such as the number of installments, the amount to be paid in each installment, and whether the loan balance decreases over time. 

Apache Fineract® offers flexibility in setting up different types of loan schedules to meet the needs of various financial institutions and their clients.

## Cumulative Loan Schedule

In a **cumulative loan schedule**, the borrower pays a fixed amount in every installment over the entire loan tenure. This means that the principal and interest amounts are accumulated and distributed equally over the repayment period. 

The key characteristic of a cumulative schedule is that it maintains consistency, with the same amount due in every installment. 

**Same applies if multiple disbursements occurs at different stages of the loan life cycle!**

### How It Works

- **Installment Amount**: Each installment remains the same throughout the loan term.
- **Interest Calculation**: Interest is calculated on the declining balance of the principal.
- **Principal Repayment**: A portion of the fixed installment goes towards the principal, and this amount increases with each payment.

### Example of a Cumulative Loan Schedule

Let's say a borrower takes a loan of $500 at an interest rate of 11% per annum, with a loan tenure of 6 months.

| Month | Principal Repayment | Interest | Total Payment |
|-------|---------------------|----------|---------------|
| D1    | $500                |          |               |
| 1     | $81                 | $5       | $86           |
| 2     | $82                 | $4       | $86           |
| 3     | $83                 | $3       | $86           |
| 4     | $84                 | $2       | $86           |
| 5     | $84                 | $2       | $86           |
| 6     | $85                 | $1       | $86           |

Let's say a borrower takes a loan of $500, but in 2 parts, $250 was disbursed to the customer immediately and $250 was disbursed 2 months later, at an interest rate of 11% per annum with a loan tenure of 6 months.

| Month | Principal Repayment | Interest | Total Payment |
|-------|---------------------|----------|---------------|
| D1    | $250                |          |               |
| 1     | $81                 | $5       | $86           |
| 2     | $82                 | $4       | $86           |
| D2    | $250                |          |               |
| 3     | $83                 | $3       | $86           |
| 4     | $84                 | $2       | $86           |
| 5     | $84                 | $2       | $86           |
| 6     | $85                 | $1       | $86           |

As you can see, exactly the same repayment periods were created and the borrower should pay interest for the $500 loans from Day 1.

**Hence the name, this loan schedule always consider the full amount of all the "planned" disbursements.**

## Progressive Loan Schedule

In contrast, a **progressive loan schedule** only considering the already disbursed amounts to calculate the EMI (Equal monthly installment). This type of loan schedule is particularly useful, for BNPL (Buy Now Pay Later) type loans or laons where disbursements are not written in stone and repayment schedule should just progressively recalculated, when additional disbursement happens.

### How It Works

- **Installment Amount**: The amount to be paid in each installment increases progressively.
- **Interest Calculation**: Interest is calculated in the same way as in the cumulative schedule, but the total payment amount increases over time.
- **Principal Repayment**: The principal repayment is lower in the initial installments and increases as the loan progresses.

### Example of a Progressive Loan Schedule

Consider the same loan scenario as above: a $500 loan at a 11% interest rate, with a 6-month tenure.

| Month | Principal Repayment | Interest | Total Payment |
|-------|---------------------|----------|---------------|
| D1    | $500                |          |               |
| 1     | $81                 | $5       | $86           |
| 2     | $82                 | $4       | $86           |
| 3     | $83                 | $3       | $86           |
| 4     | $84                 | $2       | $86           |
| 5     | $84                 | $2       | $86           |
| 6     | $85                 | $1       | $86           |

In this scenario the generated repayment schedule is matchign with the "Cumulative" loan schedule type.

Let's say a borrower takes a loan of $500, but in 2 parts, $250 was disbursed to the customer immediately and $250 was disbursed 2 months later, at an interest rate of 11% per annum with a loan tenure of 6 months.

| Month | Principal Repayment | Interest | Total Payment |
|-------|---------------------|----------|---------------|
| D1    | $250                |          |               |
| 1     | $41                 | $2       | $43           |
| 2     | $41                 | $2       | $43           |
| D2    | $250                |          |               |
| 3     | $85                 | $4       | $89           |
| 4     | $86                 | $3       | $89           |
| 5     | $87                 | $2       | $89           |
| 6     | $88                 | $1       | $89           |

As you can see, for the first 2 periods the borrower should pay interest only on the disbursed $250 from Day 1 and the EMI for the first 2 period is $43.
After the first 2 periods, additioanl $250 was disbursed, so the total outstanding loan balance is $418 and EMI was recalculated for the remaining periods. The new EMI is $89.

**Hence the name, this loan schedule only consider the amount that was already disbursed and recalculate the rest of the repayment periods only when additional disbursement happened.**

## When to Use Each Loan Schedule

- **Cumulative Loan Schedule**: This is best suited for loans where multiple disbursements might occur but the disbursements are planned and expected and borrower should pay equal payments regardless when the disbursements actually happen.
  
- **Progressive Loan Schedule**: This schedule is ideal for BNPL type of loans or for loans where multiple disbursements might occur and the borrower should only pay interest and higher EMI from the date when the additional disbursements actually happened.

## Conclusion

Both **cumulative** and **progressive loan schedules** offer flexibility in structuring repayments based on the borrower’s financial situation. Apache Fineract® supports these loan schedule types at the moment, making it a powerful platform for financial institutions that need to accommodate different client needs. 

Understanding these loan schedule types can help institutions offer more tailored loan products to their clients, improving overall customer satisfaction.

### Important
Keep in mind that Apache Fineract® is a complex project, and you may encounter issues or need to configure additional settings based on your specific environment and requirements. It's a good practice to refer to the official Apache Fineract® documentation and the project's developer community for more details and troubleshooting!
