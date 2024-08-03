// Function to generate a numeric OTP
function generateNumericOTP() {
  // Default length is 6 if not specified
  const otpLength = 6;

  // Generate a random OTP of the specified length
  const otp = Array.from({ length: otpLength }, () => Math.floor(Math.random() * 10)).join('');

  return otp;
}

// Example usage
// const numericOTP = generateNumericOTP(6);
// console.log('Generated Numeric OTP:', numericOTP);

export default generateNumericOTP;