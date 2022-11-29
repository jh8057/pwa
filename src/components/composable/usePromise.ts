export default () => {
  const delayPromise = () => {
    return new Promise((resolve, rejects) => {
      try {
        setTimeout(() => {
          resolve;
        }, 1000);
      } catch {
        rejects;
      }
    });
  };

  return {
    delayPromise,
  };
};
