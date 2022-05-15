export const formatBytes = (bytes: number): string => {
  const kiloBytes = bytes / 1024;

  if (kiloBytes > 999) {
    const megaBytes = kiloBytes / 1024;
    return `${megaBytes.toFixed(2)} MB`;
  }

  return `${kiloBytes.toFixed(2)} KB`;
};
