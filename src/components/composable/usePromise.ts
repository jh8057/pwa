export default () => {
  const delayPromise = (flag: boolean) => {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        try {
          if (flag) {
            throw new Error("timeout");
          }
          resolve("pass");
        } catch (e) {
          console.error(e);
          rejects("timeout");
        }
      }, 1000);
    });
  };

  return {
    delayPromise,
  };
};
