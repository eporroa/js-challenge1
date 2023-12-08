function formatLicenseKey(S = "", K = 0) {
  const groups = [];
  const cleanedKey = S.replace(/-/g, "").toUpperCase();
  const firstGroupLength = cleanedKey.length % K;
  const firstGroup = cleanedKey.substring(0, firstGroupLength);

  if (firstGroup.length > 0) {
    groups.push(firstGroup);
  }

  for (let i = firstGroupLength; i < cleanedKey.length; i += K) {
    groups.push(cleanedKey.substring(i, i + K));
  }

  return groups.join("-");
}

// Test the function
console.log(formatLicenseKey("5F3Z-2e-9-w", 4)); // 5F3Z-2E9W
console.log(formatLicenseKey("2-5g-3-J", 2)); // 2-5G-3J
console.log(formatLicenseKey("abc-2-96-4-g", 3)); // 2-5G-3J
