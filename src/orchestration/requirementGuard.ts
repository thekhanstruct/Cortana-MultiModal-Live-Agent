export const validateHackathonRequirements = () => {
  const cloudEndpointConfigured = !!(import.meta.env.VITE_CLOUD_PERSIST_ENDPOINT || '').trim();
  return {
    usesGemini: true,
    usesGenAISDK: true,
    cloudServiceEnabled: cloudEndpointConfigured,
  };
};
