export default function(name) {
  return function(type) {
    return `@@${name}/${type}`;
  };
}

export function requestType(name) {
  return function(type) {
    return {
      request: `@@${name}/${type}_REQUEST`,
      success: `@@${name}/${type}_SUCCESS`,
      failure: `@@${name}/${type}_FAILURE`
    };
  };
}
