export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'setName' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
