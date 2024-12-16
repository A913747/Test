const sampleCreditUnions = [
  {
    id: '1',
    Contract_Number: '12345',
    Credit_Union_Name: 'ABC Credit Union',
    premium_reports: [],
    premium_adjustments: [],
    single_premium_certificate_returns: []
  },
  // Add more sample data here
];

const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, args) => {
      return sampleCreditUnions.filter(
        (cu) => cu.Contract_Number === args.contractNumber
      );
    },
    searchCreditUnionByName: (parent, args) => {
      return sampleCreditUnions.filter(
        (cu) => cu.Credit_Union_Name.includes(args.name)
      );
    },
    searchCreditUnionByState: (parent, args) => {
      // Implement filtering logic based on state
      return [];
    },
    searchCreditUnionByNameAndState: (parent, args) => {
      // Implement filtering logic based on name and state
      return [];
    },
  },
  Mutation: {
    addCreditUnion: (parent, args) => {
      const newCreditUnion = { id: Date.now().toString(), ...args.input };
      sampleCreditUnions.push(newCreditUnion);
      return newCreditUnion;
    },
    updateCreditUnion: (parent, { id, input }) => {
      const index = sampleCreditUnions.findIndex((cu) => cu.id === id);
      if (index !== -1) {
        sampleCreditUnions[index] = { ...sampleCreditUnions[index], ...input };
        return sampleCreditUnions[index];
      }
      throw new Error('Credit Union not found');
    },
    deleteCreditUnion: (parent, { id }) => {
      const index = sampleCreditUnions.findIndex((cu) => cu.id === id);
      if (index !== -1) {
        sampleCreditUnions.splice(index, 1);
        return true;
      }
      return false;
    },
  },
};
//

export default resolvers;