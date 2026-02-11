import { create } from "zustand";

export const useProposalStore = create((set) => ({
  proposal: {
    to: "",
    subject: "",
    description: "",
    date: "",
    salutation: "Dear Sir/Madam",
  },
  projectProposal: {
    title: "",
    intro: "",
    objectives: [{ name: "", description: "" }],
    provision: [{ title: "", content: "" }],
  },
  financialProposal: [{ particular: "", description: "", amount: 0 }],
  gallery: [],

  // Update Proposal
  updateProposal: (field, value) =>
    set((state) => ({
      proposal: {
        ...state.proposal,
        [field]: value,
      },
    })),

  // Update Project Proposal
  updateProjectProposal: (field, value) =>
    set((state) => ({
      projectProposal: {
        ...state.projectProposal,
        [field]: value,
      },
    })),

  // Update Financial Item
  updateFinancialItem: (index, field, value) =>
    set((state) => {
      const newItems = [...state.financialProposal];

      newItems[index] = {
        ...newItems[index],
        [field]: field === "amount" ? Number(value) || 0 : value,
      };

      return {
        financialProposal: newItems,
      };
    }),

  // Add Financial Item
  addFinancialItem: () =>
    set((state) => ({
      financialProposal: [
        ...state.financialProposal,
        { particular: "", description: "", amount: 0 },
      ],
    })),

  // Remove Financial Item
  removeFinancialItem: (index) =>
    set((state) => ({
      financialProposal: state.financialProposal.filter((_, i) => i !== index),
    })),

  // Update Photographs
  updateGallery: (files) =>
    set(() => ({
      gallery: Array.from(files).slice(0, 8),
    })),
}));
