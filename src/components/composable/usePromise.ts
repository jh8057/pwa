export default () => {
  const delayPromise = () => {
    return new Promise((resolve, rejects) => {
      try {
        setTimeout(() => {
          throw new Error("timeout");
        }, 1000);
        setTimeout(() => {
          console.log("pass");
          resolve;
        }, 2000);
      } catch (error) {
        console.log(error);
        rejects;
      }
    });
  };

  return {
    delayPromise,
  };
};
