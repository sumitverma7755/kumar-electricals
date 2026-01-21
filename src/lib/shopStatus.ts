export function getShopStatus() {
  const now = new Date();
  
  // Convert to India time (IST)
  const indiaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  
  const hour = indiaTime.getHours();
  
  // Open 7 days a week: 10 AM – 9 PM (21:00)
  if (hour >= 10 && hour < 21) {
    return { open: true, label: "Open Now" };
  }
  
  // Outside business hours
  return { open: false, label: "Closed Now" };
}
