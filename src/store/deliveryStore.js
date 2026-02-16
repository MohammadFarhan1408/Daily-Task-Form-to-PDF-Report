import { create } from "zustand";

export const useDeliveryStore = create((set) => ({
  // 1️⃣ Basic Certificate Info
  deliveryBasicInfo: {
    date: "",
    referenceNo: "",
    subject: "",
    purchaseOrderNo: "",
    purchaseOrderDate: "",
    projectName: "",
  },

  // 2️⃣ School & Delivery Details
  schoolDelivery: {
    schoolName: "",
    schoolAddress: "",
    deliveredAndInstalledBy: "",
    deliveredByContactNo: "",
    receivedBy: "",
    receivedByContactNo: "",
  },

  // 3️⃣ Item Checklist (ONLY dynamic part: received or not)
  // This will be initialized from a static master list
  itemChecklist: [
    // { id, itemName, quantity, received }
  ],

  // 4️⃣ Verification & Authorization
  verification: {
    schoolAuthorityName: "",
    schoolAuthorityDesignation: "",
    stembotixRepresentativeName: "",
    yuvaCoordinatorName: "",
    verificationDate: "",
  },

  // 5️⃣ Serial Numbers (Annexure-II)
  serialNumbers: {
    printers: [""],
    laptops: [""],
  },

  // Update Basic Info
  updateDeliveryBasicInfo: (field, value) =>
    set((state) => ({
      deliveryBasicInfo: {
        ...state.deliveryBasicInfo,
        [field]: value,
      },
    })),

  // Update School Delivery
  updateSchoolDelivery: (field, value) =>
    set((state) => ({
      schoolDelivery: {
        ...state.schoolDelivery,
        [field]: value,
      },
    })),

  // Update Initialize checklist from static items list
  // initializeItemChecklist: (items) =>
  //   set(() => ({
  //     itemChecklist: items.map((item) => ({
  //       id: item.id,
  //       received: false,
  //     })),
  //   })),

  setItemListFromExcel: (items) =>
    set(() => ({
      itemChecklist: items,
    })),

  // Update one checklist item
  updateItemChecklist: (id, value) =>
    set((state) => ({
      itemChecklist: state.itemChecklist.map((item) =>
        item.id === id ? { ...item, received: value } : item,
      ),
    })),

  // Update Verification
  updateVerification: (field, value) =>
    set((state) => ({
      verification: {
        ...state.verification,
        [field]: value,
      },
    })),

  // Update printer serial
  updatePrinterSerial: (index, value) =>
    set((state) => {
      const updated = [...state.serialNumbers.printers];
      updated[index] = value;
      return {
        serialNumbers: {
          ...state.serialNumbers,
          printers: updated,
        },
      };
    }),

  // Update laptop serial
  updateLaptopSerial: (index, value) =>
    set((state) => {
      const updated = [...state.serialNumbers.laptops];
      updated[index] = value;
      return {
        serialNumbers: {
          ...state.serialNumbers,
          laptops: updated,
        },
      };
    }),

  // Add / Remove printer
  addPrinter: () =>
    set((state) => ({
      serialNumbers: {
        ...state.serialNumbers,
        printers: [...state.serialNumbers.printers, ""],
      },
    })),

  removePrinter: (index) =>
    set((state) => {
      const updated = state.serialNumbers.printers.filter(
        (_, i) => i !== index,
      );
      return {
        serialNumbers: {
          ...state.serialNumbers,
          printers: updated.length ? updated : [""], // keep at least 1
        },
      };
    }),

  // Add / Remove laptop
  addLaptop: () =>
    set((state) => ({
      serialNumbers: {
        ...state.serialNumbers,
        laptops: [...state.serialNumbers.laptops, ""],
      },
    })),

  removeLaptop: (index) =>
    set((state) => {
      const updated = state.serialNumbers.laptops.filter((_, i) => i !== index);
      return {
        serialNumbers: {
          ...state.serialNumbers,
          laptops: updated.length ? updated : [""], // keep at least 1
        },
      };
    }),
}));
