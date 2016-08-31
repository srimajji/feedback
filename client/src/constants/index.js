function keyMirror(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('objMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = key;
    }
  }
  return ret;
};

export default keyMirror({

    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAIL: null,
    LOGOUT_SUCCESS: null,

    COMPANY_NEW: null,
    COMPANY_NEW_SUCCESS: null,
    COMPANY_NEW_FAIL: null,

    COMPANY_LIST_REQUEST: null,
    COMPANY_LIST_SUCCESS: null,
    COMPANY_LIST_FAIL: null,

    FEEDBACK_NEW: null,
    FEEDBACK_NEW_SUCCESS: null,
    FEEDBACK_NEW_FAIL: null,

    FEEDBACK_LIST_REQUEST: null,
    FEEDBACK_LIST_SUCCESS: null,
    FEEDBACK_LIST_FAIL: null,
});