export default function(name) {
  return {
    Type: type => {
      return `@@${name}/${type}`;
    },
    requestType: type => {
      return {
        request: `@@${name}/${type}_REQUEST`,
        success: `@@${name}/${type}_SUCCESS`,
        failure: `@@${name}/${type}_FAILURE`
      };
    }
  };
}
