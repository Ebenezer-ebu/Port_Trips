export const getTrips = async () => {
  try {
    const response = await fetch(
      "https://afrifex-backend.vercel.app/api/flights"
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
