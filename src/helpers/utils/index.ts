export const normalizeEventCreationData = (data: any) => {
  return {
    ...data,
    gudelinnes: data.gudelinnes.value
  }
};


