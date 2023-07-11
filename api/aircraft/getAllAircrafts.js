({
  access: 'public',
  method: async () => {
    domain.start();
    try {
      const aircrafts = await domain.aircraft.getAllAircrafts();
      return { status: 'fulfilled', value: { aircrafts } };
    } catch (error) {
      return {
        status: 'rejected',
        reason: typeof error.toJSON === 'function' ? error.toJSON() : error,
      };
    }
  },
});
