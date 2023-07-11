({
  access: 'public',
  method: async ( code ) => {
    try {
      const aircraft = await domain.aircraft.getAircraft(code);
      return { status: 'fulfilled', value: { aircraft } };
    } catch (error) {
      return {
        status: 'rejected',
        reason: typeof error.toJSON === 'function' ? error.toJSON() : error,
      };
    }
  },
});
