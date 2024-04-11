const normalizePort = (val: string | number): number | string => {
    
    const portErr = 'port inutilisable'
    
  
    if (typeof val === 'string') {
      return parseInt(val, 10);
    }
    if (typeof val === 'number') {
        return val > 0 ? parseInt(String(val), 10) : portErr;
    }
    return portErr;
};

export default normalizePort