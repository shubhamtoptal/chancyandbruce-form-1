export const ERROR_MSGS = {
  ADD_EDIT_SCHOOL_MSG: {
    schoolNameReqd: 'School Name must be filled in.',
    validName: 'Please enter a valid contact name.',
    valideEmail: 'Must be a valid email.',
    validSchoolPhone: 'Phone Number must be valid',
    schoolAddressReqd: 'School Address must be filled in.',
    schoolContactNameReqd: 'School Contact Name must be filled in.',
    primaryContactNameReqd: 'Primary Contact Name must be filled in.',
  },
};


export const REGEX = {
  PHONE:
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  EMAIL: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  NAME: /^[a-zA-Z\s]+$/,
};
