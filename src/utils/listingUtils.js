export const NEEDS_SHEET_NAME = "Public needs responses"
export const NEED_TYPES = {
  FINANCIAL: "Financial",
  SUPPLIES: "Supplies",
  CHILDCARE_PETCARE: "Childcare/Petcare",
  EMOTIONAL_SUPPORT: "Emotional Support",
  RESOURCE_SUPPORT: "Resource Support",
}
export const NEEDS_SHEET_COLUMN_INDICES = {
  shared: {
    createdAt: 0,
    onBehalfOf: 1,
    name: 2,
    pronouns: 4,
    location: 5,
    preferredContactMethod: 6,
    contact: 7,
    interestedInConnecting: 8,
    neighborhoodName: 9,
  },

  // FINANCIAL NEED
  [NEED_TYPES.FINANCIAL]: {
    id: 10,
    meta: {
      needFrequency: 11,
      minFundingNeed: 14,
      maxFundingNeed: 15,
      fundingMethod: 16,
    },
  },

  // SUPPIES/ERRANDS NEED
  [NEED_TYPES.SUPPLIES]: {
    id: 18,
    meta: {
      needFrequency: 19,
      needTiming: 20,
      costCoverage: 21,
      details: 22,
      neighborhood: 23,
      store: 24,
      shoppingList: 25,
    },
  },

  [NEED_TYPES.CHILDCARE_PETCARE]: {
    id: 26,
    meta: {
      ageAndNumberOfKids: 27,
      typeOfRequest: 28,
      typeOfActivities: 29,
      needFrequency: 30,
      needTiming: 31,
      comments: 32,
      kindOfPets: 33,
      supportType: 34,
      petNeedFrequency: 35,
      petNeedTiming: 36,
      petComments: 37,
    },
  },

  [NEED_TYPES.EMOTIONAL_SUPPORT]: {
    id: 38,
    meta: {
      supportType: 39,
    },
  },

  [NEED_TYPES.RESOURCE_SUPPORT]: {
    id: 40,
    meta: {
      resourceSupportDetails: 41,
      otherCommunitySupport: 42,
    },
  },
}
