import { gql } from 'apollo-server';

const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    premium_reports: [Premium_Report!]!
    premium_adjustments: [Premium_Adjustment!]!
    single_premium_certificate_returns: [Single_Premium_Certificate_Return!]!
  }

  type Premium_Report {
    id: ID!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input CreditUnionInput {
    id: ID
    Contract_Number: String
    Credit_Union_Name: String
  }

  type Query {
    searchCreditUnionByContractNumber(contractNumber: String!): [Credit_Union!]!
    searchCreditUnionByName(name: String!): [Credit_Union!]!
    searchCreditUnionByState(state: String!): [Credit_Union!]!
    searchCreditUnionByNameAndState(name: String!, state: String!): [Credit_Union!]!
  }

  type Mutation {
    addCreditUnion(input: CreditUnionInput!): Credit_Union!
    updateCreditUnion(id: ID!, input: CreditUnionInput!): Credit_Union!
    deleteCreditUnion(id: ID!): Boolean!
  }
`;

export default typeDefs;