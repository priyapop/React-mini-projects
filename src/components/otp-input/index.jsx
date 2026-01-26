import { useEffect, useRef, useState } from "react";

function OtpInput() {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, OTP_LENGTH);
  }, []);

  const handleOtpChange = (getCurrentInputIndex, getCurrentInputValue) => {
    if (getCurrentInputValue.length > 1) {
      getCurrentInputValue = getCurrentInputValue.slice(-1);
    }
    const newOtp = [...otp];
    newOtp[getCurrentInputIndex] = getCurrentInputValue;
    setOtp(newOtp);

    if (getCurrentInputValue && getCurrentInputIndex < OTP_LENGTH - 1) {
      inputRefs.current[getCurrentInputIndex + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    console.log(event.key);

    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h1>OTP Input</h1>
      <div>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(event) => handleOtpChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            autoFocus={index === 0}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <button disabled={otp.some((digit) => digit === "")}>verify</button>
    </div>
  );
}
export default OtpInput;
