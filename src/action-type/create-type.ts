interface Obj1 {
  Type: (type: string) => string;
  requestType: (type: string) => Obj2;
}

interface Obj2 {
  request: string;
  success: string;
  failure: string;
}

export default function(name: string): Obj1 {
  return {
    Type: (type: string): string => {
      return `@@${name}/${type}`;
    },
    requestType: (type: string): Obj2 => {
      return {
        request: `@@${name}/${type}_REQUEST`,
        success: `@@${name}/${type}_SUCCESS`,
        failure: `@@${name}/${type}_FAILURE`
      };
    }
  };
}
